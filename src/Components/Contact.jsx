import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaUser, FaRegEnvelope, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative p-10 py-16 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-10"
      >
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Me
        </h3>

        {/* Contact Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-green-400 outline-none transition-all w-full"
              required
            />
          </div>

          <div className="relative">
            <FaRegEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-green-400 outline-none transition-all w-full"
              required
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-green-400 outline-none transition-all w-full"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition-all"
          >
            {loading ? "Sending..." : <><FaPaperPlane /> Send Message</>}
          </motion.button>
        </form>

        {/* Status Message */}
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-6 text-center font-medium ${status.includes("✅") ? "text-green-600" : "text-red-500"}`}
          >
            {status}
          </motion.p>
        )}

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex justify-center gap-8"
        >
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/yourusername",
              color: "text-gray-700 hover:text-black",
            },
            {
              icon: <FaLinkedin />,
              link: "https://linkedin.com/in/yourusername",
              color: "text-blue-600 hover:text-blue-800",
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:your@email.com",
              color: "text-red-500 hover:text-red-700",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} text-3xl transition-colors`}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.3 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
