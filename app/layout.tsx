import { profile } from "@/app/data/portfolio";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Full-Stack Engineer & AI Systems Developer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Chala Gobena — a full-stack engineer building production-grade web products, scalable APIs, and AI-driven workflows with Next.js, TypeScript, and modern design systems.",
  keywords: [
    "Chala Gobena",
    "Full-Stack Engineer",
    "Software Engineer",
    "AI Systems Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "FastAPI",
    "Python",
    "System Design",
    "AI Engineering",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${profile.name} | Full-Stack Engineer & AI Systems Developer`,
    description: profile.headline,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: profile.avatar,
        width: 1200,
        height: 1200,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Full-Stack Engineer & AI Systems Developer`,
    description: profile.headline,
    images: [profile.avatar],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.headline,
  email: profile.email,
  url: siteUrl,
  image: `${siteUrl}${profile.avatar}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "Ethiopia",
  },
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.telegram],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "REST APIs",
    "API Design",
    "System Design",
    "AI Engineering",
    "Retrieval-Augmented Generation",
    "Vector Databases",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
