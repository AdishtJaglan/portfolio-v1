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
    <nav className="bg-light dark:bg-dark fixed left-0 top-0 z-50 flex w-full items-center justify-between px-8 pb-2 pt-4">
      <p className="text-dark dark:text-light ml-4 text-3xl font-bold tracking-tight">
        Adisht Jaglan
      </p>

      <div className="group mr-4 flex w-28 items-center justify-between">
        <span onClick={() => handleClick()}>
          {darkMode ? (
            <FiSun className="text-light group-hover:text-theme-1 h-auto w-8 cursor-pointer transition duration-500" />
          ) : (
            <FiMoon className="text-dark group-hover:text-theme-1 h-auto w-8 cursor-pointer transition duration-500" />
          )}
        </span>

        <div className="bg-dark group-hover:bg-theme-1 dark:bg-light rounded-full p-1 transition duration-500">
          <img src={pfp} className="h-auto w-12 rounded-full" />
        </div>
      </div>
    </nav>
  );
}
