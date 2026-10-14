import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
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
      firstName,
      lastName,
      email,
      mobile,
      jobTitle,
      organisation,
      industry,
      seniority,
      interests,
      attendance,
      requirements,
      heardFrom,
      consent,
      marketing,
    } = body;

    // Validate required fields on the server.
    const requiredFields = [
      firstName,
      lastName,
      email,
      mobile,
      jobTitle,
      organisation,
      industry,
      seniority,
      attendance,
      heardFrom,
    ];

    if (
      !requiredFields.every(
        (value) => typeof value === "string" && value.trim().length > 0
      ) ||
      consent !== true ||
      !Array.isArray(interests) ||
      !interests.every((item) => typeof item === "string") ||
      (requirements !== undefined && typeof requirements !== "string") ||
      (marketing !== undefined && typeof marketing !== "boolean")
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide valid registration details and consent." },
        { status: 400 }
      );
    }

    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      firstName.length > 100 ||
      lastName.length > 100 ||
      mobile.length > 30 ||
      jobTitle.length > 150 ||
      organisation.length > 200 ||
      interests.length > 20 ||
      requirements?.length > 2000
    ) {
      return NextResponse.json(
        { success: false, message: "One or more fields are invalid or too long." },
        { status: 400 }
      );
    }

    const safe = (value: string) => escapeHtml(value.trim());

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const interestsText = interests.length
      ? interests.map((item: string) => safe(item)).join(", ")
      : "Not specified";

    const teamEmail = process.env.TEAM_EMAIL;
    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;

    if (!teamEmail || !fromEmail || !process.env.SMTP_HOST ||
        !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error("Email configuration is incomplete.");
    }

    // 1. Notify the event team.
    await transporter.sendMail({
      from: `"Global AI GRCS Summit" <${fromEmail}>`,
      to: teamEmail,
      replyTo: email,
      subject: `New Delegate Registration — ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:650px;margin:auto">
          <h2 style="color:#3E6BFF">New Delegate Registration</h2>
          <p>A new registration interest has been submitted for
          <strong>Global AI GRCS Summit India 2026</strong>.</p>

          <table style="width:100%;border-collapse:collapse">
            ${[
              ["Name", fullName],
              ["Email", email],
              ["Mobile", mobile],
              ["Job Title", jobTitle],
              ["Organisation", organisation],
              ["Industry", industry],
              ["Seniority", seniority],
              ["Interests", interestsText],
              ["Attendance", attendance],
              ["Dietary / Accessibility Requirements", requirements || "None provided"],
              ["Heard About Summit", heardFrom],
              ["Marketing Consent", marketing ? "Yes" : "No"],
            ]
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="padding:10px;border:1px solid #ddd;font-weight:bold">${safe(label)}</td>
                    <td style="padding:10px;border:1px solid #ddd">${safe(String(value))}</td>
                  </tr>`
              )
              .join("")}
          </table>
          <p style="margin-top:24px;color:#666">
            Event: 21 JANUARY 2026<br/>
            Venue: Mumbai India
          </p>
        </div>
      `,
    });

    // 2. Send a confirmation to the delegate.
    await transporter.sendMail({
      from: `"Global AI GRCS Summit India 2026" <${fromEmail}>`,
      to: email,
      subject: "We have received your registration interest",
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto;line-height:1.7">
          <h2 style="color:#3E6BFF">Thank you, ${safe(firstName)}!</h2>
          <p>We have received your registration interest for
          <strong>Global AI GRCS Summit India 2026</strong>.</p>
          <p>Our team will review your details and contact you regarding
          eligibility and the next steps.</p>
          <p><strong>Date:</strong> 21 JANUARY 2026<br/>
          <strong>Venue:</strong>Mumbai India</p>
          <p>We look forward to connecting with you.</p>
          <p>Regards,<br/>Global AI GRCS Summit Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Registration submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delegate registration email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your registration right now. Please try again.",
      },
      { status: 500 }
    );
  }
}