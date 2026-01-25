import { useLazyLoad } from "@/utils/hooks";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import { ArtModal } from "./LightBox";

const LazyLoadImage = ({ image, index, onClick, variants }) => {
  const { ref, isLoaded, blurhash } = useLazyLoad();
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [isLoaded]);

  return (
    <motion.div
      ref={containerRef}
      className="mb-4 relative overflow-hidden rounded-lg shadow-lg break-inside-avoid group cursor-pointer"
      variants={variants}
      whileHover={{ y: -5 }}
    >
      {!isLoaded && blurhash && (
        <Blurhash
          hash={blurhash}
          width={size.width}
          height={500}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="absolute inset-0"
        />
      )}

      <img
        ref={ref}
        src={image.images[0]}
        alt={image.title}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />
      <div
        className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
        onClick={() => onClick(image.images, image.title, image.description)}
      >
        <motion.h3
          className="text-xl font-bold text-white text-center mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
        >
          {image.title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-200 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
        >
          {image.desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ImageGrid = ({ images }) => {
  const [modalData, setModalData] = useState({ show: false });

  const openArtModal = (image, title, description) => {
    setModalData({ image, title, description, show: true });
  };

  const closeArtModal = () => setModalData(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 ${modalData?.show ? "pointer-events-none blur-sm" : ""}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images?.map((image, index) => (
          <LazyLoadImage
            key={index}
            image={image}
            index={index}
            onClick={openArtModal}
            variants={itemVariants}
          />
        ))}
      </motion.div>
      {modalData?.show && (
        <ArtModal
          isOpen={modalData?.show || false}
          imageSrc={modalData?.image || ""}
          title={modalData?.title}
          description={modalData?.description}
          onClose={closeArtModal}
        />
      )}
    </>
  );
};

export default ImageGrid;
