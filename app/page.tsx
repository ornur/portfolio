import Hero from "@/components/Hero";
import About from "@/components/About";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col xl:w-[45%] md:w-[70%] w-[80%] justify-center items-center">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};