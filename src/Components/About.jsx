import React from "react";
import { motion } from "framer-motion";
import myPic from "../assets/photo_2025-09-01_00-54-25.jpg"; // update with your actual image
// import resume from "/public/Deedy_Resume_Reversed.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-6 py-16"
    >
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={myPic}
            alt="Ranu Gupta"
            className="rounded-2xl shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-400"
          />
        </motion.div>

        {/* Right - Text & Skills */}
        <motion.div
          className="text-white"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">
            About Me
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
            I am a passionate{" "}
            <span className="text-cyan-400 font-semibold">Full Stack Developer</span>{" "}
            with experience in creating{" "}
            <span className="text-blue-300">responsive</span>,{" "}
            <span className="text-blue-300">interactive</span>, and{" "}
            <span className="text-blue-300">dynamic</span> web applications using{" "}
            <span className="font-semibold text-cyan-400">
              React, Node.js, Express, and MongoDB
            </span>. I love solving problems, learning new technologies, and
            building impactful projects.
          </p>

          {/* Resume Button */}
          <motion.a
            href="/Deedy_Resume_Reversed.pdf"
            download="RanuGupta_Resume.pdf"
            className="inline-block bg-cyan-400 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-cyan-500 hover:scale-105 transition transform duration-200 mb-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Download Resume
          </motion.a>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["React", "Node.js", "Express", "MongoDB"].map((skill, i) => (
              <motion.div
                key={i}
                className="p-4 bg-white/5 rounded-xl shadow hover:bg-white/20 transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
