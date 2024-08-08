import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import img1 from "/admin-dashboard.png";
import img2 from "/clothing.png";
import img3 from "/task-manager.png";
import img4 from "/zerofai.png";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return 0;
        }
        return oldProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setProgress(0);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };

  return (
    <>
      <div className="flex h-1 w-1/4 bg-dark dark:bg-theme-3">
        <div
          className="h-full bg-white transition-all duration-500 ease-linear"
          style={{
            width: `${progress}%`,
            transform: "scaleX(1)",
            transformOrigin: "center",
          }}
        />
      </div>
      <div className="h-[55%] w-[60%] rounded-lg border-2 border-light p-3 dark:border-theme-3">
        <div className="relative h-full w-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group absolute h-full w-full transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative h-full w-full">
                <span className="absolute left-4 top-4 z-50 text-8xl font-black text-black transition-opacity duration-300 group-hover:opacity-0 dark:text-light">
                  0{1 + index}
                </span>
                <p className="absolute inset-0 z-50 flex items-center justify-center text-5xl font-black text-black transition-opacity duration-300 group-hover:opacity-0 dark:text-light">
                  {image.name}
                </p>
                <FaChevronLeft
                  onClick={handlePrevClick}
                  className="dark:hover:text-black-60 absolute left-0 top-1/2 z-50 h-auto w-16 -translate-y-1/2 cursor-pointer bg-black/40 p-3 text-white/35 transition-opacity duration-300 hover:bg-black/60 hover:text-white/45 dark:bg-white/35 dark:text-black/40 dark:hover:bg-white/55"
                />
                <FaChevronRight
                  onClick={handleNextClick}
                  className="dark:hover:text-black-60 absolute right-0 top-1/2 z-50 h-auto w-16 -translate-y-1/2 cursor-pointer bg-black/40 p-3 text-white/35 transition-opacity duration-300 hover:bg-black/60 hover:text-white/45 dark:bg-white/35 dark:text-black/40 dark:hover:bg-white/55"
                />
                <div className="absolute inset-0 z-40 h-full w-full rounded-lg bg-light opacity-40 transition-opacity duration-300 dark:bg-black"></div>
                <img
                  src={image.img}
                  alt={`Slide ${index + 1}`}
                  className="relative z-20 h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`transition-color h-3 w-12 rounded-full border border-light duration-500 hover:bg-white dark:border-theme-3 dark:hover:bg-theme-3 ${
              index === currentIndex
                ? "bg-light dark:bg-theme-3"
                : "bg-theme-3 dark:bg-dark"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default function ProjectCarousel() {
  const carouselImages = [
    {
      img: img1,
      name: "Dashboard",
    },
    {
      img: img2,
      name: "Clothing.",
    },
    {
      img: img3,
      name: "Task Manager",
    },
    {
      img: img4,
      name: "Zerofai",
    },
  ];

  const handleTopArrowClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex h-[100%] w-full items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-full w-[100%] xl:w-[95%]">
          <div className="bg-red flex h-full w-[85%] flex-col items-center justify-center gap-4 bg-theme-3 dark:bg-dark">
            <Carousel images={carouselImages} />
          </div>
          <div className="relative w-[20%] bg-light dark:bg-theme-3">
            <div className="absolute bottom-1/3 right-0 rotate-90 leading-none">
              <p className="mb-[-0.2em] text-[9.5rem] font-black text-dark dark:text-light">
                PRO
              </p>
              <p className="mt-[-1.5rem] text-[9.5rem] font-black text-dark dark:text-light">
                JECTS<span className="text-light dark:text-theme-3">.</span>
              </p>
            </div>
            <motion.div
              className="absolute bottom-12 left-0 z-10 flex cursor-pointer flex-col items-center justify-evenly gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              onClick={() => handleTopArrowClick()}
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <IoIosArrowRoundUp className="h-auto w-10 text-dark dark:text-light" />
              </motion.div>
              <motion.p
                className="text-lg font-light text-dark dark:text-light"
                animate={{ rotate: [90, 85, 90] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                top
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
