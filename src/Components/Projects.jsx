import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import recipeImg from "../assets/recipe website project.png";
import chess from "../assets/Screenshot 2025-09-01 222252.png";
import todo from "../assets/Screenshot 2025-09-01 222211.png";
import fixedside from "../assets/Screenshot 2024-01-18 232348.png";
import figma from "../assets/figma project 1.png"; 
import chatbot from "../assets/Screenshot 2025-09-01 224348.png";

export default function Projects() {
  const projects = [
    {
      title: "Recipe Finder App",
      description: "React + Node.js + MongoDB",
      img: recipeImg,
      github: "https://github.com/Ranugpt/RealRecipe",
      live: "https://vercel.com/guptaranu719-3548s-projects/real-recipe-76ig",
    },
    {
      title: "Chess.com Platform",
      description: "JavaScript + Socket.io + HTML + CSS",
      img: chess,
      github: "https://github.com/Ranugpt/The-Chess.com",
      live: "#",
    },
    {
      title: "To-Do List App",
      description: "React.js + HTML + Tailwind CSS",
      img: todo,
      github: "https://github.com/Ranugpt/Todo-list-by-Raect",
      live: "#",
    },
    {
      title: "Fixed Side Clone",
      description: "HTML + CSS",
      img: fixedside,
      github: "https://github.com/Ranugpt/desktop-tutorial/upload/main",
      live: "#",
    },
    {
      title: "Figma-UI/UX Design",
      description: "Figma",
      img: figma,   // ✅ fixed (was UI)
      github: "https://github.com/Ranugpt/Figma-UI/upload",
      live: "#",
    },
    {
      title: "Chat-Bot App",
      description: "Botpress + React.js + Node.js + RestAPI + MongoDB",
      img: chatbot,
      github: "",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-6 md:px-12"
    >
      <h2 className="text-4xl font-bold text-center p-5 text-white mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
