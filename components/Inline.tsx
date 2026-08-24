import { Fragment } from "react";

/**
 * Renders the small subset of markdown allowed in content/site.ts:
 * inline links, `[text](https://url)`, and nothing else. Keeping this
 * deliberately tiny means the config file stays readable as plain text.
 */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function Inline({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(LINK)) {
    const [full, label, href] = match;
    const start = match.index;

    if (start > cursor) nodes.push(text.slice(cursor, start));

    const external = /^https?:/.test(href);
    nodes.push(
      <a
        key={start}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>,
    );

    cursor = start + full.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));

  return (
    <>
      {nodes.map((n, i) => (
        <Fragment key={i}>{n}</Fragment>
      ))}
    </>
  );
}
