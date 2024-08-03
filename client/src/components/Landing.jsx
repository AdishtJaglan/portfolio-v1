import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ScrollIndicator from "./ScrollIndicator";

export default function Landing() {
  return (
    <div className="relative flex h-[90%] w-full items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-full w-[95%]">
          <div className="bg-theme-1 w-1/2"></div>
          <div className="bg-light dark:bg-dark w-1/2"></div>
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
            className="text-dark dark:text-light montserrat text-[9.5rem] font-black"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            HE
          </motion.div>
          <motion.div
            className="text-dark dark:text-light montserrat -mt-[0.2em] text-[9.5rem] font-black"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            LLO<span className="text-theme-1 montserrat">.</span>
          </motion.div>
        </div>
      </motion.div>
      <ScrollIndicator />
      <div className="top-22 absolute right-4 z-10 mr-4 flex flex-col gap-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AdishtJaglan/"
        >
          <FaGithub className="text-dark dark:text-light h-auto w-8 cursor-pointer text-2xl transition-all duration-300 hover:scale-110" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adisht-jaglan-92441b1b8/"
        >
          <FaLinkedin className="text-dark dark:text-light h-auto w-8 cursor-pointer text-2xl transition-all duration-300 hover:scale-110" />
        </a>
      </div>
    </div>
  );
}
