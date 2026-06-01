import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chala | Product Engineer",
  description: "Product-minded full-stack developer building simple, polished web products.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem("theme");const d=t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)}catch{}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
