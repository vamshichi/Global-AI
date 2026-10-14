
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

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
      fullName,
      email,
      phone,
      jobTitle,
      company,
      website,
      organisationType,
      partnershipInterest,
      targetAudience,
      meetingObjectives,
      budgetRange,
      additionalRequirements,
      consent,
    } = body;

    // Validate required fields
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !jobTitle?.trim() ||
      !company?.trim() ||
      !organisationType ||
      !partnershipInterest ||
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Prevent excessively large submissions
    const fields = [
      fullName,
      email,
      phone,
      jobTitle,
      company,
      website,
      organisationType,
      partnershipInterest,
      targetAudience,
      meetingObjectives,
      budgetRange,
      additionalRequirements,
    ];

    if (
      fields.some(
        (value) => typeof value !== "string" ||
          value.length > 5000
      )
    ) {
      return NextResponse.json(
        { success: false, message: "One or more fields are invalid." },
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
      console.error("Partnership enquiry: SMTP configuration is missing.");

      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
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

    const safe = (value: string) => escapeHtml(value.trim());

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Send notification to the partnerships team
    await transporter.sendMail({
      from: `"Global AI GRCS Summit India 2026" <${smtpFrom}>`,
      to: teamEmail,
      replyTo: email.trim(),
      subject: `New Partnership Enquiry — ${fullName.trim()}`,
      text: `
NEW PARTNERSHIP ENQUIRY

Contact Details
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Job Title: ${jobTitle}
Company: ${company}
Website: ${website || "Not provided"}

Partnership Details
Organisation Type: ${organisationType}
Partnership Interest: ${partnershipInterest}
Budget Range: ${budgetRange || "Not provided"}

Objectives
Target Audience: ${targetAudience || "Not provided"}
Meeting Objectives: ${meetingObjectives || "Not provided"}
Additional Requirements: ${additionalRequirements || "Not provided"}

Consent: Yes
Submitted At: ${submittedAt}

Event: Global AI GRCS Summit India 2026
Date: 21 JANUARY 2027
Venue: Mumbai India
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:700px;margin:auto">
          <h2 style="color:#3E6BFF">New Partnership Enquiry</h2>
          <p>A new partnership enquiry has been submitted through the website.</p>

          <h3>Contact Details</h3>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
            <tr><td><b>Name</b></td><td>${safe(fullName)}</td></tr>
            <tr><td><b>Email</b></td><td>${safe(email)}</td></tr>
            <tr><td><b>Phone</b></td><td>${safe(phone)}</td></tr>
            <tr><td><b>Job Title</b></td><td>${safe(jobTitle)}</td></tr>
            <tr><td><b>Company</b></td><td>${safe(company)}</td></tr>
            <tr><td><b>Website</b></td><td>${safe(website || "Not provided")}</td></tr>
          </table>

          <h3>Partnership Details</h3>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
            <tr><td><b>Organisation Type</b></td><td>${safe(organisationType)}</td></tr>
            <tr><td><b>Partnership Interest</b></td><td>${safe(partnershipInterest)}</td></tr>
            <tr><td><b>Budget Range</b></td><td>${safe(budgetRange || "Not provided")}</td></tr>
          </table>

          <h3>Objectives</h3>
          <p><b>Target Audience:</b><br/>${safe(targetAudience || "Not provided")}</p>
          <p><b>Meeting Objectives:</b><br/>${safe(meetingObjectives || "Not provided")}</p>
          <p><b>Additional Requirements:</b><br/>${safe(additionalRequirements || "Not provided")}</p>

          <p><b>Consent:</b> Yes</p>
          <p><b>Submitted At:</b> ${safe(submittedAt)}</p>

          <hr/>
          <p style="color:#666;font-size:12px">
            Global AI GRCS Summit India 2026<br/>
            21 JANUARY 2027 · Mumbai India
          </p>
        </div>
      `,
    });

    // Send acknowledgement to the person submitting the form
    await transporter.sendMail({
      from: `"Global AI GRCS Summit India 2026" <${smtpFrom}>`,
      to: email.trim(),
      subject: "We received your partnership enquiry",
      text: `
Dear ${fullName.trim()},

Thank you for your interest in partnering with Global AI GRCS Summit India 2026.

Our partnerships team will review your enquiry and contact you to discuss suitable opportunities.

Event: Global AI GRCS Summit India 2026
Date: 21 JANUARY 2027
Venue: Mumbai India

Regards,
Summit Partnerships Team
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto;line-height:1.7">
          <h2 style="color:#3E6BFF">Thank you, ${safe(fullName)}!</h2>
          <p>We have received your partnership enquiry for
          <b>Global AI GRCS Summit India 2026</b>.</p>
          <p>Our partnerships team will review your enquiry and contact you to discuss suitable opportunities.</p>

          <div style="background:#f5f7fb;padding:18px;border-radius:8px">
            <b>Event:</b> Global AI GRCS Summit India 2026<br/>
            <b>Date:</b> 21 JANUARY 2027<br/>
            <b>Venue:</b> Mumbai India
          </div>

          <p>Thank you for your interest. We look forward to connecting with you.</p>
          <p>Regards,<br/><b>Summit Partnerships Team</b></p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your partnership enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Partnership enquiry email error:", error);

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
