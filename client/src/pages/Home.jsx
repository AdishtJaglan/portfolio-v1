import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import AboutMobileView from "../components/AboutMobileView";
import AboutHidden from "../components/AboutHidden";
import ProjectCarousel from "../components/ProjectCarousel";
import ContactMeForm from "../components/ContactMeForm";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

console.log(import.meta.env.VITE_API_BASE_URL);

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [themeColor, setThemeColor] = useState([
    "group-hover:text-theme-1",
    "group-hover:bg-theme-1",
    "text-theme-1",
    "bg-theme-1",
  ]);
  const { width } = useWindowSize();
  const breakpoint = 768;

  const handleClick = () => {
    setIsVisible(!isVisible);
    setShowMore(!showMore);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about-section");
      const projectSection = document.querySelector("#project-section");
      const contactSection = document.querySelector("#contact-section");

      if (aboutSection && projectSection && contactSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        const aboutSectionOffset = window.scrollY + aboutSectionTop;

        const projectSectionTop = projectSection.getBoundingClientRect().top;
        const projectSectionOffset = window.scrollY + projectSectionTop;

        const contactSectionTop = contactSection.getBoundingClientRect().top;
        const contactSectionOffset = window.scrollY + contactSectionTop;

        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= contactSectionOffset) {
          setThemeColor([
            "group-hover:text-theme-4",
            "group-hover:bg-theme-4",
            "text-theme-4",
            "bg-theme-4",
          ]);
        } else if (scrollPosition >= projectSectionOffset + 150) {
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
    <main className="min-w-screen min-h-screen">
      <Navbar hoverColor={themeColor} accentColor={themeColor} />
      {width > breakpoint && <Sidebar accentColor={themeColor} />}
      <section
        id="landing-section"
        className="min-h-screen bg-light p-3 px-0 pt-[85px] transition-colors duration-300 dark:bg-dark xs:min-w-[110%] md:min-w-[100%]"
      >
        <Landing />
      </section>

      <section
        id="about-section"
        className={`relative ${width < breakpoint ? "h-[160vh]" : "h-[90vh]"} bg-light p-3 py-4 transition-colors duration-300 dark:bg-dark xs:min-w-[110%] md:min-w-[100%]`}
      >
        {width < breakpoint ? (
          <>
            <AboutMobileView />
          </>
        ) : (
          <>
            <About showMore={showMore} handleClick={handleClick} />
            {setTimeout(() => showMore, 100) && (
              <AboutHidden visible={isVisible} />
            )}
          </>
        )}
      </section>

      <section
        id="project-section"
        className="relative h-[95vh] bg-light px-0 py-4 transition-colors duration-300 dark:bg-dark xs:min-w-[110%] md:min-w-[100%]"
      >
        <ProjectCarousel breakpoint={breakpoint} width={width} />
      </section>

      <section
        id="contact-section"
        className="relative h-[95vh] bg-light py-4 transition-colors duration-300 dark:bg-dark xs:min-w-[110%] md:min-w-[100%]"
      >
        <ContactMeForm />
      </section>
      <Footer textColor={themeColor} />
    </main>
  );
}
