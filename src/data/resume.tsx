import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shaswat Raj",
  initials: "SH",
  url: "https://sh20raj.github.io",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "System Design | Web Dev | DevOps | Open-Source",
  summary:
    "Passionate Full Stack Developer with a keen interest in web development and open-source projects. I love learning and exploring new technologies. I have a strong background in building scalable web applications and contributing to the open-source community.",
  avatarUrl: "/profile.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PHP",
    "Laravel",
    "TailwindCSS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "System Design",
    "DevOps",
    "Trading Systems",
    "AWS",
    "OpenAI Integration",
    "WebRTC",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sh20raj@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SH20RAJ",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sh20raj",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sh20raj@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/sh20raj",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "IEEE Student Branch-BIT Mesra",
      href: "https://www.ieee.org",
      badges: [],
      location: "Ranchi, Jharkhand",
      title: "Technical Lead",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg",
      start: "Feb 2025",
      end: "Present",
      description:
        "Leading technical initiatives and fostering collaboration on impactful tech projects. Exploring emerging technologies and organizing events to promote innovation and networking.",
    },
    {
      company: "Cloud Native Computing Foundation (CNCF)",
      href: "https://www.cncf.io",
      badges: [],
      location: "Ranchi, Jharkhand",
      title: "Organizer - Ranchi Chapter",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Cncf-logo.svg",
      start: "June 2025",
      end: "Present",
      description:
        "Initiated and leading the CNCF Ranchi Chapter. Organizing meetups, workshops, and sessions on Kubernetes, Docker, and Prometheus. Building a local cloud-native community and promoting open-source culture.",
    },
    {
      company: "Hirebuddy",
      href: "",
      badges: [],
      location: "Ranchi, Jharkhand",
      title: "Technical Manager",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=hirebuddy.ai",
      start: "Sept 2024",
      end: "June 2025",
      description:
        "Oversaw technical operations and enhanced AI-driven job matching. implemented automation features reducing user effort by 70%. Collaborated with cross-functional teams to increase user engagement by 50%.",
    },
    {
      company: "Entrepreneurship Development Cell",
      href: "https://www.edcbitmesra.in",
      badges: [],
      location: "Ranchi, Jharkhand",
      title: "Member",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=edcbitmesra.in",
      start: "Mar 2025",
      end: "Sept 2025",
      description:
        "Contributed to the entrepreneurial ecosystem through startup ideation and incubation. Assisted in organizing flagship events and hackathons. Applied real-world business and product strategies.",
    },
  ],
  education: [
    {
      school: "Birla Institute of Technology, Mesra",
      href: "https://www.bitmesra.ac.in",
      degree: "Bachelor of Technology - BTech, Computer Science",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/8/87/B._I._T._Mesra_logo.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "Jawahar Navodaya Vidyalaya (JNV)",
      href: "",
      degree: "Schooling",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Jawahar_Navodaya_Vidyalaya_logo.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Kishan AI",
      href: "https://kishanai.strivio.world",
      dates: "2025",
      active: true,
      description:
        "An AI-powered Telegram/Web/App assistant for farmers. Shortlisted in AICTE Productization Fellowship (APF) 2025 (Top 500). Features crop disease diagnosis, weather insights, mandi prices, and government scheme recommendations.",
      technologies: [
        "Python",
        "AI/ML",
        "Computer Vision",
        "Telegram Bot",
        "React",
        "Next.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://kishanai.strivio.world",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://kishanai.strivio.world/_next/image?url=%2Fog-image.png&w=1920&q=75",
      video: "",
    },
    {
      title: "NotesFlow",
      href: "https://notesflow.pages.dev",
      dates: "",
      active: true,
      description:
        "A privacy-focused note-taking application that lets you create, edit, and manage notes with a beautiful interface. Features include local storage, import/export capabilities, dark mode, and works offline.",
      technologies: ["Next.js", "React", "LocalStorage", "PWA"],
      links: [
        {
          type: "Website",
          href: "https://notesflow.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/notesflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.ibb.co/twghXwLL/Screenshot-2025-05-22-at-9-33-08-AM.png",
      video: "",
    },
    {
      title: "Reflecto",
      href: "https://reflecto.netlify.app/",
      dates: "",
      active: true,
      description:
        "A minimal yet smart daily reflection app designed for busy users. Features AI-curated questions, voice journaling, mood tracking, and personalized insights that evolve with you over time.",
      technologies: ["React", "Next.js", "AI", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://reflecto.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/reflecto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.ibb.co/1tDkptVS/Screenshot-2025-05-22-at-9-38-58-AM.png",
      video: "",
    },
    {
      title: "SketchFlow",
      href: "https://sketchflow.space",
      dates: "",
      active: true,
      description:
        "A powerful collaborative whiteboard platform designed for real-time brainstorming and visual collaboration. Features include customizable templates, recording capabilities, AI assistance, and integration with productivity tools.",
      technologies: [
        "React",
        "Canvas API",
        "WebSockets",
        "Node.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://sketchflow.space",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/sketchflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.ibb.co/k2qr4gtF/Screenshot-2025-05-22-at-9-40-30-AM.png",
      video: "",
    },
    {
      title: "CreoYT",
      href: "https://creoyt.netlify.app/",
      dates: "",
      active: true,
      description:
        "An all-in-one platform for YouTube creators with AI-powered tools for channel analysis, content research, thumbnail creation, competitor tracking, and video repurposing to optimize channel growth.",
      technologies: ["React", "Next.js", "YouTube API", "OpenAI", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://creoyt.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/creoyt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.ibb.co/KjtyYb44/Screenshot-2025-05-22-at-9-41-59-AM.png",
      video: "",
    },
    {
      title: "Bitsyll",
      href: "https://bitsyll.pages.dev/",
      dates: "",
      active: true,
      description:
        "A comprehensive platform for BIT Mesra students that provides centralized access to study materials, lecture notes, assignments, and previous year question papers to enhance the learning experience.",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://bitsyll.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/bitsyll",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.ibb.co/Jj4bmhFB/Screenshot-2025-05-22-at-9-43-32-AM.png",
      video: "",
    },
    {
      title: "SocialScribe",
      href: "https://socialscribe.pages.dev",
      dates: "",
      active: true,
      description:
        "An AI-powered tool that helps create tailored social media posts, comments, and direct messages with customizable tone, formality, and platform-specific adjustments for platforms like LinkedIn, Twitter, and Facebook.",
      technologies: ["React", "Next.js", "Gemini AI", "JavaScript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://socialscribe.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/SocialScribe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.ibb.co/8ng5N1Yz/Screenshot-2025-05-22-at-9-47-10-AM.png",
      video: "",
    },
    {
      title: "AayeChup",
      href: "https://aayechup.shade.cool",
      dates: "",
      active: true,
      description:
        "An AI voice conversation platform that enables natural voice interactions with multiple AI personalities, creating an experience similar to a phone call with high-quality voice processing and real-time responses.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI Whisper",
        "ElevenLabs",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://aayechup.shade.cool",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/aayechup",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/aayechup/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Article",
      href: "https://article.shade.cool/",
      dates: "",
      active: true,
      description:
        "A free open-source blogging platform that allows writers to publish articles on various genres while automating classification, SEO, audience management, and outreach to help content creators focus on writing.",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "JavaScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://article.shade.cool/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/article",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/article/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Multiversal",
      href: "https://multiversal.pages.dev/",
      dates: "",
      active: true,
      description:
        "A creative platform where poets, writers, musicians, and storytellers can share diverse content including poems, stories, songs, and scripts, complete with user profiles and social interaction features.",
      technologies: [
        "Next.js",
        "Prisma",
        "MySQL",
        "Tailwind CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://multiversal.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/Multiversal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/Multiversal/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "PlayTube",
      href: "https://playtube.pages.dev",
      dates: "",
      active: true,
      description:
        "A full-featured YouTube clone with video upload and playback, user authentication, comments, likes, subscriptions, search, trending videos, and user profiles powered by a PHP/MySQL backend.",
      technologies: ["PHP", "MySQL", "JavaScript", "FFmpeg", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://playtube.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/playtube",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/playtube/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Scaleboard",
      href: "https://scaleboard.org",
      dates: "",
      active: true,
      description:
        "An all-in-one platform for indie hackers and startup founders to showcase projects, track metrics with verified analytics, and build in public with full transparency and customization options.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Stripe API",
      ],
      links: [
        {
          type: "Website",
          href: "https://scaleboard.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/scaleboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/scaleboard/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "PeerDrop",
      href: "https://peerdrop.pages.dev/",
      dates: "",
      active: true,
      description:
        "A privacy-focused, peer-to-peer file sharing app that enables secure, serverless file transfers. Files are end-to-end encrypted via WebRTC and never touch any third-party server.",
      technologies: ["WebRTC", "JavaScript", "Socket.io", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://peerdrop.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/peerdrop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/peerdrop/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "GitProxy",
      href: "https://gitproxy.pages.dev",
      dates: "",
      active: true,
      description:
        "A service that allows downloading GitHub repositories, releases, and files without revealing the actual repository links, providing an additional layer of security and privacy for distributing code.",
      technologies: [
        "JavaScript",
        "Node.js",
        "GitHub API",
        "Encryption",
        "Cloudflare Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://gitproxy.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/gitproxy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/gitproxy/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Image BG Remover",
      href: "https://bg-rem.streamlit.app/",
      dates: "",
      active: true,
      description:
        "A web application that removes backgrounds from images using OpenCV's segmentation methods, featuring an intuitive interface for uploading, processing, and downloading images with transparent backgrounds.",
      technologies: [
        "Python",
        "OpenCV",
        "Streamlit",
        "NumPy",
        "Image Processing",
      ],
      links: [
        {
          type: "Website",
          href: "https://bg-rem.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/image-bg-remover",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/image-bg-remover/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "DevArt React",
      href: "https://devart-react.pages.dev/",
      dates: "",
      active: true,
      description:
        "A modern blog and content platform built with React that integrates with the Dev.to API to display programming articles and tutorials in a clean, responsive interface.",
      technologies: ["React", "Vite", "Dev.to API", "JavaScript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://devart-react.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/devart-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/devart-react/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Waitlist.js",
      href: "https://waitlist-js.vercel.app/",
      dates: "",
      active: true,
      description:
        "A SaaS platform that transforms traditional waitlists into growth engines by combining AI-powered engagement, viral referral systems, and psychological triggers to help businesses build anticipation and maximize conversions.",
      technologies: ["TypeScript", "JavaScript", "React", "API", "Analytics"],
      links: [
        {
          type: "Website",
          href: "https://waitlist-js.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/waitlist.js",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/waitlist.js/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "TubeSonic",
      href: "https://github.com/SH20RAJ/TubeSonic/releases",
      dates: "",
      active: true,
      description:
        "A lightweight, blazing-fast desktop app built with Tauri and React that lets you download YouTube videos and audio in various quality options with a beautiful glass morphism UI design.",
      technologies: [
        "Tauri",
        "React",
        "Rust",
        "yt-dlp",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/SH20RAJ/TubeSonic/releases",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/TubeSonic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/TubeSonic/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "NoMouse",
      href: "https://github.com/SH20RAJ/nomouse",
      dates: "",
      active: true,
      description: "Keyboard-only navigation tool for desktop",
      technologies: ["Electron", "JavaScript", "Accessibility"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/nomouse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/nomouse.jpg",
      video: "",
    },
    {
      title: "SopPlayer",
      href: "https://sh20raj.github.io/Sopplayer/",
      dates: "",
      active: true,
      description:
        "A sleek and feature-rich HTML5 video player that enhances the visual experience of videos on web pages. Offers compatibility across devices and browsers with intuitive controls and customizable options.",
      technologies: ["JavaScript", "HTML5 Video", "CSS", "Media API"],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/Sopplayer/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/Sopplayer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/Sopplayer/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "SoundWave",
      href: "https://sh20raj.github.io/soundwave/",
      dates: "",
      active: true,
      description:
        "A modern and customizable HTML5 audio player library with advanced features including waveform visualization, volume/speed controls, loop functionality, and theming support for creating sleek audio experiences.",
      technologies: ["JavaScript", "Web Audio API", "HTML5", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/soundwave/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/soundwave",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/soundwave/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Vibly",
      href: "https://sh20raj.github.io/vibly/",
      dates: "",
      active: true,
      description:
        "A fully customizable video player built on top of Video.js with enhanced features and a modern UI. Features include responsive design, customizable themes, streaming support, accessibility features, and framework compatibility with React, Vue, and Angular.",
      technologies: [
        "JavaScript",
        "SCSS",
        "Video.js",
        "Media APIs",
        "Streaming",
      ],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/vibly/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/vibly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/vibly/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "MarkMind Editor",
      href: "https://npmjs.com/package/markmind-editor",
      dates: "",
      active: true,
      description:
        "A Notion-style WYSIWYG editor with AI-powered autocompletion built on Tiptap. Includes rich text editing with Markdown support, slash commands, bubble menus for formatting, image handling, tables support, and a customizable UI with themes.",
      technologies: [
        "TypeScript",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://npmjs.com/package/markmind-editor",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/markmind-editor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/markmind-editor/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "SteamLit",
      href: "https://sh20raj.github.io/steamlit/",
      dates: "",
      active: true,
      description:
        "A lightweight Node.js framework for building reactive, data-driven web applications with minimal effort. Features include reactive components, easy API, data visualization tools, and customizable extensions.",
      technologies: [
        "JavaScript",
        "Node.js",
        "Web Components",
        "Data Visualization",
      ],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/steamlit/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/steamlit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/steamlit/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "OctoPress",
      href: "https://octopress.netlify.app",
      dates: "",
      active: true,
      description:
        "A modern blogging platform that turns GitHub Issues into a CMS for your blog, featuring a beautiful UI with dark mode, SEO optimization, and customizable settings through a simple configuration file.",
      technologies: ["Next.js", "GitHub API", "React", "JavaScript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://octopress.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/OctoPress",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/OctoPress/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "YouTube Remote Uploader",
      href: "https://github.com/SH20RAJ/youtube-remote-uploader/releases",
      dates: "",
      active: true,
      description:
        "A tool that automates downloading videos from remote URLs and uploading them to YouTube using the Data API. Perfect for batch processing and scheduled uploads using GitHub Actions with comprehensive metadata management.",
      technologies: [
        "Python",
        "YouTube API",
        "GitHub Actions",
        "Automation",
        "Batch Processing",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/SH20RAJ/youtube-remote-uploader/releases",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/youtube-remote-uploader",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/youtube-remote-uploader/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Sequence Game",
      href: "https://sequence.pages.dev/",
      dates: "",
      active: true,
      description:
        "A beautiful online multiplayer Sequence card game designed specifically for couples, featuring a love-themed design with hearts, pink colors, and special animations. Includes real-time gameplay, room creation, and persistence with MongoDB.",
      technologies: [
        "TypeScript",
        "JavaScript",
        "Next.js",
        "MongoDB",
        "Socket.io",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://sequence.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/sequence-game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/sequence-game/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "SopGame",
      href: "https://sopgame.pages.dev/",
      dates: "",
      active: true,
      description:
        "A modern HTML5 game development framework built on Next.js that streamlines the creation of browser-based games. Features include a flexible game loop, asset management, physics integration, and responsive design for cross-platform gameplay.",
      technologies: [
        "JavaScript",
        "CSS",
        "Next.js",
        "Game Development",
        "Canvas API",
      ],
      links: [
        {
          type: "Website",
          href: "https://sopgame.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/sopgame",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/sopgame/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "CodeSeek",
      href: "https://marketplace.visualstudio.com/items?itemName=sh20raj.codeseek-shade",
      dates: "",
      active: true,
      description:
        "AI-powered coding assistant for VS Code with DeepSeek integration. Features intelligent code completion, chat assistance, name suggestions, and README generation for a supercharged coding workflow.",
      technologies: ["JavaScript", "VS Code API", "DeepSeek AI", "Extensions"],
      links: [
        {
          type: "Website",
          href: "https://marketplace.visualstudio.com/items?itemName=sh20raj.codeseek-shade",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/CodeSeek",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/CodeSeek/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Toggle Search Engine",
      href: "https://sh20raj.github.io/toggle-search-engine/",
      dates: "",
      active: true,
      description:
        "A powerful Chrome extension that allows you to seamlessly toggle between popular search engines such as Google, Bing, DuckDuckGo, Yahoo, Baidu, and Yandex without leaving your current tab, enhancing browsing efficiency.",
      technologies: [
        "JavaScript",
        "HTML",
        "Chrome Extension API",
        "Browser APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/toggle-search-engine/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/toggle-search-engine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/toggle-search-engine/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "SafeStore",
      href: "https://www.npmjs.com/package/@sh20raj/safestore",
      dates: "",
      active: true,
      description:
        "An advanced client-side storage library with AES-256 encryption for secure data storage in web applications. Features include automatic encryption/decryption, configurable security options, and support for various storage types.",
      technologies: [
        "JavaScript",
        "Cryptography",
        "LocalStorage",
        "Web Security",
        "IndexedDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@sh20raj/safestore",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/SafeStore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/SafeStore/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Create TanStack App",
      href: "https://www.npmjs.com/package/create-tanstack-app",
      dates: "",
      active: true,
      description:
        "A powerful CLI tool for instantly setting up fully configured TanStack projects with React Query, React Router, and TanStack Table. Features include template selection, TypeScript/JavaScript options, and automatic dependency installation.",
      technologies: [
        "JavaScript",
        "Node.js",
        "CLI Tools",
        "TanStack",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/create-tanstack-app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/create-tanstack-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/create-tanstack-app/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Create-GI",
      href: "https://www.npmjs.com/package/create-gi",
      dates: "",
      active: true,
      description:
        "An innovative tool for generating beautiful, interactive documentation websites directly from GitHub repositories. Features automatic README parsing, code highlighting, responsive design, and customization options.",
      technologies: [
        "JavaScript",
        "Markdown",
        "GitHub API",
        "Documentation",
        "Static Site Generation",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/create-gi",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/create-gi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/create-gi/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "BitPlayer",
      href: "https://sh20raj.github.io/bitplayer/",
      dates: "",
      active: true,
      description:
        "A lightweight yet feature-rich audio player library for web applications with a customizable UI and advanced features like waveform visualization, playlist management, and audio effects processing.",
      technologies: ["JavaScript", "Web Audio API", "HTML5", "CSS", "Canvas"],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/bitplayer/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/bitplayer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/bitplayer/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "SheetFlow",
      href: "https://www.npmjs.com/package/sheetflow",
      dates: "",
      active: true,
      description:
        "A powerful JavaScript library for working with spreadsheet data that makes parsing, manipulating, and visualizing spreadsheet data effortless. Features include formula support, cell styling, and data binding.",
      technologies: [
        "JavaScript",
        "Data Manipulation",
        "Spreadsheets",
        "Data Visualization",
        "CSV/Excel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/sheetflow",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/SheetFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/SheetFlow/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Sanskrit",
      href: "https://www.npmjs.com/package/@sh20raj/sanskrit",
      dates: "",
      active: true,
      description:
        "A comprehensive JavaScript library for Sanskrit text processing and transliteration with support for Devanagari to Latin conversions, grammatical analysis, and sandhi rules. Perfect for Sanskrit educational tools and research.",
      technologies: [
        "JavaScript",
        "NLP",
        "Linguistics",
        "Transliteration",
        "Unicode",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@sh20raj/sanskrit",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/sanskrit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/sanskrit/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "AuraAI",
      href: "https://sh20raj.github.io/AuraAI/",
      dates: "",
      active: true,
      description:
        "A next-generation smart keyboard app built with React Native and Expo, featuring AI-powered text prediction, multiple themes, customization options, and haptic feedback for an enhanced typing experience.",
      technologies: ["React Native", "Expo", "AI", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/AuraAI/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/AuraAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/AuraAI/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "OpenDictionaryAPI",
      href: "https://api.dictionaryapi.dev/",
      dates: "",
      active: true,
      description:
        "A free, open-source dictionary API that aggregates data from multiple reputable sources, providing comprehensive word definitions, examples, etymology, synonyms, and translations in a clean, consistent format.",
      technologies: [
        "JavaScript",
        "Node.js",
        "Web Scraping",
        "API Development",
        "Data Aggregation",
      ],
      links: [
        {
          type: "Website",
          href: "https://api.dictionaryapi.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/OpenDictionaryAPI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/OpenDictionaryAPI/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "AISanta",
      href: "https://aisanta.pages.dev",
      dates: "",
      active: true,
      description:
        "An AI-powered holiday gift recommendation system that uses machine learning to suggest personalized gift ideas based on recipient interests, relationship, budget, and past preferences with curated product links.",
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "Web Scraping",
        "Recommendation Systems",
      ],
      links: [
        {
          type: "Website",
          href: "https://aisanta.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/aisanta",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/aisanta/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "Instagram Downloader Web",
      href: "https://insta-dl.pages.dev",
      dates: "",
      active: true,
      description:
        "A web-based tool for downloading photos, videos, reels, and stories from Instagram. Features a clean interface, batch downloading capabilities, and no login requirements for user privacy.",
      technologies: [
        "JavaScript",
        "Instagram API",
        "Media Processing",
        "Browser APIs",
        "Web APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://insta-dl.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/instagram-downloader-web",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/instagram-downloader-web/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "PHPGram",
      href: "https://phpgram.pages.dev",
      dates: "",
      active: true,
      description:
        "A complete Instagram-like social media platform built with PHP that features user profiles, photo/video uploads, filters, comments, likes, direct messaging, stories, and hashtag functionality with responsive design.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "AJAX",
        "Bootstrap",
        "Media Processing",
      ],
      links: [
        {
          type: "Website",
          href: "https://phpgram.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/phpgram",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/phpgram/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
    {
      title: "AppPages",
      href: "https://sh20raj.github.io/AppPages/",
      dates: "",
      active: true,
      description:
        "A lightweight PHP framework for rapid application development that streamlines web application creation with an intuitive MVC architecture, built-in templating, database abstraction, and security features.",
      technologies: ["PHP", "MVC", "MySQL", "Templating", "Web Development"],
      links: [
        {
          type: "Website",
          href: "https://sh20raj.github.io/AppPages/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SH20RAJ/AppPages",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://socialify.git.ci/SH20RAJ/AppPages/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AICTE Productization Fellowship (APF) 2025",
      dates: "May - July 2025",
      location: "Ranchi, Jharkhand",
      description:
        "Shortlisted in Round 1 (Top 500 across India). Developed Kishan AI, an AI-powered Telegram Assistant for farmers. #APF2025 #YUKTI2025 #AICTE #Innovation #Agritech #FarmTech #AI #BITMesra #CSE #Productization #IIC #StudentInnovator #KishanAI #MoE #StartupIndia",
      image:
        "https://pbs.twimg.com/profile_images/1633400336214302720/0p534a6e_400x400.jpg",
      links: [],
    },
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/healthcp-kh99pw",
        },
      ],
    },
  ],
} as const;
