import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!name || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
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
        Email: { email },
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
