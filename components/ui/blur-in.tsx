"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  description?: boolean;
  useMask?: boolean;
  delay?: number;
  useAnimatedBackground?: boolean;
}
const BlurIn = ({
  word,
  className,
  variant,
  duration = 1,
  description = false,
  useMask = false,
  delay = 0,
  useAnimatedBackground = false,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const maskVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      clipPath: "inset(0 0% 0 0)"
    },
  };

  const combinedVariants = useMask ? maskVariants : (variant || defaultVariants);
  // Base animated background styles - now using Tailwind classes
  const getAnimatedBackgroundClasses = () => {
    if (!useAnimatedBackground) return '';
    
    return cn(
      'text-bg-animated animate-animate-background'
      // Dark mode is now handled automatically in CSS
    );
  };

  if (useMask) {
    return <MaskedTextAnimation
      word={word}
      className={className}
      description={description}
      duration={duration}
      delay={delay}
      combinedVariants={combinedVariants}
      animatedBackgroundClasses={getAnimatedBackgroundClasses()}
    />;
  }

  return <SingleTextAnimation
    word={word}
    className={className}
    description={description}
    duration={duration}
    delay={delay}
    combinedVariants={combinedVariants}
    animatedBackgroundClasses={getAnimatedBackgroundClasses()}
  />;
};

// Masked text animation component
const MaskedTextAnimation = ({
  word,
  className,
  description,
  duration,
  delay,
  combinedVariants,
  animatedBackgroundClasses,
}: {
  word: string;
  className?: string;
  description: boolean;
  duration: number;
  delay: number;
  combinedVariants: any;
  animatedBackgroundClasses: string;
}) => {
  const words = word.split(" ");

  return (
    <div className={cn(
      "font-display text-center font-bold tracking-[-0.02em] drop-shadow-xs md:leading-20",
      description ? "text-sm md:text-xl" : "text-3xl md:text-7xl",
      className,
    )}>
      {words.map((currentWord, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          transition={{
            duration: duration * 0.8,
            delay: delay + (index * 0.1),
            ease: "easeOut"
          }}
          variants={combinedVariants}
          className={cn(
            "inline-block mr-2",
            animatedBackgroundClasses
          )}
        >
          {currentWord}
        </motion.span>
      ))}
    </div>
  );
};

// Single text animation component
const SingleTextAnimation = ({
  word,
  className,
  description,
  duration,
  delay,
  combinedVariants,
  animatedBackgroundClasses,
}: {
  word: string;
  className?: string;
  description: boolean;
  duration: number;
  delay: number;
  combinedVariants: any;
  animatedBackgroundClasses: string;
}) => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center font-bold tracking-[-0.02em] drop-shadow-xs md:leading-20",
        description ? "text-sm md:text-xl" : "text-3xl md:text-7xl",
        animatedBackgroundClasses,
        className,
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
