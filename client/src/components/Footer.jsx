import { PiCopyright } from "react-icons/pi";
import PropTypes from "prop-types";

export default function Footer({ textColor }) {
  return (
    <footer className="fixed bottom-0 z-50 flex w-full items-center justify-center gap-2 bg-light p-2 transition-colors duration-300 dark:bg-dark">
      <div className="flex items-center justify-center gap-1">
        <PiCopyright className={`h-auto w-4 ${textColor[2]}`} />
        <span className={`${textColor[2]} text-sm font-extralight no-underline`}>
          2024
        </span>
      </div>
      <p className="cursor-pointer text-sm font-extralight text-dark underline dark:text-light">
        adisht jaglan
      </p>
    </footer>
  );
}

Footer.propTypes = {
  textColor: PropTypes.array.isRequired,
};
