import { AnimatePresence, motion } from "framer-motion";

export function Lightbox({ isOpen, imageSrc, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={imageSrc}
            alt="Artwork Full View"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full md:max-w-3xl h-auto md:max-h-[90vh] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent close on image click
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ArtModal({ isOpen, imageSrc, title, description, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-h-[90vh] w-full max-w-7xl overflow-hidden flex flex-col md:flex-row"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-2">
              <motion.img
                src={imageSrc}
                alt={title || "Artwork"}
                className="w-full h-auto max-h-[70vh] object-contain rounded"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </div>

            {/* Text Content */}
            {(title || description) && (
              <div className="w-full md:w-1/2 overflow-y-auto p-4">
                {title && (
                  <h2 className="text-lg font-semibold mb-2">{title}</h2>
                )}
                {description && (
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
