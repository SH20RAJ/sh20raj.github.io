// Images sourced from AI-generated design samples.
// Local images in public/images/design-studio/ downloaded from OpenAI CDN.
// External URLs (sdmntprcentralindia.oaiusercontent.com) work in browsers but require auth for curl.

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
        title: "Weekend Biryani Feast",
        niche: "Indian Restaurant",
        type: "Offer Poster",
        imageUrl: "/images/design-studio/restaurant-poster-1.jpg",
        alt: "Premium Instagram poster for Spice Table biryani offer",
        tags: ["food", "offer", "instagram"],
      },
      {
        title: "Monsoon Chai Festival — Chai & Co.",
        niche: "Cafe",
        type: "Offer Poster",
        imageUrl: "/images/design-studio/monsoon-chai.jpg",
        alt: "Monsoon chai festival buy 1 get 1 free poster for Chai & Co cafe",
        tags: ["cafe", "chai", "offer"],
      },
      {
        title: "Chai & Co. — Buy 1 Get 1 Free",
        niche: "Cafe",
        type: "Promo Poster",
        imageUrl: "/images/design-studio/chai-co-promo.png",
        alt: "Premium chai cafe promotional poster with Maska Bun pair offer",
        tags: ["cafe", "promo", "bogo"],
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
        title: "Glow Naturally — Vitamin C Serum",
        niche: "Skincare D2C",
        type: "Product Ad",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-0ef0-7208-8352-c14d1fb43e68/raw?se=2026-05-19T03:12:49Z&sp=r&sv=2026-02-06&sr=b&scid=2b725a36-d63d-4deb-ac42-48713d3fadb7&skoid=4b04981f-b1dc-41e0-a770-8ce0d5c8f411&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:29:21Z&ske=2026-05-20T23:29:21Z&sks=b&skv=2026-02-06&sig=SfVOkwOfg2JC3CZlamUOhZfCJoJfcNkiUYSh1043dNk%3D",
        alt: "Luxury skincare serum ad for Glowra with soft pastel background",
        tags: ["skincare", "serum", "luxury"],
      },
      {
        title: "Hair Spa Weekend",
        niche: "Beauty Salon",
        type: "Salon Promo",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-eb14-7208-a012-b5cc8f47ad5f/raw?se=2026-05-19T03:12:50Z&sp=r&sv=2026-02-06&sr=b&scid=9313bbc2-9894-416e-998f-6662e62c5866&skoid=4b04981f-b1dc-41e0-a770-8ce0d5c8f411&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T22:48:37Z&ske=2026-05-20T22:48:37Z&sks=b&skv=2026-02-06&sig=nsG7yTnExZEsoeh8/iWd3xwibpC5TQQZmeBzhcsUXQI%3D",
        alt: "Elegant salon promotional poster for Aura Salon hair spa",
        tags: ["salon", "spa", "beauty"],
      },
      {
        title: "Brighter Smile — Dental Clinic",
        niche: "Healthcare",
        type: "Clinic Poster",
        imageUrl: "/images/design-studio/beauty-product-3.jpg",
        alt: "Clean healthcare poster for SmileCare Dental Clinic",
        tags: ["healthcare", "dental", "clean"],
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
        title: "CalmRoot — Wellness Brand Moodboard",
        niche: "Wellness",
        type: "Brand Identity",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-57e0-7208-a391-ba8e9018f47c/raw?se=2026-05-19T03:13:00Z&sp=r&sv=2026-02-06&sr=b&scid=44fd8868-8400-4e6c-9dc8-3a7a4a158561&skoid=2d2fbb03-9efb-4ad0-a91c-1db2f5a47997&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:14:53Z&ske=2026-05-20T23:14:53Z&sks=b&skv=2026-02-06&sig=aZXx6zLJkHW3LFkGGJ3s1B//mSFZZ/Z4FDxW//5fVDA%3D",
        alt: "Natural wellness brand moodboard for CalmRoot with earthy tones",
        tags: ["wellness", "moodboard", "organic"],
      },
      {
        title: "Build Before You're Ready — Book Cover",
        niche: "Author/Creator",
        type: "Book Cover",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-66dc-7208-9909-8d6270817acd/raw?se=2026-05-19T03:12:50Z&sp=r&sv=2026-02-06&sr=b&scid=dfebfbb3-fcf3-4fb4-9e64-c98e24d3ea21&skoid=4b04981f-b1dc-41e0-a770-8ce0d5c8f411&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:29:14Z&ske=2026-05-20T23:29:14Z&sks=b&skv=2026-02-06&sig=z2KdOMdHyBCKvpPCwF/ctWpzcCopLmg%2Ba05d53Nc2Z8%3D",
        alt: "Minimal bold book cover design for startup/business book",
        tags: ["book", "startup", "typography"],
      },
      {
        title: "IndexFast — SaaS Infographic",
        niche: "SaaS",
        type: "Infographic",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-27d8-7208-ae9c-be8432183b91/raw?se=2026-05-19T03:13:01Z&sp=r&sv=2026-02-06&sr=b&scid=ae761cc0-fdf2-4a71-9e78-f4209a8f2985&skoid=2d2fbb03-9efb-4ad0-a91c-1db2f5a47997&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:27:17Z&ske=2026-05-20T23:27:17Z&sks=b&skv=2026-02-06&sig=K5EJS0yDBfb2Dk89Jf%2BM6A5lImR1HTWfp%2B0YC8l2QMU%3D",
        alt: "Clean SaaS infographic showing automatic indexing process",
        tags: ["saas", "infographic", "linkedin"],
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
        title: "New Drop Is Live — Streetwear",
        niche: "Fashion",
        type: "Instagram Post",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-1db4-7208-ace4-ce253d550b02/raw?se=2026-05-19T03:12:49Z&sp=r&sv=2026-02-06&sr=b&scid=52130aad-a9cf-41bf-86a5-831224b9a83d&skoid=4b04981f-b1dc-41e0-a770-8ce0d5c8f411&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:16:00Z&ske=2026-05-20T23:16:00Z&sks=b&skv=2026-02-06&sig=XaOk/JHrJO0EKEszCKN2vPp7ATneGmHEOrl2grGCc38%3D",
        alt: "Bold streetwear fashion ad for Noir Street brand",
        tags: ["fashion", "streetwear", "instagram"],
      },
      {
        title: "Festive Collection Sale",
        niche: "Fashion Retail",
        type: "Festival Sale",
        imageUrl: "/images/design-studio/social-media-2.jpg",
        alt: "Indian festive sale poster for EthnicAura fashion store",
        tags: ["festival", "fashion", "sale"],
      },
      {
        title: "Track Money Smarter — SpendWise App",
        niche: "Fintech",
        type: "App Launch",
        imageUrl: "/images/design-studio/social-media-3.jpg",
        alt: "Clean fintech app launch poster for SpendWise",
        tags: ["fintech", "app", "launch"],
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
        title: "Bass That Moves You — SoundBeam Earbuds",
        niche: "Tech/E-commerce",
        type: "Product Ad",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-251c-7208-a0a7-1581317f93aa/raw?se=2026-05-19T03:12:48Z&sp=r&sv=2026-02-06&sr=b&scid=401f17c3-28b2-41f7-acb3-bb80503f9ceb&skoid=4b04981f-b1dc-41e0-a770-8ce0d5c8f411&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:28:54Z&ske=2026-05-20T23:28:54Z&sks=b&skv=2026-02-06&sig=K2ux8SkkpM4kBFGfe6sPGaMNCvL9IGSqfAkz9NA37Ls%3D",
        alt: "Premium tech product ad for SoundBeam wireless earbuds",
        tags: ["tech", "earbuds", "product"],
      },
      {
        title: "Luxury Apartments — Skyline Residences",
        niche: "Real Estate",
        type: "Promo Ad",
        imageUrl: "/images/design-studio/product-ad-2.jpg",
        alt: "Premium real estate promotional poster for luxury apartments",
        tags: ["realestate", "luxury", "promo"],
      },
      {
        title: "Brighter Smile — Dental Clinic",
        niche: "Healthcare",
        type: "Clinic Ad",
        imageUrl: "/images/design-studio/product-ad-3.jpg",
        alt: "Clean healthcare ad for SmileCare Dental Clinic",
        tags: ["healthcare", "dental", "clean"],
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
        title: "AI Memory Engine",
        niche: "Tech/AI",
        type: "Tutorial",
        imageUrl: "/images/design-studio/youtube-thumb-1.jpg",
        alt: "Futuristic YouTube thumbnail for AI memory engine tech video",
        tags: ["ai", "tech", "futuristic"],
      },
      {
        title: "Learn Full-Stack Web Development",
        niche: "EdTech",
        type: "Course Promo",
        imageUrl: "/images/design-studio/youtube-thumb-2.jpg",
        alt: "YouTube thumbnail for full-stack web development course",
        tags: ["coding", "education", "developer"],
      },
      {
        title: "Transform in 60 Days — Gym",
        niche: "Fitness",
        type: "Promo",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-dfd0-7208-8239-6b64f7594b66/raw?se=2026-05-19T03:13:25Z&sp=r&sv=2026-02-06&sr=b&scid=33938fc9-8052-4a19-8b88-dc1393b23312&skoid=c69179d1-5b5d-430f-afa3-b9bdcf9d6497&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:16:46Z&ske=2026-05-20T23:16:46Z&sks=b&skv=2026-02-06&sig=8M0D%2BlNbD6jR%2BTbU73a2G2u8mm6VCMPMxUr8wTzDUIc%3D",
        alt: "High-energy gym promotional thumbnail for IronCore Fitness",
        tags: ["fitness", "gym", "promo"],
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
        title: "HackSprint 2026 — College Hackathon",
        niche: "Tech Community",
        type: "Hackathon Poster",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-9230-7208-9e53-17cb20a14ef3/raw?se=2026-05-19T03:13:13Z&sp=r&sv=2026-02-06&sr=b&scid=f1a5e984-86b1-4fe2-95ca-ebaa31d12502&skoid=5e713cdb-766b-475e-a3ca-8adb6cf99aa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:21:27Z&ske=2026-05-20T23:21:27Z&sks=b&skv=2026-02-06&sig=17oBIV0pHVx4lH2%2B9Vfg5awxcHpYOH9ehckY4VHUf9Q%3D",
        alt: "Futuristic tech hackathon event poster with neon accents",
        tags: ["hackathon", "tech", "college"],
      },
      {
        title: "Festive Collection Sale — EthnicAura",
        niche: "Fashion Retail",
        type: "Festival Sale",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-a4e8-7208-9b9b-c723096168ac/raw?se=2026-05-19T03:13:12Z&sp=r&sv=2026-02-06&sr=b&scid=c6f51dcd-38c4-4b54-95db-de5a81738fe8&skoid=5e713cdb-766b-475e-a3ca-8adb6cf99aa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:33:01Z&ske=2026-05-20T23:33:01Z&sks=b&skv=2026-02-06&sig=ZSTc6bTA3lpbYb1yNoMwmYj6KTc6Bm6wS%2BPSJRt45tQ%3D",
        alt: "Indian festive sale poster for EthnicAura fashion store",
        tags: ["festival", "fashion", "sale"],
      },
      {
        title: "Transform in 60 Days — IronCore Fitness",
        niche: "Fitness",
        type: "Gym Promo",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-dfd0-7208-8239-6b64f7594b66/raw?se=2026-05-19T03:13:25Z&sp=r&sv=2026-02-06&sr=b&scid=33938fc9-8052-4a19-8b88-dc1393b23312&skoid=c69179d1-5b5d-430f-afa3-b9bdcf9d6497&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:16:46Z&ske=2026-05-20T23:16:46Z&sks=b&skv=2026-02-06&sig=8M0D%2BlNbD6jR%2BTbU73a2G2u8mm6VCMPMxUr8wTzDUIc%3D",
        alt: "Bold gym promotional poster for IronCore Fitness",
        tags: ["gym", "fitness", "promo"],
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
        title: "Urban Tandoor — Indian Restaurant Menu",
        niche: "Indian Restaurant",
        type: "Menu Card",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-a0dc-7208-8106-3a66a01ff59c/raw?se=2026-05-19T03:13:03Z&sp=r&sv=2026-02-06&sr=b&scid=48d0c2b7-c490-468a-bac8-f3671ca12261&skoid=2d2fbb03-9efb-4ad0-a91c-1db2f5a47997&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:16:24Z&ske=2026-05-20T23:16:24Z&sks=b&skv=2026-02-06&sig=Xko8dbSHVWGHNT5CRnrIxw4pblkpSqXr%2BqJ263GS7Ow%3D",
        alt: "Premium Indian restaurant menu design for Urban Tandoor",
        tags: ["restaurant", "menu", "indian"],
      },
      {
        title: "Urban Tandoor — QR Menu",
        niche: "Restaurant",
        type: "Digital Menu",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-a0dc-7208-8106-3a66a01ff59c/raw?se=2026-05-19T03:13:03Z&sp=r&sv=2026-02-06&sr=b&scid=48d0c2b7-c490-468a-bac8-f3671ca12261&skoid=2d2fbb03-9efb-4ad0-a91c-1db2f5a47997&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:16:24Z&ske=2026-05-20T23:16:24Z&sks=b&skv=2026-02-06&sig=Xko8dbSHVWGHNT5CRnrIxw4pblkpSqXr%2BqJ263GS7Ow%3D",
        alt: "QR code digital menu design for restaurant",
        tags: ["qr", "digital", "menu"],
      },
      {
        title: "Urban Tandoor — Menu Insert",
        niche: "Restaurant",
        type: "Menu Insert",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-a0dc-7208-8106-3a66a01ff59c/raw?se=2026-05-19T03:13:03Z&sp=r&sv=2026-02-06&sr=b&scid=48d0c2b7-c490-468a-bac8-f3671ca12261&skoid=2d2fbb03-9efb-4ad0-a91c-1db2f5a47997&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:16:24Z&ske=2026-05-20T23:16:24Z&sks=b&skv=2026-02-06&sig=Xko8dbSHVWGHNT5CRnrIxw4pblkpSqXr%2BqJ263GS7Ow%3D",
        alt: "Restaurant menu insert with food categories",
        tags: ["menu", "insert", "food"],
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
        title: "PureMist — Hydrating Rose Face Mist",
        niche: "Skincare D2C",
        type: "Packaging Mockup",
        imageUrl: "/images/design-studio/packaging-1.jpg",
        alt: "Premium skincare packaging mockup for PureMist rose face mist",
        tags: ["skincare", "packaging", "d2c"],
      },
      {
        title: "PureMist — Bottle & Box Set",
        niche: "Beauty",
        type: "Product Presentation",
        imageUrl: "/images/design-studio/packaging-2.jpg",
        alt: "PureMist skincare bottle and box packaging presentation",
        tags: ["beauty", "bottle", "mockup"],
      },
      {
        title: "PureMist — Label Detail",
        niche: "Skincare",
        type: "Label Design",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-b1a8-7208-95ee-d788155087e1/raw?se=2026-05-19T03:13:37Z&sp=r&sv=2026-02-06&sr=b&scid=a341b846-6a03-45b7-9186-e60b98138d5f&skoid=80e81ea6-3c08-46f9-bd84-b87176742bcd&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:30:02Z&ske=2026-05-20T23:30:02Z&sks=b&skv=2026-02-06&sig=6Cdv31SLmjtq3OGZSTur1rnGd7XVtPOq6LuKFiL/ylY%3D",
        alt: "Close-up skincare label design for PureMist",
        tags: ["label", "skincare", "detail"],
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
        title: "TaskPilot — AI Task Manager Launch",
        niche: "SaaS",
        type: "Product Hunt Cover",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-fd68-7208-a421-42f14f611799/raw?se=2026-05-19T03:13:15Z&sp=r&sv=2026-02-06&sr=b&scid=7290afb5-487e-49a8-a51c-29122ebc8b14&skoid=5e713cdb-766b-475e-a3ca-8adb6cf99aa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:22:01Z&ske=2026-05-20T23:22:01Z&sks=b&skv=2026-02-06&sig=n7d5k2G3KN4iAwgUFk7sW06Zs4vAHclHZbzogUwSZOg%3D",
        alt: "YC-style Product Hunt launch cover for TaskPilot SaaS",
        tags: ["product-hunt", "saas", "launch"],
      },
      {
        title: "TaskPilot — Launch Banner",
        niche: "Startup",
        type: "X/Twitter Banner",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-fd68-7208-a421-42f14f611799/raw?se=2026-05-19T03:13:11Z&sp=r&sv=2026-02-06&sr=b&scid=501a794b-e304-46eb-89aa-dbaaf5b20054&skoid=5e713cdb-766b-475e-a3ca-8adb6cf99aa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:26:14Z&ske=2026-05-20T23:26:14Z&sks=b&skv=2026-02-06&sig=N7Osio9hiy0q/b4ZAAokyXlYxQMuVrIUwHWl5zQN7Fw%3D",
        alt: "Startup launch banner for TaskPilot AI task manager",
        tags: ["startup", "banner", "launch"],
      },
      {
        title: "TaskPilot — Social Announcement",
        niche: "Pre-launch",
        type: "Social Post",
        imageUrl: "https://sdmntprcentralindia.oaiusercontent.com/files/00000000-ab94-7208-9731-b39376e35245/raw?se=2026-05-19T03:13:11Z&sp=r&sv=2026-02-06&sr=b&scid=50f4332d-e732-4bb8-9a37-08e595620653&skoid=5e713cdb-766b-475e-a3ca-8adb6cf99aa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-05-18T23:25:21Z&ske=2026-05-20T23:25:21Z&sks=b&skv=2026-02-06&sig=U0CyxdyHTESlU6uzgE/eURmvZW9xIElTMc/eAFrgllI%3D",
        alt: "Social media announcement post for startup launch",
        tags: ["social", "announcement", "waitlist"],
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
