import Pfp from "/me.jpeg";
import SkillsSection from "./SkillSection";

const AboutMobileView = () => {
  return (
    <>
      <div className="mb-3 flex flex-col items-center gap-8">
        <p className="w-[90vw] text-left text-4xl font-black text-black dark:text-white">
          ABOUT<span className="text-theme-2">.</span>
        </p>

        <div className="rounded-full bg-theme-2 p-0.5">
          <div className="rounded-full bg-white p-2 dark:bg-dark">
            <img src={Pfp} className="h-72 w-72 rounded-full" />
          </div>
        </div>

        <div>
          <p className="text-xl font-bold tracking-wider text-dark dark:text-light">
            HI<span className="text-light dark:text-theme-2">,</span> I AM
          </p>
          <h1 className="mt-0 text-3xl font-black tracking-widest text-dark dark:text-light">
            ADISHT JAGLAN
          </h1>
          <p className="mt-0 text-xl font-bold tracking-wide text-dark dark:text-light">
            SOFTWARE DEVELOPER
          </p>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-end gap-12 bg-light transition-opacity duration-500 dark:bg-dark">
        <div className="mx-6 h-full w-full border-y-2 border-theme-2 p-8">
          <p className="mb-2 text-3xl font-black text-dark dark:text-light">
            How I Started
          </p>
          <p className="my-4 mt-0 text-xl font-extralight tracking-wider text-dark dark:text-light">
            Hi, I am Adisht Jaglan, a dedicated Software Development Engineer
            from India.
          </p>
          <p className="my-4 text-lg font-extralight tracking-wider text-dark dark:text-light">
            I have been deeply immersed in coding and software development since
            January 2024. Over this period, I have completed numerous projects
            and thoroughly explored the realm of JavaScript. Currently, I am
            expanding my knowledge of JavaScript frameworks and libraries such
            as React and Node.js, while concurrently honing my skills in Python
            and Django.
          </p>
          <p className="my-4 text-lg font-extralight tracking-wider text-dark dark:text-light">
            Feel free to reach out to me for paid work, as well as job or
            internship opportunities.
          </p>

          <SkillsSection />
        </div>
      </div>
    </>
  );
};

export default AboutMobileView;
