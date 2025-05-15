import { ArtModal, Lightbox } from "@/components/LightBox";
import { artworks } from "@/data/awardData";
import { useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function AwardShowcaseScroll() {
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
        className=" absolute top-10 left-1/2 -translate-x-1/2 z-10 text-xl md:text-3xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-700 font-heading tracking-tight"
      >
        Selected Media
      </motion.h1>

      {artworks.map((art, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <div
            key={art.id}
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
              <img
                src={art.image}
                alt={art.title}
                className="w-full md:w-1/2 rounded-xl shadow-lg object-cover max-h-[70vh] cursor-pointer"
              />
              <div className="text-left max-w-md">
                <h2 className="text-3xl font-bold mb-2">{art.title}</h2>
                <p className="text-sm text-gray-500 italic mb-4">{art.award}</p>
                <p className="text-gray-700 leading-relaxed">
                  {art.description}
                </p>
                {index < artworks.length - 1 && (
                  <button
                    onClick={() => scrollToSection(index + 1)}
                    className="mt-6 px-6 py-2 bg-rust-600 text-white rounded-full hover:bg-rust-700 transition"
                  >
                    Next
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Dot Navigation */}
      <div className="fixed right-3 md:right-6 top-1/2 transform -translate-y-1/2 hidden sm:flex flex-col gap-4 z-50">
        {artworks.map((_, index) => (
          <div key={index} className="group relative">
            <div className="absolute right-6 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded opacity-90 whitespace-nowrap">
              {artworks[index].title}
            </div>
            <button
              onClick={() => scrollToSection(index)}
              className="relative w-4 h-4"
            >
              {activeIndex === index ? (
                <motion.span
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full bg-rust-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              ) : (
                <span className="absolute inset-0 rounded-full bg-gray-400" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
