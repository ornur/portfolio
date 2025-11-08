"use client";

import { ShimmeringText } from "./ui/shimmering-text";

const textDescription = `I am a Frontend developer with extensive work experience. My specialty is creating user—friendly and functional interfaces that easily adapt to different devices and provide high-speed operation.
My goal is to make complex ideas accessible and understandable to users, while paying special attention to code quality, performance, and usability.`;

export default function About() {
  return (
    <div className="mt-96 flex flex-col items-center justify-center gap-4">
      <ShimmeringText
        text="Frontend Developer"
        className="text-[2.1rem] font-semibold md:text-5xl lg:text-7xl"
        duration={3}
      />
      <p className="md:text-justify text-sm leading-8 font-normal tracking-tight md:text-xl">
        {textDescription}
      </p>
    </div>
  );
}
