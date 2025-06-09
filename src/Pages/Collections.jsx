import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const artworks = [
  {
    id: 1,
    title: "Carpe diem",
    key: "CARPIE_DIEM",
    imgUrl:
      "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Collections/Carpe%20Diem/Divergent%20R-attitude/3d2bca9b86b9dd10813c3452a8de9f0c",
  },
  {
    id: 2,
    title: "Illusion of Control",
    key: "ILLUSION_OF_CONTROL",
    imgUrl:
      "https://res.cloudinary.com/dl3haplj1/image/upload/f_webp,q_auto/v1/ayodeji-kingsley/Selected/Collections/Illusion%20of%20Control/Pouched%20in%20Inequity/93f445cf9f23939465b4ae1e8934459f",
  },
  {
    id: 3,
    title: "Outlook of life",
    key: "OUTLOOK_OF_LIFE",
    imgUrl:
      "https://res.cloudinary.com/dl3haplj1/image/upload/f_webp,q_auto:low,w_700/v1/ayodeji-kingsley/Selected/Collections/Outlook%20of%20Life/Survival%20Dance/survival%201",
  },
  {
    id: 4,
    title: "Owl Series",
    key: "OWL_SERIES",
    imgUrl:
      "https://res.cloudinary.com/dl3haplj1/image/upload/f_webp,q_auto:low,w_700/v1/ayodeji-kingsley/Selected/Collections/Owl%20Series/2%20Owl%20clock/163b632c927ecf489ab010f2bff534ac",
  },
  {
    id: 5,
    title: "Road back to you",
    key: "ROAD_BACK_TO_YOU",
    imgUrl:
      "https://res.cloudinary.com/dl3haplj1/image/upload/f_webp,q_auto:low,w_700/v1/ayodeji-kingsley/Road%20back%20to%20you/Identity%202021",
  },
  {
    id: 6,
    title: "Symbol of hope",
    key: "SYMBOL_OF_HOPE",
    imgUrl:
      "https://res.cloudinary.com/dl3haplj1/image/upload/f_auto,q_auto/v1/ayodeji-kingsley/Selected/Collections/Symbol%20of%20Hope/Dash%20of%20hope/Dash%20of%20Hope%201",
  },
];

const Collections = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-4 mt-5"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
        className="z-10 text-xl md:text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-700 font-heading tracking-tight"
      >
        Art Collections
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-20 ">
        {artworks.map((art) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, skewY: 0.4 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link
              // to={`/art/${art.id}`}
              to={`/collections/${art.key}`}
            >
              <img
                src={art.imgUrl}
                alt={art.title}
                className="w-full h-[400px] object-contain"
                loading="lazy"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{art.title}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Collections;
