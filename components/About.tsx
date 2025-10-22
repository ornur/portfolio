"use client";

import { BlurIn } from "./ui/blur-in";

const textDescription = `I am a passionate Frontend Developer with expertise in building responsive and user-friendly web applications. I specialize in React, Next.js, and modern CSS techniques to create seamless user experiences.`;

const About = () => {

  return (
    <div className="mt-96 flex justify-center">
      <div className="flex flex-col items-center gap-4">
        <BlurIn
          word="Frontend Developer"
          className="font-semibold"
          useAnimatedBackground
          useMask
          duration={2}
          delay={0}
        />
        <BlurIn
          description
          word={textDescription}
          className="font-normal md:w-[120%] tracking-tight leading-6 md:leading-8"
        />
      </div>
    </div>
  );
};

export default About;
