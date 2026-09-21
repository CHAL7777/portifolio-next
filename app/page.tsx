import BackgroundMain from "@/components/background-main";
import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";
import About from "./sections/about";
import Contact from "./sections/contact";
import Engineering from "./sections/engineering";
import Footer from "./sections/footer";
import GitHubSection from "./sections/github";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

export default function Home() {
  return (
    <>
      <BackgroundMain />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="text-[var(--foreground)]">
        <Hero />
        <Projects />
        <Engineering />
        <Skills />
        <About />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
