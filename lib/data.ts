import React from "react";
import { HomeIcon, Mail, ScrollText, SunMoon } from "lucide-react";

export const links = [
  {
    title: "Home",
    icon: React.createElement(HomeIcon),
    href: "#top",
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
];

export const projects = [
  {
    title: "Portfolio - Alibi Alisher",
    tech: "React, Motion, TailwindCSS",
    image: "/projects/alibi.webp",
    url: "https://alibialisher.kz/",
  },
  {
    title: "Saas Startup",
    tech: "Nexjs, Framer Motion",
    image: "/projects/4.webp",
    url: "https://saas-next-framer-motion.vercel.app/",
  },
  {
    title: "Let's Car",
    tech: "Motion, Tanstack Query, NextAuth",
    image: "/projects/3.webp",
    url: "https://lets-car.com/",
  },
  {
    title: "Generative sensor visualization",
    tech: "Shadcn, Rechart, TailwindCSS",
    image: "/projects/1.webp",
    url: "https://factory.abzy.kz/",
  },
];

export const TECHNOLOGIES = [
  {
    id: "nextjs",
    title: "Next.js",
    icon: "/icons/nextjs.svg",
    iconLight: "/icons/nextjs.svg",
  },
  {
    id: "react",
    title: "React",
    icon: "/icons/react.svg",
    iconLight: "/icons/react.svg",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: "/icons/tailwind.svg",
    iconLight: "/icons/tailwind.svg",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: "/icons/typescript.svg",
    iconLight: "/icons/typescript.svg",
  },
  {
    id: "shadcn-ui",
    title: "Shadcn UI",
    icon: "/icons/shadcn.svg",
    iconLight: "/icons/shadcn-light.svg",
  },
  {
    id: "nodejs",
    title: "Node.js",
    icon: "/icons/nodejs.svg",
    iconLight: "/icons/nodejs.svg",
  },
  {
    id: "vite",
    title: "Vite",
    icon: "/icons/vite.svg",
    iconLight: "/icons/vite.svg",
  },
  {
    id: "zod",
    title: "Zod",
    icon: "/icons/zod.svg",
    iconLight: "/icons/zod.svg",
  },
  {
    id: "motion",
    title: "Motion",
    icon: "/icons/motion.svg",
    iconLight: "/icons/motion-light.svg",
  },
  {
    id: "tanstack-query",
    title: "TanStack Query",
    icon: "/icons/tanstack.png",
    iconLight: "/icons/tanstack.png",
  },
  {
    id: "react-hook-form",
    title: "React Hook Form",
    icon: "/icons/rhf.svg",
    iconLight: "/icons/rhf.svg",
  },
  {
    id: "graphql",
    title: "GraphQL",
    icon: "/icons/graphql.svg",
    iconLight: "/icons/graphql.svg",
  },
  {
    id: "docker",
    title: "Docker",
    icon: "/icons/docker.svg",
    iconLight: "/icons/docker.svg",
  },
  {
    id: "MongoDB",
    title: "MongoDB",
    icon: "/icons/mongodb.svg",
    iconLight: "/icons/mongodb.svg",
  },
  {
    id: "prisma",
    title: "Prisma",
    icon: "/icons/prisma-dark.svg",
    iconLight: "/icons/prisma-light.svg",
  },
  {
    id: "redis",
    title: "Redis",
    icon: "/icons/redis.svg",
    iconLight: "/icons/redis.svg",
  },
  {
    id: "axios",
    title: "Axios",
    icon: "/icons/axios.svg",
    iconLight: "/icons/axios.svg",
  },
  {
    id: "webpack",
    title: "Webpack",
    icon: "/icons/webpack.svg",
    iconLight: "/icons/webpack.svg",
  },
  {
    id: "eslint",
    title: "ESLint",
    icon: "/icons/eslint.svg",
    iconLight: "/icons/eslint.svg",
  },
];
