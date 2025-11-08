"use client";

import Image from "next/image";
import { TECHNOLOGIES } from "@/lib/data";
import { useTheme } from "@/hooks/use-theme";

import { InfiniteSlider } from "./ui/infinite-slider";

const stack1 = TECHNOLOGIES.slice(0, TECHNOLOGIES.length / 2);
const stack2 = TECHNOLOGIES.slice(TECHNOLOGIES.length / 2);

export default function Techs() {
  const { theme } = useTheme(); 
  return (
    <div className="absolute top-364 w-full space-y-16">
      <h2 className="ml-130 flex flex-col gap-2 text-5xl font-bold tracking-[-0.02em]">
        What I work with
      </h2>
      <div className="space-y-24">
        <InfiniteSlider gap={144} className="h-25" reverse>
          {stack1.map((tech) => (
            <Image
              key={tech.id}
              src={theme === "light" ? tech.iconLight : tech.icon}
              width={75}
              height={75}
              className="h-25 object-contain"
              alt=""
            />
          ))}
        </InfiniteSlider>
        <InfiniteSlider gap={144} className="h-25">
          {stack2.map((tech) => (
            <Image
              key={tech.id}
              src={theme === "light" ? tech.iconLight : tech.icon}
              width={75}
              height={75}
              className="h-25 object-contain"
              alt=""
            />
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
