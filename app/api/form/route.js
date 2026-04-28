import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connectDB";
import Form from "@/lib/models/form";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  if (!body.name || !body.email)
    return NextResponse.json(
      { success: false, error: "Bad request" },
      { status: 400 },
    );
  await connectDB();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASS,
    },
  });

  try {
    const form = await Form.create(body);
    if (!form) return NextResponse.json({ success: false }, { status: 500 });

    await Promise.all([
      transporter.sendMail({
        from: `"Example Team" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: body.email,
        subject: "We received your message",
        text: "Thanks! We'll get back to you soon.",
        html: `
        <h2>Form Submitted</h2>
        <p><b>Name:</b> ${body.name} ${body.lastname}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Message:</b> ${body?.message}</p>
      `,
      }),
      transporter.sendMail({
        from: `"VedTech Team" <${process.env.EMAIL_USER}>`,
        to: body.email,
        subject: "We received your message",
        html: `
    <h2>Thanks for contacting us!</h2>
    <p>Hi ${body.name},</p>
    <p>We have received your message and will get back to you soon.</p>
    <br/>
    <p><b>Your message:</b></p>
    <p>${body?.message}</p>
  `,
      }),
    ]).catch((err) => console.error("email failedd:", err));

    return NextResponse.json({ success: true, error: false }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
