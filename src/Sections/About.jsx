import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import arch10 from "../assets/arch10.jpg";
import arch14 from "../assets/arch14.jpg";


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
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};


const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white px-4 sm:px-8 lg:px-16 py-16 mb-20"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-10">

     
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 bg-slate-50 p-6 rounded-xl"
          >
            <h2 className="text-6xl font-semibold">ABOUT US</h2>

            <button className="h-12 w-36 rounded-lg bg-black text-white hover:bg-slate-900 transition">
              Learn more
            </button>

            <div
              className="w-full h-[280px] sm:h-[360px] rounded-lg bg-cover bg-center shadow-md"
              style={{ backgroundImage: `url(${arch10})` }}
            />
          </motion.div>

      
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-8 justify-end"
          >
            <div className="grid grid-cols-2 gap-4">
              <AboutStat number={30} topic="Years of Experience" />
              <AboutStat number={230} topic="Projects Completed" />
              <AboutStat number={45} topic="Awards Gained" />
              <AboutStat number={100} topic="Architectural Engineers" />
            </div>

            <div className="rounded-xl bg-stone-200 p-6 sm:p-8">
              <p className="text-base sm:text-lg leading-relaxed text-justify">
                Welcome to our architectural firm, where creativity meets
                functionality. With a passion for design excellence, we
                specialize in crafting innovative and sustainable spaces that
                inspire.
              </p>
            </div>
          </motion.div>

      
          <motion.div
            variants={fadeIn}
            className="bg-slate-50 p-6 rounded-xl"
          >
            <div
              className="w-full h-[360px] sm:h-[480px] lg:h-full rounded-xl bg-cover bg-center relative shadow-md"
              style={{ backgroundImage: `url(${arch14})` }}
            >
              <div className="absolute top-6 left-6 font-bold text-lg bg-white/80 px-4 py-2 rounded">
                WE THINK. WE CREATE.
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};


const AboutStat = ({ number, topic }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const frameRate = 16;
    const totalFrames = duration / frameRate;
    const increment = number / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="flex items-center gap-3 border border-slate-300 rounded-lg p-4 bg-white"
    >
      <p className="text-2xl sm:text-4xl font-bold tabular-nums">
        {count}+
      </p>
      <p className="text-xs sm:text-sm font-semibold leading-tight">
        {topic}
      </p>
    </motion.div>
  );
};

export default About;
