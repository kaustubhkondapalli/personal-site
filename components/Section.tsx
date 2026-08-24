/**
 * A labelled block. The asterisk rule above each heading is the one bit of
 * ornament on the site — it's what makes a wall of text read as a document
 * rather than a dump. Keep it quiet but visible; at --rule contrast it
 * disappears entirely.
 */
export function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <div
        aria-hidden
        className="mb-10 flex items-center justify-center gap-3 text-[0.6875rem] text-muted/60 select-none"
      >
        <span className="h-px w-8 bg-rule" />✳
        <span className="h-px w-8 bg-rule" />
      </div>
      <h2 className="mb-5 font-sans text-[0.75rem] font-medium uppercase tracking-[0.16em] text-muted">
        {heading}
      </h2>
      {children}
    </section>
  );
}
