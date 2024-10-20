import { useState, useEffect } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import pfp from "/me.jpeg";

export default function Navbar({ hoverColor, accentColor }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const offsets = {
      "about-section": -40,
    };

    const offset = offsets[sectionId] || 0;

    window.scrollTo({
      top: section.offsetTop + offset,
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full bg-light px-4 py-4 transition-colors duration-300 dark:bg-dark sm:px-8">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold tracking-tight text-dark dark:text-light sm:ml-4 md:text-3xl">
            adisht jaglan
          </p>

          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="z-50 text-dark dark:text-light"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          ) : (
            <div className="group flex items-center justify-between gap-4 sm:mr-4 lg:w-28">
              <span onClick={handleClick}>
                {darkMode ? (
                  <FiSun
                    className={`h-auto w-5 cursor-pointer text-light transition duration-500 xs:w-5 ${hoverColor[0]} sm:w-6 lg:w-7`}
                  />
                ) : (
                  <FiMoon
                    className={`h-auto w-5 cursor-pointer text-dark transition duration-500 xs:w-5 ${hoverColor[0]} sm:w-6 lg:w-7`}
                  />
                )}
              </span>

              <div
                className={`rounded-full bg-dark p-[0.15rem] transition duration-500 xs:p-1 ${hoverColor[1]} dark:bg-light`}
              >
                <img
                  src={pfp}
                  alt="Profile"
                  className="h-auto w-7 rounded-full xs:w-10 sm:w-9 md:w-10 lg:w-12"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className="fixed right-0 top-0 z-50 mt-12 h-full w-1/2 overflow-y-auto rounded-l-xl bg-light shadow-lg dark:bg-dark"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex h-full flex-col items-start justify-between space-y-8 px-8 py-16 pb-36">
              <div className="flex flex-col items-start justify-evenly gap-6">
                <motion.button
                  variants={menuItemVariants}
                  onClick={() => handleNavClick("landing-section")}
                  className={`text-4xl font-extrabold tracking-wide ${accentColor[2] === "text-theme-1" ? "text-gray-500" : "text-dark dark:text-light"}`}
                >
                  HOME
                  {accentColor[2] === "text-theme-1" && (
                    <span
                      className={`${accentColor[2]} text-4xl font-extrabold`}
                    >
                      .
                    </span>
                  )}
                </motion.button>
                <motion.button
                  variants={menuItemVariants}
                  onClick={() => handleNavClick("about-section")}
                  className={`text-4xl font-extrabold tracking-wide ${accentColor[2] === "text-theme-2" ? "text-gray-500" : "text-dark dark:text-light"}`}
                >
                  ABOUT
                  {accentColor[2] === "text-theme-2" && (
                    <span
                      className={`${accentColor[2]} text-4xl font-extrabold`}
                    >
                      .
                    </span>
                  )}
                </motion.button>
                <motion.button
                  variants={menuItemVariants}
                  onClick={() => handleNavClick("project-section")}
                  className={`text-4xl font-extrabold tracking-wide ${accentColor[2] === "text-theme-3" ? "text-gray-500" : "text-dark dark:text-light"}`}
                >
                  PROJECT
                  {accentColor[2] === "text-theme-3" && (
                    <span
                      className={`${accentColor[2]} text-4xl font-extrabold`}
                    >
                      .
                    </span>
                  )}
                </motion.button>
                <motion.button
                  variants={menuItemVariants}
                  onClick={() => handleNavClick("contact-section")}
                  className={`text-4xl font-extrabold tracking-wide ${accentColor[2] === "text-theme-4" ? "text-gray-500" : "text-dark dark:text-light"}`}
                >
                  CONTACT
                  {accentColor[2] === "text-theme-4" && (
                    <span
                      className={`${accentColor[2]} text-4xl font-extrabold`}
                    >
                      .
                    </span>
                  )}
                </motion.button>
              </div>
              <div className="w-full">
                <motion.div
                  variants={menuItemVariants}
                  className="mt-8 flex w-full items-center justify-evenly space-x-4 xs:justify-start sm:justify-start"
                >
                  <div
                    className={`rounded-full bg-dark p-1 ${hoverColor[1]} dark:bg-light`}
                  >
                    <img
                      src={pfp}
                      alt="Profile"
                      className="h-24 w-24 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <a
                      href="https://github.com/AdishtJaglan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-8 w-8 text-dark dark:text-light" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adisht-jaglan-92441b1b8/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="h-8 w-8 text-dark dark:text-light" />
                    </a>
                    <span onClick={handleClick} className="cursor-pointer">
                      {darkMode ? (
                        <FiSun
                          className={`h-8 w-8 text-light ${hoverColor[0]}`}
                        />
                      ) : (
                        <FiMoon
                          className={`h-8 w-8 text-dark ${hoverColor[0]}`}
                        />
                      )}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  variants={menuItemVariants}
                  className="mt-8 flex flex-col items-start gap-2 space-x-4"
                >
                  <div className="text-lg font-thin tracking-wide text-dark dark:text-light">
                    ADISHT JAGLAN
                  </div>
                  <p className="!ml-0 text-lg font-thin tracking-wide text-dark dark:text-light">
                    adisht7524@gmail.com
                  </p>
                  <p className="!ml-0 text-base font-thin text-dark dark:text-light">
                    Inspired by{" "}
                    <a
                      className="cursor-pointer underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.awwwards.com/sites/wokine"
                    >
                      Wokine
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

Navbar.propTypes = {
  hoverColor: PropTypes.array.isRequired,
  accentColor: PropTypes.array.isRequired,
};
