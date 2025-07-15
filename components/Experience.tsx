"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Building2, MapPin, Calendar, ChevronRight } from "lucide-react"

import { experience } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

const Experience = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <div className="mt-20 w-full">
      <h1 className="font-medium text-3xl mb-7">Work Experience</h1>

      {experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-transparent shadow-none border-none p-0 mb-8">
            <CardContent className="px-0">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold dark:text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span className="font-medium text-blue-400">{exp.company}</span>
                    </div>
                    <div className="flex text-gray-400 items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.date}</span>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="text-lg font-medium dark:text-white mb-4">Key Projects</h4>
                <div className="space-y-4">
                  {exp.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="dark:border-white/70 border-black/70 shadow-none bg-black-5 hover:border-blue-700 transition-colors">
                        <CardContent className="px-6">
                          <button onClick={() => toggleProject(projectIndex)} className="w-full text-left">
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="text-lg font-medium dark:text-white hover:text-blue-400 transition-colors">
                                {project.name}
                              </h5>
                              <motion.div
                                animate={{ rotate: expandedProject === projectIndex ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                              </motion.div>
                            </div>
                          </button>

                          <p className="dark:text-gray-300 text-gray-400 text-sm mb-4">{project.description}</p>

                          <motion.div
                            initial={false}
                            animate={{
                              height: expandedProject === projectIndex ? "auto" : 0,
                              opacity: expandedProject === projectIndex ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 border-t border-gray-600">
                              <h6 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key Achievements:</h6>
                              <ul className="space-y-2">
                                {project.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-400 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

  )
}

export default Experience
