"use client";

import { motion } from "motion/react";
import Techs from "./techs";

const Tech = () => {
  return (
    <motion.div
      className="mt-40 xl:w-[45%] md:w-[70%] w-[80%]"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
    >
      <section className="techs flex flex-col gap-6 p-(--padding) py-16 mb-12 max-sm:text-center w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold tracking-[-0.02em]">
            What i work with
          </h2>
        </div>
        <Techs />
      </section>
    </motion.div>
  );
};

export default Tech;
