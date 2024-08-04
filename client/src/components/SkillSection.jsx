import { Icon } from "@iconify/react";
import html5Icon from "@iconify/icons-logos/html-5";
import css3Icon from "@iconify/icons-logos/css-3";
import javascriptIcon from "@iconify/icons-logos/javascript";
import cIcon from "@iconify/icons-logos/c";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import webpackIcon from "@iconify/icons-logos/webpack";
import djangoIcon from "@iconify/icons-logos/django-icon";
import nodeIcon from "@iconify/icons-logos/nodejs-icon";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import tailwindIcon from "@iconify/icons-logos/tailwindcss-icon";
import expressIcon from "@iconify/icons-logos/express";
import postgresIcon from "@iconify/icons-logos/postgresql";
import mongoIcon from "@iconify/icons-logos/mongodb";
import jestIcon from "@iconify/icons-logos/jest";
import gitIcon from "@iconify/icons-logos/git-icon";
import mysqlIcon from "@iconify/icons-logos/mysql";
import cppIcon from "@iconify/icons-logos/c-plusplus";

const SkillsSection = () => {
  const skills = {
    Languages: [
      { icon: html5Icon, name: "HTML5" },
      { icon: css3Icon, name: "CSS3" },
      { icon: javascriptIcon, name: "JavaScript" },
      { icon: cIcon, name: "C" },
      { icon: pythonIcon, name: "Python" },
    ],
    "Frameworks and Libraries": [
      { icon: reactIcon, name: "React" },
      { icon: webpackIcon, name: "Webpack" },
      { icon: djangoIcon, name: "Django" },
      { icon: nodeIcon, name: "Node.js" },
      { icon: bootstrapIcon, name: "Bootstrap" },
      { icon: tailwindIcon, name: "Tailwind" },
      { icon: expressIcon, name: "Express" },
    ],
    Others: [
      { icon: postgresIcon, name: "PostgreSQL" },
      { icon: mongoIcon, name: "MongoDB" },
      { icon: jestIcon, name: "Jest" },
      { icon: gitIcon, name: "Git" },
      { icon: mysqlIcon, name: "MySQL" },
      { icon: cppIcon, name: "C++" },
    ],
  };

  return (
    <div>
      {Object.entries(skills).map(([category, items], index) => (
        <div
          key={category}
          className="flex flex-col items-start justify-center"
        >
          <p
            className={`${index === 0 ? "mt-0" : "my-2"} text-lg font-bold text-dark dark:text-light`}
          >
            {category}
          </p>
          <div className="flex flex-wrap items-end justify-start gap-4">
            {items.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <Icon icon={item.icon} className="h-auto w-8" />
                <span className="mt-1 text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
