import { motion } from "framer-motion";
import logo1 from "@assets/banlogo_YedTigd.width-600.png";
import logo2 from "@assets/Certified-Carbon-Literate.png";
import logo3 from "@assets/download.png";
import logo4 from "@assets/new tak logo4.png";
import twitterIcon from "@assets/twitterx.svg";
import instaIcon from "@assets/instagram-svgrepo-com.svg";
import tiktokIcon from "@assets/tiktok-svgrepo-com.svg";
import mailIcon from "@assets/mail-letter-svgrepo-com.svg";

const Icon = ({ src, alt }) => <img src={src} alt={alt} className="w-7 h-7" />;

const logos = [logo1, logo2, logo3, logo4];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 px-4 lg:px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 xl:px-[8rem] mx-auto w-full">
        <div className="lg:w-1/3 flex gap-6 items-center flex-wrap justify-center lg:justify-start py-5">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`logo-${i}`}
              className="h-20 object-contain"
            />
          ))}
        </div>

        <div className="text-sm text-center leading-relaxed">
          <p>Privacy Policy | ayodeji-kingsley</p>
          <p>©2025 | Website Design by techieton-i | All Rights Reserved</p>
        </div>

        <div className="flex flex-wrap items-center gap-10 text-xl">
          <Icon src={twitterIcon} alt="twitter" />
          <Icon src={instaIcon} alt="instagram" />
          <Icon src={tiktokIcon} alt="tiktok" />
          <Icon src={mailIcon} alt="email" />
        </div>
      </div>

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
