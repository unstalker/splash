"use client";

import { useState, useEffect } from "react";

const FALLBACK = 5528;

export function useWaitlistCount() {
  const [count, setCount] = useState<number>(FALLBACK);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((data) => { if (typeof data.count === "number") setCount(data.count); })
      .catch(() => {});
  }, []);

  return { count, setCount };
}

export function formatCount(n: number): string {
  return n.toLocaleString("en-US");
}
