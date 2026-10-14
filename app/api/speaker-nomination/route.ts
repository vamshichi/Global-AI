import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      nomineeName,
      currentTitle,
      organisation,
      email,
      phone,
      linkedin,
      nominatedBy,
      sessionFormat,
      agendaTheme,
      proposedTopic,
      biography,
      experience,
      profileLink,
      consent,
    } = body;

    const requiredFields = [
      nomineeName,
      currentTitle,
      organisation,
      email,
      sessionFormat,
      agendaTheme,
      proposedTopic,
      biography,
    ];

    if (
      !requiredFields.every(
        (value) =>
          typeof value === "string" && value.trim().length > 0
      ) ||
      consent !== true
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields and provide consent.",
        },
        { status: 400 }
      );
    }

    if (
      nomineeName.length > 200 ||
      currentTitle.length > 200 ||
      organisation.length > 200 ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      (phone !== undefined &&
        (typeof phone !== "string" || phone.length > 30)) ||
      (linkedin !== undefined &&
        (typeof linkedin !== "string" || linkedin.length > 500)) ||
      (nominatedBy !== undefined &&
        (typeof nominatedBy !== "string" || nominatedBy.length > 200)) ||
      sessionFormat.length > 100 ||
      agendaTheme.length > 150 ||
      proposedTopic.length > 5000 ||
      biography.length > 5000 ||
      (experience !== undefined &&
        (typeof experience !== "string" || experience.length > 5000)) ||
      (profileLink !== undefined &&
        (typeof profileLink !== "string" || profileLink.length > 500))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields are invalid or too long.",
        },
        { status: 400 }
      );
    }

    const teamEmail = process.env.TEAM_EMAIL;
    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;

    if (
      !teamEmail ||
      !fromEmail ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error("SMTP environment variables are missing.");
    }

    const safe = (value: string | undefined) =>
      escapeHtml(value?.trim() || "Not provided");

    const safeUrl = (value: string | undefined) => {
      if (!value?.trim()) return "";

      try {
        const url = new URL(value.trim());

        if (url.protocol !== "https:" && url.protocol !== "http:") {
          return "";
        }

        return escapeHtml(url.href);
      } catch {
        return "";
      }
    };

    const fullName = nomineeName.trim();

    // 1. Notify the event team.
    await transporter.sendMail({
      from: `"Global AI GRCS Summit" <${fromEmail}>`,
      to: teamEmail,
      replyTo: email,
      subject: `New Speaker Nomination — ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:700px;margin:auto;line-height:1.6">
          <h2 style="color:#3E6BFF">New Speaker Nomination</h2>

          <p>A new speaker nomination has been submitted for
          <strong>Global AI GRCS Summit India 2026</strong>.</p>

          <h3>Nominee Details</h3>
          <table style="width:100%;border-collapse:collapse">
            ${[
              ["Nominee Name", nomineeName],
              ["Current Title", currentTitle],
              ["Organisation", organisation],
              ["Professional Email", email],
              ["Phone", phone],
              ["LinkedIn", linkedin],
              ["Nominated By", nominatedBy],
              ["Session Format", sessionFormat],
              ["Agenda Theme", agendaTheme],
              ["Proposed Topic", proposedTopic],
              ["Biography", biography],
              ["Experience / Credentials", experience],
              ["Profile / Headshot Link", profileLink],
            ]
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="padding:10px;border:1px solid #ddd;font-weight:bold;vertical-align:top">
                      ${safe(label)}
                    </td>
                    <td style="padding:10px;border:1px solid #ddd;white-space:pre-wrap;overflow-wrap:anywhere">
                      ${safe(value)}
                    </td>
                  </tr>
                `
              )
              .join("")}
          </table>

          <p style="margin-top:24px;color:#666">
            <strong>Event:</strong> Global AI GRCS Summit India 2026<br/>
            <strong>Date:</strong> 21 JANUARY 2027<br/>
            <strong>Venue:</strong>Mumbai India
          </p>
        </div>
      `,
    });

    // 2. Confirm receipt to the nominee.
    await transporter.sendMail({
      from: `"Global AI GRCS Summit India 2026" <${fromEmail}>`,
      to: email,
      subject: "Speaker Nomination Received — Global AI GRCS Summit India 2026",
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto;line-height:1.8">
          <h2 style="color:#3E6BFF">
            Thank you, ${safe(nomineeName)}.
          </h2>

          <p>We have received your speaker nomination for
          <strong>Global AI GRCS Summit India 2026</strong>.</p>

          <p>Our content team will review the submission and contact
          the nominee or nominator if there is a suitable opportunity.</p>

          <div style="background:#f5f7ff;padding:20px;margin:24px 0">
            <p><strong>Event:</strong> Global AI GRCS Summit India 2026</p>
            <p><strong>Date:</strong> 21 JANUARY 2027</p>
            <p><strong>Venue:</strong>Mumbai India</p>
            <p><strong>Proposed Topic:</strong> ${safe(proposedTopic)}</p>
          </div>

          <p>Please note that submitting a nomination does not guarantee
          a speaking opportunity.</p>

          <p>Regards,<br/>
          <strong>Global AI GRCS Summit Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Speaker nomination submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Speaker nomination email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to submit the nomination right now. Please try again.",
      },
      { status: 500 }
    );
  }
}