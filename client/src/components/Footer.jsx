import { PiCopyright } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-light dark:bg-dark fixed bottom-0 z-50 flex w-full items-center justify-center gap-2 p-2">
      <div className="flex items-center justify-center gap-1">
        <PiCopyright className="text-theme-1 h-auto w-4" />
        <span className="text-theme-1 text-sm font-thin no-underline">
          2024
        </span>
      </div>
      <p className="dark:text-light text-dark cursor-pointer text-sm font-thin underline">
        Adisht Jaglan
      </p>
    </footer>
  );
}
