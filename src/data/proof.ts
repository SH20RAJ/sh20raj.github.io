// Real LinkedIn proof posts — only verified content with public links.
// Do NOT add fabricated metrics. All numbers below come from the user's own LinkedIn posts.

export interface ProofItem {
  id: string;
  title: string;
  label: string; // proof label / category
  description: string;
  tech: string[];
  linkedinUrl: string;
}

export const proofItems: ProofItem[] = [
  {
    id: "bitotsav-2026",
    title: "Bitotsav 2026 — Real-world event tech for ~5,000 participants",
    label: "Real-world scale + leadership under pressure",
    description:
      "Built and managed the complete tech ecosystem for Bitotsav '26, serving ~5,000 participants. Built the fest website, QR-based entry/scanning system, team creation/joining workflows, points system, admin panel, internal tools, AI features, announcements/community messaging, and crisis-time technical operations.",
    tech: [
      "Next.js",
      "PostgreSQL",
      "Redis",
      "OpenAI",
      "Offline scanning",
      "QR validation",
      "Admin tools",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn",
  },
  {
    id: "kishan-ai",
    title: "Kishan AI — AICTE APF 2025 Top 500",
    label: "National innovation recognition",
    description:
      "Kishan AI was shortlisted in Round 1 of AICTE Productization Fellowship 2025 among the Top 500 teams across India. Built an AI assistant for farmers with crop disease diagnosis, weather insights, mandi price analytics, government scheme recommendations, regional voice chatbot, and Telegram/Web/App access.",
    tech: ["AI", "Telegram bot", "Agriculture AI", "Voice chatbot", "Image + text diagnosis"],
    linkedinUrl:
      "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM",
  },
  {
    id: "30tools",
    title: "30tools — Solo SEO/product growth",
    label: "SEO + product growth proof",
    description:
      "Built and grew 30tools with solo SEO and product execution. Reported 4.3M+ requests in 30 days, 213,790 visits, 329,860 page views, 2,134 registered users, 55,800+ Bing clicks, 500,000+ impressions, and 45,000 active users.",
    tech: ["Next.js", "TypeScript", "SEO", "Browser APIs", "Utility tools", "Analytics"],
    linkedinUrl:
      "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_",
  },
  {
    id: "bitotsav-2025",
    title: "Bitotsav 2025 — Frontend, SEO, QR security",
    label: "Event product delivery",
    description:
      "Contributed to Bitotsav 2025 by developing frontend, improving website SEO, and creating a QR-based management system for smooth scanning and security.",
    tech: ["Frontend", "SEO", "QR management", "Security"],
    linkedinUrl:
      "https://www.linkedin.com/posts/sh20raj_bitotsav2025-bitmesra-webdevelopment-activity-7313430509747888128-vHg3",
  },
  {
    id: "bitsyll",
    title: "BitSyll — Academic open-source platform",
    label: "Student utility + open source",
    description:
      "Built BitSyll, an academic resource platform for BIT Mesra students with syllabus, notes, PYQs, academic calendar, routines, transport schedule, club contacts, recommended books, YouTube channels, and planned AI chatbot features.",
    tech: ["Next.js 15", "ShadCN", "Framer Motion", "Cloudflare"],
    linkedinUrl:
      "https://www.linkedin.com/posts/sh20raj_engineerlife-bitsyll-opensource-activity-7278949308203171840-JyF_",
  },
  {
    id: "sopplayer",
    title: "Sopplayer — Open-source video player scale",
    label: "Open-source usage proof",
    description:
      "Built Sopplayer, a stylish HTML5 video player. Reported 1,183,451 requests, 38GB bandwidth usage, and jsDelivr popularity ranking.",
    tech: ["JavaScript", "HTML5 Video", "jsDelivr", "Open-source"],
    linkedinUrl:
      "https://www.linkedin.com/posts/sh20raj_sopplayer-html5videoplayer-opensourcelove-activity-7279897143249715201-4gO6",
  },
  {
    id: "traffic-spike",
    title: "Website traffic spike",
    label: "Real usage",
    description:
      "Shared traffic spikes across personal projects, showing that my shipped products are used globally and not just portfolio demos.",
    tech: ["Production traffic", "Analytics", "Real users"],
    linkedinUrl:
      "https://www.linkedin.com/posts/sh20raj_webdevelopment-trafficspike-proudmoment-activity-7278792173464997888-hln3",
  },
  {
    id: "sketchflow",
    title: "SketchFlow — Collaborative whiteboard SaaS",
    label: "SaaS product execution",
    description:
      "Built SketchFlow, a collaborative whiteboard SaaS with markdown editor, real-time collaboration, templates, sharing, AI-powered design ideas, and product launch links.",
    tech: ["SaaS", "Collaboration", "Real-time UI", "Product design"],
    linkedinUrl:
      "https://www.linkedin.com/posts/sh20raj_collaborativewhiteboard-innovation-teamcollaboration-activity-7297327326223122433-6lYx",
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  build: string;
  constraint?: string;
  result: string;
  cta: { label: string; href: string };
  tech: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "bitotsav-2026",
    title: "Bitotsav 2026",
    problem:
      "Large cultural fest needed reliable tech for registration, entry, teams, admin operations, and real-world crowd pressure.",
    build:
      "Website, QR scanning, admin tools, teams, points/participation system, AI features, internal management, communication flow.",
    constraint:
      "Internet-less zones, bad data, access issues, last-minute changes, security constraints, real-time crowd pressure.",
    result:
      "Successfully supported ~5,000 participants and delivered the system under pressure.",
    cta: {
      label: "View LinkedIn Proof",
      href: "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn",
    },
    tech: ["Next.js", "PostgreSQL", "Redis", "OpenAI", "QR System", "Admin Panel"],
  },
  {
    id: "30tools",
    title: "30tools",
    problem: "Users need fast no-login browser tools.",
    build:
      "A growing ecosystem of 140+ free browser/developer/creator tools with SEO-focused pages.",
    result:
      "Reported millions of requests, hundreds of thousands of visits/page views, thousands of users, and strong Bing performance.",
    cta: {
      label: "View Growth Proof",
      href: "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_",
    },
    tech: ["Next.js", "TypeScript", "SEO", "Browser APIs"],
  },
  {
    id: "kishan-ai",
    title: "Kishan AI",
    problem: "Farmers need accessible AI help without installing complex apps.",
    build:
      "Telegram/Web/App AI assistant for crop disease diagnosis, weather, mandi prices, schemes, and regional voice.",
    result: "AICTE Productization Fellowship 2025 Round 1 Top 500 shortlisted.",
    cta: {
      label: "View APF Proof",
      href: "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM",
    },
    tech: ["AI", "Computer Vision", "Telegram Bot", "Voice", "Next.js"],
  },
  {
    id: "indexfast-debo-mcp",
    title: "IndexFast / Debo / MCP Pure",
    problem:
      "Founders and indie hackers need fast indexing, AI memory, and high-performance MCP servers integrated into their dev workflow.",
    build:
      "IndexFast (MCP-native indexing for Google/Bing/IndexNow from Cursor/VS Code), Debo (AI-powered life memory engine with vector search and voice agents), MCP Pure (open-source MCP hub on Cloudflare Workers).",
    result:
      "Three independent products live in production, each shipping novel MCP and AI workflows.",
    cta: {
      label: "View Live Products",
      href: "https://indexfast.co",
    },
    tech: ["Next.js", "MCP", "AI SDK", "Cloudflare Workers", "Hono", "Bun", "Vector Search"],
  },
];
