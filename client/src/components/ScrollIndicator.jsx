import { motion } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-6 left-[47%] z-10 flex flex-col items-center justify-evenly gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
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
  );
}
