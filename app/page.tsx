import BackgroundMain from "@/components/background-main";
import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";
import About from "./sections/about";
import Achievements from "./sections/achievements";
import AIEngineering from "./sections/ai-engineering";
import Blog from "./sections/blog";
import Certificates from "./sections/certificates";
import Contact from "./sections/contact";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import GitHubSection from "./sections/github";
import Hero from "./sections/hero";
import LogoMarquee from "./sections/logo-marquee";
import Projects from "./sections/projects";
import ResumePreview from "./sections/resume-preview";
import Skills from "./sections/skills";
import SystemDesign from "./sections/system-design";
import Testimonials from "./sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--foreground)]">
      <BackgroundMain />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Projects />
      <SystemDesign />
      <AIEngineering />
      <Skills />
      <About />
      <Experience />
      <Education />
      <Certificates />
      <Achievements />
      <GitHubSection />
      <Testimonials />
      <Blog />
      <ResumePreview />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
