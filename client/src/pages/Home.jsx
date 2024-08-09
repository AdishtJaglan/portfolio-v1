import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import AboutHidden from "../components/AboutHidden";
import ProjectCarousel from "../components/ProjectCarousel";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [themeColor, setThemeColor] = useState([
    "group-hover:text-theme-1",
    "group-hover:bg-theme-1",
    "text-theme-1",
    "bg-theme-1",
  ]);

  const handleClick = () => {
    setIsVisible(!isVisible);
    setShowMore(!showMore);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about-section");
      const projectSection = document.querySelector("#project-section");

      if (aboutSection && projectSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        const aboutSectionOffset = window.scrollY + aboutSectionTop;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        const projectSectionTop = projectSection.getBoundingClientRect().top;
        const projectSectionOffset = window.scrollY + projectSectionTop;

        if (scrollPosition >= projectSectionOffset + 150) {
          setThemeColor([
            "group-hover:text-theme-3",
            "group-hover:bg-theme-3",
            "text-theme-3",
            "bg-theme-3",
          ]);
        } else if (scrollPosition >= aboutSectionOffset + 50) {
          setThemeColor([
            "group-hover:text-theme-2",
            "group-hover:bg-theme-2",
            "text-theme-2",
            "bg-theme-2",
          ]);
        } else {
          setThemeColor([
            "group-hover:text-theme-1",
            "group-hover:bg-theme-1",
            "text-theme-1",
            "bg-theme-1",
          ]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar hoverColor={themeColor} />
      <Sidebar accentColor={themeColor} />
      <main
        id="landing-section"
        className="h-full bg-light p-3 px-0 pt-[65px] transition-colors duration-300 dark:bg-dark md:pt-[90px]"
      >
        <Landing />
      </main>

      <section
        id="about-section"
        className="relative h-[95vh] w-full bg-light p-3 py-4 transition-colors duration-300 dark:bg-dark"
      >
        <About showMore={showMore} handleClick={handleClick} />
        {setTimeout(() => showMore, 100) && <AboutHidden visible={isVisible} />}
      </section>

      <section
        id="project-section"
        className="relative h-[95vh] w-full bg-light p-3 py-4 transition-colors duration-300 dark:bg-dark"
      >
        <ProjectCarousel />
      </section>
      <Footer textColor={themeColor} />
    </>
  );
}
