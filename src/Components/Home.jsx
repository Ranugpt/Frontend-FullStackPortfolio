import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFileAlt, FaDownload } from "react-icons/fa";
// import { Link } from "react-scroll"; 
import myPic from "../assets/photo_2025-09-01_00-54-24.jpg";
import resume from "../assets/Deedy_Resume_Reversed correctedrr 1.pdf";

function Home() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-8 scroll-smooth" >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-white animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight"> Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Ranu Gupta </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 animate-slideInLeft"> Full Stack Developer | React Enthusiast | Node.js Backend Builder | MongoDB Explorer </h2>
          <p className="text-lg text-gray-300 max-w-lg animate-fadeIn delay-200"> Passionate about building responsive, scalable, and user-friendly web applications with modern technologies. </p>
          {/* Smooth Scroll Buttons */}
          <div className="flex space-x-6 mt-4">
            <Link to="/about" smooth={true} duration={700} className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-cyan-600 hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-300" >
              About Me </Link>
            <Link to="/projects" smooth={true} duration={700} className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-300" >
              Projects </Link> </div> {/* Social Icons */} <div className="flex space-x-6 mt-6">
            <a href="https://github.com/Ranugpt" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full shadow-lg hover:bg-black hover:shadow-[0_0_20px_#ffffff] hover:scale-110 transition-all duration-300" >

              <FaGithub size={28} className="text-white" /> </a>
            <a href="https://www.linkedin.com/in/ranu-gupta-990103289" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-[0_0_20px_#0A66C2] hover:scale-110 transition-all duration-300" >

              <FaLinkedin size={28} className="text-white" /> </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full shadow-lg hover:bg-gray-600 hover:shadow-[0_0_20px_#D1D5DB] hover:scale-110 transition-all duration-300" >
              <FaFileAlt size={28} className="text-white" /> </a>
            <a href="/Deedy_Resume_Reversed.pdf" download="Ranu_Gupta_Resume.pdf"
              className="p-4 bg-gray-800 rounded-full shadow-lg hover:bg-green-600 hover:shadow-[0_0_20px_#22C55E] hover:scale-110 transition-all duration-300" >
              <FaDownload size={28} className="text-white" />
            </a>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex justify-center md:justify-end animate-fadeIn delay-300">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 bg-gray-900 shadow-2xl group">
            <img src={myPic} alt="Ranu Gupta"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-full border-4 animate-pulse opacity-60">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;