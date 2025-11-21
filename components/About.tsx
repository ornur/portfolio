"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

import { useIsMobile } from "@/hooks/use-mobile";
import { ShimmeringText } from "./ui/shimmering-text";

const textDescription = `My specialty is creating user—friendly and functional interfaces that easily adapt to different devices and provide high-speed operation.
My goal is to make complex ideas accessible and understandable to users, while paying special attention to code quality, performance, and usability.`;

export default function About() {
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"],
  });
  const mobile = useIsMobile();

  // Extreme scale to zoom through letter D center - wait at start, then scale
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 0.8, 0.9, 1],
    [1, 1, 8, 32, 80, 200, 200],
  );
  const scaleMobile = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 0.8, 0.9, 1],
    [1, 1, 10, 100, 300, 600, 1000],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.6, 0.7, 0.8],
    [0, 1, 1, 1, 1, 0],
  );
  const opacityMobile = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.6, 0.7, 0.8],
    [0, 1, 1, 0, 0, 0],
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 0.8, 0.9, 1],
    [0, 0, 1960, 7880, 19750, 4000, 2000],
  );
  const xMobile = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 0.8, 0.9, 1],
    [0, 0, 400, 2150, 6900, 10600, 2000],
  );

  return (
    <div
      ref={scrollContainerRef}
      className="relative min-h-[250vh] w-full md:min-h-[250vh]"
    >
      {/* Fixed/pinned container */}
      <div className="pointer-events-none fixed inset-0 z-10 -mt-24 flex items-center justify-center">
        <motion.div
          style={{
            scale: mobile ? scaleMobile : scale,
            opacity: mobile ? opacityMobile : opacity,
            x: mobile ? xMobile : x,
            y: useTransform(
              scrollYProgress,
              [0, 0.2, 0.55, 0.8],
              [200, 0, 0, -600],
            ),
          }}
          className="origin-center"
        >
          <ShimmeringText
            text="Frontend Developer"
            className="text-[2.1rem] font-semibold whitespace-nowrap md:text-5xl lg:text-7xl"
            duration={1}
          />
        </motion.div>
      </div>

      {/* Description text that fades early */}
      <motion.div
        style={{
          opacity: useTransform(
            scrollYProgress,
            [0, 0.1, 0.2, 0.3, 0.4, 0.45],
            [0, 1, 1, 1, 0.5, 0],
          ),
          y: useTransform(scrollYProgress, [0, 0.3], [200, 0]),
        }}
        className="pointer-events-none fixed top-1/2 left-1/2 z-10 w-[80%] -translate-x-1/2 md:w-[70%] xl:w-[45%]"
      >
        <p className="text-sm leading-8 font-normal tracking-tight md:text-justify md:text-xl">
          {textDescription}
        </p>
      </motion.div>
    </div>
  );
}
