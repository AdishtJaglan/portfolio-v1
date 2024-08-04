import { Icon } from "@iconify/react";
import html5Icon from "@iconify-icons/logos/html-5";
import css3Icon from "@iconify-icons/logos/css-3";
import javascriptIcon from "@iconify-icons/logos/javascript";
import pythonIcon from "@iconify-icons/logos/python";
import cIcon from "@iconify-icons/logos/c";
import reactIcon from "@iconify/icons-logos/react.js";
import webpackIcon from "@iconify/icons-logos/webpack";
import djangoIcon from "@iconify/icons-logos/django";
import nodeIcon from "@iconify/icons-logos/nodejs";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import tailwindIcon from "@iconify/icons-logos/tailwindcss-icon";
import expressIcon from "@iconify/icons-logos/express";
import postgresIcon from "@iconify/icons-logos/postgresql";
import mongoIcon from "@iconify/icons-logos/mongodb";
import jestIcon from "@iconify/icons-logos/jest";
import gitIcon from "@iconify/icons-logos/git-icon";
import mysqlIcon from "@iconify/icons-logos/mysql";
import cppIcon from "@iconify/icons-logos/c-plusplus";
import pfp from "/placeholder-pfp.jpg";

export default function AboutHidden() {
  return (
    <div className="flex h-[95vh] w-full items-center justify-end gap-12 bg-light dark:bg-dark">
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
          I have been deeply immersed in coding and software development since
          January 2024. Over this period, I have completed numerous projects and
          thoroughly explored the realm of JavaScript. Currently, I am expanding
          my knowledge of JavaScript frameworks and libraries such as React and
          Node.js, while concurrently honing my skills in Python and Django.
        </p>
        <p className="my-4 text-base font-extralight tracking-wider text-dark dark:text-light">
          Feel free to reach out to me for paid work, as well as job or
          internship opportunities.
        </p>

        <div className="my-5 flex flex-col items-start justify-center">
          <p className="my-2 text-lg font-bold text-dark dark:text-light">
            Languages
          </p>
          <div className="flex items-center justify-start gap-4">
            <Icon icon={html5Icon} className="h-auto w-8" />
            <Icon icon={css3Icon} className="h-auto w-8" />
            <Icon icon={javascriptIcon} className="h-auto w-8" />
            <Icon icon={cIcon} className="h-auto w-8" />
            <Icon icon={pythonIcon} className="h-auto w-8" />
          </div>
        </div>
        <div className="my-5 flex flex-col items-start justify-center">
          <p className="my-2 text-lg font-bold text-dark dark:text-light">
            Frameworks and Libraries
          </p>
          <div className="flex items-center justify-start gap-4">
            <Icon icon={reactIcon} className="h-auto w-8" />
            <Icon icon={webpackIcon} className="h-auto w-8" />
            <Icon icon={djangoIcon} className="h-auto w-8" />
            <Icon icon={nodeIcon} className="h-auto w-8" />
            <Icon icon={bootstrapIcon} className="h-auto w-8" />
            <Icon icon={tailwindIcon} className="h-auto w-8" />
            <Icon icon={expressIcon} className="h-auto w-8" />
          </div>
        </div>
        <div className="my-5 flex flex-col items-start justify-center">
          <p className="my-2 text-lg font-bold text-dark dark:text-light">
            Others
          </p>
          <div className="flex items-center justify-start gap-4">
            <Icon icon={postgresIcon} className="h-auto w-8" />
            <Icon icon={mongoIcon} className="h-auto w-8" />
            <Icon icon={jestIcon} className="h-auto w-8" />
            <Icon icon={gitIcon} className="h-auto w-8" />
            <Icon icon={mysqlIcon} className="h-auto w-8" />
            <Icon icon={cppIcon} className="h-auto w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
