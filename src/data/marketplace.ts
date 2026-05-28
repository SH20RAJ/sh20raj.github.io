// Marketplace products. Used both on /marketplace and on cross-sell strips
// (home, /services). Edit prices/URLs/images here once.

export interface MarketplaceProduct {
  name: string;
  price: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const marketplaceProducts: MarketplaceProduct[] = [
  {
    name: "XORA – AI SaaS Landing Page Template",
    price: "$10+",
    description: "Stunning, modern, responsive AI SaaS landing page template. Pay what you want.",
    url: "https://sh20raj.gumroad.com/l/rrniov",
    image: "https://public-files.gumroad.com/usds0aocmk7gfjyymbkl9rq2dr5l",
    tags: ["Next.js", "AI", "SaaS"],
    featured: true,
  },
  {
    name: "The Psychology of SaaS",
    price: "$25",
    description: "Build addictive, billion-dollar products with behavioral science. eBook.",
    url: "https://sh20raj.gumroad.com/l/ucggab",
    image: "https://public-files.gumroad.com/y20zt152buqwcre6bokew56s8r2l",
    tags: ["eBook", "SaaS", "Psychology"],
  },
  {
    name: "SearchFolio – Google-Style Portfolio",
    price: "$17+",
    description: "The ultimate Google-style portfolio template. Pay what you want.",
    url: "https://sh20raj.gumroad.com/l/fcdfo",
    image: "https://public-files.gumroad.com/h8nwwscdx5wh7tpv0og4zq3agl84",
    tags: ["Portfolio", "Template", "React"],
    featured: true,
  },
  {
    name: "30-Day Digital Product Launch Kit",
    price: "$29",
    description: "Complete launch playbook for digital products — strategy, copy, and timeline.",
    url: "https://sh20raj.gumroad.com/l/ivlko",
    image: "https://public-files.gumroad.com/eh8t8cxvdibqy083kz628vt5wax0",
    tags: ["Launch", "Strategy", "Kit"],
  },
  {
    name: "Claude Code Agent Pack",
    price: "$18",
    description: "100+ AI developer workflows for Claude Code. Copy-paste automation.",
    url: "https://sh20raj.gumroad.com/l/cwogj",
    image: "https://public-files.gumroad.com/4ijtybspdtm1a81xi97rbuc0qcay",
    tags: ["AI", "Claude", "Workflows"],
    featured: true,
  },
];

export const featuredMarketplaceProducts = () =>
  marketplaceProducts.filter((p) => p.featured).slice(0, 3);
