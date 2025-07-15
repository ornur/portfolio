import React from "react";
import { Activity, HomeIcon, Mail, ScrollText, SunMoon } from "lucide-react";

export const links = [
  {
    title: "Home",
    icon: React.createElement(HomeIcon),
    href: "#",
  },
  {
    title: "Activity",
    icon: React.createElement(Activity),
    href: "https://github.com/ornur/",
  },
  {
    title: "Resume",
    icon: React.createElement(ScrollText),
    href: "/CV_EN.pdf",
  },
  {
    title: "Email",
    icon: React.createElement(Mail),
    href: "mailto:nurdauletaidaruli@gmail.com",
  },
  {
    title: "Theme",
    icon: React.createElement(SunMoon),
    href: "#",
  },
];

export const experience = [
  {
    title: "Front-End Developer",
    company: "ZIZ INC.",
    date: "June 2024 - June 2025",
    description:
      "Developed and maintained user interfaces for web applications using React and Next.js. Collaborated with designers to implement responsive designs and improve user experience. Optimized application performance and ensured cross-browser compatibility.",
  },
];

export const projects = [
    {
    title: "Let's Car",
    tech: "Shadcn, Motion",
    image: "/projects/3.webp",
    url: "https://lets-car.com/",
  },
  {
    title: "Green Data Center",
    tech: "Nextjs, Tailwind",
    image: "/projects/2.webp",
    url: "https://green-dc.vercel.app/",
  },
  {
    title: "Sensor data visualization",
    tech: "Nextjs, Shadcn",
    image: "/projects/1.webp",
    url: "https://factory.abzy.kz/",
  },
  {
    title: "Saas Next.js Framer Motion",
    tech: "Nexjs, Framer Motion",
    image: "/projects/4.webp",
    url: "https://saas-next-motion/react.vercel.app/",
  },
];

export const TECHNOLOGIES = [
  {
    id: "nextjs",
    title: "Next.js",
    description: "A Modern React framework built by ",
    author: "@vercel",
    website: "https://vercel.com",
    icon: "/icons/nextjs.svg",
    position: { row: 1, col: 1 },
  },
  {
    id: "react",
    title: "React",
    description:
      "A JavaScript library for building user interfaces built by the developers at ",
    author: "@facebook",
    website: "https://react.dev",
    icon: "/icons/react.svg",
    position: { row: 1, col: 2 },
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    description: "A utility-first CSS framework built by ",
    author: "@tailwindcss",
    website: "https://tailwindcss.com",
    icon: "/icons/tailwind.svg",
    position: { row: 1, col: 3 },
  },
  {
    id: "typescript",
    title: "TypeScript",
    description:
      "A statically typed programming language that builds on JavaScript built by ",
    author: "@microsoft",
    website: "https://www.typescriptlang.org/",
    icon: "/icons/typescript.svg",
    position: { row: 2, col: 1 },
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "A runtime environment to run JavaScript on servers ",
    author: "@nodejs",
    website: "https://nodejs.org/en",
    icon: "/icons/nodejs.svg",
    position: { row: 2, col: 2 },
  },
];
