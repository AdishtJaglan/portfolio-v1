import { useState } from "react";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiPhone,
} from "react-icons/fi";
import { ImSpinner8 } from "react-icons/im";
import axios from "axios";

export default function ContactMeForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      username: formData.name.trim(),
      email: formData.email.trim(),
      phoneNo: formData.phoneNo ? parseInt(formData.phoneNo, 10) : null,
      message: formData.message.trim(),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/send-message",
        data,
      );
      console.log(response.data.message);
      setFormData({ name: "", email: "", phoneNo: "", message: "" });
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response ? error.response.data.message : error.message,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-full w-[15%] bg-light dark:bg-theme-4">
        <div className="absolute -left-1/2 bottom-1/3 flex translate-x-10 -rotate-90 flex-col items-start justify-center leading-none tracking-tight">
          <p className="text-[7.5rem] font-black text-dark dark:text-light">
            CONTACT
          </p>
          <p className="-mt-[0.1em] text-[7.5rem] font-black text-dark dark:text-light">
            ME<span className="text-light dark:text-theme-4">.</span>
          </p>
        </div>
      </div>
      <div className="flex h-full w-[80%] items-center justify-center bg-theme-4 dark:bg-dark">
        <div className="w-full max-w-md px-6">
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl bg-light/90 p-8 shadow-lg backdrop-blur-lg dark:bg-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-theme-4/10 to-light/30 opacity-50 dark:from-theme-4/30 dark:to-[#27272a]/30"></div>
            <div className="relative z-10">
              <h1 className="mb-6 text-4xl font-bold text-dark/90 dark:text-white/80">
                Get in Touch
              </h1>
              <div className="mb-6 space-y-4">
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/60 dark:text-white/60" />
                  <input
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                    className="w-full rounded-lg border border-dark/10 bg-white/30 py-3 pl-10 pr-4 text-dark placeholder-dark/60 outline-none transition focus:border-theme-4 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:placeholder-white/60 dark:focus:border-theme-4"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/60 dark:text-white/60" />
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    className="w-full rounded-lg border border-dark/10 bg-white/30 py-3 pl-10 pr-4 text-dark placeholder-dark/60 outline-none transition focus:border-theme-4 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:placeholder-white/60 dark:focus:border-theme-4"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/60 dark:text-white/60" />
                  <input
                    onChange={handleChange}
                    value={formData.phoneNo}
                    name="phoneNo"
                    className="w-full rounded-lg border border-dark/10 bg-white/30 py-3 pl-10 pr-4 text-dark placeholder-dark/60 outline-none transition focus:border-theme-4 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:placeholder-white/60 dark:focus:border-theme-4"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 translate-y-1 text-dark/60 dark:text-white/60" />
                  <textarea
                    onChange={handleChange}
                    value={formData.message}
                    name="message"
                    className="w-full rounded-lg border border-dark/10 bg-white/30 py-3 pl-10 pr-4 text-dark placeholder-dark/60 outline-none transition focus:border-theme-4 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:placeholder-white/60 dark:focus:border-theme-4"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="group flex h-12 w-48 items-center justify-center rounded-lg bg-theme-4 px-6 text-white transition hover:bg-theme-4/90 dark:bg-gradient-to-r dark:from-theme-4 dark:to-theme-3 dark:hover:opacity-90"
                >
                  {!loading ? (
                    <span className="flex items-center">
                      Send Message
                      <FiSend className="ml-2 transition group-hover:translate-x-1" />
                    </span>
                  ) : (
                    <ImSpinner8 className="h-6 w-6 animate-spin" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
