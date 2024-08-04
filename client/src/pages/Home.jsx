import { useState } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import AboutHidden from "../components/AboutHidden";
import Footer from "../components/Footer";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Navbar />
      <main className="h-full bg-light p-3 px-0 pt-[65px] transition-colors duration-300 dark:bg-dark md:pt-[90px]">
        <Landing />
      </main>
      <section className="relative h-[95vh] w-full bg-light p-3 py-4 transition-colors duration-300 dark:bg-dark">
        <About showMore={showMore} handleClick={handleClick} />
        {showMore && <AboutHidden />}
      </section>
      <Footer />
    </>
  );
}
