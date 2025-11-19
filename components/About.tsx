"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ShimmeringText } from "./ui/shimmering-text";
import { motion, useTransform, MotionValue } from "motion/react";

const textDescription = `I am a Frontend developer with extensive work experience. My specialty is creating user—friendly and functional interfaces that easily adapt to different devices and provide high-speed operation.
My goal is to make complex ideas accessible and understandable to users, while paying special attention to code quality, performance, and usability.`;

export default function About({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const mobile = useIsMobile();

  // Extreme scale to zoom through letter D center - wait at start, then scale
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1], [1, 1, 3.16, 10, 31.6, 80, 100]);
  const scaleMobile = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1], [1, 1, 4.73, 22.4, 106.1, 502.4, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.6], [0, 1, 1, 0]);

  // Character throw effect - move across screen while scaling
  // Sync x-movement with scale to keep "D" centered throughout animation
  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1], [0, 0, 70, 180, 550, 1300, 2000]);
  const xMobile = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1], [0, 0, 45, 200, 800, 1300, 2000]);

  return (
    <>
      {/* Fixed/pinned container */}
      <div className="fixed inset-0 -mt-24 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          style={{
            scale: mobile ? scaleMobile : scale,
            opacity,
            x: mobile ? xMobile : x,
          }}
          className="origin-center"
        >
          <ShimmeringText
            text="Frontend Developer"
            className="text-[2.1rem] font-semibold md:text-5xl lg:text-7xl whitespace-nowrap"
            duration={1}
          />
        </motion.div>
      </div>

      {/* Description text that fades early */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0, 1, 0.5, 0]),
          y: useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0, 0, 500, 2000]),
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 w-[80%] md:w-[70%] xl:w-[45%] pointer-events-none z-10"
      >
        <p className="text-sm leading-8 font-normal tracking-tight md:text-justify md:text-xl">
          {textDescription}
        </p>
      </motion.div>
    </>
  );
}
