"use client";

import { useInView } from "react-intersection-observer";
import { BlurIn } from "./ui/blur-in";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mt-96 flex justify-center">
      {inView && (
        <div className="flex flex-col items-center gap-4">
          <BlurIn
            word="Frontend Developer"
            className="font-semibold w-[90%] md:w-[60%]"
            useAnimatedBackground
            useMask
            duration={2}
            delay={0}
          />
          <BlurIn
            description
            word="I am an experienced Frontend developer specializing in creating intuitive, responsive, and high-performance user interfaces. My main goal is to turn complex concepts into user—friendly and functional applications, while paying special attention to usability, performance, and code quality.
I have experience working as a Frontend developer at ZIZ INC. I am currently actively looking for opportunities for further professional growth and participation in the development of meaningful and thoughtful digital products.
Ready to work remotely. I am in Astana, Kazakhstan."
            className="w-[90%] font-normal md:w-[60%] text-justify tracking-tight leading-8"
          />
        </div>
      )}
    </div>
  );
};

export default About;
