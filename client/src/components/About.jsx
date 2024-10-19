import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import PropTypes from "prop-types";
import Pfp from "/me.jpeg";

export default function About({ showMore, handleClick }) {
  return (
    <div className="absolute inset-0 bottom-0 z-20 flex h-full items-center justify-center overflow-hidden">
      <div
        className={`relative flex h-full w-[200%] transition-transform duration-700 ease-linear ${showMore ? "-translate-x-2/3" : ""}`}
      >
        <div className="absolute z-50 translate-x-24 rounded-full bg-theme-2 p-0.5 xs:right-3/4 xs:top-[35%] md:right-3/4 md:top-[35%] xl:right-[70%] xl:top-[30%]">
          <div className="rounded-full bg-white p-2 dark:bg-dark">
            <img
              src={Pfp}
              className="rounded-full xs:h-[10rem] xs:w-[10rem] md:h-[12rem] md:w-[12rem] lg:h-[15rem] lg:w-[15rem] xl:h-[20rem] xl:w-[20rem]"
            />
          </div>
        </div>

        <div className="flex h-full w-[100vw] xl:w-[95vw]">
          <div className="ml-0 w-1/4 bg-light dark:bg-theme-2 xl:ml-[2.3rem]"></div>
          <div
            className={`flex w-3/4 flex-col items-center justify-center bg-theme-2 p-8 transition-opacity duration-700 ease-in dark:bg-dark ${showMore ? "opacity-60" : ""} `}
          >
            <div className="md:translate-y ml-[7rem] flex w-full max-w-2xl flex-col justify-center space-y-6 xs:-translate-y-4 xs:translate-x-12 md:translate-x-0 md:translate-y-1 lg:translate-y-6 xl:translate-y-1">
              <p className="-mb-4 text-sm font-bold tracking-wider text-dark dark:text-light md:text-xl">
                HI<span className="text-light dark:text-theme-2">,</span> I AM
              </p>
              <h1 className="mt-0 text-3xl font-black tracking-wide text-dark dark:text-light sm:text-2xl md:text-5xl lg:text-7xl">
                ADISHT JAGLAN
              </h1>
              <p className="mt-0 text-sm font-bold tracking-wide text-dark dark:text-light md:text-xl">
                SOFTWARE DEVELOPER
              </p>
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
    </div>
  );
}

About.propTypes = {
  showMore: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
