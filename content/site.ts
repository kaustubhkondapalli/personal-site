/* ─────────────────────────────────────────────────────────────
   EDIT THIS FILE. Everything on the site comes from here.
   Nothing below requires touching React or CSS.
   Placeholder text is marked with TODO — replace and delete.
   ───────────────────────────────────────────────────────────── */

export const site = {
  /* Your name, exactly as you want it rendered.
     Lowercase reads more casual; Title Case reads more formal. */
  name: "raj kaustubh", // TODO

  /* One line under your name. Who you are, in six words or fewer. */
  tagline: "founder, speekr", // TODO

  /* Used for <title>, SEO, and social share cards. */
  domain: "raj.example.com", // TODO
  description: "Personal site of raj kaustubh.", // TODO

  /* The opening paragraphs. Write like you'd text a friend who
     asked what you're up to. Each string is its own paragraph.
     Inline links use markdown syntax: [text](https://url) */
  bio: [
    "I'm building [Speekr](https://speekr.app). TODO — one sentence on what it actually does and who it's for.",
    "Before that, TODO — where you were, what you worked on, what you learned.",
    "On the side I TODO — the hobby, side project, or curiosity that makes you interesting at a dinner party.",
  ],

  /* "What I'm doing now" — short, current, dated.
     Set to [] to hide this section entirely. */
  now: {
    updated: "August 2026", // TODO
    items: [
      "Building Speekr full-time.", // TODO
      "Reading TODO.",
      "Looking to talk to TODO — reach out.",
    ],
  },

  /* Things you've built. Newest first.
     Set to [] to hide this section. */
  projects: [
    {
      name: "Speekr", // TODO
      href: "https://speekr.app",
      blurb: "TODO — what it is, in one clause.",
      year: "2025—",
    },
    {
      name: "TODO project two",
      href: "https://example.com",
      blurb: "TODO — what it is, in one clause.",
      year: "2024",
    },
  ],

  /* Links you want to point people at — other people's writing,
     publications you read, tools you love. Sonith calls his
     "publications i like". Set to [] to hide. */
  recommendations: {
    heading: "things i like",
    items: [
      { name: "TODO — a publication", href: "https://example.com" },
      { name: "TODO — a person's blog", href: "https://example.com" },
    ],
  },

  /* Footer contact links. Remove any you don't use. */
  links: [
    { label: "email", href: "mailto:raj@speekr.app" }, // TODO verify
    { label: "x", href: "https://x.com/TODO" },
    { label: "github", href: "https://github.com/TODO" },
    { label: "linkedin", href: "https://linkedin.com/in/TODO" },
  ],
} as const;
