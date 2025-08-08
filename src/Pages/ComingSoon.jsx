import LoadingScreen from "@/components/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen
            title="Loading page..."
            subtitle="Please wait."
            spinnerColors={["from-rust-400", "to-rust-600"]}
          />
        ) : (
          <motion.div
            key="comingsoon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-screen text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-700 font-heading tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              🚧 Coming Soon 🚧
            </motion.h1>
            <motion.p
              className="text-gray-500 max-w-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              This page is under construction. We’re working hard to bring it to
              you soon.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComingSoon;
