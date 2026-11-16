
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid form submission." },
        { status: 400 }
      );
    }

    // New sponsor form fields
    const fullName = cleanString(body.fullName);
    const companyName = cleanString(body.companyName);
    const title = cleanString(body.title);
    const phone = cleanString(body.phone);
    const businessEmail = cleanString(body.businessEmail);
    const companyWebsite = cleanString(body.companyWebsite);
    const sponsorInterest = cleanStringArray(body.sponsorInterest);
    const sponsorLevel = cleanStringArray(body.sponsorLevel);
    const sponsorObjectives = cleanString(body.sponsorObjectives);

    // Validate required fields
    if (
      !fullName ||
      !companyName ||
      !title ||
      !phone ||
      !businessEmail
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid business email address.",
        },
        { status: 400 }
      );
    }

    // Validate field lengths
    const fields = [
      fullName,
      companyName,
      title,
      phone,
      businessEmail,
      companyWebsite,
      sponsorObjectives,
      ...sponsorInterest,
      ...sponsorLevel,
    ];

    if (fields.some((value) => value.length > 5000)) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields are too long.",
        },
        { status: 400 }
      );
    }

    // Allow only the checkbox options defined by the form
    const allowedInterests = [
      "Exhibitor Booth",
      "Thought Leadership / Speaking Slots",
      "Logo & Branding",
      "One-to-One Meetings",
      "Workshops / Hackathons",
    ];

    const allowedLevels = [
      "Title Partner",
      "Platinum Partner",
      "Gold Partner",
      "Silver Partner",
      "Exhibitor Partner",
    ];

    if (
      sponsorInterest.some((item) => !allowedInterests.includes(item)) ||
      sponsorLevel.some((item) => !allowedLevels.includes(item))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid sponsorship selection.",
        },
        { status: 400 }
      );
    }

    // SMTP configuration
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const teamEmail =
      process.env.TEAM_EMAIL || "enquiry@confexmeet.com";

    if (!smtpUser || !smtpPass || !smtpFrom) {
      console.error("Sponsor enquiry: SMTP configuration is missing.");

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

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const interestsText = sponsorInterest.length
      ? sponsorInterest.join(", ")
      : "Not specified";

    const levelsText = sponsorLevel.length
      ? sponsorLevel.join(", ")
      : "Not specified";

    const objectivesText = sponsorObjectives || "Not provided";
    const websiteText = companyWebsite || "Not provided";

    const interestsHtml = sponsorInterest.length
      ? sponsorInterest.map((item) => `<li>${safe(item)}</li>`).join("")
      : "<li>Not specified</li>";

    const levelsHtml = sponsorLevel.length
      ? sponsorLevel.map((item) => `<li>${safe(item)}</li>`).join("")
      : "<li>Not specified</li>";

    // Send notification email to the partnerships team
    await transporter.sendMail({
      from: `"AI GRCS Summit India 2027" <${smtpFrom}>`,
      to: teamEmail,
      replyTo: businessEmail,
      subject: `New Sponsor Enquiry — ${fullName}`,
      text: `
NEW SPONSOR ENQUIRY

CONTACT DETAILS

Full Name: ${fullName}
Company Name: ${companyName}
Title: ${title}
Phone: ${phone}
Business Email: ${businessEmail}
Company Website: ${websiteText}

SPONSOR INTEREST

${sponsorInterest.length ? sponsorInterest.map((item) => `- ${item}`).join("\n") : "Not specified"}

SPONSOR LEVEL

${sponsorLevel.length ? sponsorLevel.map((item) => `- ${item}`).join("\n") : "Not specified"}

SPONSOR OBJECTIVES

${objectivesText}

SUBMITTED AT
${submittedAt}

EVENT DETAILS
AI GRCS Summit India 2027
Date: 21 January 2027
Location: Mumbai, India
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:700px;margin:auto;line-height:1.6">
          <div style="background:#102A56;padding:24px;color:#fff">
            <h2 style="margin:0;color:#fff">New Sponsor Enquiry</h2>
            <p style="margin:8px 0 0;color:#dbe6f5">
              A new sponsorship enquiry has been submitted through the website.
            </p>
          </div>

          <div style="padding:24px">
            <h3 style="color:#102A56">Contact Details</h3>

            <table cellpadding="9" cellspacing="0" style="border-collapse:collapse;width:100%">
              <tr>
                <td style="border-bottom:1px solid #eee"><b>Full Name</b></td>
                <td style="border-bottom:1px solid #eee">${safe(fullName)}</td>
              </tr>
              <tr>
                <td style="border-bottom:1px solid #eee"><b>Company Name</b></td>
                <td style="border-bottom:1px solid #eee">${safe(companyName)}</td>
              </tr>
              <tr>
                <td style="border-bottom:1px solid #eee"><b>Title</b></td>
                <td style="border-bottom:1px solid #eee">${safe(title)}</td>
              </tr>
              <tr>
                <td style="border-bottom:1px solid #eee"><b>Phone</b></td>
                <td style="border-bottom:1px solid #eee">${safe(phone)}</td>
              </tr>
              <tr>
                <td style="border-bottom:1px solid #eee"><b>Business Email</b></td>
                <td style="border-bottom:1px solid #eee">${safe(businessEmail)}</td>
              </tr>
              <tr>
                <td style="border-bottom:1px solid #eee"><b>Company Website</b></td>
                <td style="border-bottom:1px solid #eee">${safe(websiteText)}</td>
              </tr>
            </table>

            <h3 style="color:#102A56;margin-top:28px">Sponsor Interest</h3>
            <ul>${interestsHtml}</ul>

            <h3 style="color:#102A56;margin-top:28px">Sponsor Level</h3>
            <ul>${levelsHtml}</ul>

            <h3 style="color:#102A56;margin-top:28px">Sponsor Objectives</h3>
            <div style="background:#f5f7fb;padding:16px;border-radius:8px;white-space:pre-wrap">${safe(objectivesText)}</div>

            <p style="margin-top:24px">
              <b>Submitted At:</b> ${safe(submittedAt)}
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

    // Send acknowledgement email to the sponsor
    await transporter.sendMail({
      from: `"AI GRCS Summit India 2027" <${smtpFrom}>`,
      to: businessEmail,
      subject: "We received your sponsorship enquiry",
      text: `
Dear ${fullName},

Thank you for your interest in sponsoring AI GRCS Summit India 2027.

We have successfully received your sponsorship enquiry. Our partnerships team will review your submission and contact you to discuss suitable sponsorship opportunities.

EVENT DETAILS

AI GRCS Summit India 2027
Date: 21 January 2027
Location: Mumbai, India

Thank you for your interest. We look forward to connecting with you.

Regards,
Summit Partnerships Team
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto;line-height:1.7">
          <div style="background:#102A56;padding:24px;color:#fff">
            <h2 style="margin:0;color:#fff">Thank You, ${safe(fullName)}!</h2>
          </div>

          <div style="padding:24px">
            <p>
              We have successfully received your sponsorship enquiry for
              <b>AI GRCS Summit India 2027</b>.
            </p>

            <p>
              Our partnerships team will review your submission and contact you
              to discuss suitable sponsorship opportunities.
            </p>

            <div style="background:#f5f7fb;padding:18px;border-radius:8px;margin:24px 0">
              <b>Event:</b> AI GRCS Summit India 2027<br/>
              <b>Date:</b> 21 January 2027<br/>
              <b>Location:</b> Mumbai, India
            </div>

            <p>
              Thank you for your interest. We look forward to connecting with you.
            </p>

            <p>
              Regards,<br/>
              <b>Summit Partnerships Team</b>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your sponsorship enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Sponsor enquiry email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to submit your enquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
