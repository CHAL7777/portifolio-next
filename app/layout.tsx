import Navbar from "@/components/navbar";
import "./globals.css";
import { Metadata } from "next"; // 1. Import Metadata type

// 2. Define your metadata
export const metadata: Metadata = {
  title: "Chala | Portfolio",
  description: "Software Engineer Portfolio",
  icons: {
    icon: "./favicon.png", // Points to public/favicon.ico
    // Optional: add apple-touch-icon for mobile bookmarks
    // apple: "/favicon.png", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}