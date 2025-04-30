import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    startInterval();
  }, [images.length, startInterval]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startInterval();
  }, [images.length, startInterval]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[700px] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          alt="Slider Image"
          className="w-full h-full object-contain absolute top-0 left-0 cursor-pointer"
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ type: "tween", duration: 0.6 }}
          onClick={() => setIsModalOpen(true)}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <NavButton onClick={prevSlide} position="left" />
          <NavButton onClick={nextSlide} position="right" />
        </>
      )}

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  className="absolute flex items-center justify-center"
                  initial={{
                    x: direction > 0 ? "100%" : "-100%",
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                    },
                  }}
                  exit={{
                    x: direction > 0 ? "-100%" : "100%",
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                >
                  <motion.img
                    src={images[index]}
                    alt="Full Image"
                    className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                    layout
                  />
                </motion.div>
              </AnimatePresence>

              <NavButton
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                position="left"
                modal
              />
              <NavButton
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                position="right"
                modal
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavButton = ({ onClick, position, modal = false }) => (
  <button
    onClick={onClick}
    className={`absolute ${position === "left" ? "left-2 md:left-10" : "right-2 md:right-10"} top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 ${modal ? "!bg-white bg-opacity-50 text-black z-50" : ""}`}
  >
    {position === "left" ? <ChevronLeft /> : <ChevronRight />}
  </button>
);

export default ImageSlider;
