export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ServiceConfig {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  whoIsThisFor: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedProjects: string[];
  packages?: ServicePackage[];
  topics?: string[];
  bestFitCriteria?: string[];
}

export const servicesHubData = {
  title: "Services for Founders, Startups, Creators & Builders",
  subtitle:
    "I help you launch faster with landing pages, SaaS MVPs, AI tools, automation systems, growth content, and product-focused development.",
  services: [
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages for startups, SaaS products, AI tools, agencies, and creators.",
      href: "/landing-pages",
      icon: "layout",
    },
    {
      title: "SaaS MVPs",
      description:
        "Launch-ready MVPs with dashboards, auth, databases, APIs, payments, and deployment.",
      href: "/saas-mvp",
      icon: "code",
    },
    {
      title: "AI Tools & Automation",
      description:
        "AI chatbots, agents, RAG workflows, transcription systems, MCP tools, and API automations.",
      href: "/ai-automation",
      icon: "bot",
    },
    {
      title: "Growth Systems",
      description:
        "SEO pages, launch copy, YouTube scripts, cold outreach, content systems, and marketing funnels.",
      href: "/growth-systems",
      icon: "trending-up",
    },
    {
      title: "Mentorship",
      description:
        "1:1 guidance for web development, AI tools, freelancing, GitHub, and shipping real projects.",
      href: "/mentorship",
      icon: "users",
    },
    {
      title: "Founding Engineer",
      description:
        "For serious founders who need a fast technical builder to turn ideas into working software.",
      href: "/founding-engineer",
      icon: "rocket",
    },
  ],
  whoIHelp: [
    {
      title: "Founders & Startups",
      description:
        "You have an idea and need someone to build the first version fast — landing page, MVP, or AI tool.",
    },
    {
      title: "SaaS Builders",
      description:
        "You need a dashboards, auth, payments, databases, and deployment without hiring a full team.",
    },
    {
      title: "Creators & Agencies",
      description:
        "You need a clean landing page, content system, or automation to scale your work.",
    },
    {
      title: "Students & Beginners",
      description:
        "You want mentorship, code reviews, portfolio help, or guidance on building real projects.",
    },
    {
      title: "Small Businesses",
      description:
        "You need a website, SEO setup, or automation to save time and look professional online.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discuss",
      description:
        "We talk about your idea, goals, timeline, and what success looks like.",
    },
    {
      step: "02",
      title: "Plan",
      description:
        "I scope the work, define deliverables, and share a clear quote.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "I design and develop the product with regular updates and feedback loops.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "I deploy, test, and hand off everything ready for your users.",
    },
  ],
  faq: [
    {
      question: "How fast can you deliver?",
      answer:
        "Landing pages take 3-7 days. MVPs take 2-4 weeks depending on scope. AI tools and automations vary by complexity. I move fast and ship daily.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. I work with founders and startups globally. Communication is async-friendly with fast turnaround.",
    },
    {
      question: "What tech stack do you use?",
      answer:
        "Next.js, React, TypeScript, Tailwind CSS, Node.js, Python, PostgreSQL, MongoDB, Cloudflare, Vercel, OpenAI, Claude, and Gemini APIs.",
    },
    {
      question: "Can you work on existing projects?",
      answer:
        "Yes. I can improve, fix, or extend existing codebases. I'm comfortable jumping into any modern web stack.",
    },
    {
      question: "How do payments work?",
      answer:
        "I typically require 50% upfront and 50% on delivery for fixed-scope projects. For ongoing work, we can set up a monthly retainer.",
    },
  ],
};

export const landingPagesConfig: ServiceConfig = {
  slug: "landing-pages",
  label: "Landing Pages",
  title: "Landing Pages for Startups, SaaS Products, AI Tools & Creators",
  subtitle:
    "I design and build clean, fast, conversion-focused landing pages that help you launch, validate, collect leads, and look trustworthy from day one.",
  metaDescription:
    "Get a fast, clean, conversion-focused landing page for your startup, SaaS product, AI tool, agency, or creator brand.",
  whoIsThisFor: [
    "Founders validating a new idea or collecting waitlist signups",
    "SaaS products that need a professional launch page",
    "AI tool creators who need a clean demo and signup flow",
    "Agencies and freelancers who need a trustworthy web presence",
    "Creators building a personal brand or newsletter landing page",
  ],
  deliverables: [
    "Conversion-focused copy and layout",
    "Clean, modern design with your brand",
    "Responsive mobile-first layout",
    "SEO metadata and Open Graph tags",
    "Waitlist or contact form integration",
    "Analytics setup (Plausible, Umami, or GA)",
    "Fast deployment on Vercel or Cloudflare",
    "Performance optimization (95+ Lighthouse)",
  ],
  process: [
    {
      step: "01",
      title: "Brief",
      description: "Share your idea, goals, brand, and any references you like.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "I create the layout, copy structure, and visual direction.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "I code the page with animations, forms, and responsive design.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "I deploy, test on all devices, and hand off everything.",
    },
  ],
  faq: [
    {
      question: "What's included in each package?",
      answer:
        "Every package includes responsive design, SEO setup, fast deployment, and at least one revision round. Higher tiers add more sections, animations, analytics, and priority support.",
    },
    {
      question: "Can I update the page myself after delivery?",
      answer:
        "Yes. I build with clean, well-structured code. If you need a CMS for easy editing, that's available in the Premium package.",
    },
    {
      question: "Do you write the copy?",
      answer:
        "I can write conversion-focused copy based on your product and goals, or work with copy you already have.",
    },
    {
      question: "How many revisions do I get?",
      answer:
        "Starter gets 1 round, Startup gets 3 rounds, and Premium gets unlimited revisions during the project.",
    },
  ],
  relatedProjects: ["30tools", "FormGuard", "NotesFlow", "Reflecto"],
  packages: [
    {
      name: "Starter Landing Page",
      price: "$199",
      description:
        "For idea validation, waitlists, personal brands, and simple product launches.",
      features: [
        "Single page design",
        "Responsive layout",
        "Basic SEO setup",
        "Contact or waitlist form",
        "1 revision round",
        "3-day delivery",
      ],
    },
    {
      name: "Startup Landing Page",
      price: "$499",
      description:
        "For SaaS, AI tools, agencies, and serious product launches.",
      features: [
        "Multi-section landing page",
        "Scroll animations",
        "Analytics integration",
        "Open Graph image setup",
        "A/B ready structure",
        "3 revision rounds",
        "7-day delivery",
      ],
      recommended: true,
    },
    {
      name: "Premium Launch Page",
      price: "$999",
      description:
        "For full launch pages with copy, SEO, analytics, waitlist, extra sections, and polish.",
      features: [
        "Custom design system",
        "CMS integration",
        "A/B testing setup",
        "Performance optimization",
        "Priority support",
        "Unlimited revisions",
        "14-day delivery",
      ],
    },
  ],
};

export const saasMvpConfig: ServiceConfig = {
  slug: "saas-mvp",
  label: "SaaS MVPs",
  title: "SaaS MVP Development for Founders Who Want to Launch Fast",
  subtitle:
    "I build MVPs with dashboards, auth, APIs, databases, payments, onboarding, AI features, and deployment.",
  metaDescription:
    "Build your SaaS MVP with dashboards, auth, payments, APIs, databases, AI features, and deployment.",
  whoIsThisFor: [
    "Founders with a validated idea who need a working product",
    "Non-technical founders who need a technical builder",
    "Startup teams that need to ship an MVP in weeks, not months",
    "Founders transitioning from a landing page to a real product",
  ],
  deliverables: [
    "MVP architecture and tech stack planning",
    "Landing page with waitlist",
    "Authentication (email, OAuth, magic links)",
    "User dashboard with core features",
    "Database schema and API routes",
    "Payment integration (Stripe, Lemon Squeezy)",
    "Admin panel for managing users and data",
    "AI feature integration (if needed)",
    "Deployment on Vercel or Cloudflare",
    "Documentation and handoff",
  ],
  process: [
    {
      step: "01",
      title: "Scope",
      description:
        "We define the MVP features, user flows, and tech stack together.",
    },
    {
      step: "02",
      title: "Architecture",
      description:
        "I plan the database schema, API structure, and component hierarchy.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "I develop the full-stack MVP with weekly demos and feedback.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "I deploy, test, set up monitoring, and hand off everything.",
    },
  ],
  faq: [
    {
      question: "How long does an MVP take?",
      answer:
        "A basic MVP takes 2-3 weeks. A more complex product with payments, AI features, and admin panel takes 3-6 weeks.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "I offer post-launch support and can continue iterating based on user feedback. We can set up a retainer for ongoing work.",
    },
    {
      question: "Do you handle design too?",
      answer:
        "Yes. I design and develop. I use clean, functional UI patterns that look professional without needing a separate designer.",
    },
    {
      question: "Can you integrate AI features?",
      answer:
        "Yes. I've built AI chatbots, RAG systems, content generators, voice interfaces, and agent workflows using OpenAI, Claude, and Gemini APIs.",
    },
  ],
  relatedProjects: ["Debo", "Scaleboard", "Waitlist.js", "SketchFlow"],
};

export const aiAutomationConfig: ServiceConfig = {
  slug: "ai-automation",
  label: "AI Tools & Automation",
  title: "AI Tools, Agents & Automation Systems",
  subtitle:
    "I build AI-powered workflows, chatbots, automations, dashboards, and API integrations that save time and turn repetitive work into systems.",
  metaDescription:
    "Build AI chatbots, agents, RAG systems, transcript workflows, MCP tools, and custom automation dashboards.",
  whoIsThisFor: [
    "Founders who want to add AI features to their product",
    "Teams that need internal AI tools and assistants",
    "Creators who want to automate content workflows",
    "Businesses that need chatbots, RAG search, or data processing",
  ],
  deliverables: [
    "AI chatbot with custom knowledge base",
    "Internal AI assistant for team workflows",
    "RAG-based search and Q&A system",
    "Video/audio transcript processing pipeline",
    "Content automation (blog, social, email)",
    "Email automation and outreach systems",
    "MCP tool integration and custom servers",
    "API workflow dashboards with monitoring",
  ],
  process: [
    {
      step: "01",
      title: "Understand",
      description:
        "We map out the workflow, data sources, and desired outcomes.",
    },
    {
      step: "02",
      title: "Prototype",
      description:
        "I build a working prototype with core AI functionality.",
    },
    {
      step: "03",
      title: "Integrate",
      description:
        "I connect it to your existing tools, APIs, and data sources.",
    },
    {
      step: "04",
      title: "Ship",
      description:
        "I deploy, document, and hand off the complete system.",
    },
  ],
  faq: [
    {
      question: "Which AI providers do you work with?",
      answer:
        "OpenAI (GPT-4, Whisper), Claude (Anthropic), Gemini (Google), and open-source models. I pick the best fit for your use case.",
    },
    {
      question: "Can you build custom MCP servers?",
      answer:
        "Yes. I build MCP (Model Context Protocol) integrations for connecting AI models to external tools, databases, and APIs.",
    },
    {
      question: "Do you need my API keys?",
      answer:
        "Yes, for production deployment. During development, I can use my own keys for prototyping.",
    },
    {
      question: "Can you automate my existing workflows?",
      answer:
        "Yes. I can connect to your existing tools (Slack, email, CMS, databases) and build automation pipelines around them.",
    },
  ],
  relatedProjects: ["Debo", "Kishan AI", "AayeChup", "SocialScribe", "CodeSeek"],
};

export const growthSystemsConfig: ServiceConfig = {
  slug: "growth-systems",
  label: "Growth Systems",
  title: "Growth Systems, SEO Pages & Launch Content",
  subtitle:
    "I help founders create the content, pages, scripts, and outreach systems needed to launch and grow products.",
  metaDescription:
    "Get SEO pages, launch copy, YouTube scripts, outreach systems, and content workflows for your product.",
  whoIsThisFor: [
    "Founders preparing to launch on Product Hunt or social media",
    "Startups that need SEO content to drive organic traffic",
    "Creators who need scripts, copy, and content systems",
    "Teams that need cold outreach and email automation",
  ],
  deliverables: [
    "Landing page copy and positioning",
    "SEO content pages and blog posts",
    "Programmatic SEO page structure",
    "X/Twitter launch thread copy",
    "Product Hunt launch copy and assets",
    "Cold email sequences and templates",
    "YouTube video scripts",
    "Founder personal brand content strategy",
  ],
  process: [
    {
      step: "01",
      title: "Audit",
      description:
        "I review your current positioning, audience, and growth channels.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "We define the growth levers, content plan, and launch timeline.",
    },
    {
      step: "03",
      title: "Create",
      description:
        "I write, design, and build the content and systems.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "We execute the launch plan and set up ongoing content workflows.",
    },
  ],
  faq: [
    {
      question: "Do you manage social media accounts?",
      answer:
        "I create the content and systems, but I don't manage day-to-day posting. I'll set you up with templates and workflows you can run.",
    },
    {
      question: "Can you help with Product Hunt launches?",
      answer:
        "Yes. I write launch copy, create assets, plan the timeline, and set up the landing page for your Product Hunt launch.",
    },
    {
      question: "Do you do SEO audits?",
      answer:
        "Yes. I audit your site's technical SEO, content gaps, and keyword opportunities, then build the pages and content to fix them.",
    },
    {
      question: "What kind of content do you write?",
      answer:
        "Landing pages, blog posts, launch threads, cold emails, YouTube scripts, and founder brand content. Everything is conversion-focused.",
    },
  ],
  relatedProjects: ["IndexFast", "30tools", "Waitlist.js", "Scaleboard"],
};

export const mentorshipConfig: ServiceConfig = {
  slug: "mentorship",
  label: "Mentorship",
  title: "1:1 Mentorship for Builders, Students & Beginner Developers",
  subtitle:
    "Learn how to build real projects, use AI tools, improve your GitHub, start freelancing, and ship products publicly.",
  metaDescription:
    "1:1 mentorship for web development, AI tools, GitHub, freelancing, and shipping real projects.",
  whoIsThisFor: [
    "Students learning web development and wanting real-world skills",
    "Beginner developers who want to build and ship real projects",
    "Developers looking to add AI skills to their toolkit",
    "Freelancers who want to find clients and grow their income",
    "Builders who want accountability and guidance on side projects",
  ],
  deliverables: [
    "1:1 video calls (30 or 60 min sessions)",
    "Code reviews with detailed feedback",
    "Project architecture guidance",
    "Career and portfolio advice",
    "GitHub profile optimization",
    "Freelancing strategy and pricing help",
    "AI tools and API integration guidance",
  ],
  process: [
    {
      step: "01",
      title: "Connect",
      description:
        "We chat about your goals, current skills, and what you want to learn.",
    },
    {
      step: "02",
      title: "Plan",
      description:
        "I create a personalized learning path based on your goals.",
    },
    {
      step: "03",
      title: "Meet",
      description:
        "We have regular sessions with code reviews, pair programming, and Q&A.",
    },
    {
      step: "04",
      title: "Ship",
      description:
        "You build and ship real projects with my guidance and feedback.",
    },
  ],
  faq: [
    {
      question: "How do sessions work?",
      answer:
        "Sessions are 1-on-1 video calls. We can do code reviews, pair programming, architecture discussions, or career Q&A — whatever you need most.",
    },
    {
      question: "What topics can we cover?",
      answer:
        "Next.js, React, TypeScript, AI APIs, GitHub, freelancing, open source, portfolio building, system design, and launching products. Anything that helps you grow as a builder.",
    },
    {
      question: "How often do we meet?",
      answer:
        "Most mentees meet weekly or biweekly. We can adjust the frequency based on your schedule and goals.",
    },
    {
      question: "Do you review my code?",
      answer:
        "Yes. Code review is a core part of mentorship. I review your PRs, projects, and portfolio with detailed, actionable feedback.",
    },
  ],
  topics: [
    "Web development (Next.js, React, TypeScript)",
    "Building and shipping SaaS products",
    "AI API integrations (OpenAI, Claude, Gemini)",
    "GitHub profile and open-source strategy",
    "Freelancing: finding clients, pricing, and delivery",
    "Portfolio building and personal branding",
    "System design and architecture basics",
    "Launching products on Product Hunt and social media",
  ],
  relatedProjects: [],
};

export const foundingEngineerConfig: ServiceConfig = {
  slug: "founding-engineer",
  label: "Founding Engineer",
  title: "Need a Founding Engineer or Technical Cofounder?",
  subtitle:
    "I work with serious founders who need a fast technical builder to turn rough ideas into MVPs, dashboards, AI tools, landing pages, and launch-ready products.",
  metaDescription:
    "Work with Shaswat Raj as a founding engineer or technical builder for MVPs, AI tools, dashboards, and launch-ready products.",
  whoIsThisFor: [
    "Early-stage founders who need a technical partner",
    "Solo founders who can code but need a faster builder",
    "Non-technical founders with validated ideas and traction",
    "Founders preparing for YC, fundraising, or a public launch",
  ],
  deliverables: [
    "Full-stack product development",
    "MVP architecture and implementation",
    "Landing page and marketing site",
    "AI features and integrations",
    "Database design and API development",
    "Deployment and infrastructure setup",
    "Technical strategy and stack decisions",
    "Fast iteration based on user feedback",
  ],
  process: [
    {
      step: "01",
      title: "Pitch",
      description:
        "You share your idea, market, traction, and what you need.",
    },
    {
      step: "02",
      title: "Evaluate",
      description:
        "We assess fit — timeline, scope, working style, and commitment.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "I start building immediately with fast iterations and daily updates.",
    },
    {
      step: "04",
      title: "Scale",
      description:
        "We iterate based on user feedback and grow the product together.",
    },
  ],
  faq: [
    {
      question: "What's the engagement model?",
      answer:
        "Flexible — part-time, full-time, or project-based. We can discuss equity, retainer, or a combination based on your stage and needs.",
    },
    {
      question: "Do you take equity?",
      answer:
        "For the right project with the right founder, yes. I'm open to equity + reduced cash arrangements for promising early-stage startups.",
    },
    {
      question: "How selective are you?",
      answer:
        "Very. I only take on projects where I believe in the problem, the founder, and the market. I'd rather do fewer things well.",
    },
    {
      question: "What if I just need an MVP?",
      answer:
        "If you need a one-time MVP build without an ongoing engagement, check out the SaaS MVP service page for fixed-scope projects.",
    },
  ],
  bestFitCriteria: [
    "You have a clear problem or idea worth solving",
    "You understand the market or customer deeply",
    "You need someone who can ship fast and iterate",
    "You want to launch, test, and learn quickly",
    "You're ready to commit time and resources to the project",
  ],
  relatedProjects: ["Debo", "Kishan AI", "Scaleboard"],
};
