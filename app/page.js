import About from "@/components/About";
import AskAboutMe from "@/components/AskAboutMe";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ShowcaseMarquee from "@/components/ShowcaseMarquee";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip bg-[#f9fafb]">
        <Hero />
        <ShowcaseMarquee />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
        <AskAboutMe />
      </main>
      <Footer />
    </>
  );
}
