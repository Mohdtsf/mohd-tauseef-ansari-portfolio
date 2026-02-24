'use client';

import { motion } from 'framer-motion';
import { Terminal, LayoutTemplate, Database, Server, Cog, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: <Terminal className="text-neon-blue" />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
    ]
  },
  {
    title: "Frontend",
    icon: <LayoutTemplate className="text-electric-purple" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    title: "Backend",
    icon: <Server className="text-neon-blue" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 95 },
    ]
  },
  {
    title: "Database",
    icon: <Database className="text-electric-purple" />,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Cog className="text-neon-blue" />,
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
    ]
  },
  {
    title: "AI/ML",
    icon: <Brain className="text-electric-purple" />,
    skills: [
      { name: "Numpy", level: 80 },
      { name: "Pandas", level: 75 },
      { name: "Scikit-Learn", level: 70 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/50 border-y border-glass-border">

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4"
          >
            <span className="text-transparent border-text">02.</span>
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-px bg-glass-border relative"
          >
            <div className="absolute top-0 left-32 h-full w-32 bg-electric-purple"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl border-glass-border hover:border-electric-purple/50 transition-all hover:shadow-[0_0_30px_rgba(127,90,240,0.15)] group relative overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 glass rounded-xl border border-glass-border group-hover:border-neon-blue transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-electric-purple group-hover/skill:text-neon-blue transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-glass-dark rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-electric-purple to-neon-blue rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (catIdx * 0.1) + (skillIdx * 0.1), ease: "easeOut" }}
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-[2px] rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
