import Hero from "./sections/hero";
import About from "./sections/about";
import Experience from "./sections/experience";
import SkillsPro from "./sections/skills";
import CertificatesStudio from "./sections/certificates";
import ProjectsPro from "./sections/projects";
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

        <div className="space-y-0"> 
          <About />
          <SkillsPro />
          <ProjectsPro />
          <CertificatesStudio />
          <Experience />
          <Contact />
          <Footer/>
        </div>
      </div>

      <ScrollToTop />
    </main>
  );
}
