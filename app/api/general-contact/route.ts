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

    const { name, email, company, enquiryType, message, consent } = body;

    // Validate required fields.
    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof enquiryType !== "string" ||
      !enquiryType.trim() ||
      typeof message !== "string" ||
      !message.trim() ||
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
      name.length > 150 ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      (company !== undefined &&
        (typeof company !== "string" || company.length > 200)) ||
      enquiryType.length > 100 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your details and try again.",
        },
        { status: 400 }
      );
    }

    const teamEmail = process.env.TEAM_EMAIL || "enquiry@confexmeet.com";
    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;

    if (
      !fromEmail ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error("SMTP environment variables are missing.");
    }

    const safe = (value: string) => escapeHtml(value.trim());

    // 1. Send enquiry notification to the event team.
    await transporter.sendMail({
      from: `"Global AI GRCS Summit" <${fromEmail}>`,
      to: teamEmail,
      replyTo: email.trim(),
      subject: `New Enquiry: ${enquiryType.trim()} — ${name.trim()}`,
      text: `
New General Enquiry

Name: ${name.trim()}
Email: ${email.trim()}
Company: ${company?.trim() || "Not provided"}
Enquiry Type: ${enquiryType.trim()}

Message:
${message.trim()}

Event: Global AI GRCS Summit India 2026
Date: 21 JANUARY 2027
Venue: Mumbai India
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:650px;margin:auto;line-height:1.6">
          <h2 style="color:#3E6BFF">New General Enquiry</h2>
          <p>A new enquiry has been submitted through the summit website.</p>

          <table style="width:100%;border-collapse:collapse">
            ${[
              ["Name", name],
              ["Email", email],
              ["Company / Organisation", company || "Not provided"],
              ["Enquiry Type", enquiryType],
            ]
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="padding:10px;border:1px solid #ddd;font-weight:bold">
                      ${safe(label)}
                    </td>
                    <td style="padding:10px;border:1px solid #ddd">
                      ${safe(value)}
                    </td>
                  </tr>
                `
              )
              .join("")}
          </table>

          <h3>Message</h3>
          <div style="padding:16px;background:#f5f7ff;white-space:pre-wrap;overflow-wrap:anywhere">
            ${safe(message)}
          </div>

          <p style="margin-top:24px;color:#666">
            <strong>Event:</strong> Global AI GRCS Summit India 2026<br/>
            <strong>Date:</strong> 21 JANUARY 2027<br/>
            <strong>Venue:</strong> Mumbai India
          </p>
        </div>
      `,
    });

    // 2. Send acknowledgement to the person who contacted you.
    await transporter.sendMail({
      from: `"Global AI GRCS Summit India 2026" <${fromEmail}>`,
      to: email.trim(),
      subject: "We have received your enquiry",
      text: `
Hi ${name.trim()},

Thank you for contacting the Global AI GRCS Summit India 2026 team.

We have received your enquiry regarding ${enquiryType.trim()}. Our team will review your message and get back to you.

Regards,
Global AI GRCS Summit Team
enquiry@confexmeet.com
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto;line-height:1.8">
          <h2 style="color:#3E6BFF">Thanks for reaching out, ${safe(name)}!</h2>

          <p>We have received your enquiry regarding
          <strong>${safe(enquiryType)}</strong>.</p>

          <p>Our team will review your message and get back to you.</p>

          <div style="background:#f5f7ff;padding:20px;margin:24px 0">
            <p><strong>Event:</strong> Global AI GRCS Summit India 2026</p>
            <p><strong>Date:</strong> 21 JANUARY 2027</p>
            <p><strong>Venue:</strong>Mumbai India</p>
          </div>

          <p>Regards,<br/>
          <strong>Global AI GRCS Summit Team</strong><br/>
          enquiry@confexmeet.com</p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("General contact email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your enquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}