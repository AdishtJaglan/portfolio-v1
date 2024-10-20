import { useState } from "react";
import { toast } from "react-toastify";
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
    toast.info("This might take a bit!");

    const data = {
      username: formData.name.trim(),
      email: formData.email.trim(),
      phoneNo: formData.phoneNo ? parseInt(formData.phoneNo, 10) : null,
      message: formData.message.trim(),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/send-message`,
        data,
      );
      if (response.status === 200) {
        toast.success("Message sent!");
      }

      setFormData({ name: "", email: "", phoneNo: "", message: "" });
    } catch (error) {
      toast.error("Error sending message, try later!");
      console.error(
        "Error sending message:",
        error.response ? error.response.data.message : error.message,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
      <div className="relative h-24 w-full bg-light dark:bg-theme-4 lg:h-full lg:w-[15%]">
        <div className="flex items-center justify-center p-4 leading-none tracking-tight lg:absolute lg:-left-1/2 lg:bottom-1/3 lg:translate-x-10 lg:-rotate-90 lg:flex-col lg:items-start lg:justify-start lg:p-0 xl:-left-1/2 xl:bottom-[40%]">
          <p className="text-4xl font-black text-dark dark:text-light lg:text-[7.5rem]">
            CONTACT
          </p>
          <p className="mx-2 text-4xl font-black text-dark dark:text-light lg:mx-0 lg:mt-[4rem] lg:text-[7.5rem]">
            ME<span className="text-light dark:text-theme-4">.</span>
          </p>
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-center bg-theme-4 p-4 dark:bg-dark lg:w-[80%] lg:p-0">
        <div className="w-full max-w-md px-4 lg:px-6">
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl bg-light/90 p-6 shadow-lg backdrop-blur-lg dark:bg-white/10 lg:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-theme-4/10 to-light/30 opacity-50 dark:from-theme-4/30 dark:to-[#27272a]/30"></div>
            <div className="relative z-10">
              <h1 className="mb-6 text-3xl font-bold text-dark/90 dark:text-white/80 lg:text-4xl">
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
                  className="group flex h-12 w-full items-center justify-center rounded-lg bg-theme-4 px-6 text-white transition hover:bg-theme-4/90 dark:bg-gradient-to-r dark:from-theme-4 dark:to-theme-3 dark:hover:opacity-90 sm:w-48"
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
