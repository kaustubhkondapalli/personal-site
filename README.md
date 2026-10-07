# personal site

A minimal, text-first personal website in the spirit of
[sonith.org](https://sonith.org) and [corylevy.com](https://corylevy.com).
Next.js 16 (App Router) + Tailwind 4. Every page is statically generated.

## The only file you need to edit

**`content/site.ts`** holds all of your personal content — name, tagline, bio,
"now" list, projects, recommended links, and footer links. Placeholders are
marked `TODO`. Replace them and the site updates; you never need to touch React.

Set any list to `[]` to hide that section entirely.

Bio and "now" strings support inline markdown links: `[text](https://url)`.

## Writing essays

Drop a `.md` file into `content/writing/`. The filename becomes the URL slug
(`content/writing/on-focus.md` → `/writing/on-focus`).

```md
---
title: "On focus"
date: "2026-08-21"      # YYYY-MM-DD, sorts newest first
summary: "Optional one-liner shown on the index."
draft: false            # true = visible in dev, hidden in production
---

Your essay. Standard markdown: **bold**, [links](https://example.com),
lists, tables, blockquotes, and fenced code blocks are all styled.
```

The home page shows your five most recent essays; `/writing` shows all of them.
Delete `content/writing/hello.md` once you've written something real.

## Running it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Design

Colors live at the top of `app/globals.css` as four CSS variables
(`--background`, `--foreground`, `--muted`, `--rule`), defined once for light
and once for dark. Change those four and the whole site reskins. Dark mode
follows the visitor's OS setting.

Type is Newsreader (serif, body) and Inter (sans, labels and metadata), both
self-hosted at build time via `next/font` — no runtime requests to Google.

There is no favicon — browsers will show their default blank-page icon in the
tab. To add one, drop a `favicon.ico` (or `icon.png`/`icon.svg`) into `app/`
and Next will pick it up automatically.

## Deploying

```bash
npx vercel        # preview
npx vercel --prod # production
```

Then add your domain in the Vercel dashboard, and set `domain` in
`content/site.ts` to match — it feeds canonical URLs, the sitemap, and
social share cards.
