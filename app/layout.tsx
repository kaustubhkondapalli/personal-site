import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import Link from "next/link";
import { site, siteUrl, siteTitle } from "@/content/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: siteTitle,
    description: site.description,
    url: siteUrl,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full">
        <div className="mx-auto flex min-h-screen max-w-[38rem] flex-col px-6 py-16 sm:py-24">
          <main className="rise flex-1">{children}</main>

          <footer className="mt-20 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9375rem] text-muted">
            <Link href="/">{site.name}</Link>
            {site.links?.map((l, i) =>
              l.href ? (
                <a
                  key={i}
                  href={l.href}
                  target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ) : (
                <a key={i} aria-disabled="true">
                  {l.label}
                </a>
              ),
            )}
          </footer>
        </div>
      </body>
    </html>
  );
}
