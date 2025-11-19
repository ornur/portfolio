"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useScroll } from "motion/react";

export default function Home() {
  const scrollContainerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"]
  });

  return (
    <main className="flex w-[80%] flex-col items-center justify-center md:w-[70%] xl:w-[45%]">
      <Nav />
      <Hero />
      {/* Scroll container for pinned About section */}
      <div ref={scrollContainerRef} className="relative w-full min-h-[200vh] md:min-h-[250vh]">
        <About scrollYProgress={scrollYProgress} />
      </div>
      <Stack />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
