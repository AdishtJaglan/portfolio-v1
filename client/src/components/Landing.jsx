import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ScrollIndicator from "./ScrollIndicator";

export default function Landing() {
  return (
    <div className="relative flex h-[100%] w-full items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-full w-[100%] xl:w-[95%]">
          <div className="w-1/2 bg-theme-1"></div>
          <div className="w-1/2 bg-light dark:bg-dark"></div>
        </div>
      </div>
      <motion.div
        className="relative z-10"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col leading-none">
          <motion.div
            className="montserrat text-8xl font-black text-dark dark:text-light sm:text-[7rem] md:text-[8.5rem] lg:text-[9.5rem]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            HE
          </motion.div>
          <motion.div
            className="montserrat -mt-[0.2em] text-8xl font-black text-dark dark:text-light sm:text-[7rem] md:text-[8.5rem] lg:text-[9.5rem]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            LLO<span className="montserrat text-theme-1">.</span>
          </motion.div>
        </div>
      </motion.div>
      <ScrollIndicator />
      <div className="lg:top-22 fixed bottom-12 right-4 z-10 flex flex-col gap-4 lg:bottom-auto lg:left-auto lg:right-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AdishtJaglan/"
        >
          <FaGithub className="h-auto xs:w-8 w-6 cursor-pointer text-2xl text-dark transition-all duration-300 hover:scale-110 dark:text-light" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adisht-jaglan-92441b1b8/"
        >
          <FaLinkedin className="h-auto xs:w-8 w-6 cursor-pointer text-2xl text-dark transition-all duration-300 hover:scale-110 dark:text-light" />
        </a>
      </div>
    </div>
  );
}
