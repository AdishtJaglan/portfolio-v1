import PropTypes from "prop-types";

export default function Skill({ children }) {
  return (
    <div className="group">
      <p className="group-hover:text-primary-500 text-lg font-semibold tracking-wider text-dark transition-colors duration-300 dark:text-light sm:text-xl md:text-2xl">
        {children}{" "}
        <span className="font-extrabold text-light dark:text-theme-2">.</span>
      </p>
      <div className="bg-primary-500 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}

Skill.propTypes = {
  children: PropTypes.string.isRequired,
};
