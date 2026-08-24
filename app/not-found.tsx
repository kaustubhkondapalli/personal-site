import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="text-[1.75rem] leading-tight">not found</h1>
      <p className="mt-3 text-muted">
        That page doesn&rsquo;t exist. <Link href="/">Go home</Link>.
      </p>
    </>
  );
}
