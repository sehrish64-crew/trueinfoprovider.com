import { NextResponse } from "next/server";
import { createId, query } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "firstName, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const contactId = createId();

    await query(
      "INSERT INTO `contact_messages` (`id`, `firstName`, `lastName`, `email`, `subject`, `message`, `createdAt`) VALUES (?, ?, ?, ?, ?, ?, NOW())",
      [contactId, firstName, lastName || "", email, subject, message]
    );

    return NextResponse.json({ success: true, id: contactId });
  } catch (error: any) {
    console.error("/api/contact error:", error);
    return NextResponse.json(
      { error: error?.message ?? "Unknown contact submission error." },
      { status: 500 }
    );
  }
}
