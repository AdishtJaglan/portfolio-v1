import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiPhone,
} from "react-icons/fi";

export default function ContactMeForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="dark:bg-theme-4 relative h-full w-[15%] bg-light">
        <div className="absolute -left-1/2 bottom-1/3 flex translate-x-10 -rotate-90 flex-col items-start justify-center leading-none tracking-tight">
          <p className="text-[7.5rem] font-black text-dark dark:text-light">
            CONTACT
          </p>
          <p className="-mt-[0.1em] text-[7.5rem] font-black text-dark dark:text-light">
            ME<span className="dark:text-theme-4 text-light">.</span>
          </p>
        </div>
      </div>
      <div className="bg-theme-4 flex h-full w-[80%] items-center justify-center dark:bg-dark">
        <div className="w-full max-w-md px-6">
          <form
            onSubmit={handleSubmit}
            className="relative z-50 overflow-hidden rounded-2xl bg-light/90 p-8 shadow-lg backdrop-blur-lg dark:bg-white/10"
          >
            <div className="dark:from-theme-4/30 from-theme-4/10 absolute inset-0 bg-gradient-to-br to-light/30 opacity-50 dark:to-[#27272a]/30"></div>
            <div className="relative z-10">
              <h1 className="mb-6 text-4xl font-bold text-dark/90 dark:text-white/80">
                Get in Touch
              </h1>
              <div className="mb-6 space-y-4">
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/60 dark:text-white/60" />
                  <input
                    className="focus:border-theme-4 dark:focus:border-theme-4 w-full rounded-lg border border-dark/10 bg-white/30 py-3 pl-10 pr-4 text-dark placeholder-dark/60 outline-none transition focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:placeholder-white/60"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/60 dark:text-white/60" />
                  <input
                    className="focus:border-theme-4 dark:focus:border-theme-4 w-full rounded-lg border border-dark/10 bg-white/30 py-3 pl-10 pr-4 text-dark placeholder-dark/60 outline-none transition focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:placeholder-white/60"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/60 dark:text-white/60" />
                  <input
                    className="focus:border-theme-4 dark:focus:border-theme-4 w-full rounded-lg border border-dark/10 bg-white/30 py-3 pl-10 pr-4 text-dark placeholder-dark/60 outline-none transition focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:placeholder-white/60"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 translate-y-1 text-dark/60 dark:text-white/60" />
                  <textarea
                    className="focus:border-theme-4 dark:focus:border-theme-4 w-full rounded-lg border border-dark/10 bg-white/30 py-3 pl-10 pr-4 text-dark placeholder-dark/60 outline-none transition focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:placeholder-white/60"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-theme-4 hover:bg-theme-4/90 dark:from-theme-4 group flex items-center rounded-lg px-6 py-3 text-white transition dark:bg-gradient-to-r dark:to-theme-3 dark:hover:opacity-90"
                >
                  Send Message
                  <FiSend className="ml-2 transition group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
