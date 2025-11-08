"use client";

import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { BoxReveal } from "./ui/box-reveal";
import { GridPattern } from "./ui/animated-grid-pattern";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-44">
      <div className="text-center">
        <BoxReveal boxColor="black" duration={0.5}>
          <Image
            src="/me.webp"
            alt="me"
            className="mx-auto mb-6 aspect-square rounded-full object-cover"
            height={300}
            width={300}
          />
        </BoxReveal>
        <div className="flex flex-col space-x-1">
          <BoxReveal boxColor="black" duration={0.5}>
            <h3 className="text-sm text-gray-200 md:text-lg">
              Hi, nice to meet you!
            </h3>
          </BoxReveal>
          <BoxReveal boxColor="black" duration={0.5}>
            <h1 className="flex items-center text-4xl font-medium md:text-5xl">
              I&apos;m Nurdaulet
            </h1>
          </BoxReveal>
        </div>
        <div className="flex items-center space-x-3">
          <BoxReveal boxColor="black" duration={0.5}>
            <h2 className="text-2xl font-medium md:text-4xl">
              Frontend Developer
            </h2>
          </BoxReveal>
        </div>
      </div>
      <BoxReveal boxColor="black" duration={0.5}>
        <ul className="mt-3 flex space-x-2">
          <li>
            <Link href={"https://github.com/ornur"} target="_blank">
              <FaGithub className="size-7 md:size-8" />
            </Link>
          </li>
          <li>
            <Link href={"https://t.me/nurda_oryn"} target="_blank">
              <FaTelegram className="size-7 md:size-8" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/nurdaulet-orynbasarov/"}
              target="_blank"
            >
              <FaLinkedin className="size-7 md:size-8" />
            </Link>
          </li>
        </ul>
      </BoxReveal>
      <GridPattern
        numSquares={30}
        maxOpacity={0.9}
        duration={1}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] -z-50 h-[200%] skew-y-12 lg:inset-y-[-30%] xl:inset-y-[-50%]",
        )}
      />
    </div>
  );
};

export default Hero;
