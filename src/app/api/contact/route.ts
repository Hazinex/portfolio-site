import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error("API_KEY is not set");
}
const resend = new Resend(apiKey);

export async function POST(req: NextRequest) {

  const body = await req.json();

  const { error } = await resend.emails.send({
    from: `${body.firstname + " " + body.lastname} <onboarding@resend.dev>`,
    to: [process.env.EMAIL || ""],
    subject: `${body.subject} - Portfolio Contact`,
    html: `
      <p>Email received from portfolio contact form</p>
      <p><strong>Name:</strong> ${body.firstname} ${body.lastname ?? ""}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p>----------------------------------------------- Message Begin -----------------------------------------------
      <p>${body.message.replace(/\n/g, '<br>')}</p>
    `
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
  return NextResponse.json({ success: true });
};