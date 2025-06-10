import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      errs.email = "Invalid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("Sending...");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "Message sent!" : "Failed to send");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus(`Failed to send mail! ${error.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-xl mx-auto space-y-4 h-[70vh]"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
        className="text-xl md:text-3xl font-bold text-center my-5 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-700 font-heading tracking-tight"
      >
        Contact Me
      </motion.h1>
      <label className="block mb-2 font-medium" htmlFor="name">
        Name
        <input
          name="name"
          placeholder="Your Name"
          className={`mt-1 block w-full py-3 px-2 border rounded-lg ${
            errors.name ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name}</p>
        )}
      </label>
      <label className="block mb-2 font-medium" htmlFor="email">
        Email
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className={`w-full py-3 px-2 border rounded-lg mt-1 ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </label>
      <label className="block mb-4 font-medium" htmlFor="message">
        Message
        <textarea
          name="message"
          placeholder="Write your message here..."
          className={`mt-1 block w-full px-3 py-2 border rounded-lg resize-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        )}
      </label>
      <button
        className="bg-black text-white px-4 py-3 rounded-lg w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}
