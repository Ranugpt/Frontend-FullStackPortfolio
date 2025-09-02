// import React from "react";
// import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

// function Services() {
//   const services = [
//     {
//       title: "Web Development",
//       description: "Build modern, responsive, and optimized websites using React, Node.js, and Express.",
//       icon: <FaCode size={40} className="text-cyan-400" />,
//     },
//     {
//       title: "UI/UX Design",
//       description: "Design clean and user-friendly interfaces with Figma and TailwindCSS.",
//       icon: <FaPaintBrush size={40} className="text-pink-400" />,
//     },
//     {
//       title: "Mobile Responsive",
//       description: "Ensure seamless experiences across all devices with responsive design practices.",
//       icon: <FaMobileAlt size={40} className="text-yellow-400" />,
//     },
//   ];

//   return (
//     <section className="p-10 bg-gray-900 text-white min-h-screen">
//       <h2 className="text-4xl font-bold text-center p-10 mb-12">
//         My <span className="text-cyan-400">Services</span>
//       </h2>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/40 transition transform hover:-translate-y-2"
//           >
//             <div className="flex justify-center mb-4">{service.icon}</div>
//             <h3 className="text-2xl font-semibold mb-2 text-center">{service.title}</h3>
//             <p className="text-gray-300 text-center">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;




import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ use for navigation

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I create fast, secure, and SEO-friendly websites using React, Node.js, and Express. From landing pages to full-stack applications, I deliver scalable solutions.",
      icon: <FaCode size={40} className="text-cyan-400" />,
      tools: ["React.js", "Node.js", "Express.js", "MongoDB"],
      cta: { text: "View Projects", link: "/projects" },
    },
    {
      title: "UI/UX Design",
      description:
        "I design clean, intuitive, and engaging interfaces that improve user experience and brand identity. I turn ideas into visually appealing designs.",
      icon: <FaPaintBrush size={40} className="text-pink-400" />,
      tools: ["Figma", "TailwindCSS", "Wireframing", "Prototyping"],
      cta: { text: "See Designs", link: "/projects#uiux" },
    },
    {
      title: "Mobile Responsive",
      description:
        "I ensure websites and apps look and perform flawlessly across all devices, from desktops to mobiles, using modern responsive design practices.",
      icon: <FaMobileAlt size={40} className="text-yellow-400" />,
      tools: ["Flexbox", "CSS Grid", "Media Queries", "Cross-browser Testing"],
      cta: { text: "Hire Me", link: "/contact" },
    },
  ];

  return (
    <section className="p-10 bg-gray-950 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center p-10 mb-12">
        My <span className="text-cyan-400">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/40 transition transform hover:-translate-y-3 cursor-pointer flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div>
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-center text-cyan-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center mb-4">
                {service.description}
              </p>

              {/* Tools / Highlights */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {service.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-200 hover:bg-cyan-600 hover:text-black transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-4">
              <Link
                to={service.cta.link}
                className="px-5 py-2 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition shadow-md hover:shadow-cyan-400/50"
              >
                {service.cta.text}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
