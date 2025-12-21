import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const isMobile = window.innerWidth < 700;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-center items-start pt-3">

      <motion.div
        initial={{
          width: 48,
          height: 48,
          aspectRatio: "1 / 1",
          borderRadius: "100%",
          backgroundColor: "#000",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
        animate={{
          width: isMobile ? "95%" : "60%",
          height: 52,
          borderRadius: "9999px",
          backgroundColor: "#ffffff",
          paddingLeft: "28px",
          paddingRight: "28px",
        }}
        transition={{
          delay: 1,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="border border-slate-300 flex items-center justify-between shadow-sm overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex w-full items-center justify-between"
        >
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
          >
            Logo
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-2">
            <NavButton label="Home" onClick={() => scrollToSection("home")} />
            <NavButton label="About" onClick={() => scrollToSection("about")} />
            <NavButton label="Featured" onClick={() => scrollToSection("featured")} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const NavButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="transition duration-300 px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-slate-900 hover:text-white"
  >
    {label}
  </button>
);

export default NavBar;
