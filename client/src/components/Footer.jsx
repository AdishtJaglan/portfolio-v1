import { PiCopyright } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 flex w-full items-center justify-center gap-2 bg-light p-2 dark:bg-dark">
      <div className="flex items-center justify-center gap-1">
        <PiCopyright className="h-auto w-4 text-theme-1" />
        <span className="text-sm font-thin text-theme-1 no-underline">
          2024
        </span>
      </div>
      <p className="cursor-pointer text-sm font-thin text-dark underline dark:text-light">
        adisht jaglan
      </p>
    </footer>
  );
}
