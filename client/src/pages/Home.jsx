import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full bg-light p-3 px-0 pt-[65px] md:pt-[90px] dark:bg-dark">
        <Landing />
      </main>
      <div className="h-full w-full bg-theme-2"></div>
      <Footer />
    </>
  );
}
