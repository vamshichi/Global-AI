
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
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

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function cleanStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

const allowedSolutions = [
  "AI Governance",
  "AI Security",
  "Cybersecurity",
  "Enterprise IT Security",
  "IT Audit & Assurance",
  "GRC Solutions",
  "Regulatory & Compliance Audits",
  "Model Risk",
  "Data Privacy/DPDP Compliance",
  "Agentic AI",
  "Others",
];

const allowedHearAboutOptions = [
  "Scrolled through the event page",
  "LinkedIn",
  "Received an Email Invitation",
  "Referred by your colleague / Peer",
  "Heard from one of our friendly agents",
  "Social Media",
  "Others",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid registration submission.",
        },
        { status: 400 }
      );
    }

    // New delegate form fields
    const firstName = cleanString(body.firstName);
    const lastName = cleanString(body.lastName);
    const title = cleanString(body.title);
    const organisation = cleanString(body.organisation);

    const solutionsInterestedIn = cleanStringArray(
      body.solutionsInterestedIn
    );

    const heardFrom = cleanString(body.heardFrom);
    const confirmation = body.confirmation;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !title ||
      !organisation ||
      !heardFrom ||
      confirmation !== true
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields and confirm your submission.",
        },
        { status: 400 }
      );
    }

    // Validate field lengths
    const fields = [
      firstName,
      lastName,
      title,
      organisation,
      heardFrom,
      ...solutionsInterestedIn,
    ];

    if (
      fields.some((value) => value.length > 500) ||
      firstName.length > 100 ||
      lastName.length > 100 ||
      title.length > 150 ||
      organisation.length > 200
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields are invalid or too long.",
        },
        { status: 400 }
      );
    }

    // Validate checkbox values
    if (
      solutionsInterestedIn.some(
        (item) => !allowedSolutions.includes(item)
      ) ||
      heardFrom.length > 200 ||
      !allowedHearAboutOptions.includes(heardFrom)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid selection. Please refresh the page and try again.",
        },
        { status: 400 }
      );
    }

    // SMTP configuration
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM || smtpUser;
    const teamEmail =
      process.env.TEAM_EMAIL || "enquiry@confexmeet.com";

    if (!smtpUser || !smtpPass || !fromEmail || !teamEmail) {
      console.error(
        "Delegate registration: SMTP configuration is incomplete."
      );

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure:
        process.env.SMTP_SECURE === "true" || smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safe = (value: string) => escapeHtml(value);

    const fullName = `${firstName} ${lastName}`;

    const solutionsText = solutionsInterestedIn.length
      ? solutionsInterestedIn.map((item) => `- ${item}`).join("\n")
      : "Not specified";

    const solutionsHtml = solutionsInterestedIn.length
      ? solutionsInterestedIn
          .map((item) => `<li>${safe(item)}</li>`)
          .join("")
      : "<li>Not specified</li>";

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Send registration notification to the event team
    await transporter.sendMail({
      from: `"AI GRCS Summit India 2027" <${fromEmail}>`,
      to: teamEmail,
      subject: `New Delegate Invitation — ${fullName}`,

      text: `
NEW DELEGATE INVITATION

PERSONAL DETAILS

First Name: ${firstName}
Last Name: ${lastName}
Full Name: ${fullName}
Title: ${title}
Organisation: ${organisation}

SOLUTIONS INTERESTED IN

${solutionsText}

HOW DID YOU HEAR ABOUT THE SUMMIT?

${heardFrom}

CONFIRMATION

Confirmed: Yes

SUBMISSION DETAILS

Submitted At: ${submittedAt}

EVENT DETAILS

AI GRCS Summit India 2027
Date: 21 January 2027
Location: Mumbai, India
      `.trim(),

      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:700px;margin:auto;line-height:1.6">

          <div style="background:#102A56;padding:24px;color:#fff">
            <h2 style="margin:0;color:#fff">
              New Delegate Invitation
            </h2>
            <p style="margin:8px 0 0;color:#dbe6f5">
              A new delegate invitation has been submitted through the website.
            </p>
          </div>

          <div style="padding:24px">

            <h3 style="color:#102A56">Personal Details</h3>

            <table cellpadding="9" cellspacing="0" style="border-collapse:collapse;width:100%">
              <tr>
                <td style="border-bottom:1px solid #eee"><strong>First Name</strong></td>
                <td style="border-bottom:1px solid #eee">${safe(firstName)}</td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee"><strong>Last Name</strong></td>
                <td style="border-bottom:1px solid #eee">${safe(lastName)}</td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee"><strong>Title</strong></td>
                <td style="border-bottom:1px solid #eee">${safe(title)}</td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee"><strong>Organisation</strong></td>
                <td style="border-bottom:1px solid #eee">${safe(organisation)}</td>
              </tr>
            </table>

            <h3 style="color:#102A56;margin-top:28px">
              Solutions Interested In
            </h3>

            <ul style="padding-left:22px">
              ${solutionsHtml}
            </ul>

            <h3 style="color:#102A56;margin-top:28px">
              How Did You Hear About the Summit?
            </h3>

            <div style="background:#f5f7fb;padding:16px;border-radius:8px">
              ${safe(heardFrom)}
            </div>

            <h3 style="color:#102A56;margin-top:28px">
              Confirmation
            </h3>

            <p>Confirmed: <strong>Yes</strong></p>

            <p style="margin-top:24px">
              <strong>Submitted At:</strong> ${safe(submittedAt)}
            </p>

            <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />

            <p style="color:#666;font-size:13px">
              AI GRCS Summit India 2027<br/>
              21 January 2027 · Mumbai, India
            </p>

          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your delegate registration has been submitted successfully.",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Delegate registration email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to process your registration right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
