import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
};

export default async function WritingIndex() {
  const posts = await getPosts();

  return (
    <>
      <p className="mb-10 font-sans text-[0.875rem] text-muted">
        <Link href="/">← back</Link>
      </p>

      <h1 className="text-[1.75rem] leading-tight tracking-[-0.01em]">
        writing
      </h1>

      {posts.length === 0 ? (
        <p className="mt-8 text-muted">
          Nothing published yet. Drop a <code>.md</code> file in{" "}
          <code>content/writing/</code> and it&rsquo;ll appear here.
        </p>
      ) : (
        <ul className="mt-10 space-y-7">
          {posts.map((post) => (
            <li key={post.slug}>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-[1.0625rem]">
                  <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                </h2>
                <time
                  dateTime={post.iso}
                  className="shrink-0 font-sans text-[0.8125rem] tabular-nums text-muted"
                >
                  {post.date}
                </time>
              </div>
              {post.summary && (
                <p className="mt-1 text-muted">{post.summary}</p>
              )}
              {post.draft && (
                <p className="mt-1 font-sans text-[0.75rem] uppercase tracking-[0.14em] text-muted">
                  draft — hidden in production
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
