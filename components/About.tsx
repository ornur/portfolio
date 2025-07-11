"use client";

import { useInView } from "react-intersection-observer";
import BlurIn from "./ui/blur-in";

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
            delay={0.5}
          />
          <BlurIn
            description
            word="I am a frontend developer with a passion for creating beautiful and functional web applications. I have experience in building responsive and user-friendly interfaces using modern web technologies."
            className="w-[90%] font-normal md:w-[60%]"
          />
        </div>
      )}
    </div>
  );
};

export default About;
