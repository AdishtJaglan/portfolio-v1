import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

export default function Sidebar({ accentColor }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleSidebar = () => {
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
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
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="fixed left-6 top-1/2 z-50 h-full">
      <div
        onClick={toggleSidebar}
        className={`group rotate-90 cursor-pointer transition-transform duration-300 ${
          isExpanded ? "translate-x-[-100px]" : ""
        }`}
      >
        <div className="flex animate-bounce flex-col items-center justify-center gap-4">
          <p className="relative rotate-180 text-xl font-bold tracking-wide text-dark before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-dark before:transition-all before:duration-300 group-hover:before:w-full dark:text-light dark:before:bg-light">
            MENU
          </p>
          <IoMenu className="h-auto w-10 rotate-90 text-dark dark:text-light" />
        </div>
      </div>
      <div
        className={`fixed left-0 top-16 z-0 h-[90vh] w-1/2 bg-gradient-to-r from-light via-light transition-all duration-300 ease-in-out dark:from-dark dark:via-dark ${
          isExpanded ? "translate-x-0" : "translate-x-[-100%]"
        } ${isAnimating ? "visible opacity-100" : isExpanded ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div className="ml-24 flex h-full w-1/3 items-center justify-between">
          <div className="group m-8 -translate-x-8 cursor-pointer">
            <IoClose
              onClick={toggleSidebar}
              className="relative h-auto w-[3rem] rotate-0 text-xl font-bold tracking-wide text-dark transition-transform duration-700 ease-in-out group-hover:rotate-180 dark:text-light"
            />
          </div>
          <nav className="mt-4 flex h-full flex-col items-start justify-evenly">
            <p className="text-7xl font-black tracking-wider text-dark dark:text-light">
              <span className={`${accentColor[2]}`}>M</span>ENU
            </p>

            <div className="flex flex-col items-start justify-center">
              <div
                onClick={() => handleNavClick("landing-section")}
                className={`${accentColor[2] === "text-theme-1" ? "" : "group"} relative`}
              >
                <p
                  className={`relative z-20 my-2 inline-block cursor-pointer ${accentColor[2] === "text-theme-1" ? "text-gray-500" : "text-dark dark:text-light"} text-4xl font-extrabold tracking-wide`}
                >
                  HOME
                  {accentColor[2] === "text-theme-1" ? (
                    <span
                      className={`${accentColor[2]} text-4xl font-extrabold`}
                    >
                      .
                    </span>
                  ) : (
                    <></>
                  )}
                </p>
                <div className="absolute bottom-0 left-0 right-0 top-1/3 z-10 h-1/3 w-0 bg-theme-1 transition-all duration-500 group-hover:w-full"></div>
              </div>
              <div
                onClick={() => handleNavClick("about-section")}
                className={`relative ${accentColor[2] === "text-theme-2" ? "" : "group"}`}
              >
                <p
                  className={`relative z-20 my-2 inline-block cursor-pointer ${accentColor[2] === "text-theme-2" ? "text-gray-500" : "text-dark dark:text-light"} text-4xl font-extrabold tracking-wide`}
                >
                  ABOUT
                  {accentColor[2] === "text-theme-2" ? (
                    <span
                      className={`${accentColor[2]} text-4xl font-extrabold`}
                    >
                      .
                    </span>
                  ) : (
                    <></>
                  )}
                </p>
                <div className="absolute bottom-0 left-0 right-0 top-1/3 z-10 h-1/3 w-0 bg-theme-2 transition-all duration-500 group-hover:w-full"></div>
              </div>
              <div
                onClick={() => handleNavClick("project-section")}
                className={`${accentColor[2] === "text-theme-3" ? "" : "group"} relative`}
              >
                <p
                  className={`relative z-20 my-2 inline-block ${accentColor[2] === "text-theme-3" ? "text-gray-500" : "text-dark dark:text-light"} cursor-pointer text-4xl font-extrabold tracking-wide`}
                >
                  PROJECT
                  {accentColor[2] === "text-theme-3" ? (
                    <span
                      className={`${accentColor[2]} text-4xl font-extrabold`}
                    >
                      .
                    </span>
                  ) : (
                    <></>
                  )}
                </p>
                <div className="absolute bottom-0 left-0 right-0 top-1/3 z-10 h-1/3 w-0 bg-theme-3 transition-all duration-500 group-hover:w-full"></div>
              </div>
              <div
                onClick={() => handleNavClick("contact-section")}
                className={`${accentColor[2] === "text-theme-4" ? "" : "group"} relative`}
              >
                <p
                  className={`relative z-20 my-2 inline-block ${accentColor[2] === "text-theme-4" ? "text-gray-500" : "text-dark dark:text-light"} cursor-pointer text-4xl font-extrabold tracking-wide`}
                >
                  CONTACT
                  {accentColor[2] === "text-theme-4" ? (
                    <span
                      className={`${accentColor[2]} text-4xl font-extrabold`}
                    >
                      .
                    </span>
                  ) : (
                    <></>
                  )}
                </p>
                <div className="bg-theme-4 absolute bottom-0 left-0 right-0 top-1/3 z-10 h-1/3 w-0 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>

            <div>
              <p className="my-3 text-lg font-thin tracking-wide text-dark dark:text-light">
                ADISHT JAGLAN
              </p>
              <p className="my-3 text-lg font-thin tracking-wide text-dark dark:text-light">
                adisht7524@gmail.com
              </p>
              <div className="my-3 flex items-center justify-start gap-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/AdishtJaglan/"
                >
                  <FaGithub className="h-auto w-10 cursor-pointer text-dark transition-transform duration-300 hover:scale-110 dark:text-light" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/adisht-jaglan-92441b1b8/"
                >
                  <FaLinkedin className="h-auto w-10 cursor-pointer text-dark transition-transform duration-300 hover:scale-110 dark:text-light" />
                </a>
              </div>
            </div>

            <p className="text-base font-thin text-dark dark:text-light">
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
          </nav>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  accentColor: PropTypes.array.isRequired,
};
