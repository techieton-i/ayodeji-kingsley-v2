import { motion } from "framer-motion";
import React from "react";

const LoadingScreen = ({
  title = "Loading...",
  subtitle = "Please wait.",
  spinnerColors = ["from-rust-400", "to-rust-600"],
}) => {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <motion.div
        className={`w-16 h-16 rounded-full bg-gradient-to-r ${spinnerColors[0]} ${spinnerColors[1]} shadow-xl`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.p
        className="text-gray-600 mt-4 text-lg font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.p>
      {subtitle && (
        <motion.p
          className="text-gray-500 mt-2 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default LoadingScreen;
