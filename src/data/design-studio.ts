// Replace these placeholder image URLs with final uploaded design image URLs.

export interface DesignSample {
  title: string;
  niche: string;
  type: string;
  imageUrl: string;
  alt: string;
  tags: string[];
}

export interface DesignPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface DesignCategory {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  audience: string[];
  startingPrice: string;
  turnaround: string;
  deliverables: string[];
  samples: DesignSample[];
  packages: DesignPackage[];
  faqs: { question: string; answer: string }[];
}

export const designStudioCategories: DesignCategory[] = [
  {
    slug: "restaurant-posters",
    title: "Restaurant & Cafe Poster Design",
    shortTitle: "Restaurant Posters",
    description:
      "Premium posters, food promos, offer creatives, cafe announcements, and print/social-ready visuals for restaurants, cafes, cloud kitchens, and food brands.",
    audience: [
      "Restaurants and cafes launching new menu items",
      "Cloud kitchens running weekend offers",
      "Food brands needing social media creatives",
      "Cafes announcing events or live music nights",
    ],
    startingPrice: "₹499/design",
    turnaround: "24–48 hours",
    deliverables: [
      "High-resolution poster (1080x1350 / A4 / custom)",
      "Social media optimized versions",
      "Print-ready PDF export",
      "Editable source file (on request)",
      "Brand color and font matching",
    ],
    samples: [
      {
        title: "Weekend Biryani Fest Poster",
        niche: "Cloud Kitchen",
        type: "Offer Poster",
        imageUrl: "/images/design-studio/restaurant-poster-1.jpg",
        alt: "Restaurant offer poster for weekend biryani festival",
        tags: ["food", "offer", "poster"],
      },
      {
        title: "Cafe Live Music Night",
        niche: "Cafe",
        type: "Event Poster",
        imageUrl: "/images/design-studio/restaurant-poster-2.jpg",
        alt: "Cafe event poster for live music night",
        tags: ["cafe", "event", "music"],
      },
      {
        title: "New Menu Launch Creative",
        niche: "Fine Dining",
        type: "Social Media",
        imageUrl: "/images/design-studio/restaurant-poster-3.jpg",
        alt: "Social media creative for new restaurant menu launch",
        tags: ["menu", "launch", "social"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹499",
        description: "1–2 designs for quick promos.",
        features: [
          "1–2 poster designs",
          "1 revision",
          "PNG/JPG export",
          "Social media sizes",
          "24-hour delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹1,999",
        description: "5–8 designs for a full campaign.",
        features: [
          "5–8 poster designs",
          "2 revisions each",
          "Social + print-ready exports",
          "Consistent brand style",
          "48-hour delivery",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹4,999",
        description: "10+ designs with brand direction.",
        features: [
          "10+ poster designs",
          "Brand direction document",
          "Multiple formats (social, print, story)",
          "Priority delivery",
          "Source files included",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. All designs are yours to use for commercial purposes — social media, print, ads, menus, and more.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Yes. I deliver both print-ready (PDF, A4, custom sizes) and social media optimized (Instagram, WhatsApp, Facebook) versions.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Yes. Share your logo, brand colors, and font preferences, and I'll match your existing visual identity.",
      },
      {
        question: "How fast can you deliver?",
        answer:
          "Single designs are delivered within 24 hours. Packs take 2–3 days depending on the number of designs.",
      },
    ],
  },
  {
    slug: "beauty-product-designs",
    title: "Beauty & Skincare Product Creatives",
    shortTitle: "Beauty Products",
    description:
      "Clean, premium creatives for skincare, cosmetics, salons, beauty products, wellness brands, and D2C product launches.",
    audience: [
      "D2C skincare and cosmetics brands",
      "Salons and wellness studios",
      "Beauty influencers launching products",
      "Wellness brands running social campaigns",
    ],
    startingPrice: "₹799/design",
    turnaround: "24–48 hours",
    deliverables: [
      "Product showcase creatives",
      "Social media post designs",
      "Story and reel cover designs",
      "Offer and launch announcement graphics",
      "High-resolution exports (PNG/JPG)",
    ],
    samples: [
      {
        title: "Serum Launch Creative",
        niche: "Skincare D2C",
        type: "Product Launch",
        imageUrl: "/images/design-studio/beauty-product-1.jpg",
        alt: "Premium skincare serum launch social media creative",
        tags: ["skincare", "launch", "product"],
      },
      {
        title: "Salon Offer Banner",
        niche: "Beauty Salon",
        type: "Offer Banner",
        imageUrl: "/images/design-studio/beauty-product-2.jpg",
        alt: "Beauty salon discount offer banner design",
        tags: ["salon", "offer", "banner"],
      },
      {
        title: "Lipstick Range Showcase",
        niche: "Cosmetics",
        type: "Product Showcase",
        imageUrl: "/images/design-studio/beauty-product-3.jpg",
        alt: "Cosmetics product range showcase creative",
        tags: ["cosmetics", "showcase", "social"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹799",
        description: "1–2 product creatives.",
        features: [
          "1–2 product designs",
          "1 revision",
          "PNG/JPG export",
          "Instagram-ready sizes",
          "24-hour delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹2,999",
        description: "5–8 creatives for a product launch.",
        features: [
          "5–8 product creatives",
          "2 revisions each",
          "Social + story formats",
          "Consistent brand style",
          "48-hour delivery",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹6,999",
        description: "10+ designs with brand direction.",
        features: [
          "10+ product creatives",
          "Brand moodboard",
          "Multiple formats",
          "Priority delivery",
          "Source files included",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. All designs are yours for commercial use — social media, ads, packaging, websites, and marketplaces.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Yes. I deliver social-optimized creatives and print-ready files for packaging, banners, and ads.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Absolutely. Share your brand kit, product photos, and style references, and I'll match your visual identity.",
      },
      {
        question: "Do you create designs for salons and wellness brands?",
        answer:
          "Yes. I design for salons, spas, wellness brands, skincare lines, cosmetics, and D2C product businesses.",
      },
    ],
  },
  {
    slug: "brand-kits",
    title: "Brand Identity Kits",
    shortTitle: "Brand Kits",
    description:
      "Logo direction, color palette, typography pairing, social templates, brand moodboard, and basic visual identity for new brands.",
    audience: [
      "New startups building their first brand",
      "Solo founders who need a visual identity",
      "Small businesses rebranding",
      "Creators building a personal brand",
    ],
    startingPrice: "₹4,999/kit",
    turnaround: "3–5 days",
    deliverables: [
      "Logo direction and concepts",
      "Color palette with hex codes",
      "Typography pairing recommendations",
      "Brand moodboard",
      "Social media template set",
      "Brand guidelines document (PDF)",
    ],
    samples: [
      {
        title: "SaaS Startup Brand Kit",
        niche: "Tech Startup",
        type: "Brand Identity",
        imageUrl: "/images/design-studio/brand-kit-1.jpg",
        alt: "SaaS startup brand identity kit with logo, colors, and typography",
        tags: ["startup", "saas", "brand"],
      },
      {
        title: "D2C Food Brand Identity",
        niche: "Food Brand",
        type: "Brand Kit",
        imageUrl: "/images/design-studio/brand-kit-2.jpg",
        alt: "D2C food brand identity kit with packaging mockups",
        tags: ["food", "d2c", "identity"],
      },
      {
        title: "Personal Brand Kit",
        niche: "Creator",
        type: "Personal Branding",
        imageUrl: "/images/design-studio/brand-kit-3.jpg",
        alt: "Personal brand identity kit for content creator",
        tags: ["personal", "creator", "brand"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹4,999",
        description: "Basic brand direction for new brands.",
        features: [
          "Logo direction (2 concepts)",
          "Color palette",
          "Typography pairing",
          "Brand moodboard",
          "1 revision round",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹9,999",
        description: "Full brand kit with social templates.",
        features: [
          "Logo direction (3 concepts)",
          "Full color system",
          "Typography system",
          "Brand moodboard",
          "Social media templates (5)",
          "Brand guidelines PDF",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹19,999",
        description: "Complete brand system for launches.",
        features: [
          "Logo direction (5 concepts)",
          "Complete brand system",
          "Social template set (10+)",
          "Business card design",
          "Letterhead design",
          "Brand guidelines document",
          "Priority delivery",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. The entire brand kit is yours — logos, templates, colors, and guidelines can be used across all channels.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Yes. The brand kit includes both digital assets (social, web) and print-ready files (cards, letterheads).",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "If you already have some brand elements, I'll build on them. If you're starting fresh, I'll create everything from scratch.",
      },
      {
        question: "How fast can you deliver?",
        answer:
          "Basic kits take 3–5 days. Full brand systems take 5–7 days. Rush delivery is available for an additional fee.",
      },
    ],
  },
  {
    slug: "social-media-posts",
    title: "Social Media Creative Packs",
    shortTitle: "Social Media Packs",
    description:
      "Ready-to-post Instagram, LinkedIn, Facebook, and WhatsApp creatives for brands that need consistent content.",
    audience: [
      "Brands posting daily on Instagram and LinkedIn",
      "Startups running social media campaigns",
      "Agencies managing multiple client accounts",
      "Creators who need consistent visual content",
    ],
    startingPrice: "₹1,999/pack",
    turnaround: "2–3 days",
    deliverables: [
      "Instagram post designs (feed + story)",
      "LinkedIn post creatives",
      "Facebook and WhatsApp visuals",
      "Carousel designs",
      "Consistent brand styling across all posts",
    ],
    samples: [
      {
        title: "Instagram Carousel Pack",
        niche: "SaaS",
        type: "Carousel",
        imageUrl: "/images/design-studio/social-media-1.jpg",
        alt: "Instagram carousel design pack for SaaS brand",
        tags: ["instagram", "carousel", "saas"],
      },
      {
        title: "LinkedIn Thought Leadership Posts",
        niche: "B2B",
        type: "LinkedIn",
        imageUrl: "/images/design-studio/social-media-2.jpg",
        alt: "LinkedIn thought leadership post design templates",
        tags: ["linkedin", "b2b", "thought-leadership"],
      },
      {
        title: "Festival Greeting Pack",
        niche: "Brand",
        type: "Greetings",
        imageUrl: "/images/design-studio/social-media-3.jpg",
        alt: "Festival greeting social media post pack",
        tags: ["festival", "greetings", "social"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹1,999",
        description: "5 posts to get started.",
        features: [
          "5 social media designs",
          "1 revision each",
          "Instagram + story sizes",
          "PNG/JPG export",
          "3-day delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹4,999",
        description: "15 posts for a full month of content.",
        features: [
          "15 social media designs",
          "2 revisions each",
          "Multi-platform formats",
          "Carousel designs included",
          "Consistent brand style",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹9,999",
        description: "30+ posts with templates for reuse.",
        features: [
          "30+ social media designs",
          "Reusable template set",
          "All platform formats",
          "Brand direction",
          "Priority delivery",
          "Source files included",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. All social media creatives are yours for commercial use across any platform.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "The pack is optimized for social media, but I can also create print versions for any design you need.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Yes. Share your brand colors, fonts, and examples, and I'll create a consistent visual style.",
      },
      {
        question: "Can I request revisions?",
        answer:
          "Yes. Starter gets 1 revision per design, Growth gets 2, and Premium gets unlimited during the project.",
      },
    ],
  },
  {
    slug: "product-ads",
    title: "E-commerce Product Ad Design",
    shortTitle: "Product Ads",
    description:
      "High-converting product ads, marketplace banners, Shopify visuals, Amazon-style graphics, and offer creatives.",
    audience: [
      "E-commerce brands running Facebook and Instagram ads",
      "Amazon and Flipkart sellers needing A+ content",
      "Shopify store owners",
      "D2C brands running performance campaigns",
    ],
    startingPrice: "₹999/design",
    turnaround: "24–48 hours",
    deliverables: [
      "Product ad creatives (multiple sizes)",
      "Marketplace banner designs",
      "Offer and sale graphics",
      "A+ content visuals",
      "Social ad formats (Facebook, Instagram, Google)",
    ],
    samples: [
      {
        title: "Amazon A+ Content Design",
        niche: "E-commerce",
        type: "Marketplace",
        imageUrl: "/images/design-studio/product-ad-1.jpg",
        alt: "Amazon A+ content product showcase design",
        tags: ["amazon", "ecommerce", "a-plus"],
      },
      {
        title: "Facebook Ad Creative",
        niche: "D2C Brand",
        type: "Paid Ad",
        imageUrl: "/images/design-studio/product-ad-2.jpg",
        alt: "Facebook ad creative for D2C product",
        tags: ["facebook", "ad", "d2c"],
      },
      {
        title: "Flash Sale Banner",
        niche: "Retail",
        type: "Sale Banner",
        imageUrl: "/images/design-studio/product-ad-3.jpg",
        alt: "Flash sale promotional banner design",
        tags: ["sale", "banner", "retail"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹999",
        description: "1–2 ad creatives for quick campaigns.",
        features: [
          "1–2 ad designs",
          "1 revision",
          "Multiple ad sizes",
          "PNG/JPG export",
          "24-hour delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹3,999",
        description: "5–8 ads for a full campaign.",
        features: [
          "5–8 ad designs",
          "2 revisions each",
          "Multi-platform formats",
          "A/B test variations",
          "48-hour delivery",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹7,999",
        description: "15+ ads with marketplace assets.",
        features: [
          "15+ ad designs",
          "Marketplace banners",
          "A+ content designs",
          "Multiple formats",
          "Priority delivery",
          "Source files included",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. All ad designs are yours for commercial use — paid ads, marketplaces, websites, and social media.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Yes. I deliver digital ad formats and can also create print-ready versions for any design.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Yes. Share your product photos, brand assets, and I'll create ads that match your brand identity.",
      },
      {
        question: "How fast can you deliver?",
        answer:
          "Single ads are delivered within 24 hours. Campaign packs take 2–3 days depending on volume.",
      },
    ],
  },
  {
    slug: "youtube-thumbnails",
    title: "YouTube Thumbnail Design",
    shortTitle: "YouTube Thumbnails",
    description:
      "High-click YouTube thumbnails for tech, business, AI, education, tutorials, and creator videos.",
    audience: [
      "Tech YouTubers and developers",
      "Business and finance channels",
      "Education and tutorial creators",
      "AI and productivity content creators",
    ],
    startingPrice: "₹499/thumbnail",
    turnaround: "12–24 hours",
    deliverables: [
      "High-resolution 1280x720 thumbnails",
      "Psychology-driven visual layouts",
      "A/B test variations",
      "Text and face optimization",
      "PNG/JPG export",
    ],
    samples: [
      {
        title: "AI Tool Tutorial Thumbnail",
        niche: "Tech",
        type: "Tutorial",
        imageUrl: "/images/design-studio/youtube-thumb-1.jpg",
        alt: "YouTube thumbnail for AI tool tutorial video",
        tags: ["ai", "tech", "tutorial"],
      },
      {
        title: "Business Growth Video",
        niche: "Business",
        type: "Educational",
        imageUrl: "/images/design-studio/youtube-thumb-2.jpg",
        alt: "YouTube thumbnail for business growth educational video",
        tags: ["business", "growth", "education"],
      },
      {
        title: "Coding Tutorial Thumbnail",
        niche: "Developer",
        type: "Tutorial",
        imageUrl: "/images/design-studio/youtube-thumb-3.jpg",
        alt: "YouTube thumbnail for coding tutorial video",
        tags: ["coding", "developer", "tutorial"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹499",
        description: "1–2 thumbnails for quick uploads.",
        features: [
          "1–2 thumbnail designs",
          "1 revision",
          "1280x720 PNG export",
          "24-hour delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹1,999",
        description: "5–8 thumbnails for a month of videos.",
        features: [
          "5–8 thumbnail designs",
          "2 revisions each",
          "A/B test variations",
          "Consistent style",
          "48-hour delivery",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹4,999",
        description: "15+ thumbnails with brand template.",
        features: [
          "15+ thumbnail designs",
          "Brand template creation",
          "A/B test variations",
          "Priority delivery",
          "Source files included",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. Thumbnails are yours to use on YouTube, social media, and any platform.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Thumbnails are optimized for YouTube, but I can also create social media versions for sharing.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Yes. If you have an existing thumbnail style, I'll match it. If not, I'll create a new consistent style.",
      },
      {
        question: "How fast can you deliver?",
        answer:
          "Single thumbnails are delivered within 12–24 hours. Bulk orders take 2–3 days.",
      },
    ],
  },
  {
    slug: "event-posters",
    title: "Event & Festive Poster Design",
    shortTitle: "Event Posters",
    description:
      "Posters for college events, hackathons, webinars, workshops, festivals, parties, and local business campaigns.",
    audience: [
      "College clubs and student organizations",
      "Hackathon and tech event organizers",
      "Local businesses running campaigns",
      "Workshop and webinar hosts",
    ],
    startingPrice: "₹699/design",
    turnaround: "24–48 hours",
    deliverables: [
      "Event poster (custom dimensions)",
      "Social media optimized versions",
      "Print-ready export",
      "Story and status-sized versions",
      "Editable source file (on request)",
    ],
    samples: [
      {
        title: "College Tech Fest Poster",
        niche: "College Event",
        type: "Fest Poster",
        imageUrl: "/images/design-studio/event-poster-1.jpg",
        alt: "College tech fest event poster design",
        tags: ["college", "techfest", "event"],
      },
      {
        title: "Hackathon Announcement",
        niche: "Tech Community",
        type: "Hackathon",
        imageUrl: "/images/design-studio/event-poster-2.jpg",
        alt: "Hackathon event announcement poster",
        tags: ["hackathon", "tech", "community"],
      },
      {
        title: "Diwali Sale Poster",
        niche: "Local Business",
        type: "Festival Sale",
        imageUrl: "/images/design-studio/event-poster-3.jpg",
        alt: "Diwali festival sale promotional poster",
        tags: ["festival", "sale", "diwali"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹699",
        description: "1–2 posters for quick events.",
        features: [
          "1–2 poster designs",
          "1 revision",
          "Social + print sizes",
          "PNG/JPG export",
          "24-hour delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹2,499",
        description: "5–8 posters for a series of events.",
        features: [
          "5–8 poster designs",
          "2 revisions each",
          "Multi-format exports",
          "Consistent event branding",
          "48-hour delivery",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹5,999",
        description: "10+ posters with event brand kit.",
        features: [
          "10+ poster designs",
          "Event brand direction",
          "All formats (print, social, story)",
          "Priority delivery",
          "Source files included",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. All event posters are yours for commercial and non-commercial use.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Yes. I deliver both print-ready (A3, A4, custom) and social media (Instagram, WhatsApp, Facebook) versions.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Yes. Share your college club logo, event theme, or brand colors, and I'll match the style.",
      },
      {
        question: "Do you create designs for restaurants, salons, startups, and D2C brands?",
        answer:
          "Yes. I design event posters for any business type — restaurants, salons, startups, colleges, and local businesses.",
      },
    ],
  },
  {
    slug: "menu-designs",
    title: "Restaurant Menu Design",
    shortTitle: "Menu Designs",
    description:
      "Clean menu cards, QR menu visuals, food category layouts, offer inserts, and printable restaurant menu designs.",
    audience: [
      "Restaurants and cafes launching new menus",
      "Cloud kitchens needing digital menus",
      "Food courts and QSR chains",
      "Catering businesses",
    ],
    startingPrice: "₹1,999/menu",
    turnaround: "2–3 days",
    deliverables: [
      "Full menu card design (A4/A3/custom)",
      "QR code menu visual",
      "Food category layout",
      "Offer inserts and specials",
      "Print-ready PDF export",
    ],
    samples: [
      {
        title: "Cafe Menu Card",
        niche: "Cafe",
        type: "Menu Card",
        imageUrl: "/images/design-studio/menu-design-1.jpg",
        alt: "Cafe menu card design with food categories",
        tags: ["cafe", "menu", "food"],
      },
      {
        title: "QR Digital Menu",
        niche: "Restaurant",
        type: "Digital Menu",
        imageUrl: "/images/design-studio/menu-design-2.jpg",
        alt: "QR code digital menu design for restaurant",
        tags: ["qr", "digital", "restaurant"],
      },
      {
        title: "Pizza Menu Insert",
        niche: "Pizzeria",
        type: "Menu Insert",
        imageUrl: "/images/design-studio/menu-design-3.jpg",
        alt: "Pizza restaurant menu insert design",
        tags: ["pizza", "insert", "offer"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹1,999",
        description: "Single-page menu design.",
        features: [
          "1 menu card design (A4)",
          "2 revisions",
          "Print-ready PDF",
          "3-day delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹4,999",
        description: "Multi-page menu with QR version.",
        features: [
          "Multi-page menu design",
          "QR code menu visual",
          "Offer inserts (2)",
          "3 revisions",
          "Print + digital exports",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹9,999",
        description: "Complete menu system with brand kit.",
        features: [
          "Complete menu system",
          "QR digital menu",
          "Category layouts",
          "Offer inserts (5)",
          "Brand-matched design",
          "Source files included",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. Menu designs are yours for commercial use — print, digital, QR, and website.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Yes. I deliver print-ready menus and digital versions for QR codes, websites, and social media.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Yes. Share your restaurant logo, brand colors, and style preferences, and I'll match your identity.",
      },
      {
        question: "How fast can you deliver?",
        answer:
          "Single menus take 2–3 days. Complete menu systems take 4–5 days. Rush delivery is available.",
      },
    ],
  },
  {
    slug: "packaging-mockups",
    title: "Packaging & Label Mockups",
    shortTitle: "Packaging Mockups",
    description:
      "Product label concepts, packaging mockups, jar/bottle/box visuals, and D2C product presentation graphics.",
    audience: [
      "D2C brands launching physical products",
      "Food and beverage brands",
      "Cosmetics and skincare packaging",
      "Startup founders preparing for launch",
    ],
    startingPrice: "₹1,499/mockup",
    turnaround: "2–3 days",
    deliverables: [
      "Product label design concepts",
      "Packaging mockup visuals",
      "Jar/bottle/box presentations",
      "Multiple angle renders",
      "High-resolution exports",
    ],
    samples: [
      {
        title: "Protein Powder Jar Label",
        niche: "Health & Fitness",
        type: "Label Design",
        imageUrl: "/images/design-studio/packaging-1.jpg",
        alt: "Protein powder jar label and packaging mockup",
        tags: ["health", "fitness", "label"],
      },
      {
        title: "Coffee Bag Packaging",
        niche: "Food & Beverage",
        type: "Packaging",
        imageUrl: "/images/design-studio/packaging-2.jpg",
        alt: "Coffee bag packaging mockup design",
        tags: ["coffee", "food", "packaging"],
      },
      {
        title: "Skincare Box Design",
        niche: "Beauty",
        type: "Box Design",
        imageUrl: "/images/design-studio/packaging-3.jpg",
        alt: "Skincare product box packaging mockup",
        tags: ["skincare", "beauty", "box"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹1,499",
        description: "1 label concept with mockup.",
        features: [
          "1 label design",
          "1 mockup visual",
          "2 revisions",
          "High-res export",
          "3-day delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹4,999",
        description: "3–5 label concepts with mockups.",
        features: [
          "3–5 label designs",
          "Multiple mockup visuals",
          "2 revisions each",
          "Multi-angle renders",
          "Print-ready files",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹9,999",
        description: "Complete packaging system.",
        features: [
          "Full product line packaging",
          "Multiple mockup renders",
          "Brand-matched design",
          "Print-ready files",
          "Source files included",
          "Priority delivery",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. All packaging and label designs are yours for commercial production and marketing.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Yes. I deliver print-ready files for production and digital mockups for social media and websites.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Yes. Share your brand guidelines and product details, and I'll create packaging that matches your identity.",
      },
      {
        question: "How fast can you deliver?",
        answer:
          "Single labels take 2–3 days. Complete packaging systems take 5–7 days.",
      },
    ],
  },
  {
    slug: "startup-launch-kits",
    title: "Startup Launch Design Kit",
    shortTitle: "Launch Kits",
    description:
      "Product Hunt covers, launch banners, social announcement posts, pitch visuals, waitlist graphics, and founder launch assets.",
    audience: [
      "Founders preparing for Product Hunt launch",
      "Startups announcing funding or milestones",
      "Founders building waitlist campaigns",
      "Teams launching on social media",
    ],
    startingPrice: "₹7,999/kit",
    turnaround: "3–5 days",
    deliverables: [
      "Product Hunt cover and gallery images",
      "Launch announcement posts (social)",
      "Twitter/X launch thread visuals",
      "Waitlist landing page graphics",
      "Pitch deck visual assets",
      "Founder headshot and bio graphics",
    ],
    samples: [
      {
        title: "Product Hunt Launch Kit",
        niche: "SaaS",
        type: "Launch Kit",
        imageUrl: "/images/design-studio/launch-kit-1.jpg",
        alt: "Product Hunt launch design kit with cover and gallery",
        tags: ["product-hunt", "launch", "saas"],
      },
      {
        title: "Funding Announcement Pack",
        niche: "Startup",
        type: "Announcement",
        imageUrl: "/images/design-studio/launch-kit-2.jpg",
        alt: "Startup funding announcement social media pack",
        tags: ["funding", "announcement", "startup"],
      },
      {
        title: "Waitlist Campaign Graphics",
        niche: "Pre-launch",
        type: "Waitlist",
        imageUrl: "/images/design-studio/launch-kit-3.jpg",
        alt: "Waitlist campaign landing page and social graphics",
        tags: ["waitlist", "campaign", "prelaunch"],
      },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹7,999",
        description: "Basic launch kit for Product Hunt.",
        features: [
          "Product Hunt cover",
          "3 social announcement posts",
          "2 revisions",
          "PNG/JPG export",
          "3-day delivery",
        ],
      },
      {
        name: "Growth Pack",
        price: "₹14,999",
        description: "Full launch kit for multi-channel launch.",
        features: [
          "Product Hunt cover + gallery",
          "8 social announcement posts",
          "Twitter thread visuals",
          "Waitlist graphics",
          "3 revisions",
          "5-day delivery",
        ],
        recommended: true,
      },
      {
        name: "Premium Brand Pack",
        price: "₹24,999",
        description: "Complete launch system with brand assets.",
        features: [
          "Complete launch visual system",
          "15+ social assets",
          "Pitch deck visuals",
          "Founder brand assets",
          "All formats",
          "Priority delivery",
          "Source files included",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use the designs commercially?",
        answer:
          "Yes. All launch assets are yours for commercial use across any platform.",
      },
      {
        question: "Can you design for print and social media?",
        answer:
          "Yes. The kit includes digital assets for social, web, and Product Hunt, plus print-ready versions.",
      },
      {
        question: "Can you match my existing brand?",
        answer:
          "Yes. If you have a brand kit, I'll match it. If not, I'll create a cohesive visual direction for your launch.",
      },
      {
        question: "How fast can you deliver?",
        answer:
          "Basic kits take 3–5 days. Complete launch systems take 5–7 days. Rush delivery is available.",
      },
    ],
  },
];

export const designStudioPackages: DesignPackage[] = [
  {
    name: "Starter",
    price: "From ₹499",
    description: "1–2 designs for quick needs.",
    features: [
      "1–2 designs",
      "1 revision",
      "PNG/JPG export",
      "Best for quick posts",
    ],
  },
  {
    name: "Growth Pack",
    price: "From ₹1,999",
    description: "5–8 designs for campaigns.",
    features: [
      "5–8 designs",
      "2 revisions each",
      "Social + print-ready exports",
      "Best for campaigns",
    ],
    recommended: true,
  },
  {
    name: "Premium Brand Pack",
    price: "From ₹4,999",
    description: "10+ designs for launches.",
    features: [
      "10+ designs",
      "Brand direction",
      "Multiple formats",
      "Priority delivery",
      "Best for launches",
    ],
  },
];

export const designStudioFaqs = [
  {
    question: "Can I use the designs commercially?",
    answer:
      "Yes. All designs are yours to use for commercial purposes — social media, ads, websites, print, packaging, and more.",
  },
  {
    question: "Can you design for print and social media?",
    answer:
      "Yes. Every design is delivered in both social media optimized formats and print-ready exports.",
  },
  {
    question: "Can you match my existing brand?",
    answer:
      "Yes. Share your logo, brand colors, fonts, and style references, and I'll match your existing visual identity.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "Single designs are delivered within 24–48 hours. Packs and kits take 2–5 days depending on scope.",
  },
  {
    question: "Do you create designs for restaurants, salons, startups, and D2C brands?",
    answer:
      "Yes. I design for restaurants, cafes, salons, startups, D2C brands, e-commerce stores, creators, and local businesses.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. Starter packages include 1 revision, Growth packs include 2, and Premium packs include unlimited revisions during the project.",
  },
];

export const designStudioProcess = [
  {
    step: "01",
    title: "Brief",
    description:
      "Share your brand, target audience, design references, and what you need.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "I create initial concepts with clean, premium visuals matched to your brand.",
  },
  {
    step: "03",
    title: "Refine",
    description:
      "We review, give feedback, and polish the designs to perfection.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "I export all formats — social, print, source files — and hand off everything.",
  },
];
