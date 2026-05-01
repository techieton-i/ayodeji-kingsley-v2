import { ImageSlider } from "@/components/ImageSlider";
import { exhibitionData } from "@/data/exhibitionData";
import { useInView, motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function Exhibitions({}) {
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const positions = sectionRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top ?? 0,
      );
      const index = positions.findIndex(
        (pos) => pos >= 0 && pos < window.innerHeight / 2,
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
      id="scroll-container"
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
        Exhibitions
      </motion.h1>

      {exhibitionData.map((art, index) => (
        <ExhibitionItem
          key={art.id || index}
          art={art}
          index={index}
          total={exhibitionData.length}
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
        />
      ))}
    </div>
  );
}

export default Exhibitions;

const ExhibitionItem = ({
  art,
  index,
  total,
  scrollToSection,
  sectionRefs,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [viewMode, setViewMode] = useState(art.video ? "video" : "gallery");

  return (
    <div
      ref={(el) => {
        if (sectionRefs) sectionRefs.current[index] = el;
        ref.current = el;
      }}
      className="h-screen snap-start flex justify-center items-center bg-gray-100 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12 w-full max-w-[90rem] mx-auto"
      >
        <div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col items-center">
          {art.video && art.images?.length > 0 && (
            <div className="flex justify-center mb-6 space-x-4 bg-gray-200 p-1 rounded-full shadow-inner">
              <button
                onClick={() => setViewMode("video")}
                className={`px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  viewMode === "video"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Trailer
              </button>
              <button
                onClick={() => setViewMode("gallery")}
                className={`px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  viewMode === "gallery"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Gallery
              </button>
            </div>
          )}

          <div className="relative w-full rounded-xl overflow-hidden flex items-center justify-center min-h-[40vh] lg:min-h-[50vh] xl:min-h-[60vh] bg-transparent">
            {viewMode === "video" && art.video ? (
              <video
                src={art.video}
                controls
                className="w-full h-full max-h-[75vh] object-contain rounded-xl shadow-lg"
              />
            ) : art?.images?.length ? (
              <ImageSlider imageArray={art?.images} />
            ) : !art?.video ? (
              <p className="w-full h-full min-h-[50vh] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 shadow-lg">
                No Image Available
              </p>
            ) : null}
          </div>
        </div>

        <div className="w-full lg:w-2/5 xl:w-1/3 text-left">
          <h2 className="text-3xl xl:text-4xl font-bold mb-4">{art.title}</h2>
          <p className="text-sm text-gray-500 italic mb-4">{art.text}</p>
          <p className="text-gray-700 leading-relaxed">{art.description}</p>
          {art.link && (
            <a
              href={art.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust-600 hover:underline block text-sm -mt-2"
            >
              View Exhibition
            </a>
          )}
          {index < total - 1 && (
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
};
