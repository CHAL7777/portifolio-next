import About from "./sections/about";
import Certificates from "./sections/certificates";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import LogoMarquee from "./sections/logo-marquee";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
