import Hero from "@/components/Hero";
import About from "@/components/About";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex w-[80%] flex-col items-center justify-center md:w-[70%] xl:w-[45%]">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
