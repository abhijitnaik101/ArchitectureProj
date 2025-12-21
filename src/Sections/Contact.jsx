import React from "react";
import { motion } from "framer-motion";
import arch21 from "../assets/arch21.jpg";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
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

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
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


const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-white px-4 sm:px-8 lg:px-16 py-20 mb-20 font-murecho"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col gap-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >


        <motion.div variants={fadeUp}>
          <h2 className="text-5xl sm:text-4xl lg:text-6xl font-semibold leading-tight max-w-3xl">
            LET’S TALK ABOUT YOUR PROJECT
          </h2>
        </motion.div>


        <div className="flex flex-col-reverse lg:flex-row gap-12 items-stretch">


          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 w-full lg:w-1/2 justify-center"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-slate-600 p-6 sm:p-8"
            >
              <p className="text-sm font-semibold tracking-wide mb-2">
                Email address
              </p>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold break-all">
                abhijitnaik101@gmail.com
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-slate-600 p-6 sm:p-8"
            >
              <p className="text-sm font-semibold tracking-wide mb-4">
                Contact number
              </p>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold">
                +91 89173 37905
              </p>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold mt-2">
                +91 96925 25286
              </p>
            </motion.div>
          </motion.div>

  
          <motion.div
            variants={fadeRight}
            className="w-full lg:w-1/2"
          >
            <motion.img
              src={arch21}
              alt="Architecture"
              className="w-full h-[260px] sm:h-[380px] lg:h-full object-cover object-center rounded-xl grayscale"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        </div>


        <motion.div
          variants={fadeIn}
          className="w-full h-20 sm:h-24 bg-slate-100 rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
