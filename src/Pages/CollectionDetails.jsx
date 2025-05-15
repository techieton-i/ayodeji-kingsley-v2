import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectionData from "@data/collection.json";
import ArtGallerySlider from "@/components/ImageSlider";
import { motion } from "framer-motion";

const CollectionDetails = () => {
  const { category } = useParams();
  const [selectedCollection, setSelectedCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCollection(CollectionData[category] || []);
      setIsLoading(false);
    }, 600);
  }, [category]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-rust-400 to-rust-600 shadow-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen px-4 py-16 md:px-10 bg-slate-50 font-body"
    >
      <motion.h1
        variants={fadeIn}
        className="text-xl md:text-3xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-700 font-heading tracking-tight"
      >
        Curated Collection
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-36"
      >
        {selectedCollection.map(({ title, images, description }, index) => (
          <motion.div
            key={title}
            custom={index}
            variants={slideUp}
            className="flex flex-col gap-16 items-center max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeIn}
              className="text-xl md:text-2xl font-semibold text-gray-700 relative inline-block text-center font-heading"
            >
              {title}
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-full max-w-xs bg-gradient-to-r from-neutral-400 to-neutral-600"
              />
            </motion.h2>

            <motion.div
              className="w-full max-w-5x aspect-vide shadow-xll rounded-xll overflow-hiddenn "
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ArtGallerySlider images={images} />
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="w-full px-4 text-left mx-auto border-l-4 border-zinc-400 pl-6"
            >
              <div
                className="text-slate-700 text-lg md:text-base leading-relaxed font-light tracking-wide text-justify"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeIn} className="text-center mt-24">
        <p className="text-indigo-600 italic text-lg tracking-wide font-medium">
          Explore the depths of artistic expression
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CollectionDetails;
