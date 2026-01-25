import { ImageSlider } from "@/components/ImageSlider";
import { exhibitionData } from "@/data/exhibitionData";
import { useInView, motion } from "framer-motion";
import { ArrowBigDown, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function Exhibitions({}) {
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
      id="scroll-container"
      ref={containerRef}
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-hide"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        initial="hidden"
        animate="visible"
        className="fixed top-8 left-1/2 -translate-x-1/2 z-20 text-4xl md:text-5xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-zinc-900 font-hero tracking-tighter uppercase drop-shadow-sm mix-blend-difference"
      >
        Exhibitions
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
              <div className="text-left max-w-lg md:pl-8">
                <h2 className="text-4xl font-bold mb-3 font-heading tracking-tight text-gray-900">{art.title}</h2>
                <p className="text-base text-rust-600 font-medium italic mb-6 tracking-wide uppercase text-xs">{art.text}</p>
                <p className="text-gray-700 leading-loose text-lg font-light">
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
