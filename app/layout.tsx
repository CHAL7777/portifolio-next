import { profile, siteUrl } from "@/app/data/portfolio";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${profile.name} — Software Engineer & Full-Stack Web Developer`;
const description =
  "Portfolio of Chala Gobena, a software engineering student and full-stack web developer building production web applications with React, Next.js, TypeScript, Node.js, FastAPI, and PostgreSQL. Open to freelance, internships, and engineering roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s — ${profile.name}` },
  description,
  keywords: [
    "Chala Gobena",
    "CHAL7777",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "Ethiopia",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
    { media: "(prefers-color-scheme: light)", color: "#f2f0ea" },
  ],
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.githubUsername,
  jobTitle: "Software Engineer",
  description,
  email: profile.email,
  url: siteUrl,
  image: `${siteUrl}${profile.avatar}`,
  address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Haramaya University" },
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.telegram],
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "FastAPI", "Java", "PostgreSQL", "MySQL", "Tailwind CSS"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${bricolage.variable} ${inter.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Resolve the theme before paint so light mode never flashes dark. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}var r=document.documentElement;r.classList.toggle("light",t==="light");r.classList.toggle("dark",t!=="light");}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
