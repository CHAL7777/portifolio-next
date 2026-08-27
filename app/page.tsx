import BackgroundMain from "@/components/background-main";
import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";
import About from "./sections/about";
import AIEngineering from "./sections/ai-engineering";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import GitHubSection from "./sections/github";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import SystemDesign from "./sections/system-design";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--foreground)]">
      <BackgroundMain />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Projects />
      <SystemDesign />
      <AIEngineering />
      <Skills />
      <About />
      <Experience />
      <GitHubSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
