import nodemailer from "nodemailer";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(value = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed."
    });
  }

  try {
    const {
      name,
      company,
      email,
      whatsapp,
      projectType,
      services,
      budget,
      timeline,
      source,
      description
    } = req.body || {};

    if (!name || !email || !projectType || !description) {
      return res.status(400).json({
        error: "Please complete all required fields."
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Please provide a valid email address."
      });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Gmail environment variables.");

      return res.status(500).json({
        error: "Email service is not configured."
      });
    }

    if (!process.env.OWNER_EMAIL) {
      console.error("Missing OWNER_EMAIL environment variable.");

      return res.status(500).json({
        error: "Recipient email is not configured."
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeEmail = escapeHtml(email);
    const safeWhatsapp = escapeHtml(whatsapp || "Not provided");
    const safeProjectType = escapeHtml(projectType);
    const safeServices = escapeHtml(services || "Not provided");
    const safeBudget = escapeHtml(budget || "Not provided");
    const safeTimeline = escapeHtml(timeline || "Not provided");
    const safeSource = escapeHtml(source || "Not provided");
    const safeDescription = escapeHtml(description).replace(/\n/g, "<br>");

    const ownerEmailHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f7fa;padding:40px 20px;">
        <div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">

          <div style="background:#0e2f93;padding:32px;">
            <div style="font-size:28px;font-weight:800;color:#ffffff;">
              PHILEdev
            </div>

            <div style="margin-top:8px;color:#dff7ff;font-size:14px;">
              NEW PROJECT ENQUIRY
            </div>
          </div>

          <div style="padding:32px;">

            <h1 style="margin:0 0 8px;color:#0b1220;font-size:26px;">
              New project enquiry
            </h1>

            <p style="color:#64748b;margin:0 0 28px;">
              Someone has submitted a project enquiry through the PHILEdev website.
            </p>

            <div style="border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>Name</strong>
                <div style="margin-top:6px;color:#475569;">${safeName}</div>
              </div>

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>Company</strong>
                <div style="margin-top:6px;color:#475569;">${safeCompany}</div>
              </div>

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>Email</strong>
                <div style="margin-top:6px;color:#475569;">${safeEmail}</div>
              </div>

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>WhatsApp / Phone</strong>
                <div style="margin-top:6px;color:#475569;">${safeWhatsapp}</div>
              </div>

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>Project Type</strong>
                <div style="margin-top:6px;color:#475569;">${safeProjectType}</div>
              </div>

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>Services Required</strong>
                <div style="margin-top:6px;color:#475569;">${safeServices}</div>
              </div>

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>Budget Range</strong>
                <div style="margin-top:6px;color:#475569;">${safeBudget}</div>
              </div>

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>Timeline</strong>
                <div style="margin-top:6px;color:#475569;">${safeTimeline}</div>
              </div>

              <div style="padding:18px;border-bottom:1px solid #e5e7eb;">
                <strong>How They Found PHILEdev</strong>
                <div style="margin-top:6px;color:#475569;">${safeSource}</div>
              </div>

              <div style="padding:18px;">
                <strong>Project Description</strong>
                <div style="margin-top:10px;color:#475569;line-height:1.7;">
                  ${safeDescription}
                </div>
              </div>

            </div>

            <div style="margin-top:28px;padding:18px;background:#f0f9ff;border-radius:12px;">
              <strong style="color:#0e2f93;">Quick action</strong>

              <p style="margin:8px 0 0;color:#475569;">
                Reply directly to this email to contact the prospective client.
              </p>
            </div>

          </div>

          <div style="padding:22px 32px;background:#f8fafc;color:#64748b;font-size:12px;">
            PHILEdev — The love of development.
          </div>

        </div>
      </div>
    `;

    const ownerEmailText = `
NEW PHILEdev PROJECT ENQUIRY

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
WhatsApp / Phone: ${whatsapp || "Not provided"}

Project Type: ${projectType}
Services Required: ${services || "Not provided"}
Budget Range: ${budget || "Not provided"}
Timeline: ${timeline || "Not provided"}
How They Found PHILEdev: ${source || "Not provided"}

PROJECT DESCRIPTION:
${description}
`;

    await transporter.sendMail({
      from: `"PHILEdev Website" <${process.env.GMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      subject: `New PHILEdev Project Enquiry — ${name}`,
      text: ownerEmailText,
      html: ownerEmailHtml
    });

    const clientEmailHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f7fa;padding:40px 20px;">
        <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">

          <div style="background:#0e2f93;padding:34px;">
            <div style="font-size:30px;font-weight:800;color:#ffffff;">
              PHILEdev
            </div>

            <div style="margin-top:8px;color:#dff7ff;font-size:13px;">
              THE LOVE OF DEVELOPMENT.
            </div>
          </div>

          <div style="padding:36px;">

            <p style="color:#64748b;font-size:14px;margin:0 0 10px;">
              PROJECT ENQUIRY RECEIVED
            </p>

            <h1 style="font-size:30px;line-height:1.15;color:#0b1220;margin:0 0 18px;">
              Thanks, ${safeName}.
            </h1>

            <p style="font-size:16px;line-height:1.8;color:#475569;">
              Your project enquiry has reached PHILEdev successfully.
              We appreciate you taking the time to tell us about what you want to build.
            </p>

            <div style="margin:28px 0;padding:22px;background:#f0f9ff;border-radius:14px;">
              <strong style="color:#0e2f93;">
                What happens next?
              </strong>

              <p style="margin:10px 0 0;color:#475569;line-height:1.7;">
                Your enquiry will be reviewed and PHILEdev will get back to you using the contact details you provided.
              </p>
            </div>

            <p style="font-size:15px;line-height:1.7;color:#475569;">
              If your enquiry is urgent, you can also contact PHILEdev directly through WhatsApp.
            </p>

            <a
              href="https://wa.me/2349120770311"
              style="display:inline-block;margin-top:12px;background:#0e2f93;color:#ffffff;text-decoration:none;padding:14px 22px;border-radius:10px;font-weight:700;"
            >
              Contact PHILEdev on WhatsApp
            </a>

          </div>

          <div style="padding:22px 36px;background:#f8fafc;color:#64748b;font-size:12px;">
            PHILEdev<br>
            The love of development.
          </div>

        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"PHILEdev" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your PHILEdev project enquiry",
      text: `
Hi ${name},

Thank you for contacting PHILEdev.

Your project enquiry has been received successfully. We will review the information you submitted and get back to you using your provided contact details.

For urgent enquiries:
WhatsApp: +234 912 077 0311

PHILEdev
The love of development.
      `,
      html: clientEmailHtml
    });

    return res.status(200).json({
      success: true,
      message: "Your project enquiry has been sent successfully."
    });

  } catch (error) {
    console.error("PHILEdev enquiry error:", error);

    return res.status(500).json({
      error: "We could not send your enquiry right now. Please try again or contact PHILEdev directly."
    });
  }
}
