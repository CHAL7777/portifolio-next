import Hero from "./sections/hero";
import LogoMarquee from "./sections/logo-marquee"; // The new marquee
import About from "./sections/about";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Certificates from "./sections/certificates";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import BackgroundMain from "../components/background-main";
import ScrollToTop from "../components/scroll-to-top";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen scroll-smooth bg-[#020617]">
      <Navbar />
      <BackgroundMain />
      
      <div className="relative z-10 w-full">
        <Hero />
        
        {/* The Marquee serves as a perfect transition from Hero to Content */}
        {/* <LogoMarquee /> */}
        
        <div className="space-y-0"> 
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Experience />
          <Contact />
          <Footer/>
        </div>
      </div>

      <ScrollToTop />
    </main>
  );
}