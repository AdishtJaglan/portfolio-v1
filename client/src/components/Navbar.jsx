import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import pfp from "/placeholder-pfp.jpg";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-light px-4 py-4 dark:bg-dark sm:px-8">
      <p className="text-xl font-bold tracking-tight text-dark dark:text-light sm:ml-4 md:text-3xl">
        adisht jaglan
      </p>

      <div className="group flex items-center justify-between gap-4 sm:mr-4 lg:w-28">
        <span onClick={() => handleClick()}>
          {darkMode ? (
            <FiSun className="xs:w-5 h-auto w-5 cursor-pointer text-light transition duration-500 group-hover:text-theme-1 sm:w-6 lg:w-7" />
          ) : (
            <FiMoon className="xs:w-5 h-auto w-5 cursor-pointer text-dark transition duration-500 group-hover:text-theme-1 sm:w-6 lg:w-7" />
          )}
        </span>

        <div className="xs:p-1 rounded-full bg-dark p-[0.15rem] transition duration-500 group-hover:bg-theme-1 dark:bg-light">
          <img
            src={pfp}
            className="xs:w-10 h-auto w-7 rounded-full sm:w-9 md:w-10 lg:w-12"
          />
        </div>
      </div>
    </nav>
  );
}
