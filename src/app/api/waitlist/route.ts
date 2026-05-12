import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

const BASE_COUNT = 5528;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { name, email } = body as { name?: string; email?: string };

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "valid email required" }, { status: 400 });
  }

  const normalised = email.toLowerCase().trim();

  const exists = await kv.sismember("waitlist:emails", normalised);
  if (exists) {
    const real = await kv.scard("waitlist:emails");
    return NextResponse.json({ success: true, duplicate: true, count: BASE_COUNT + real });
  }

  await kv.sadd("waitlist:emails", normalised);
  await kv.hset(`waitlist:${normalised}`, {
    name: name?.trim() ?? "",
    email: normalised,
    ts: new Date().toISOString(),
  });

  const real = await kv.scard("waitlist:emails");
  return NextResponse.json({ success: true, count: BASE_COUNT + real });
}
