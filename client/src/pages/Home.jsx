import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-light dark:bg-dark h-full p-3 pt-[100px]">
        <Landing />
      </main>
      <div className="bg-theme-2 h-full w-full"></div>
      <Footer />
    </>
  );
}
