import { motion } from "framer-motion";
import logo1 from "@assets/banlogo_YedTigd.width-600.png";
import logo2 from "@assets/Certified-Carbon-Literate.png";
import logo3 from "@assets/download.png";
import logo4 from "@assets/hhhh.png";
import logo5 from "@assets/eco.png";
import logo6 from "@assets/PDA.png";
import pinterestIcon from "@assets/pinterest.svg";
import instaIcon from "@assets/instagram-svgrepo-com.svg";
import tiktokIcon from "@assets/tiktok-svgrepo-com.svg";
import mailIcon from "@assets/mail-letter-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Icon = ({ src, alt }) => <img src={src} alt={alt} className="w-7 h-7" />;

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 px-4 lg:px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 xl:px-[8rem] mx-auto w-full">
        <div className="grid grid-cols-3 2xl:grid-cols-6 gap-4 sm:gap-6 items-center justify-center lg:justify-start py-5 w-full md:w-auto">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`logo-${i}`}
              className="h-12 sm:h-16 lg:h-20 object-contain mx-auto lg:mx-0"
            />
          ))}
        </div>

        <div className="text-sm text-center leading-relaxed shrink-0">
          <p>Privacy Policy | ayodeji-kingsley</p>
          <p>©2025 | Website Design by techieton-i | All Rights Reserved</p>
        </div>

        <div className="flex flex-nowrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 text-xl shrink-0 py-2">
          <a
            href="https://pinterest.com/appreciatekingsley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={pinterestIcon} alt="pinterest" />
          </a>
          <a
            href="https://www.instagram.com/theayodejikingsley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={instaIcon} alt="instagram" />
          </a>
          <Icon src={tiktokIcon} alt="tiktok" />
          <Link to="/contact">
            <Icon src={mailIcon} alt="email" />
          </Link>
        </div>
      </div>

      <motion.button
        whileHover={{ y: -3 }}
        className="fixed bottom-6 right-6 bg-neutral-800 p-2 rounded-md shadow-lg text-white hover:bg-neutral-700 transition"
        onClick={() => {
          const scrollContainer = document.querySelector("#scroll-container");
          if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <span className="text-lg">↑</span>
      </motion.button>
    </footer>
  );
};

export default Footer;
