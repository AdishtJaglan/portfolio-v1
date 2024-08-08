import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import PropTypes from "prop-types";
import Skill from "./Skill";

export default function About({ showMore, handleClick }) {
  return (
    <div className="absolute inset-0 bottom-0 z-20 flex h-full items-center justify-center overflow-hidden">
      <div
        className={`relative flex h-full w-[200%] transition-transform duration-700 ease-linear ${showMore ? "-translate-x-2/3" : ""}`}
      >
        <div className="flex h-full w-[95vw]">
          <div className="ml-[2.3rem] w-1/4 bg-light dark:bg-theme-2"></div>
          <div
            className={`flex w-3/4 flex-col items-center justify-center bg-theme-2 p-8 transition-opacity duration-700 ease-in dark:bg-dark ${showMore ? "opacity-60" : ""} `}
          >
            <div className="ml-[7rem] flex w-full max-w-2xl flex-col justify-center space-y-6">
              <p className="text-3xl font-bold tracking-wider text-dark dark:text-light">
                HI <span className="text-light dark:text-theme-2">,</span> I AM
              </p>
              <h1 className="text-5xl font-black tracking-wider text-dark dark:text-light sm:text-6xl md:text-7xl">
                Adisht Jaglan
              </h1>
              <div className="flex w-3/4 flex-wrap items-center justify-between gap-4">
                <Skill>backend</Skill>
                <Skill>frontend</Skill>
                <Skill>designing</Skill>
              </div>
              <div className="flex w-3/4 flex-wrap items-center justify-between gap-4">
                <Skill>node/django</Skill>
                <Skill>react</Skill>
                <Skill>tailwind</Skill>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-12 left-[23%] z-10 flex flex-col items-center justify-evenly gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="-rotate-90 text-lg font-light text-dark dark:text-light"
            animate={{ rotate: [-90, -85, -90] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            scroll
          </motion.p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <IoIosArrowRoundDown className="h-auto w-7 text-dark dark:text-light" />
          </motion.div>
        </motion.div>

        <motion.div
          onClick={() => handleClick()}
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
          className={`absolute right-14 top-1/2 z-30 -translate-y-1/2 cursor-pointer`}
        >
          <div
            className={`group flex ${!showMore ? "" : "flex-row-reverse"} items-center`}
          >
            <p
              className={` ${showMore ? "-rotate-90" : "rotate-90"} relative cursor-pointer text-lg font-extrabold text-dark transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-dark before:transition-all before:duration-300 group-hover:before:w-full dark:text-light dark:before:bg-light`}
            >
              {showMore ? "BACK" : "MORE"}
            </p>
            <div className="-ml-2">
              {showMore ? (
                <FaChevronLeft className="h-auto w-8 text-dark dark:text-light" />
              ) : (
                <FaChevronRight className="h-auto w-8 text-dark dark:text-light" />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {!showMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeIn" }}
          className="right absolute left-1/4 top-1/3 z-10 lg:-translate-x-40"
        >
          <div className="flex flex-col leading-none">
            <div className="montserrat text-8xl font-black text-dark dark:text-light lg:text-[9.5rem]">
              AB
            </div>
            <div className="montserrat -mt-[0.2em] text-8xl font-black text-dark dark:text-light lg:text-[9.5rem]">
              OUT<span className="text-light dark:text-theme-2">.</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

About.propTypes = {
  showMore: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
