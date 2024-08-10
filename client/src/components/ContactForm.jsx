import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { HiMapPin } from "react-icons/hi2";
import { FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export default function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div className="min-h-screen bg-[#a2d2ff] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="fixed left-0 top-1 rotate-90">
          <button
            onClick={() => navigate(-1)}
            className="flex animate-bounce items-center p-5 text-dark transition duration-200 hover:text-black hover:underline"
          >
            <FaChevronDown className="h-auto w-10 hover:scale-110" />
          </button>
        </div>
        <div className="overflow-hidden rounded-2xl bg-light shadow-lg lg:grid lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <h2 className="mb-8 text-3xl font-bold text-dark">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-dark"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-theme-3 focus:outline-none focus:ring-2 focus:ring-theme-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-theme-3 focus:outline-none focus:ring-2 focus:ring-theme-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-dark"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-theme-3 focus:outline-none focus:ring-2 focus:ring-theme-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-theme-3 focus:outline-none focus:ring-2 focus:ring-theme-3"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-theme-3 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-[#1e88e5] focus:outline-none focus:ring-2 focus:ring-[#1e88e5] focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="bg-[#e9ecef] p-8 sm:p-12">
            <h2 className="mb-8 text-3xl font-bold text-dark">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <HiMapPin className="mr-3 h-6 w-6 flex-shrink-0 text-[#023047]" />
                <span className="text-lg text-dark">
                  Civil Lines, New Delhi, India
                </span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 h-5 w-5 flex-shrink-0 text-[#023047]" />
                <span className="text-lg text-dark">+91 9560593082</span>
              </div>
              <div className="flex items-center">
                <MdEmail className="mr-3 h-6 w-6 flex-shrink-0 text-[#023047]" />
                <span className="text-lg text-dark">adisht7524@gmail.com</span>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="mb-6 text-2xl font-semibold text-dark">
                Find me on the map (?)
              </h3>
              <div className="overflow-hidden rounded-lg shadow-md">
                <MapContainer
                  center={[28.6814, 77.2227]}
                  zoom={13}
                  scrollWheelZoom={false}
                  className="h-[300px] w-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[28.6814, 77.2227]}>
                    <Popup>We are here!</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
