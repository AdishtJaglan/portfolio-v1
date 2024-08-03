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
    <nav className="flex items-center justify-between p-6">
      <p className="text-3xl font-bold tracking-tight">Adisht Jaglan</p>

      <div className="flex w-28 items-center justify-between">
        <span onClick={() => handleClick()}>
          {darkMode ? (
            <FiSun className="h-auto w-8 cursor-pointer" />
          ) : (
            <FiMoon className="h-auto w-8 cursor-pointer" />
          )}
        </span>

        <img src={pfp} className="h-auto w-12 rounded-full" />
      </div>
    </nav>
  );
}
