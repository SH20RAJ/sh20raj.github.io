import { Icons } from "@/components/icons";

export interface WorkExperience {
  company: string;
  title: string;
  start: string;
  end: string;
  description: string;
  href: string;
  badges: string[];
  logoUrl: string;
  location: string;
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  href: string;
  logoUrl: string;
}

export const DATA = {
  name: "Shaswat Raj",
  initials: "SH",
  url: "https://sh20raj.github.io",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Full Stack Developer, AI Product Builder & Open-Source Creator",
  summary:
    "I'm Shaswat Raj, a full-stack developer and product builder from India. I build AI products, SaaS tools, developer utilities, indexing tools, content platforms, and automation systems. My strength is taking rough product ideas and turning them into working demos, MVPs, dashboards, APIs, and launch-ready websites quickly.\n\nI like working close to founders, solving unclear problems, experimenting fast, and shipping useful products in public. Coding since class 7, I've built 500+ projects, maintain 50+ open-source packages, have 45k+ followers on Dev.to, joined 4+ startups as Tech Lead, and actively run 20+ small projects with real user traction.",
  avatarUrl: "/profile.jpg",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "AI/ML APIs",
    "OpenAI",
    "Claude",
    "Gemini",
    "Cloudflare",
    "Vercel",
    "Docker",
    "GitHub Actions",
    "REST APIs",
    "WebSockets",
    "Prisma",
    "SEO",
  ],
  navbar: [
    { href: "/", icon: "home", label: "Home" },
    { href: "/projects", icon: "briefcase", label: "Work" },
    { href: "/services", icon: "wrench", label: "Services" },
    { href: "/marketplace", icon: "shopping-cart", label: "Marketplace" },
  ],
  contact: {
    email: "sh20raj@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SH20RAJ",
        icon: "github",
        navbar: true,
      },
      GitHubDump: {
        name: "GitHub Dump",
        url: "https://github.com/sh20raj-dump",
        icon: "github",
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sh20raj",
        icon: "linkedin",
        navbar: true,
      },
      DevCommunity: {
        name: "Dev Community",
        url: "https://dev.to/sh20raj",
        icon: "devto",
        navbar: false,
      },
      Codepen: {
        name: "Codepen",
        url: "https://codepen.io/sh20raj",
        icon: "codepen",
        navbar: false,
      },
      Peerlist: {
        name: "Peerlist",
        url: "https://peerlist.io/sh20raj",
        icon: "peerlist",
        navbar: false,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/sh20raj",
        icon: "codeforces",
        navbar: false,
      },
      NPM: {
        name: "NPM",
        url: "https://www.npmjs.com/~sh20raj",
        icon: "npm",
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sh20raj@gmail.com",
        icon: "email",
        navbar: false,
      },
      ProductHunt: {
        name: "Product Hunt",
        url: "https://www.producthunt.com/@sh20raj",
        icon: "producthunt",
        navbar: false,
      },
      Apify: {
        name: "Apify",
        url: "https://apify.com/express_kingfisher",
        icon: "apify",
        navbar: false,
      },
    },
  },

  work: [] as WorkExperience[],
  education: [] as Education[],
  projects: [
    {
      title: "Debo",
      href: "https://debo.life",
      dates: "2025",
      active: true,
      description:
        "Your Life's Memory Engine. An AI-powered product that captures useful context from notes, links, videos, audio, and conversations, then makes it searchable and reusable through a seamless AI chat interface.",
      technologies: ["Next.js", "TypeScript", "AI Agents", "AI SDK", "Voice Agent", "Vector Search", "Cloudflare", "Agentic Memory", "OpenAI"],
      links: [
        {
          type: "Website",
          href: "https://debo.life",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/debo",
          icon: "github",
        },
      ],
      image: "https://ph-files.imgix.net/cfa307d8-4afb-4bc7-934a-7ab7cf316aa7.png",
      video: "",
    },
    {
      title: "IndexFast",
      href: "https://indexfast.co",
      dates: "2025",
      active: true,
      description:
        "The first MCP-native indexing platform. Stop waiting for Google to crawl your site. Index your URLs to Google, Bing, and IndexNow instantly from your AI IDE (Cursor or VS Code).",
      technologies: ["Next.js", "TypeScript", "IndexNow API", "Bing API", "MCP"],
      links: [
        {
          type: "Website",
          href: "https://indexfast.co",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/index-fast",
          icon: "github",
        },
      ],
      image: "https://www.indexfast.co/opengraph-image.png",
      video: "",
    },
    {
      title: "MCP Pure",
      href: "https://mcppure.30tools.com/",
      dates: "2025",
      active: true,
      description:
        "A central, open-source hub for high-performance Model Context Protocol (MCP) servers. Built with Hono and Bun, and deployed on Cloudflare Workers for maximum speed and reliability.",
      technologies: ["TypeScript", "Hono", "Bun", "MCP", "Cloudflare Workers"],
      links: [
        {
          type: "Website",
          href: "https://mcppure.30tools.com/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/shade-solutions/mcp-pure",
          icon: "github",
        },
      ],
      image: "https://mcppure.30tools.com/og-image.png",
      video: "",
    },
    {
      title: "Unstory",
      href: "https://unstory.app",
      dates: "2024",
      active: true,
      description:
        "Strategic intelligence platform tracking AI, markets, and power shifts. Deciphering complex trends for high-agency professionals, founders, and operators through deep analysis and tracking.",
      technologies: ["Next.js", "Tailwind CSS", "AI", "PostgreSQL", "SEO"],
      links: [
        {
          type: "Website",
          href: "https://unstory.app",
          icon: "globe",
        },
      ],
      image: "https://unstory.app/og-image.png",
      video: "",
    },
    {
      title: "Wify",
      href: "https://wify.my",
      dates: "2025",
      active: true,
      description:
        "A modern, mobile-first, swipe-based text story platform. It brings the addictive vertical swipe UX of TikTok and Shorts into the world of text-based storytelling and immersive experiences.",
      technologies: ["Next.js", "TypeScript", "Cloudflare", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://wify.my",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/unstory-app/storix",
          icon: "github",
        },
      ],
      image: "https://wify.my/og-image.png",
      video: "",
    },
    {
      title: "30tools",
      href: "https://30tools.com",
      dates: "2025",
      active: true,
      description:
        "A collection of fast, simple browser tools for developers, creators, and everyday users. Created SEO-focused tool pages with clean UX and fast client-side processing.",
      technologies: ["Next.js", "TypeScript", "Browser APIs", "SEO", "Client-side Utilities"],
      links: [
        {
          type: "Website",
          href: "https://30tools.com",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/30tools",
          icon: "github",
        },
      ],
      image: "https://30tools.com/og-image.jpg",
      video: "",
    },
  ],
  projectsDump: [
    {
      title: "Kishan AI",
      href: "https://kishanai.strivio.world",
      dates: "2025",
      active: true,
      description:
        "An AI-powered Telegram/Web assistant for farmers. Shortlisted in AICTE Productization Fellowship (APF) 2025 (Top 500 across India). Features crop disease diagnosis using computer vision, weather insights, mandi prices, and government scheme recommendations.",
      technologies: ["Python", "AI/ML", "Computer Vision", "Telegram Bot", "React", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://kishanai.strivio.world",
          icon: "globe",
        },
      ],
      image: "https://kishanai.strivio.world/_next/image?url=%2Fog-image.png&w=1920&q=75",
      video: "",
    },
    {
      title: "FormGuard",
      href: "https://formguard.unstory.app",
      dates: "2025",
      active: true,
      description:
        "A lightweight form protection and validation tool for developers. Public forms get spam, abuse, and invalid submissions — FormGuard provides a simple protection layer for validating and securing form submissions without heavy dependencies.",
      technologies: ["Next.js", "Node.js", "APIs", "Validation", "Security"],
      links: [
        {
          type: "Website",
          href: "https://formguard.unstory.app",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/formguard",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/formguard/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "NotesFlow",
      href: "https://notesflow.pages.dev",
      dates: "2024",
      active: true,
      description:
        "A privacy-focused note-taking application with a beautiful interface. Features local storage, import/export capabilities, dark mode, and offline-first PWA support. No account required — your notes stay on your device.",
      technologies: ["Next.js", "React", "LocalStorage", "PWA", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://notesflow.pages.dev",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/notesflow",
          icon: "github",
        },
      ],
      image: "https://i.ibb.co/twghXwLL/Screenshot-2025-05-22-at-9-33-08-AM.png",
      video: "",
    },
    {
      title: "Reflecto",
      href: "https://reflecto.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "A minimal yet smart daily reflection app designed for busy users. Features AI-curated questions, voice journaling, mood tracking, and personalized insights that evolve with you over time.",
      technologies: ["React", "Next.js", "AI", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://reflecto.netlify.app/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/reflecto",
          icon: "github",
        },
      ],
      image: "https://i.ibb.co/1tDkptVS/Screenshot-2025-05-22-at-9-38-58-AM.png",
      video: "",
    },
    {
      title: "Sopplayer",
      href: "https://sh20raj.github.io/Sopplayer/players/",
      dates: "2020 - Present",
      active: true,
      description:
        "A sleek and feature-rich HTML5 video player integration. Enhances standard video elements with custom skinning, intuitive controls, and cross-browser compatibility. Distributed via jsDelivr CDN.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jsDelivr", "Open Source"],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/Sopplayer/players/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/Sopplayer",
          icon: "github",
        },
      ],
      image: "https://1.bp.blogspot.com/-MXdsGGbh59A/X-cM2B2eQ6I/AAAAAAAAAZU/KLEP-6BI85gMXR-7NjBWIdxnCKyIaNzbACLcBGAsYHQ/w640-h361/sopplayer.JPG",
      video: "",
    },
    {
      title: "SketchFlow",
      href: "https://sketchflow.netlify.app",
      dates: "2024",
      active: true,
      description:
        "A powerful collaborative whiteboard platform designed for real-time brainstorming and visual collaboration. Features customizable templates, recording capabilities, AI assistance, and integration with productivity tools.",
      technologies: ["React", "Canvas API", "WebSockets", "Node.js", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://sketchflow.netlify.app",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/sketchflow",
          icon: "github",
        },
      ],
      image: "https://i.ibb.co/k2qr4gtF/Screenshot-2025-05-22-at-9-40-30-AM.png",
      video: "",
    },
    {
      title: "SocialScribe",
      href: "https://socialscribe.pages.dev",
      dates: "2024",
      active: true,
      description:
        "An AI-powered tool that creates tailored social media posts, comments, and direct messages with customizable tone, formality, and platform-specific adjustments for LinkedIn, Twitter, and Facebook.",
      technologies: ["React", "Next.js", "Gemini AI", "JavaScript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://socialscribe.pages.dev",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/SocialScribe",
          icon: "github",
        },
      ],
      image: "https://i.ibb.co/8ng5N1Yz/Screenshot-2025-05-22-at-9-47-10-AM.png",
      video: "",
    },
    {
      title: "AayeChup",
      href: "https://aayechup.shade.cool",
      dates: "2024",
      active: true,
      description:
        "An AI voice conversation platform that enables natural voice interactions with multiple AI personalities, creating an experience similar to a phone call with high-quality voice processing and real-time responses.",
      technologies: ["Next.js", "TypeScript", "OpenAI Whisper", "ElevenLabs", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://aayechup.shade.cool",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/aayechup",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/aayechup/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Scaleboard",
      href: "https://scaleboard.org",
      dates: "2024",
      active: true,
      description:
        "An all-in-one platform for indie hackers and startup founders to showcase projects, track metrics with verified analytics, and build in public with full transparency and customization options.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"],
      links: [
        {
          type: "Website",
          href: "https://scaleboard.org",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/scaleboard",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/scaleboard/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "PeerDrop",
      href: "https://peerdrop.pages.dev/",
      dates: "2024",
      active: true,
      description:
        "A privacy-focused, peer-to-peer file sharing app that enables secure, serverless file transfers. Files are end-to-end encrypted via WebRTC and never touch any third-party server.",
      technologies: ["WebRTC", "JavaScript", "Socket.io", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://peerdrop.pages.dev/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/peerdrop",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/peerdrop/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "CodeSeek",
      href: "https://marketplace.visualstudio.com/items?itemName=sh20raj.codeseek-shade",
      dates: "2024",
      active: true,
      description:
        "AI-powered coding assistant for VS Code with DeepSeek integration. Features intelligent code completion, chat assistance, name suggestions, and README generation for a supercharged coding workflow.",
      technologies: ["JavaScript", "VS Code API", "DeepSeek AI", "Extensions"],
      links: [
        {
          type: "Website",
          href: "https://marketplace.visualstudio.com/items?itemName=sh20raj.codeseek-shade",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/CodeSeek",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/CodeSeek/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "MarkMind Editor",
      href: "https://npmjs.com/package/markmind-editor",
      dates: "2024",
      active: true,
      description:
        "A Notion-style WYSIWYG editor with AI-powered autocompletion built on Tiptap. Includes rich text editing with Markdown support, slash commands, bubble menus, image handling, tables, and customizable themes. Published on npm.",
      technologies: ["TypeScript", "React", "Next.js", "Tiptap", "AI"],
      links: [
        {
          type: "Website",
          href: "https://npmjs.com/package/markmind-editor",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/markmind-editor",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/markmind-editor/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Waitlist.js",
      href: "https://waitlist-js.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A SaaS platform that transforms traditional waitlists into growth engines by combining AI-powered engagement, viral referral systems, and psychological triggers to help businesses build anticipation and maximize conversions.",
      technologies: ["TypeScript", "JavaScript", "React", "API", "Analytics"],
      links: [
        {
          type: "Website",
          href: "https://waitlist-js.vercel.app/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/waitlist.js",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/waitlist.js/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "TubeSonic",
      href: "https://github.com/SH20RAJ/TubeSonic/releases",
      dates: "2024",
      active: true,
      description:
        "A lightweight, blazing-fast desktop app built with Tauri and React for downloading YouTube videos and audio in various quality options with a beautiful glass morphism UI design.",
      technologies: ["Tauri", "React", "Rust", "yt-dlp", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://github.com/SH20RAJ/TubeSonic/releases",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/TubeSonic",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/TubeSonic/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "OpenDictionaryAPI",
      href: "https://api.dictionaryapi.dev/",
      dates: "2022",
      active: true,
      description:
        "A free, open-source dictionary API that aggregates data from multiple reputable sources, providing comprehensive word definitions, examples, etymology, synonyms, and translations in a clean, consistent format.",
      technologies: ["JavaScript", "Node.js", "Web Scraping", "API Development", "Data Aggregation"],
      links: [
        {
          type: "Website",
          href: "https://api.dictionaryapi.dev/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/OpenDictionaryAPI",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/OpenDictionaryAPI/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "SafeStore",
      href: "https://www.npmjs.com/package/@sh20raj/safestore",
      dates: "2023",
      active: true,
      description:
        "An advanced client-side storage library with AES-256 encryption for secure data storage in web applications. Features automatic encryption/decryption, configurable security options, and support for LocalStorage and IndexedDB.",
      technologies: ["JavaScript", "Cryptography", "LocalStorage", "Web Security", "IndexedDB"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@sh20raj/safestore",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/SafeStore",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/SafeStore/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Create TanStack App",
      href: "https://www.npmjs.com/package/create-tanstack-app",
      dates: "2023",
      active: true,
      description:
        "A CLI tool for instantly setting up fully configured TanStack projects with React Query, React Router, and TanStack Table. Features template selection, TypeScript/JavaScript options, and automatic dependency installation.",
      technologies: ["JavaScript", "Node.js", "CLI Tools", "TanStack", "React"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/create-tanstack-app",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/create-tanstack-app",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/create-tanstack-app/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "YouTube Remote Uploader",
      href: "https://github.com/SH20RAJ/youtube-remote-uploader/releases",
      dates: "2024",
      active: true,
      description:
        "A tool that automates downloading videos from remote URLs and uploading them to YouTube using the Data API. Perfect for batch processing and scheduled uploads using GitHub Actions with comprehensive metadata management.",
      technologies: ["Python", "YouTube API", "GitHub Actions", "Automation", "Batch Processing"],
      links: [
        {
          type: "Website",
          href: "https://github.com/SH20RAJ/youtube-remote-uploader/releases",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/youtube-remote-uploader",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/youtube-remote-uploader/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Sequence Game",
      href: "https://sequence.pages.dev/",
      dates: "2024",
      active: true,
      description:
        "An online multiplayer Sequence card game with real-time gameplay, room creation, and persistence with MongoDB. Features a love-themed design with special animations for couples.",
      technologies: ["TypeScript", "Next.js", "MongoDB", "Socket.io", "Prisma"],
      links: [
        {
          type: "Website",
          href: "https://sequence.pages.dev/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/sequence-game",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/sequence-game/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Image BG Remover",
      href: "https://bg-rem.streamlit.app/",
      dates: "2023",
      active: true,
      description:
        "A web application that removes backgrounds from images using OpenCV's segmentation methods, featuring an intuitive interface for uploading, processing, and downloading images with transparent backgrounds.",
      technologies: ["Python", "OpenCV", "Streamlit", "NumPy", "Image Processing"],
      links: [
        {
          type: "Website",
          href: "https://bg-rem.streamlit.app/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/image-bg-remover",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/image-bg-remover/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Sanskrit",
      href: "https://www.npmjs.com/package/@sh20raj/sanskrit",
      dates: "2023",
      active: true,
      description:
        "A comprehensive JavaScript library for Sanskrit text processing and transliteration with support for Devanagari to Latin conversions, grammatical analysis, and sandhi rules. Published on npm.",
      technologies: ["JavaScript", "NLP", "Linguistics", "Transliteration", "Unicode"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@sh20raj/sanskrit",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/sanskrit",
          icon: "github",
        },
      ],
      image: "https://socialify.git.ci/SH20RAJ/sanskrit/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AICTE Productization Fellowship (APF) 2025",
      dates: "May - July 2025",
      location: "Ranchi, Jharkhand",
      description:
        "Shortlisted in Round 1 (Top 500 across India). Developed Kishan AI, an AI-powered Telegram Assistant for farmers with crop disease diagnosis, weather insights, and mandi prices.",
      image: "https://pbs.twimg.com/profile_images/1633400336214302720/0p534a6e_400x400.jpg",
      links: [],
    },
    {
      title: "Apify $100 Hackathon Winner",
      dates: "2025",
      location: "Online",
      description:
        "Won $100 in the Apify web scraping hackathon. Built a production-ready scraping actor using Apify SDK for automated data extraction from web platforms.",
      image: "https://avatars.githubusercontent.com/u/24586296?s=200&v=4",
      links: [
        {
          type: "Profile",
          href: "https://apify.com/express_kingfisher",
          icon: "globe",
        },
      ],
    },
  ],
};
