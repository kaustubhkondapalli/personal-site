import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = `https://${site.domain}`;
  const posts = await getPosts();

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/writing`, lastModified: new Date() },
    ...posts.map((p) => ({
      url: `${base}/writing/${p.slug}`,
      lastModified: p.iso ? new Date(p.iso) : new Date(),
    })),
  ];
}
