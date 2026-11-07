import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, company, industry, product, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Build the email body
    const emailBody = [
      `📧 New Product Enquiry from ${name}`,
      `${"─".repeat(45)}`,
      ``,
      `👤 Name:       ${name}`,
      `📱 Phone:      ${phone}`,
      `✉️ Email:      ${email || "Not provided"}`,
      `🏢 Company:    ${company || "Not provided"}`,
      `🏭 Industry:   ${industry || "Not specified"}`,
      `📦 Product:    ${product || "Not specified"}`,
      ``,
      `${"─".repeat(45)}`,
      `💬 Message:`,
      `${message}`,
      ``,
      `${"─".repeat(45)}`,
      `Sent from Sri Venkateswara Enterprises Website`,
    ].join("\n");

    const subject = `Product Enquiry${product ? `: ${product}` : ""}${industry ? ` (${industry})` : ""} — ${name}`;

    // Send the email
    await transporter.sendMail({
      from: `"SVE Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_EMAIL,
      replyTo: email || undefined,
      subject,
      text: emailBody,
    });

    return NextResponse.json({ success: true, message: "Enquiry sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try again." },
      { status: 500 }
    );
  }
}
