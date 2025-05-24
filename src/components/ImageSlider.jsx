import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

// const ArtGallerySlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [direction, setDirection] = useState(0);
//   const autoPlayRef = useRef(null);
//   const containerRef = useRef(null);

//   const imageCache = useRef(new Map());

//   const getImage = (index) => {
//     if (imageCache.current.has(index)) {
//       return imageCache.current.get(index);
//     }
//     const img = new Image();
//     img.src = images[index];
//     imageCache.current.set(index, img);

//     return img;
//   };

//   // Handle auto-play functionality
//   useEffect(() => {
//     const startAutoPlay = () => {
//       autoPlayRef.current = setInterval(() => {
//         handleNext();
//       }, 6000);
//     };

//     startAutoPlay();

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [images.length]);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (fullscreen) {
//         if (e.key === "ArrowLeft") handlePrev();
//         if (e.key === "ArrowRight") handleNext();
//         if (e.key === "Escape") setFullscreen(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [fullscreen]);

//   // Handle body scroll lock for fullscreen mode
//   useEffect(() => {
//     if (fullscreen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [fullscreen]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );

//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//       autoPlayRef.current = setInterval(() => {
//         handleNext();
//       }, 6000);
//     }
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );

//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//       autoPlayRef.current = setInterval(() => {
//         handleNext();
//       }, 6000);
//     }
//   };

//   const handleDotClick = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);

//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//       autoPlayRef.current = setInterval(() => {
//         handleNext();
//       }, 6000);
//     }
//   };

//   const pauseAutoPlay = () => {
//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//     }
//   };

//   const resumeAutoPlay = () => {
//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//     }
//     autoPlayRef.current = setInterval(() => {
//       handleNext();
//     }, 6000);
//   };

//   // Slider animation variants
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? "-100%" : "100%",
//       opacity: 0,
//     }),
//   };

//   return (
//     <>
//       {/* Main Slider */}
//       <div
//         ref={containerRef}
//         className="relative w-full max-w-4xl mx-auto h-[550px] bg-black/5 rounded-xl overflow-hidden"
//         onMouseEnter={pauseAutoPlay}
//         onMouseLeave={resumeAutoPlay}
//       >
//         <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
//           <AnimatePresence initial={false} custom={direction} mode="wait">
//             <motion.div
//               key={images[currentIndex]}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.5 },
//               }}
//               className="absolute w-full h-full flex items-center justify-center"
//             >
//               <motion.img
//                 src={getImage(currentIndex).src}
//                 alt={`Artwork ${currentIndex + 1}`}
//                 className="max-w-full max-h-full object-cover"
//                 initial={{ scale: 0.95, opacity: 0.8 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 onClick={() => setFullscreen(true)}
//                 style={{ cursor: "zoom-in" }}
//                 loading="lazy"
//               />

//               {/* Zoom indicator */}
//               <motion.div
//                 className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.7 }}
//                 whileHover={{ opacity: 1, scale: 1.1 }}
//               >
//                 <ZoomIn size={20} />
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Navigation arrows */}
//         {images.length > 1 && (
//           <>
//             <NavigationButton direction="left" onClick={handlePrev} />
//             <NavigationButton direction="right" onClick={handleNext} />
//           </>
//         )}

//         {/* Progress indicators */}
//         {images.length > 1 && (
//           <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? "bg-white scale-125"
//                     : "bg-white/40 hover:bg-white/60"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}

//         {/* Image counter */}
//         <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
//           {currentIndex + 1} / {images.length}
//         </div>
//       </div>

//       {/* Fullscreen Modal */}
//       <AnimatePresence>
//         {fullscreen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.98 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center"
//           >
//             {/* Close Button */}
//             <motion.button
//               className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full z-30"
//               whileHover={{
//                 scale: 1.1,
//                 backgroundColor: "rgba(255,255,255,0.2)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setFullscreen(false);
//               }}
//             >
//               <X size={24} />
//             </motion.button>

//             {/* Image Container */}
//             <div className="relative w-screen h-screen flex items-center justify-center">
//               <AnimatePresence initial={false} custom={direction} mode="wait">
//                 <motion.div
//                   key={`fullscreen-${currentIndex}`}
//                   custom={direction}
//                   variants={slideVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{
//                     x: { type: "spring", stiffness: 300, damping: 30 },
//                     opacity: { duration: 0.5 },
//                   }}
//                   className="absolute inset-0 flex items-center justify-center"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <motion.img
//                     src={getImage(currentIndex).src}
//                     alt={`Fullscreen Artwork ${currentIndex + 1}`}
//                     className="max-w-full max-h-full w-auto h-auto object-contain rounded shadow-2xl"
//                     initial={{ scale: 0.95, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0.95, opacity: 0 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     loading="lazy"
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {/* Navigation */}
//               {images.length > 1 && (
//                 <>
//                   <NavigationButton
//                     direction="left"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handlePrev();
//                     }}
//                     fullscreen
//                   />
//                   <NavigationButton
//                     direction="right"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleNext();
//                     }}
//                     fullscreen
//                   />
//                 </>
//               )}

//               {/* Progress Indicators */}
//               <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
//                 {images.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleDotClick(index);
//                     }}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentIndex
//                         ? "bg-white scale-125"
//                         : "bg-white/30 hover:bg-white/60"
//                     }`}
//                     aria-label={`Go to fullscreen slide ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               {/* Counter */}
//               <div className="absolute top-6 left-6 bg-black/30 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
//                 {currentIndex + 1} / {images.length}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

const ArtGallerySlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  const imageCache = useRef(new Map());

  const getImage = (index) => {
    if (imageCache.current.has(index)) {
      return imageCache.current.get(index);
    }
    const img = new Image();
    img.src = images[index];
    imageCache.current.set(index, img);

    return img;
  };

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 2000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (fullscreen) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreen]);

  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

    restartAutoPlay();
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

    restartAutoPlay();
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    restartAutoPlay();
  };

  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const resumeAutoPlay = () => {
    restartAutoPlay();
  };

  const restartAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative bg-black overflow-hidden max-h-screen"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={images[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.4 },
            }}
            className="absolut flex items-center justify-center"
          >
            <motion.img
              src={getImage(currentIndex).src}
              alt={`Artwork ${currentIndex + 1}`}
              className="w-full h-auto object-contain"
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setFullscreen(true)}
              style={{ cursor: "zoom-in" }}
              loading="lazy"
            />
            <motion.div
              className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm text-white p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
            >
              <ZoomIn size={20} />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <NavigationButton direction="left" onClick={handlePrev} />
            <NavigationButton direction="right" onClick={handleNext} />
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white text-sm px-3 py-1">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center"
          >
            <motion.button
              className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm text-white p-3 z-30"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setFullscreen(false);
              }}
            >
              <X size={24} />
            </motion.button>

            <div className="relative w-screen h-screen flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`fullscreen-${currentIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.4 },
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.img
                    src={getImage(currentIndex).src}
                    alt={`Fullscreen Artwork ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <NavigationButton
                    direction="left"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    fullscreen
                  />
                  <NavigationButton
                    direction="right"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    fullscreen
                  />
                </>
              )}

              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDotClick(index);
                    }}
                    className={`w-3 h-3 transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white scale-125"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to fullscreen slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute top-6 left-6 bg-black/30 backdrop-blur-sm text-white text-sm px-4 py-2">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavigationButton = ({ direction, onClick, fullscreen = false }) => {
  const isLeft = direction === "left";

  return (
    <motion.button
      className={`absolute ${isLeft ? "left-3" : "right-3"} top-1/2 -translate-y-1/2 
        ${fullscreen ? "bg-black/20" : "bg-black/30"} backdrop-blur-sm 
        text-white p-3 rounded-full z-20`}
      whileHover={{
        scale: 1.1,
        backgroundColor: fullscreen
          ? "rgba(255,255,255,0.2)"
          : "rgba(0,0,0,0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      aria-label={isLeft ? "Previous image" : "Next image"}
    >
      {isLeft ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </motion.button>
  );
};

export default ArtGallerySlider;
