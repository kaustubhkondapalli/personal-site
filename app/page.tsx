import Link from "next/link";
import { site } from "@/content/site";
import { getPosts } from "@/lib/posts";
import { Inline } from "@/components/Inline";
import { Section } from "@/components/Section";

export default async function Home() {
  const posts = (await getPosts()).slice(0, 5);

  return (
    <>
      {/* Name header hidden for the temp blank placeholder — name still
          shows in the footer. Restore when there's real content:
      <header>
        <h1 className="text-[1.75rem] leading-tight tracking-[-0.01em]">
          {site.name}
        </h1>
        {site.tagline?.trim() && (
          <p className="mt-1 font-sans text-[0.9375rem] text-muted">
            {site.tagline}
          </p>
        )}
      </header>
      */}

      <div className="mt-8 space-y-4">
        {site.bio?.map((para, i) => (
          <p key={i}>
            <Inline text={para} />
          </p>
        ))}
      </div>

      {site.now && site.now.items.length > 0 && (
        <Section heading={`now — ${site.now.updated}`}>
          <ul className="space-y-1.5">
            {site.now.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden className="text-rule select-none">
                  —
                </span>
                <span>
                  <Inline text={item} />
                </span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {site.projects && site.projects.length > 0 && (
        <Section heading="projects">
          <ul className="space-y-3.5">
            {site.projects.map((p, i) => (
              <li key={i}>
                <div className="flex items-baseline justify-between gap-4">
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                  <span className="shrink-0 font-sans text-[0.8125rem] tabular-nums text-muted">
                    {p.year}
                  </span>
                </div>
                <p className="text-muted">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {posts.length > 0 && (
        <Section heading="writing">
          <ul className="space-y-2.5">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="flex items-baseline justify-between gap-4"
              >
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                <time
                  dateTime={post.iso}
                  className="shrink-0 font-sans text-[0.8125rem] tabular-nums text-muted"
                >
                  {post.date}
                </time>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-sans text-[0.875rem] text-muted">
            <Link href="/writing">all essays →</Link>
          </p>
        </Section>
      )}

      {site.recommendations && site.recommendations.items.length > 0 && (
        <Section heading={site.recommendations.heading}>
          <ul className="space-y-2">
            {site.recommendations.items.map((r, i) => (
              <li key={i}>
                <a href={r.href} target="_blank" rel="noopener noreferrer">
                  {r.name}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
