export const NAV_LINKS = [
  { label: "The Problem", href: "#problem" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

export const STATS = [
  { display: "5,528", label: "people on waitlist" },
  { display: "Q4 '26", label: "public beta opening", accent: true },
  { display: "24/7", label: "continuous monitoring" },
];

export const TICKER_ENTRIES = [
  { time: "08:17:02", broker: "mylife.com", records: 6 },
  { time: "08:17:19", broker: "radaris.com", records: 2 },
  { time: "08:14:22", broker: "peoplefinders.com", records: 3 },
  { time: "08:14:36", broker: "spokeo.com", records: 3 },
  { time: "08:15:01", broker: "whitepages.com", records: 1 },
  { time: "08:15:18", broker: "intelius.com", records: 4 },
  { time: "08:15:33", broker: "beenverified.com", records: 2 },
  { time: "08:15:47", broker: "truepeoplesearch.com", records: 5 },
];

export const SCAN_RESULTS = [
  { broker: "fastpeoplesearch.com", status: "found", records: 3 },
  { broker: "spokeo.com", status: "found", records: 7 },
  { broker: "beenverified.com", status: "removing", records: 2 },
  { broker: "whitepages.com", status: "found", records: 5 },
  { broker: "intelius.com", status: "removing", records: 4 },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    label: "SCAN",
    title: "Scan & identify",
    description:
      "We crawl data broker sites and map every listing with your name, address, phone, or relatives — a full threat map in minutes.",
  },
  {
    step: "02",
    label: "REMOVE",
    title: "Automate opt-outs",
    description:
      "The AI agent navigates each broker's opt-out flow, solving CAPTCHAs, handling verifications, filing every removal request simultaneously.",
  },
  {
    step: "03",
    label: "PROTECT",
    title: "Reappearance Radar™ · monitor & re-remove",
    description:
      "Brokers re-list your data every 30–90 days. Reappearance Radar™ watches continuously and fires new removals the moment you reappear.",
  },
];

export const FEATURES = [
  {
    label: "CORE ENGINE",
    title: "AI removal agent",
    description:
      "Every opt-out adapter is purpose-built for each broker's exact flow. The agent runs headful browser sessions, navigates login walls, solves CAPTCHAs, and handles multi-step email verifications. Nothing slips through.",
  },
  {
    label: "VISIBILITY",
    title: "Stealth Score™ & threat map",
    description:
      "Live, gamified privacy level showing your exposure, which data types are at risk, and a full timeline of every removal filed.",
  },
  {
    label: "COVERAGE",
    title: "Brokers and growing",
    description:
      "From Spokeo to obscure regional people-search sites. New adapters shipped every week.",
  },
  {
    label: "ALERTS",
    title: "Reappearance Radar™",
    description:
      "The moment your data reappears on any broker, we notify you and auto-file removal. No lag, no manual checking.",
  },
  {
    label: "TRUST",
    title: "Consent first. We never sell.",
    description:
      "We use your information exclusively to file removals on your behalf. No data resale, ever. Any B2B signal is anonymized, aggregated, and consent-gated.",
  },
  {
    label: "INTERFACE",
    title: "Dashboard & agent logs",
    description:
      "Every broker, every status, live agent activity, and your privacy score, all in one clear interface.",
  },
];

export const TESTIMONIALS = [
  {
    initials: "MK",
    name: "M.K.",
    role: "Software Engineer",
    quote:
      "I set it up on a Sunday. By Monday morning, 47 listings were gone. I've tried every other service — nothing comes close to how thorough this is.",
  },
  {
    initials: "SR",
    name: "S.R.",
    role: "Nurse",
    quote:
      "I was dealing with a stalker ex. Unstalker removed me from 30+ sites I didn't even know existed. I finally feel safe again.",
  },
  {
    initials: "JT",
    name: "J.T.",
    role: "Public Defender",
    quote:
      "60+ entries gone in under 48 hours. As a public defender, having my personal info out there is a real safety risk. This solved it.",
  },
  {
    initials: "DL",
    name: "D.L.",
    role: "Freelance Journalist",
    quote:
      "The only service I've found that actually re-removes data after it comes back. Everything else just does it once and calls it done.",
  },
  {
    initials: "NK",
    name: "N.K.",
    role: "Security Researcher",
    quote:
      "I know how hard this automation problem is. The fact that they've built it at this scale — actually impressive engineering.",
  },
];
