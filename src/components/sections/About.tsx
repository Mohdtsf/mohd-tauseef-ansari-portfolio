'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Download, ArrowRight } from 'lucide-react';

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Scan0 Software",
    date: "Feb 2025 - Aug 2025",
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
    description: "Developed modern frontend architectures, optimized web performance, and collaborated on AI-driven interfaces."
  },
  {
    role: "Web Developer Intern",
    company: "RD ECom",
    date: "Sept 2022 - Mar 2023",
    tech: ["WordPress", "HTML", "CSS", "SEO"],
    description: "Built responsive business websites, managed e-commerce workflows, and implemented technical SEO improvements."
  }
];

const educations = [
  {
    degree: "M.Sc. Cyber Security & Digital Forensics",
    institution: "Aligarh Muslim University",
    date: "Graduated with CGPA 8.04",
  },
  {
    degree: "B.Sc. (Hons) Physics",
    institution: "Aligarh Muslim University",
    date: "Graduated with CGPA 7.77",
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-px bg-glass-border relative"
          >
            <div className="absolute top-0 h-full w-32 bg-neon-blue"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Summary & Education */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-neon-blue/20 shadow-[0_4px_30px_rgba(0,245,255,0.05)] relative overflow-hidden"
            >
              <h3 className="text-2xl font-semibold mb-4 text-neon-blue">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over a year of hands-on experience in web development and a strong academic foundation in Cyber Security & Digital Forensics, I specialize in building secure, high-performance, and AI-integrated applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                My research approach to problem-solving ensures that I not only write clean architecture code but also build systems that are resilient against modern threats. I thrive at the cross-section of beautiful UI/UX, robust backend systems, and cutting-edge AI.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 text-white bg-glass-dark border border-electric-purple hover:bg-electric-purple/20 px-6 py-3 rounded-lg transition-all"
              >
                <Download size={18} /> Download CV
              </a>
            </motion.div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="text-neon-blue" /> Education
              </h3>
              <div className="space-y-6">
                {educations.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass p-6 rounded-xl border-glass-border hover:border-electric-purple/50 transition-colors group"
                  >
                    <h4 className="text-xl font-medium text-white group-hover:text-electric-purple transition-colors">{edu.degree}</h4>
                    <span className="text-neon-blue font-mono text-sm block mb-2 mt-1">{edu.institution} • {edu.date}</span>
                    <ul className="mt-4 space-y-2">
                      {/* {edu.highlights.map((h, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <ArrowRight size={14} className="text-electric-purple mt-1 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))} */}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Briefcase className="text-electric-purple" /> Experience
            </h3>

            <div className="relative border-l border-glass-border ml-3 md:ml-4 space-y-12 pb-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,245,255,0.8)]"></div>

                  <div className="glass p-6 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <span className="text-sm font-mono text-gray-400 glass px-3 py-1 rounded-full border-none">{exp.date}</span>
                    </div>

                    <div className="text-electric-purple font-medium mb-4">{exp.company}</div>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
