// Central monetization config.
// Fill these once you have the real IDs/URLs. Empty values = the corresponding
// CTAs are hidden everywhere automatically — never link to a 404.

export const monetization = {
  // Cal.com username + event slug. Example: "sh20raj/intro-15min"
  // Leave empty to hide all "Book a Call" CTAs.
  calcom: "sh20raj/intro-15min",

  // Web3Forms access key from https://web3forms.com (free).
  // Leave empty to hide the /hire form and home lead strip.
  web3formsAccessKey: "12ce3c25-1b14-404d-9f16-976d98a8e509",

  // Gumroad product page URLs for each sprint.
  // Leave individual values empty to hide just that "Buy Now" button.
  gumroad: {
    landingPage: "", // $199 — Landing Page Sprint
    saasFrontend: "", // $500 — SaaS Frontend Sprint
    aiTool: "", // $300 — AI Tool Prototype
    agencyOverflow: "", // monthly subscription — Agency Overflow Support
  },

  // Optional: links shown in the "Working with me" social-proof strip.
  socialProof: {
    linkedinRecommendations: "https://www.linkedin.com/in/sh20raj/details/recommendations/",
    github: "https://github.com/SH20RAJ",
    peerlist: "https://peerlist.io/sh20raj",
    productHunt: "https://www.producthunt.com/@sh20raj",
  },
} as const;

export const hasCalcom = () => Boolean(monetization.calcom);
export const hasWeb3Forms = () => Boolean(monetization.web3formsAccessKey);
export const hasGumroad = (key: keyof typeof monetization.gumroad) =>
  Boolean(monetization.gumroad[key]);

export const calcomEmbedUrl = () =>
  monetization.calcom ? `https://cal.com/${monetization.calcom}` : "";
