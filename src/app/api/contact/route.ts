import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import connectToDatabase from '@/utils/mongodb';
import Contact from '@/models/Contact';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(60),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate with Zod
    const validatedData = contactSchema.parse(body);
    
    // In a real app we would add rate limiting here (e.g. upstash/redis or a local cache)
    
    // Connect to DB and save
    await connectToDatabase();
    await Contact.create(validatedData);

    // Send email Notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mohdtauseefansari34@gmail.com',
      subject: `New Portfolio Contact from ${validatedData.name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong><br>${validatedData.message.replace(/\\n/g, '<br>')}</p>
      `,
    };

    // If environment variables are set, attempt to send email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We catch this error so it doesn't crash the whole function,
        // allowing the 200 Success response to still be sent since the DB save worked.
      }
    } else {
      console.warn("Email credentials not provided in env. Email not sent.");
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Contact API Error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
