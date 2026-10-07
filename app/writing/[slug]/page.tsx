import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, siteUrl } from "@/content/site";
import { getPost, getPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary ?? site.description,
    openGraph: {
      title: post.title,
      description: post.summary ?? site.description,
      type: "article",
      publishedTime: post.iso || undefined,
      url: `${siteUrl}/writing/${post.slug}`,
    },
  };
}

export default async function Post({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || (post.draft && process.env.NODE_ENV !== "development")) {
    notFound();
  }

  return (
    <article>
      <p className="mb-10 font-sans text-[0.875rem] text-muted">
        <Link href="/writing">← writing</Link>
      </p>

      <h1 className="text-[1.75rem] leading-tight tracking-[-0.01em]">
        {post.title}
      </h1>
      {post.date && (
        <time
          dateTime={post.iso}
          className="mt-2 block font-sans text-[0.8125rem] tabular-nums text-muted"
        >
          {post.date}
        </time>
      )}

      <div
        className="prose mt-10"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
