import { motion } from "framer-motion";

// const ImageGrid = ({ images }) => {
//   return (
//     <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
//       {images?.map((image, index) => (
//         <div
//           key={index}
//           className="mb-4 relative overflow-hidden rounded-lg shadow-lg break-inside-avoid"
//         >
//           <motion.img
//             src={image.src}
//             alt={image.title}
//             className="w-full object-cover transition-transform duration-300 hover:scale-105"
//             loading="lazy"
//           />
//           <motion.div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 p-4">
//             <h3 className="text-lg font-semibold text-white">{image.title}</h3>
//             <p className="text-sm text-center text-white">
//               {image.description}
//             </p>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

const ImageGrid = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {images?.map((image, index) => (
        <motion.div
          key={index}
          className="mb-4 relative overflow-hidden rounded-lg shadow-lg break-inside-avoid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
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
      ))}
    </div>
  );
};

export default ImageGrid;
