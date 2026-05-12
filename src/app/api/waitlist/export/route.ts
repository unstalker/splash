import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const secret = process.env.EXPORT_SECRET;
  const auth = req.headers.get("authorization");

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const emails = await kv.smembers("waitlist:emails");

  if (!emails.length) {
    return NextResponse.json([]);
  }

  const entries = await Promise.all(
    emails.map((email) => kv.hgetall(`waitlist:${email}`))
  );

  const sorted = entries
    .filter(Boolean)
    .sort((a, b) => {
      const ta = (a as Record<string, string>).ts ?? "";
      const tb = (b as Record<string, string>).ts ?? "";
      return ta.localeCompare(tb);
    });

  return NextResponse.json(sorted);
}
