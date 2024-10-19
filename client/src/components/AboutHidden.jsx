import PropTypes from "prop-types";
import pfp from "/placeholder-pfp.jpg";
import SkillsSection from "./SkillSection";

export default function AboutHidden({ visible }) {
  return (
    <>
      {visible && (
        <div className="flex h-[95vh] w-full items-center justify-end gap-12 bg-light transition-opacity duration-500 dark:bg-dark">
          <div className="mx-6 flex h-full flex-col items-center justify-center">
            <div className="my-6 rounded-full border-2 border-theme-2 bg-light p-2 dark:bg-dark">
              <img src={pfp} className="h-auto w-72 rounded-full" />
            </div>
            <p className="my-6 text-7xl font-black text-dark dark:text-light">
              ABOUT<span className="font-black text-theme-2">.</span>
            </p>
          </div>
          <div className="mx-6 h-[80vh] w-1/3 border-y-2 border-theme-2 p-8">
            <p className="my-4 mt-0 text-base font-extralight tracking-wider text-dark dark:text-light">
              Hi, I am Adisht Jaglan, a dedicated Software Engineer from India.
            </p>
            <p className="my-4 text-base font-extralight tracking-wider text-dark dark:text-light">
              I have been deeply immersed in coding and software development
              since January 2024. Over this period, I have completed numerous
              projects and thoroughly explored the realm of JavaScript.
              Currently, I am expanding my knowledge of JavaScript frameworks
              and libraries such as React and Node.js, while concurrently honing
              my skills in Python and Django.
            </p>
            <p className="my-4 text-base font-extralight tracking-wider text-dark dark:text-light">
              Feel free to reach out to me for paid work, as well as job or
              internship opportunities.
            </p>

            <SkillsSection />
          </div>
        </div>
      )}
    </>
  );
}

AboutHidden.propTypes = {
  visible: PropTypes.bool.isRequired,
};
