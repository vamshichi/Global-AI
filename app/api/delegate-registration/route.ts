
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

/* HTML ESCAPING */

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

/* CLEAN INPUT */

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/* ALLOWED OPTIONS */

const allowedHearAboutOptions = [
  "LinkedIn",
  "Social Media",
  "Email Invitation",
  "Colleague / Peer",
  "Event Website",
  "Other",
];

/* POST REQUEST */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid registration submission.",
        },
        { status: 400 }
      );
    }

    /* GET FORM FIELDS */

    const fullName = cleanString(body.fullName);
    const organisation = cleanString(body.organisation);
    const jobTitle = cleanString(body.jobTitle);
    const email = cleanString(body.email).toLowerCase();
    const phoneNumber = cleanString(body.phoneNumber);
    const heardFrom = cleanString(body.heardFrom);
    const referralCode = cleanString(body.referralCode);

    const agreeTerms = body.agreeTerms;
    const marketingConsent = body.marketingConsent;

    /* REQUIRED FIELD VALIDATION */

    if (
      !fullName ||
      !organisation ||
      !jobTitle ||
      !email ||
      !phoneNumber ||
      !heardFrom
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    /* TERMS VALIDATION */

    if (agreeTerms !== true) {
      return NextResponse.json(
        {
          success: false,
          message: "Please accept the Terms and Conditions.",
        },
        { status: 400 }
      );
    }

    if (typeof marketingConsent !== "boolean") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid marketing consent value.",
        },
        { status: 400 }
      );
    }

    /* LENGTH VALIDATION */

    if (
      fullName.length > 150 ||
      organisation.length > 200 ||
      jobTitle.length > 150 ||
      email.length > 254 ||
      phoneNumber.length > 30 ||
      heardFrom.length > 100 ||
      referralCode.length > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields are too long.",
        },
        { status: 400 }
      );
    }

    /* EMAIL VALIDATION */

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    /* PHONE VALIDATION */

    const phoneDigits = phoneNumber.replace(/\D/g, "");

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid phone number.",
        },
        { status: 400 }
      );
    }

    /* HEARD FROM VALIDATION */

    if (!allowedHearAboutOptions.includes(heardFrom)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid referral source.",
        },
        { status: 400 }
      );
    }

    /* SMTP CONFIGURATION */

    const smtpHost =
      process.env.SMTP_HOST || "smtp.gmail.com";

    const smtpPort =
      Number(process.env.SMTP_PORT || 587);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const fromEmail =
      process.env.SMTP_FROM || smtpUser;

    const teamEmail =
      process.env.TEAM_EMAIL || "enquiry@globalbusinesssummits.com";

    if (
      !smtpUser ||
      !smtpPass ||
      !fromEmail ||
      !teamEmail
    ) {
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

    /* EMAIL TRANSPORTER */

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure:
        process.env.SMTP_SECURE === "true" ||
        smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    /* ESCAPE VALUES FOR HTML */

    const safe = (value: string) =>
      escapeHtml(value);

    const submittedAt = new Date().toLocaleString(
      "en-IN",
      {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }
    );

    const marketingConsentText =
      marketingConsent ? "Yes" : "No";

    /* SEND REGISTRATION EMAIL */

    await transporter.sendMail({
      from: `"AI GRCS Summit India 2027" <${fromEmail}>`,

      to: teamEmail,

      subject: `New Delegate Registration — ${fullName}`,

      text: `
NEW DELEGATE REGISTRATION

PERSONAL DETAILS

Full Name: ${fullName}
Company / Organisation: ${organisation}
Job Title: ${jobTitle}
Email: ${email}
Phone Number: ${phoneNumber}

REGISTRATION DETAILS

Where did you hear about us?: ${heardFrom}
Referral Code: ${referralCode || "Not provided"}

CONSENT DETAILS

Terms and Conditions: Accepted
Marketing Consent: ${marketingConsentText}

SUBMISSION DETAILS

Submitted At: ${submittedAt}

EVENT DETAILS

AI GRCS Summit India 2027
Date: 21 January 2027
Location: Mumbai, India
      `.trim(),

      html: `
        <div style="
          font-family:Arial,sans-serif;
          color:#222;
          max-width:700px;
          margin:auto;
          line-height:1.6;
        ">

          <div style="
            background:#102A56;
            padding:24px;
            color:#fff;
          ">
            <h2 style="margin:0;color:#fff;">
              New Delegate Registration
            </h2>

            <p style="
              margin:8px 0 0;
              color:#dbe6f5;
            ">
              A new delegate registration has been
              submitted through the website.
            </p>
          </div>

          <div style="padding:24px;">

            <h3 style="color:#102A56;">
              Personal Details
            </h3>

            <table
              cellpadding="10"
              cellspacing="0"
              style="
                border-collapse:collapse;
                width:100%;
              "
            >

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Full Name</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  ${safe(fullName)}
                </td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Company / Organisation</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  ${safe(organisation)}
                </td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Job Title</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  ${safe(jobTitle)}
                </td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Email</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  ${safe(email)}
                </td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Phone Number</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  ${safe(phoneNumber)}
                </td>
              </tr>

            </table>

            <h3 style="
              color:#102A56;
              margin-top:28px;
            ">
              Registration Details
            </h3>

            <table
              cellpadding="10"
              cellspacing="0"
              style="
                border-collapse:collapse;
                width:100%;
              "
            >

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Where did you hear about us?</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  ${safe(heardFrom)}
                </td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Referral Code</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  ${safe(referralCode || "Not provided")}
                </td>
              </tr>

            </table>

            <h3 style="
              color:#102A56;
              margin-top:28px;
            ">
              Consent Details
            </h3>

            <table
              cellpadding="10"
              cellspacing="0"
              style="
                border-collapse:collapse;
                width:100%;
              "
            >

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Terms and Conditions</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  Accepted
                </td>
              </tr>

              <tr>
                <td style="border-bottom:1px solid #eee;">
                  <strong>Marketing Consent</strong>
                </td>
                <td style="border-bottom:1px solid #eee;">
                  ${marketingConsentText}
                </td>
              </tr>

            </table>

            <p style="margin-top:24px;">
              <strong>Submitted At:</strong>
              ${safe(submittedAt)}
            </p>

            <hr style="
              border:none;
              border-top:1px solid #eee;
              margin:24px 0;
            " />

            <p style="
              color:#666;
              font-size:13px;
            ">
              AI GRCS Summit India 2027<br/>
              21 January 2027 · Mumbai, India
            </p>

          </div>
        </div>
      `,
    });

    /* SUCCESS RESPONSE */

    return NextResponse.json(
      {
        success: true,
        message:
          "Your delegate registration has been submitted successfully.",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error(
      "Delegate registration email error:",
      error
    );

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
