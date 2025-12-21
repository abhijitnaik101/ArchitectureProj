import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";



const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};



const Hero = () => {
  return (
    <section
      id="home"
      className="w-full bg-white px-4 sm:px-8 lg:px-16 pb-12 pt-24"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        <motion.div
          className="w-full lg:w-2/3 flex flex-col items-center text-center gap-6"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="font-murecho font-bold text-6xl sm:text-5xl lg:text-6xl tracking-tight"
          >
            ARCHITECTURE <br className="hidden sm:block" /> SOLUTIONS
          </motion.h1>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              backgroundColor: "#1e293b",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Let’s talk
            <FiArrowRight />
          </motion.button>

          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center"
          >
            <img
              src="src/assets/arch1.jpg"
              alt="Architecture"
              className="w-full sm:w-4/5 lg:w-full max-h-[520px] object-cover rounded-xl shadow-md"
            />
          </motion.div>
        </motion.div>


        <motion.div
          className="w-full lg:w-1/3 flex flex-col gap-10"
          variants={containerVariants}
        >

          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -6,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.5 }}
            className="border border-slate-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm bg-white"
          >
            <img
              src="src/assets/arch2.jpg"
              alt="Architecture"
              className="w-full h-56 object-cover rounded-lg"
            />
            <p className="text-lg text-slate-700">
              We make your imagination come alive.
            </p>
          </motion.div>

 
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -6,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.5 }}
            className="border border-slate-200 rounded-xl p-6 shadow-sm bg-white"
          >
            <p className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <HiOutlineBuildingOffice2 className="text-slate-700" />
              Our Latest Project
            </p>

            <motion.img
              src="src/assets/arch10.jpg"
              alt="Architecture"
              className="w-full h-56 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />

            <div className="flex justify-between items-center border border-slate-300 rounded-lg px-4 py-3">
              <p className="font-medium text-slate-800">
                Heritage Heights
              </p>
              <span className="text-slate-600">$$$$</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
