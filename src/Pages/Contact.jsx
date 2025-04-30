import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6"
    >
      <h1 className="text-4xl font-bold text-center mb-6">
        Contact the Artist
      </h1>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Your Name"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Your Email"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            className="mt-1 p-2 w-full border rounded-lg"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
