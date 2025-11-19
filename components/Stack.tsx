"use client";

import Image from "next/image";
import { TECHNOLOGIES } from "@/lib/data";
import { useTheme } from "@/hooks/use-theme";

import { InfiniteSlider } from "./ui/infinite-slider";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const stack1 = TECHNOLOGIES.slice(0, TECHNOLOGIES.length / 2);
const stack2 = TECHNOLOGIES.slice(TECHNOLOGIES.length / 2);

export default function Techs() {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, y }}
      className="absolute top-500 md:top-800 w-full space-y-16"
    >
      <h2 className="inset-x-0 flex flex-col gap-2 text-center text-[2.1rem] font-bold tracking-[-0.02em] md:text-5xl">
        What I work with
      </h2>
      <div className="space-y-12 md:space-y-24">
        <InfiniteSlider gap={isMobile ? 44 : 144} className="h-25" reverse>
          {stack1.map((tech) => (
            <Link
              key={tech.id}
              className="group relative h-10 w-10 cursor-help hover:scale-105 md:h-20 md:w-20"
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <>
                <Image
                  src={theme === "light" ? tech.iconLight : tech.icon}
                  className="object-contain transition-all group-hover:translate-y-1 group-hover:blur-xs group-hover:brightness-75"
                  fill
                  alt=""
                />
                <span className="absolute inset-0 hidden place-content-center text-center text-xl group-hover:block">
                  {tech.title}
                </span>
              </>
            </Link>
          ))}
        </InfiniteSlider>
        <InfiniteSlider gap={isMobile ? 44 : 144} className="h-25">
          {stack2.map((tech) => (
            <Link
              key={tech.id}
              className="group relative h-10 w-10 cursor-help hover:scale-105 md:h-20 md:w-20"
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <>
                <Image
                  src={theme === "light" ? tech.iconLight : tech.icon}
                  className="object-contain transition-all group-hover:translate-y-1 group-hover:blur-xs group-hover:brightness-75"
                  fill
                  alt=""
                />
                <span className="absolute inset-0 hidden place-content-center text-center text-xl group-hover:block">
                  {tech.title}
                </span>
              </>
            </Link>
          ))}
        </InfiniteSlider>
      </div>
    </motion.div>
  );
}
