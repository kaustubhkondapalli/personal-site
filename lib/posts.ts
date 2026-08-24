import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

const DIR = path.join(process.cwd(), "content", "writing");

export type Post = {
  slug: string;
  title: string;
  date: string;
  /** ISO date, for <time> and sorting */
  iso: string;
  summary?: string;
  draft: boolean;
};

export type FullPost = Post & { html: string };

function formatDate(iso: string) {
  // Parse as UTC so the rendered date never shifts by timezone.
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

async function readDir() {
  try {
    return await fs.readdir(DIR);
  } catch {
    return [];
  }
}

export async function getPosts(): Promise<Post[]> {
  const files = (await readDir()).filter((f) => /\.mdx?$/.test(f));

  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(DIR, file), "utf8");
      const { data } = matter(raw);
      const iso = String(data.date ?? "");
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: String(data.title ?? file),
        iso,
        date: iso ? formatDate(iso) : "",
        summary: data.summary ? String(data.summary) : undefined,
        draft: data.draft === true,
      };
    }),
  );

  return posts
    .filter((p) => !p.draft || process.env.NODE_ENV === "development")
    .sort((a, b) => b.iso.localeCompare(a.iso));
}

export async function getPost(slug: string): Promise<FullPost | null> {
  // Guard against path traversal via the dynamic route segment.
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;

  const files = await readDir();
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;

  const raw = await fs.readFile(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);

  const html = String(
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: "wrap" })
      .use(rehypeStringify)
      .process(content),
  );

  const iso = String(data.date ?? "");
  return {
    slug,
    title: String(data.title ?? slug),
    iso,
    date: iso ? formatDate(iso) : "",
    summary: data.summary ? String(data.summary) : undefined,
    draft: data.draft === true,
    html,
  };
}
