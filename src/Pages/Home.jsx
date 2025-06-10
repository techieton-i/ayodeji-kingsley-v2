import { introduction } from "@/constants/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" mx-auto "
    >
      <HeroSection />
      <div className="mx-auto">
        <AboutSection />
        <CTASection />
      </div>
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
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Website%202/Landing%20page/landing-gif"
        alt="Background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-lg sm:text-xl text-orange-400 mb-2">Hi, I'm</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-tight mb-4 font-hero">
          Ayodeji Kingsley
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
          A visual artist and environmental enthusiast
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to="/collections"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
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
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')]" />

      <motion.div className="font-body mx-auto container relative flex flex-col md:flex-row-reverse items-center justify-between px-6 lg:px-[10rem] gap-12 py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:!bg-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')]" />

        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center relative">
          <motion.img
            src="https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto:low/v1/ayodeji-kingsley/Website%202/Landing%20page/artist-pic-2"
            alt="Artist"
            className="rounded- shadow-2xl borde-4 border-whit w-full max-w-lg transform hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            loading="lazy"
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
            <i>See What I Feel. Feel What I See.</i>
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
              “My work is aimed at bringing to your mind the strong feeling of
              your tender vision. This kind of art expresses aesthetics in Solid
              forms with surrealism and paranomasia as the principal theme. I’m
              interested in facilitating an interface between Subject and
              viewer, enabling you to navigate through my mind with your eyes,
              influenced by the unrelenting divergence of words and
              kaleidoscopic world around us. My work brings me peace and offers
              me a place to meditate and appreciate the Ultimate creator(God)
              and the beauty of the world”
            </motion.p>
          </motion.div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"></p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"></p>
        </motion.div>
      </motion.div>
      {/* about content 1 */}
      <motion.div className="mx-auto container relative flex flex-col md:flex-row items-center justify-between px-6 lg:px-[10rem] gap-12 py-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:!bg-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')]" />

        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center relative">
          <motion.img
            src="https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Website%202/Landing%20page/artist-pic-1"
            alt="Artist"
            className="rounded-lg shadow-2xl border-4 border-white w-full max-w-lg transform hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-left space-y-6 relative z-10 font-body"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
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
              For the past couple of years, I've been working on a pre-existing
              art concept, but with a unique lens of expression. I've truly
              explored and demonstrated the magnificent use of what others
              perceive as waste, bringing them together in the praxis of fine
              aesthetics to express familiar ideas and entities like humans,
              animals, tools, and various other items.
            </motion.p>
            <motion.div className="space-y-4">
              <p>
                The evolution of humanity and the advancement of science and
                technology have clearly shown just how useful metals are, and
                this utility extends to art in all its forms and systems.
                Although rigid, they can be bent to an artist's will. In the
                right hands and with the right motives, metals are beautiful and
                can represent life in a spectacular way when used imaginatively.
              </p>
            </motion.div>
          </motion.div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"></p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"></p>
        </motion.div>
      </motion.div>

      {/* about content 2 */}
      <motion.div className="font-body mx-auto container relative flex flex-col md:flex-row-reverse items-center justify-between px-6 lg:px-[10rem] gap-12 py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:!bg-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')]" />

        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center relative">
          <motion.img
            src="https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Website%202/Landing%20page/landing-bg"
            alt="Artist"
            className="rounded- shadow-2xl borde-4 border-whit w-full max-w-lg transform hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-left space-y-6 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
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
              I've developed a strong interest in transforming scrap into
              incredible, plausible, and almost indispensable ideas for our
              world today. I've chosen a path that converts static rubbish into
              static properties of adornments. The ornamental products of my art
              have helped many people translate their fantasies and illusions
              into substantial possessions. I am a co-creator in the direct
              image of the unequalled ultimate creator.
            </motion.p>
          </motion.div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"></p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"></p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const CTASection = () => {
  return (
    <motion.section
      className="py-16 flex flex-col items-center justify-center text-center bg-gray-900 text-white relative overflow-hidden h-[50vh]"
      initial={{ scale: 1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle Background Animation */}
      <motion.div
        className="absolute inset-0    bg-cover bg-center opacity-10  bg-[url('https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto:low,w_900/v1/ayodeji-kingsley/Website%202/Landing%20page/ff591b4e94194049dfa87091f6310633')]"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* // bg-[url('https://img.freepik.com/free-photo/3d-rendering-robotic-eagle_23-2151056226.jpg?t=st=1743274638~exp=1743278238~hmac=265c4fb6acaeeb0a7602132fd4696b0cdc38608470ff1b26bd0aefffd2cfe2d4&w=826')] */}

      <motion.h2
        className="text-4xl font-bold relative z-10"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Explore the Collections
      </motion.h2>

      <motion.p
        className="mt-2 text-gray-300 max-w-xl mx-auto relative z-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Discover unique pieces that capture the essence of metal art.
      </motion.p>

      <motion.div
        className="mt-6 relative z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/collections"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          View Collections
        </Link>
      </motion.div>
    </motion.section>
  );
};
