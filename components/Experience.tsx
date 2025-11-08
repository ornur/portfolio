"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Trophy } from "lucide-react";

import { experience } from "@/lib/data";
import { BackgroundGradient } from "./ui/background-gradient";

const Experience = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(e.currentTarget.dataset.index);
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="mt-180 w-full space-y-10 md:mt-200">
      <h1 className="text-center text-[2.1rem] font-bold tracking-[-0.02em] lg:text-5xl">
        Work Experience
      </h1>
      {experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {exp.projects.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
              viewport={{ once: true }}
              onClick={toggleProject}
              data-index={projectIndex}
            >
              <BackgroundGradient className="bg-background rounded-[22px] p-4 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h5 className="text-lg font-medium transition-colors hover:text-blue-400 dark:text-white">
                    {project.name}
                  </h5>
                  <motion.div
                    animate={{
                      rotate: expandedProject === projectIndex ? 90 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </div>

                <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
                  {project.description}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedProject === projectIndex ? "auto" : 0,
                    opacity: expandedProject === projectIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-600 pt-2">
                    <h6 className="mb-2 text-base font-medium font-semibold text-gray-500 dark:text-gray-200">
                      <Trophy className="mr-2 inline-block h-4 w-4 text-gray-400 dark:text-gray-200" />
                      Key Achievements:
                    </h6>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="ml-2 flex items-start gap-2 text-sm text-gray-500 dark:text-gray-300"
                        >
                          <span className="relative mt-1.5 flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
