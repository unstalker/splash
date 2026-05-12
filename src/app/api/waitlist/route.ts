import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { name, email } = body as { name?: string; email?: string };

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "valid email required" }, { status: 400 });
  }

  const normalised = email.toLowerCase().trim();

  // Dedup — if already on list, return success without double-writing
  const exists = await kv.sismember("waitlist:emails", normalised);
  if (exists) {
    return NextResponse.json({ success: true, duplicate: true });
  }

  await kv.sadd("waitlist:emails", normalised);
  await kv.hset(`waitlist:${normalised}`, {
    name: name?.trim() ?? "",
    email: normalised,
    ts: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
