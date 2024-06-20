import About from "@/components/About/About";
import Hero from "@/components/Hero/hero";
import Skills from "@/components/Skills/Skills";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Header from "@/components/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Header />
      <section id='Hero' className="snap-start">
      <Hero />
      </section>
      <section id='About' className="snap-center">
        <About />
      </section>
      <section id='Experience' className="snap-center"> 
        <WorkExperience />
      </section>
      <section id='Skills' className="snap-start"> 
        <Skills />
      </section>
      
    </div>
  );
}
