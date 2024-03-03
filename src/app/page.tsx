import About from "@/components/about";
import Contact from "@/components/contact";
import SectionDevider from "@/components/devider";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col flex items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
