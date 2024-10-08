import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import PropTypes from "prop-types";
import pfp from "/placeholder-pfp.jpg";

export default function Navbar({ hoverColor }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-light px-4 py-4 transition-colors duration-300 dark:bg-dark sm:px-8">
      <p className="text-xl font-bold tracking-tight text-dark dark:text-light sm:ml-4 md:text-3xl">
        adisht jaglan
      </p>

      <div className="group flex items-center justify-between gap-4 sm:mr-4 lg:w-28">
        <span onClick={() => handleClick()}>
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
            className="h-auto w-7 rounded-full xs:w-10 sm:w-9 md:w-10 lg:w-12"
          />
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  hoverColor: PropTypes.array.isRequired,
};
