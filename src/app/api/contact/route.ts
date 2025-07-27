
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { clientName, email, subject, description } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "noreply@tanjumart.com",
      to: "saifuleslamrabbi@gmail.com",
      subject: subject,
      react: EmailTemplate({ clientName, description, email }),
    });

    if (error) {
      return NextResponse.json(
        { error: { message: error.message } },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Email sent successfully",
      data,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
