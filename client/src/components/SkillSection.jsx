import { Icon } from "@iconify/react";
import html5Icon from "@iconify/icons-logos/html-5";
import css3Icon from "@iconify/icons-logos/css-3";
import javascriptIcon from "@iconify/icons-logos/javascript";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import webpackIcon from "@iconify/icons-logos/webpack";
import djangoIcon from "@iconify/icons-logos/django-icon";
import nodeIcon from "@iconify/icons-logos/nodejs-icon";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import tailwindIcon from "@iconify/icons-logos/tailwindcss-icon";
import postgresIcon from "@iconify/icons-logos/postgresql";
import expressIcon from "@iconify-icons/simple-icons/express";
import jestIcon from "@iconify/icons-logos/jest";
import gitIcon from "@iconify/icons-logos/git-icon";
import mysqlIcon from "@iconify/icons-logos/mysql";
import cppIcon from "@iconify/icons-logos/c-plusplus";
import mongoIcon from "@iconify-icons/logos/mongodb-icon";

const SkillsSection = () => {
  const skills = {
    Languages: [
      { icon: html5Icon, name: "HTML5" },
      { icon: css3Icon, name: "CSS3" },
      { icon: javascriptIcon, name: "JavaScript" },
      { icon: cppIcon, name: "C++" },
      { icon: pythonIcon, name: "Python" },
    ],
    "Frameworks and Libraries": [
      { icon: reactIcon, name: "React" },
      { icon: tailwindIcon, name: "Tailwind" },
      { icon: nodeIcon, name: "Node.js" },
      { icon: expressIcon, name: "Express" },
      { icon: djangoIcon, name: "Django" },
      { icon: webpackIcon, name: "Webpack" },
      { icon: bootstrapIcon, name: "Bootstrap" },
    ],
    Others: [
      { icon: postgresIcon, name: "PostgreSQL" },
      { icon: mongoIcon, name: "MongoDB" },
      { icon: mysqlIcon, name: "MySQL" },
      { icon: gitIcon, name: "Git" },
      { icon: jestIcon, name: "Jest" },
    ],
  };

  return (
    <div>
      {Object.entries(skills).map(([category, items], index) => (
        <div
          key={category}
          className={`flex flex-col items-start justify-center ${
            category === "Others" ? "hidden xl:flex" : ""
          }`}
        >
          <p
            className={`${
              index === 0 ? "mt-0" : "mt-4 lg:mt-6"
            } text-base font-bold text-dark dark:text-light sm:text-lg`}
          >
            {category}
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-start gap-3 sm:gap-4">
            {items.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <Icon
                  icon={item.icon}
                  className={`h-auto ${
                    item.name === "MongoDB" ? "w-3 sm:w-4" : "w-6 sm:w-8"
                  }`}
                />
                <span className="mt-1 text-xs text-dark dark:text-light sm:text-xs">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
