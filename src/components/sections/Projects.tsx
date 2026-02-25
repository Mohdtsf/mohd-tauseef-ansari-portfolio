'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Cpu, Shield } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AI-Driven Network Traffic Analysis",
    category: "AI & Cyber Security",
    icon: <Cpu className="text-neon-blue w-6 h-6" />,
    shortDesc: "Real-time anomaly detection system using Isolation Forest to identify network intrusions and malicious traffic.",
    fullDesc: "A comprehensive network monitoring solution built to detect zero-day attacks and unusual traffic patterns. It leverages Python for backend data processing and model inference (Isolation Forest) and feeds real-time alerts to a Next.js dashboard.",
    techStack: ["Python", "Isolation Forest", "Next.js", "WebSockets", "Pandas", "Tailwind CSS"],
    features: [
      "Real-time Dashboard for traffic visualization",
      "Authentication System for secure access",
      "Drill-down filters for analyzing specific subnets",
      "Feedback learning system to improve model accuracy over time"
    ],
    github: "https://github.com/Mohdtsf",
    demo: "#", // Placeholder
    image: "/project1-bg.jpg", // We'll add subtle gradients if no image
    color: "from-neon-blue to-electric-purple"
  },
  {
    id: 2,
    title: "Image Encrypt-Decrypt Utility",
    category: "Cryptography",
    icon: <Shield className="text-electric-purple w-6 h-6" />,
    shortDesc: "Secure local web utility for encrypting and decrypting images using AES standard with SHA-256 keys.",
    fullDesc: "A robust cryptographic tool demonstrating secure local processing. It uses advanced AES symmetric encryption to lock down images, requiring a SHA-256 hashed password key to unlock. Built with Flask to provide a modern, accessible web interface over the Python backend.",
    techStack: ["Flask", "Python", "AES Encryption", "SHA-256", "HTML/CSS"],
    features: [
      "Military-grade AES encryption",
      "SHA-256 hashing for key management",
      "Secure file upload without saving plain data",
      "Live encryption/decryption demo UI"
    ],
    github: "https://github.com/Mohdtsf",
    demo: "#", // Placeholder
    image: "/project2-bg.jpg",
    color: "from-electric-purple to-pink-500"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start tracking-tight">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-px bg-glass-border relative"
          >
            <div className="absolute top-0 left-0 h-full w-32 bg-neon-blue"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(proj.id)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-electric-purple rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative h-full bg-black/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 flex flex-col overflow-hidden transition-all duration-300">
                {/* Decorative background circle */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${proj.color} rounded-full opacity-10 blur-[50px] group-hover:opacity-30 transition-opacity duration-500`}></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 glass rounded-xl inline-block">
                    {proj.icon}
                  </div>
                  <div className="flex gap-3">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2" onClick={(e) => e.stopPropagation()}>
                      <Github size={20} />
                    </a>
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors p-2" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="relative z-10 flex-grow">
                  <span className="text-xs font-mono text-neon-blue mb-2 block">{proj.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-purple transition-colors">{proj.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">{proj.shortDesc}</p>
                </div>

                <div className="mt-auto relative z-10 pt-6 border-t border-glass-border/50">
                  <div className="flex flex-wrap gap-2 text-sm font-mono text-gray-400">
                    {proj.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="bg-white/5 px-2 py-1 rounded border border-white/5">{tech}</span>
                    ))}
                    {proj.techStack.length > 4 && <span className="px-2 py-1">+{proj.techStack.length - 4}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && project && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border-neon-blue/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <span className="inline-block py-1 px-3 rounded-full border border-electric-purple/30 bg-electric-purple/10 text-electric-purple text-xs font-mono mb-4">
                  {project.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">{project.title}</h2>
              </div>

              <div className="flex gap-4 mb-8 border-b border-glass-border pb-6">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-md">
                  <Github size={18} /> Source Code
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-neon-blue hover:text-white hover:bg-neon-blue/20 transition-colors border border-neon-blue/30 px-4 py-2 rounded-md">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                <div className="sm:col-span-2">
                  <h3 className="text-xl font-semibold mb-3 text-white">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{project.fullDesc}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-sm font-mono text-neon-blue bg-neon-blue/10 px-2 py-1 rounded border border-neon-blue/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-purple shrink-0"></div>
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
