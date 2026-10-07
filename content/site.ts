/* ─────────────────────────────────────────────────────────────
   EDIT THIS FILE. Everything on the site comes from here.
   Nothing below requires touching React or CSS.

   Every block except `name` is optional. To hide a section, DELETE
   its key outright — that always works. Setting a list to [] also
   works for the list-shaped blocks (bio, projects, links), but not
   for `now` or `recommendations`, which are objects.
   ───────────────────────────────────────────────────────────── */

/* Omit `href` to show the label with no destination yet — styled
   like a link, but inert until you add one. */
type Link = { label: string; href?: string };
type Recommendation = { name: string; href: string };
type Project = { name: string; href: string; blurb: string; year: string };

type Site = {
  name: string;
  tagline?: string;
  domain?: string;
  description?: string;
  bio?: readonly string[];
  now?: { updated: string; items: readonly string[] };
  projects?: readonly Project[];
  recommendations?: { heading: string; items: readonly Recommendation[] };
  links?: readonly Link[];
};

/* ── TEMP PLACEHOLDER ─────────────────────────────────────────
   Minimal holding page so the domain has something live. The
   real bio/projects content below is commented out, not
   deleted — uncomment and fill in when there's real content,
   then delete this block comment. ───────────────────────────── */
export const site: Site = {
  /* Your name, exactly as you want it rendered.
     Lowercase reads more casual; Title Case reads more formal. */
  name: "", // TODO

  /* Used for <title>, SEO, and social share cards. */
  domain: "kkon.org", // TODO
  description: "I enjoy technology that improves people's lives.", // TODO

  /* The opening paragraphs. Write like you'd text a friend who
     asked what you're up to. Each string is its own paragraph.
     Inline links use markdown syntax: [text](https://url)
  bio: [
    "Currently working on [Speekr](https://slp.speekr.app), prev. [Base Power](https://www.basepowercompany.com/)",
  ], */

  /* Footer contact links. Remove any you don't use. */
  links: [
    { label: "linkedin", href: "https://www.linkedin.com/in/kaustubhkondapalli/" },
    { label: "thoughts" }, // no href yet — not clickable
  ],
};

/* ── derived values ───────────────────────────────────────────
   Never undefined, so metadata and URLs stay well-formed even
   when an optional field above is blank or deleted.            */

/** Canonical origin, e.g. "https://kkon.org". */
export const siteUrl = `https://${site.domain ?? "example.com"}`;

/** "Name — tagline", or just "Name" when the tagline is blank. */
export const siteTitle = site.tagline?.trim()
  ? `${site.name} — ${site.tagline.trim()}`
  : site.name;
