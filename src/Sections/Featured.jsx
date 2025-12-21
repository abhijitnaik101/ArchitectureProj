import React from "react";
import { motion } from "framer-motion";
import arch3 from "../assets/arch3.jpg";
import arch5 from "../assets/arch5.jpg";
import arch15 from "../assets/arch15.jpg";
import arch10 from "../assets/arch10.jpg";
import arch16 from "../assets/arch16.jpg";


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
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};


const Featured = () => {
  return (
    <section
      id="featured"
      className="w-full bg-white px-4 sm:px-8 lg:px-16 py-20 mb-20"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col gap-16 lg:grid lg:grid-cols-3 lg:gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <motion.div
          variants={fadeUp}
          className="bg-stone-200 p-6 sm:p-8 rounded-xl flex flex-col justify-between gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Innovating Spaces,<br />Inspiring Lives.
          </h2>

          <motion.div
            variants={fadeIn}
            className="w-full h-[260px] sm:h-[320px] rounded-lg bg-cover bg-center shadow-md"
            style={{ backgroundImage: `url(${arch3})` }}
          />

          <div className="bg-white p-6 rounded-lg border border-slate-400 flex flex-col gap-6">
            <p className="text-slate-700 leading-relaxed">
              Architecture is a discipline of exploration and responsibility.
              Each project is approached as an opportunity to create enduring
              value through thoughtful design.
            </p>

            <button className="h-12 w-36 border-2 border-slate-400 font-semibold rounded-lg hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </motion.div>


        <motion.div
          variants={fadeUp}
          className="lg:col-span-2 flex flex-col gap-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-6xl sm:text-5xl lg:text-6xl font-semibold text-center"
          >
            FEATURED PROJECTS
          </motion.h1>


          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 bg-slate-100 border border-slate-300 rounded-lg p-3 mx-auto"
          >
            {["All Projects", "Commercial", "Residential", "Healthcare"].map(
              (label) => (
                <motion.button
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-9 px-6 text-sm font-semibold text-white bg-slate-900 rounded-lg"
                >
                  {label}
                </motion.button>
              )
            )}
          </motion.div>


          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <ProjectCard image={arch5} title="Apex Courtyard" />
            <ProjectCard image={arch15} title="Horizon Facade" />
            <ProjectCard image={arch10} title="Skylight Pavilion" />
            <ProjectCard image={arch16} title="Waterfront Residences" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex justify-center"
          >
            <button className="h-12 w-32 font-semibold border border-black rounded-md hover:bg-slate-900 hover:text-white transition">
              See More
            </button>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};


const ProjectCard = ({ image, title }) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="flex flex-col gap-4"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] object-cover rounded-lg shadow-sm"
      />
      <button className="h-12 w-full border border-black font-semibold rounded-md hover:bg-slate-900 hover:text-white transition">
        {title}
      </button>
    </motion.div>
  );
};

export default Featured;
