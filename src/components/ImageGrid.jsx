import { useLazyLoad } from "@/utils/hooks";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import { ArtModal } from "./LightBox";

const LazyLoadImage = ({ image, index, onClick }) => {
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
      className="mb-4 relative overflow-hidden rounded-lg shadow-lg break-inside-avoid"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
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
        className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 cursor-pointer"
        onClick={() => onClick(image.images, image.title, image.description)}
      >
        <motion.h3
          className="text-lg font-semibold text-white text-center mb-2"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {image.title}
        </motion.h3>
        <motion.p
          className="text-sm text-white/90 text-center"
          initial={{ y: 15 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {image.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ImageGrid = ({ images }) => {
  const [modalData, setModalData] = useState(null);

  const openArtModal = (image, title, description) => {
    setModalData({ image, title, description });
  };

  const closeArtModal = () => setModalData(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {images?.map((image, index) => (
          <LazyLoadImage
            key={index}
            image={image}
            index={index}
            onClick={openArtModal}
          />
        ))}
      </div>
      <ArtModal
        isOpen={!!modalData}
        imageSrc={modalData?.image || ""}
        title={modalData?.title}
        description={modalData?.description}
        onClose={closeArtModal}
      />
    </>
  );
};

export default ImageGrid;
