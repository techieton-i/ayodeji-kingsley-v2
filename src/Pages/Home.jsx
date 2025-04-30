// Home.js
import { introduction } from "@/constants/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" mx-auto containe"
    >
      <HeroSection />
      <AboutSection />
      <CTASection />
    </motion.div>
  );
};

export default Home;

const HeroSection = () => {
  return (
    <motion.section
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videocdn.cdnpk.net/videos/b46cb157-33b5-485a-b226-dcc8dcc251d0/horizontal/previews/videvo_watermarked/large.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/100 to-transparen"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-white px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-6xl font-extrabold mb-4 tracking-wide">
          Crafted in Metal, Inspired by Passion
        </h1>
        <p className="text-lg mb-6">
          Discover exquisite handcrafted metal sculptures that blend artistry
          and craftsmanship.
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex"
        >
          <Link
            to="/collections"
            className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition w-auto leading-[normal]"
          >
            Explore Collections
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const AboutSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const sentence = introduction.text;

  const aboutContent = [introduction.quote, introduction.text];

  return (
    <motion.section
      className="relative py-16 px-4 bg-gray-100 dark:bg-gray-800 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Artistic Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')]" />

      <motion.h2
        className="relative text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-5"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        About the Artist
      </motion.h2>
      <motion.div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-[10rem] gap-12 py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:!bg-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')]" />

        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center relative">
          <motion.img
            src="https://img.freepik.com/free-photo/close-up-welder-work_23-2151933426.jpg?t=st=1743273409~exp=1743277009~hmac=867f08542589e57f2c21a742c3f36ecf9f18905e45afe8b8c0c40a17e81d8a81&w=1800"
            alt="Artist"
            className="rounded-lg shadow-2xl border-4 border-white w-full max-w-md transform hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Text Content */}

        <motion.div
          className="md:w-1/2 text-left space-y-6 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight tracking-wide">
            <i>Ayodeji Kingsley transforms the discarded into the divine.</i>
          </h2>
          <motion.div
            className="space-y-5 dark:text-white "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.p className="font-medium">
              "My work evokes the powerful emotions hidden within delicate
              visions," says the artist, whose sculptures blend surrealism and
              wordplay to create an interface between subject and viewer.
              Through metals—rigid yet malleable—he reshapes waste into animals,
              tools, and objects that bridge fantasy and reality.
            </motion.p>
            <motion.div className="space-y-4">
              {/* <p>
                For years, artist <strong>Ayodeji Kingsley</strong> has
                reimagined art through a unique lens, transforming waste into
                striking aesthetic pieces. His work gives new life to
                metals—rigid yet malleable—shaping them into animals, tools, and
                everyday objects.
              </p> */}
              <p>
                Where others see scrap, Kingsley sees potential. His practice
                champions sustainability, revealing latent beauty in forgotten
                materials. Each piece is a meditation on creation, echoing his
                belief:{" "}
                <q>
                  <i>
                    I am a co-creator in the direct image of the unequaled
                    Ultimate Creator.
                  </i>
                </q>
              </p>
              <footer className="font-medium mt-1">
                <i>—Ayodeji Kingsley</i>
              </footer>
            </motion.div>
          </motion.div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"></p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"></p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// const CTASection = () => {
//   return (
//     <motion.section
//       className="py-16 text-center bg-gray-900 text-white relative overflow-hidden h-[70vh]"
//       initial={{ scale: 0.9, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Subtle Background Animation */}
//       <motion.div
//         className="absolute inset-0    bg-cover bg-center opacity-10"
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
//       />
//       {/* // bg-[url('https://img.freepik.com/free-photo/3d-rendering-robotic-eagle_23-2151056226.jpg?t=st=1743274638~exp=1743278238~hmac=265c4fb6acaeeb0a7602132fd4696b0cdc38608470ff1b26bd0aefffd2cfe2d4&w=826')] */}

//       <motion.h2
//         className="text-4xl font-bold relative z-10"
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         Explore the Collections
//       </motion.h2>

//       <motion.p
//         className="mt-2 text-gray-300 max-w-xl mx-auto relative z-10"
//         initial={{ y: 20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//       >
//         Discover unique pieces that capture the essence of metal art.
//       </motion.p>

//       <motion.div
//         className="mt-6 relative z-10"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Link
//           to="/collections"
//           className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
//         >
//           View Collections
//         </Link>
//       </motion.div>
//     </motion.section>
//   );
// };

const CTASection = () => {
  return (
    <section className="relative py-24 flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Floating Card Container */}
      <motion.div
        className="relative w-full max-w-4xl mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Layers with Parallax */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 dark:from-orange-600/5 dark:to-blue-600/5"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.div
          className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
          animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Content */}
        <div className="relative z-10 p-12 md:p-16 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Explore the <span className="text-orange-500">Collections</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover unique metal art pieces that transform spaces into
            galleries.
          </motion.p>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/collections"
              className="inline-block px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Collections →
            </Link>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* <motion.div
        className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/3d-rendering-robotic-eagle_23-2151056226.jpg?t=st=1743274638~exp=1743278238~hmac=265c4fb6acaeeb0a7602132fd4696b0cdc38608470ff1b26bd0aefffd2cfe2d4&w=826')]   bg-cover bg-center opacity-[0.08]"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      /> */}
    </section>
  );
};
