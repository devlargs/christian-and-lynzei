import { NextResponse } from "next/server";

export const runtime = "nodejs";

const PHONE_RE = /^[+\d][\d\s\-()]{6,19}$/;

export async function POST(request: Request) {
  let body: { name?: unknown; phone?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!name || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name." },
      { status: 400 },
    );
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid phone number." },
      { status: 400 },
    );
  }

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) {
    console.error("Notion env vars missing: NOTION_TOKEN or NOTION_DATABASE_ID");
    return NextResponse.json(
      { ok: false, error: "Server is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const today = new Date().toISOString().slice(0, 10);

  const notionRes = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Phone: { phone_number: phone },
        Date: { date: { start: today } },
      },
    }),
  });

  if (!notionRes.ok) {
    const detail = await notionRes.text();
    console.error("Notion API error:", notionRes.status, detail);
    return NextResponse.json(
      { ok: false, error: "Could not save your RSVP. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
