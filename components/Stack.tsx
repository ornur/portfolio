"use client";

import Image from "next/image";
import { TECHNOLOGIES } from "@/lib/data";
import { useTheme } from "@/hooks/use-theme";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";
import { useRef } from "react";

const top5 = TECHNOLOGIES.slice(0, 5);
const rest = TECHNOLOGIES.slice(5);

// Utility to wrap a number within a range
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxSlider({ children, baseVelocity = 100 }: { children: React.ReactNode; baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to duplicate the content is dynamic based on the
   * content width. For now, we'll duplicate it enough times to ensure
   * it covers the screen width + buffer.
   */
  return (
    <div className="w-full overflow-hidden">
      <motion.div className="flex w-max gap-10 whitespace-nowrap md:gap-16" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function Techs() {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Title Animation (0 - 0.5)
  // Scale down from 300 to 1
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [300, 1]);
  const titleX = useTransform(scrollYProgress, [0, 0.5], [-6050, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  // Optional: Keep X translation if desired, mapped to same range, or remove if "scale" was the only request.
  // User's previous code had X, but request only mentioned scale. I will remove X to keep it clean unless requested.

  // Pinned section animations (0.5 - 1.0)
  // 5 items, 0.1 each
  const item1Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const item2Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const item3Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const item4Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const item5Opacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);

  const item1Scale = useTransform(scrollYProgress, [0.5, 0.6], [0.5, 1]);
  const item2Scale = useTransform(scrollYProgress, [0.6, 0.7], [0.5, 1]);
  const item3Scale = useTransform(scrollYProgress, [0.7, 0.8], [0.5, 1]);
  const item4Scale = useTransform(scrollYProgress, [0.8, 0.9], [0.5, 1]);
  const item5Scale = useTransform(scrollYProgress, [0.9, 1.0], [0.5, 1]);

  const opacities = [item1Opacity, item2Opacity, item3Opacity, item4Opacity, item5Opacity];
  const scales = [item1Scale, item2Scale, item3Scale, item4Scale, item5Scale];

  // Fade in the slider section (0.9 - 1.0)
  const sliderOpacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);

  return (
    <div ref={containerRef} className="relative -mt-250 h-[400vh]">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
        <motion.h2
          style={{ scale: titleScale, opacity: titleOpacity, x: titleX }}
          className="mb-12 font-semibold text-center text-[2.1rem] tracking-[-0.02em] md:text-5xl"
        >
          What I work with
        </motion.h2>

        {/* Pinned Top 5 */}
        <div className="mb-24 flex flex-wrap justify-center gap-8 md:gap-16">
          {top5.map((tech, i) => (
            <motion.div
              key={tech.id}
              style={{ opacity: opacities[i], scale: scales[i] }}
              className="flex flex-col items-center gap-4"
            >
              <Link
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-16 w-16 cursor-help md:h-24 md:w-24"
              >
                <Image
                  src={theme === "light" ? tech.iconLight : tech.icon}
                  className="object-contain transition-all group-hover:scale-110"
                  fill
                  alt={tech.title}
                />
              </Link>
              <span className="text-sm font-medium md:text-lg">{tech.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Slider for the rest */}
        <motion.div style={{ opacity: sliderOpacity }} className="w-[99vw]">
          <ParallaxSlider baseVelocity={-1}>
            {rest.map((tech, i) => (
              <Link
                key={`${tech.id}-${i}`}
                className="group relative inline-block h-10 w-10 shrink-0 cursor-help hover:scale-105 md:h-20 md:w-20 mx-5 md:mx-18"
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <>
                  <Image
                    src={theme === "light" ? tech.iconLight : tech.icon}
                    className="object-contain transition-all group-hover:translate-y-1 group-hover:blur-xs group-hover:brightness-75"
                    fill
                    alt={tech.title}
                  />
                  <span className="absolute inset-0 hidden place-content-center text-center text-xl group-hover:block">
                    {tech.title}
                  </span>
                </>
              </Link>
            ))}
          </ParallaxSlider>
        </motion.div>
      </div>
    </div>
  );
}
