"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <div className="mt-20 w-full space-y-10">
      <h1 className="text-5xl font-bold tracking-[-0.02em]">Projects</h1>
      <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            className="group w-[250px]"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href={project.url} target="_blank">
              <div className="bg-muted relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="h-full w-full rounded object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span>
                  <h1 className="text-sm">{project.title}</h1>
                  <h2 className="text-xs text-zinc-500 group-hover:text-teal-500 dark:text-[#cecece]">
                    {project.tech}
                  </h2>
                </span>
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
