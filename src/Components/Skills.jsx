// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaTrophy,
//   FaDownload,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNode,
// } from "react-icons/fa";

// const accomplishments = [
//   {
//     text: "CodeCaze2'4 -Face a Coding Challenge and win Exciting prizes",
//     file: "/codecaze24 pdf.pdf",
//     type: "achievement",
//   },
//   {
//     text: "GetAI Powered Data Analysis Job Simulation – TATA",
//     file: "/Tata Certification Data Analytics and Genratic Ai.pdf",
//     type: "achievement",
//   },
//   {
//     text: "MERN Full Stack Web Development – Sharyians Coding School",
//     file: "/web dev certificate.pdf",
//     type: "certificate",
//   },
//   {
//     text: "C/CPP Certificate – SUNNY Institute",
//     file: "/cpp pdf.pdf",
//     type: "certificate",
//   },
//   {
//     text: "SQL Certificate – Hacker Rank",
//     file: "/sql_basic certificate.pdf",
//     type: "certificate",
//   },
//   {
//     text: "IOT Certificate – Recognised by NCVET",
//     file: "/IOT certificate.pdf",
//     type: "certificate",
//   },
//   {
//     text: "Software Development Internship – LeopardRun And Innovation",
//     file: "/leopard innovation certificate.pdf",
//     type: "certificate",
//   },
// ];

// export default function Skills() {
//   const [filter, setFilter] = useState("all");

//   const skills = [
//     { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
//     { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
//     { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
//     { name: "React.js", icon: <FaReact size={40} className="text-cyan-400" /> },
//     { name: "Node.js", icon: <FaNode size={40} className="text-green-500" /> },
//   ];

//   const filteredAccomplishments =
//     filter === "all"
//       ? accomplishments
//       : accomplishments.filter((item) => item.type === filter);

//   return (
//     <div>
//       {/* Skills Section */}
//       <section id="skills" className="p-10 bg-gray-950 text-white min-h-screen">
//         <h2 className="text-4xl font-bold text-center p-10 mb-12">
//           My <span className="text-cyan-400">Skills</span> &{" "}
//           <span className="text-pink-400">Accomplishments</span>
//         </h2>

//         {/* Skills Grid */}
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-pink-500/40 transition transform hover:-translate-y-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {skill.icon}
//               <h3 className="mt-3 text-lg font-semibold">{skill.name}</h3>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Achievements Section */}
//       <section id="achievements" className="p-10 bg-gray-900 text-white">
//         <h3 className="text-3xl font-bold mb-6 text-cyan-400 text-center">
//           Achievements & Certificates
//         </h3>

//         {/* Filter Buttons */}
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => setFilter("all")}
//             className={`px-4 py-2 rounded-lg ${
//               filter === "all" ? "bg-cyan-500 text-black" : "bg-gray-700"
//             }`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setFilter("achievement")}
//             className={`px-4 py-2 rounded-lg ${
//               filter === "achievement"
//                 ? "bg-cyan-500 text-black"
//                 : "bg-gray-700"
//             }`}
//           >
//             Achievements
//           </button>
//           <button
//             onClick={() => setFilter("certificate")}
//             className={`px-4 py-2 rounded-lg ${
//               filter === "certificate"
//                 ? "bg-cyan-500 text-black"
//                 : "bg-gray-700"
//             }`}
//           >
//             Certificates
//           </button>
//         </div>

//         {/* List */}
//         <motion.ul
//           className="space-y-4 max-w-3xl mx-auto"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           {filteredAccomplishments.map((item) => (
//             <motion.li
//               key={item.text} // ✅ unique key
//               className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-cyan-500/30 transition"
//               variants={{
//                 hidden: { opacity: 0, x: -50 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//             >
//               <div className="flex items-center gap-3">
//                 <FaTrophy
//                   className={
//                     item.type === "achievement"
//                       ? "text-yellow-500"
//                       : "text-green-400"
//                   }
//                 />
//                 <span>{item.text}</span>
//               </div>
//               {item.file && (
//                 <a
//                   href={encodeURI(item.file)} // ✅ handles spaces in filenames
//                   download // ✅ makes file downloadable
//                   className="text-cyan-400 hover:text-white flex items-center gap-2"
//                 >
//                   <FaDownload /> PDF
//                 </a>
//               )}
//             </motion.li>
//           ))}
//         </motion.ul>
//       </section>
//     </div>
//   );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
} from "react-icons/fa";

const accomplishments = [
  {
    text: "CodeCaze2'4 -Face a Coding Challenge and win Exciting prizes",
    file: "/codecaze24 pdf.pdf",
    type: "achievement",
  },
  {
    text: "GetAI Powered Data Analysis Job Simulation – TATA",
    file: "/Tata Certification Data Analytics and Genratic Ai.pdf",
    type: "achievement",
  },
  {
    text: "MERN Full Stack Web Development – Sharyians Coding School",
    file: "/web dev certificate.pdf",
    type: "certificate",
  },
  {
    text: "C/CPP Certificate – SUNNY Institute",
    file: "/cpp pdf.pdf",
    type: "certificate",
  },
  {
    text: "SQL Certificate – Hacker Rank",
    file: "/sql_basic certificate.pdf",
    type: "certificate",
  },
  {
    text: "IOT Certificate – Recognised by NCVET",
    file: "/IOT certificate.pdf",
    type: "certificate",
  },
  {
    text: "Software Development Internship – LeopardRun And Innovation",
    file: "/leopard innovation certificate.pdf",
    type: "certificate",
  },
];

export default function Skills() {
  const [filter, setFilter] = useState("all");

  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNode size={40} className="text-green-500" /> },
  ];

  const filteredAccomplishments =
    filter === "all"
      ? accomplishments
      : accomplishments.filter((item) => item.type === filter);

  return (
    <section id="skills" className="p-10 bg-gray-950 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center p-10 mb-12">
        My <span className="text-cyan-400">Skills</span> &{" "}
        <span className="text-pink-400">Accomplishments</span>
      </h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-pink-500/40 transition transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.icon}
            <h3 className="mt-3 text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements Section */}
      <div id="achievements" className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-cyan-400 text-center">
          Achievements & Certificates
        </h3>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all" ? "bg-cyan-500 text-black" : "bg-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("achievement")}
            className={`px-4 py-2 rounded-lg ${
              filter === "achievement"
                ? "bg-cyan-500 text-black"
                : "bg-gray-700"
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setFilter("certificate")}
            className={`px-4 py-2 rounded-lg ${
              filter === "certificate"
                ? "bg-cyan-500 text-black"
                : "bg-gray-700"
            }`}
          >
            Certificates
          </button>
        </div>

        {/* List */}
        <motion.ul
          className="space-y-4 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {filteredAccomplishments.map((item) => (
            <motion.li
              key={item.text}
              className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-cyan-500/30 transition"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="flex items-center gap-3">
                <FaTrophy
                  className={
                    item.type === "achievement"
                      ? "text-yellow-500"
                      : "text-green-400"
                  }
                />
                <span>{item.text}</span>
              </div>
              {item.file && (
                <a
                  href={encodeURI(item.file)}
                  download
                  className="text-cyan-400 hover:text-white flex items-center gap-2"
                >
                  <FaDownload /> PDF
                </a>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
