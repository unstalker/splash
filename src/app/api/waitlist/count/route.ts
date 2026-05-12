import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const BASE_COUNT = 5528;

export async function GET() {
  const real = await kv.scard("waitlist:emails");
  return NextResponse.json({ count: BASE_COUNT + real }, {
    headers: { "Cache-Control": "no-store" },
  });
}
