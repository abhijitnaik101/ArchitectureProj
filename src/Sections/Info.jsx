import React from "react";
import { motion } from "framer-motion";
import DropDown from "../Component/DropDown";
import arch11 from "../assets/arch11.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const Info = () => {
  return (
    <section
      id="info"
      className="w-full font-murecho bg-white px-4 sm:px-8 lg:px-16 py-16"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-10">

          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <h2 className="leading-tight">
              <span className="block font-semibold text-5xl sm:text-4xl lg:text-6xl">
                MARVELOUS:
              </span>
              <span className="block font-semibold text-right sm:text-left text-3xl sm:text-3xl lg:text-4xl text-blue-700">
                MODERN LIFE LIVES HERE
              </span>
            </h2>

            <div className="rounded-xl border border-slate-300 p-8 bg-white shadow-sm">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base text-justify">
                Architecture stands as a testament to human ingenuity, where art
                and science converge to shape the spaces we inhabit. It is the
                careful balance of structure, material, light, and proportion
                that transforms functional environments into meaningful places.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="w-full flex justify-center"
          >
            <div
              className="w-full max-w-md sm:max-w-lg lg:max-w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-xl bg-cover bg-center shadow-md"
              style={{ backgroundImage: `url(${arch11})` }}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <div className="rounded-xl bg-stone-200 p-8 text-sm sm:text-base leading-relaxed text-justify">
              Architecture is the discipline of shaping space with purpose and
              intention. From expansive urban skylines to intimate residential
              interiors, it reflects cultural values, technological progress,
              and human aspiration.
            </div>

            <div className="flex flex-col">
              <DropDown options={["Concept & Vision", "Design Development", "Spatial Planning"]} />
              <DropDown options={["Sustainable Solutions", "Material Strategy", "Environmental Response"]} />
              <DropDown options={["Execution & Delivery", "Detailing", "Project Realization"]} />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Info;
