import { motion } from "framer-motion";
// import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
// import { HiOutlineMail } from "";
import logo1 from "@assets/banlogo_YedTigd.width-600.png";
import logo2 from "@assets/Certified-Carbon-Literate.png";
import logo3 from "@assets/download.png";
import logo4 from "@assets/SculptureCelebration2025.jpeg";

const logos = [logo1, logo2, logo3, logo4];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Logos */}
        <div className="flex gap-6 items-center flex-wrap justify-center lg:justify-start">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`logo-${i}`}
              className="h-12 object-contain"
            />
          ))}
        </div>

        {/* Text */}
        <div className="text-sm text-center leading-relaxed">
          <p>Privacy Policy | Logo Credit – Creative Flo</p>
          <p>Delivery Information | Terms & Conditions</p>
          <p>©2025 | Website Design by Techieton-i | All Rights Reserved</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-xl">
          {/* <FaXTwitter className="hover:text-yellow-400 transition" />
          <FaInstagram className="hover:text-yellow-400 transition" />
          <FaTiktok className="hover:text-yellow-400 transition" /> */}
          {/* <HiOutlineMail className="hover:text-yellow-400 transition" /> */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ y: -3 }}
        className="fixed bottom-6 right-6 bg-neutral-800 p-2 rounded-md shadow-lg text-white hover:bg-neutral-700 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="text-lg">↑</span>
      </motion.button>
    </footer>
  );
};

export default Footer;
