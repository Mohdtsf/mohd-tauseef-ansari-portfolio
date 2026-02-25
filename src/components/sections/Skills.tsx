'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs,
  SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiDocker, SiAmazonwebservices, SiGit, SiLinux,
  SiNumpy, SiPandas, SiScikitlearn
} from 'react-icons/si';
import { FaServer, FaShieldAlt, FaJava } from 'react-icons/fa';
import { Brain, Terminal, LayoutTemplate, Cog, Code2 } from 'lucide-react';

const skillCategories = [
  { id: 'all', label: 'All Skills', icon: <Code2 size={16} /> },
  { id: 'frontend', label: 'Frontend', icon: <LayoutTemplate size={16} /> },
  { id: 'backend', label: 'Backend & DB', icon: <FaServer size={14} /> },
  { id: 'tools', label: 'DevOps & Tools', icon: <Cog size={16} /> },
  { id: 'ai', label: 'AI & Security', icon: <Brain size={16} /> },
];

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', category: 'frontend' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400', bg: 'hover:bg-cyan-400/10', border: 'hover:border-cyan-400/50', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', bg: 'hover:bg-white/10', border: 'hover:border-white/50', category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', bg: 'hover:bg-cyan-500/10', border: 'hover:border-cyan-500/50', category: 'frontend' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-purple-500', bg: 'hover:bg-purple-500/10', border: 'hover:border-purple-500/50', category: 'frontend' },

  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', bg: 'hover:bg-green-500/10', border: 'hover:border-green-500/50', category: 'backend' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', bg: 'hover:bg-gray-300/10', border: 'hover:border-gray-300/50', category: 'backend' },
  { name: 'Python', icon: SiPython, color: 'text-blue-500', bg: 'hover:bg-blue-500/10', border: 'hover:border-blue-500/50', category: 'backend' },
  { name: 'Java', icon: FaJava, color: 'text-orange-500', bg: 'hover:bg-orange-500/10', border: 'hover:border-orange-500/50', category: 'backend' },
  { name: 'REST APIs', icon: FaServer, color: 'text-neon-blue', bg: 'hover:bg-neon-blue/10', border: 'hover:border-neon-blue/50', category: 'backend' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', bg: 'hover:bg-green-500/10', border: 'hover:border-green-500/50', category: 'backend' },
  { name: 'SQL', icon: SiMysql, color: 'text-blue-400', bg: 'hover:bg-blue-400/10', border: 'hover:border-blue-400/50', category: 'backend' },

  { name: 'Docker', icon: SiDocker, color: 'text-blue-500', bg: 'hover:bg-blue-500/10', border: 'hover:border-blue-500/50', category: 'tools' },
  { name: 'AWS', icon: SiAmazonwebservices, color: 'text-orange-400', bg: 'hover:bg-orange-400/10', border: 'hover:border-orange-400/50', category: 'tools' },
  { name: 'Git', icon: SiGit, color: 'text-red-500', bg: 'hover:bg-red-500/10', border: 'hover:border-red-500/50', category: 'tools' },
  { name: 'Linux', icon: SiLinux, color: 'text-yellow-200', bg: 'hover:bg-yellow-200/10', border: 'hover:border-yellow-200/50', category: 'tools' },

  { name: 'Numpy', icon: SiNumpy, color: 'text-blue-400', bg: 'hover:bg-blue-400/10', border: 'hover:border-blue-400/50', category: 'ai' },
  { name: 'Pandas', icon: SiPandas, color: 'text-purple-400', bg: 'hover:bg-purple-400/10', border: 'hover:border-purple-400/50', category: 'ai' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-orange-500', bg: 'hover:bg-orange-500/10', border: 'hover:border-orange-500/50', category: 'ai' },
  { name: 'Cyber Security', icon: FaShieldAlt, color: 'text-electric-purple', bg: 'hover:bg-electric-purple/10', border: 'hover:border-electric-purple/50', category: 'ai' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden min-h-screen flex items-center">

      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl text-lg"
          >
            A curated list of technologies, frameworks, and methodologies I leverage to build highly secure, intelligent, and scalable systems.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === cat.id
                ? 'bg-neon-blue/10 border-neon-blue text-neon-blue shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                : 'bg-glass border-glass-border text-gray-400 hover:text-white hover:border-gray-500'
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
            >
              {filteredSkills.map((skill, index) => {
                const Icon = skill.icon;
                const defaultBg = "hover:bg-white/5";
                const defaultBorder = "hover:border-white/30";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    key={skill.name}
                    className={`glass p-6 rounded-2xl border border-glass-border flex flex-col items-center justify-center gap-4 text-center cursor-default group transition-all duration-500 ${skill.bg || defaultBg} ${skill.border || defaultBorder}`}
                  >
                    <div className={`text-4xl sm:text-5xl ${skill.color} transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2 drop-shadow-lg`}>
                      <Icon />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
