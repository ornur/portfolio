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
    href: "/CV__EN.pdf",
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
    title: "Middle Frontend Developer",
    company: "ZIZ INC.",
    location: "Astana, Kazakhstan",
    date: "June 2024 – July 2025",
    projects: [
      {
        name: "Lets Car",
        description:
          "Spearheaded the development of a modern, responsive car selling platform utilizing Next.js, React, Shadcn UI, and Tailwind CSS.",
        achievements: [
          "Engineered a dynamic multi-step car submission form with react-hook-form and sortable image uploads using @dnd-kit",
          "Enhanced user experience through the implementation of fluid animations via framer-motion and auto-animate",
          "Integrated robust authentication with NextAuth, implemented schema validation with Zod, and managed server state efficiently using React Query",
        ],
      },
      {
        name: "Skills Enbek Admin Dashboard",
        description:
          "Developed a scalable administrative panel for comprehensive management of user skills and analytics, significantly improving platform usability.",
        achievements: [
          "Utilized Zod and react-hook-form for resilient form validation and React Query for optimized data fetching",
          "Designed an accessible user interface with Tailwind CSS, Radix Primitives, and lucide-react, incorporating theme-switching capabilities",
          "Enabled data export functionalities to Excel and PDF formats via xlsx, jspdf, and file-saver",
          "Integrated support for Markdown and mathematical expressions using marked and katex",
        ],
      },
      {
        name: "Chemexpress",
        description:
          "Delivered a high-performance web platform for managing chemical product data, built with a modern React architecture.",
        achievements: [
          "Streamlined form workflows through react-hook-form, Zod, and React Query, ensuring seamless user input handling",
          "Increased user engagement by incorporating animations and mobile-responsive carousels using embla-carousel",
          "Implemented internationalization features with next-intl and maintained global state effectively with Zustand",
        ],
      },
      {
        name: "CI/CD Implementation",
        description:
          "Established comprehensive CI/CD pipelines using GitHub Actions, replacing antiquated processes to facilitate faster and more reliable deployments.",
        achievements: [
          "Achieved a 40% reduction in deployment time and significantly enhanced release confidence across various environments",
        ],
      },
    ],
  },
]


export const projects = [
  {
    title: "Let's Car",
    tech: "Shadcn, Motion",
    image: "/projects/3.webp",
    url: "https://lets-car.com/",
  },
  {
    title: "Erten Market",
    tech: "Nextjs, Tailwind",
    image: "/projects/2.webp",
    url: "https://erten-market.ziz.kz/",
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
    url: "https://saas-next-framer-motion.vercel.app/",
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
    id: "shadcn-ui",
    title: "Shadcn UI",
    description: "A component library for building modern UIs",
    author: "@shadcn",
    website: "https://ui.shadcn.com",
    icon: "/icons/shadcn.svg",
    position: { row: 2, col: 3 },
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
