import { exhibitionData } from "@/data/exhibitionData";
import { useInView, motion } from "framer-motion";
import { ArrowBigDown, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ImageSlider = ({ imageArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(false), [currentIndex]);

  const changeImage = (direction) => {
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % imageArray.length
        : prev === 0
          ? imageArray.length - 1
          : prev - 1
    );
  };

  return (
    <div className="relative w-full md:w-1/2 rounded-xl shadow-lg object-cover max-h-[70vh] cursor-pointer">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-70 bg-gray-100 z-10">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imageArray[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`w-full h-auto md:max-h-[90vh] rounded transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-30"
        }`}
        onLoad={() => setLoaded(true)}
      />
      <button
        onClick={() => changeImage("prev")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-opacity-70 bg-gray-800 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => changeImage("next")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-opacity-70 bg-gray-800 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

function Exhibitions() {
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const positions = sectionRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top ?? 0
      );
      const index = positions.findIndex(
        (pos) => pos >= 0 && pos < window.innerHeight / 2
      );
      if (index !== -1) setActiveIndex(index);
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll, { passive: true });
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-hide"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-xl md:text-3xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-700 font-heading tracking-tight"
      >
        Selected Media
      </motion.h1>

      {exhibitionData.map((art, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <div
            key={art.id || index}
            ref={(el) => {
              sectionRefs.current[index] = el;
              ref.current = el;
            }}
            className="h-screen snap-start flex justify-center items-center bg-gray-100 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-10 p-10"
            >
              {art?.images.length ? (
                <ImageSlider imageArray={art?.images} />
              ) : (
                <p className="w-full md:w-[500px] rounded-xl shadow-lg h-[50vh] bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image Available
                </p>
              )}
              <div className="text-left max-w-md">
                <h2 className="text-3xl font-bold mb-2">{art.title}</h2>
                <p className="text-sm text-gray-500 italic mb-4">{art.text}</p>
                <p className="text-gray-700 leading-relaxed">
                  {art.description}
                </p>
                {index < exhibitionData.length - 1 && (
                  <button
                    onClick={() => scrollToSection(index + 1)}
                    className="mt-6 px-6 py-2 bg-rust-600 text-white rounded-full hover:bg-rust-700 transition"
                  >
                    Scroll <ArrowBigDown className="inline ml-1" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default Exhibitions;
