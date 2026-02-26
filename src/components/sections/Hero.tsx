'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Terminal } from 'lucide-react';

const techBadges = [
  'React', 'Next.js', 'Node', 'JavaScript', 'TypeScript', 'Python', 'Java', 'MongoDB', 'SQL', 'Docker', 'AWS'
];

function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Cyber Security Enthusiast"
  ];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
      setTypingSpeed(50);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(100);
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <ThreeBackground />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between mt-5 gap-16 lg:gap-8">

        {/* Left Side: Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-neon-blue/30 text-neon-blue text-sm font-mono mb-8">
            <Terminal size={16} />
            <span>Welcome to my digital space</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <br className="md:hidden" />
            <span className="text-gradient drop-shadow-lg">Mohd Tauseef Ansari</span>
          </h1>

          <div className="h-16 md:h-20 flex items-center justify-center lg:justify-start mb-8 w-full">
            <h2 className="text-2xl md:text-4xl font-medium text-gray-300">
              <span className="font-mono">&gt; </span>
              {text}
              <span className="inline-block w-[3px] h-[1em] bg-neon-blue ml-1 align-middle animate-cursor-blink"></span>
            </h2>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I build secure, scalable systems and explore the intersection of AI, networking, and modern web development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full opacity-100">
            <a href="#projects" className="px-8 py-3 rounded-md bg-neon-blue text-black font-semibold hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] transition-all">
              View Projects
            </a>
            <a href="/mohd-tauseef-ansari-resume.pdf" target="_blank" className="px-8 py-3 rounded-md border border-glass-border glass hover:border-electric-purple hover:shadow-[0_0_20px_rgba(127,90,240,0.4)] transition-all flex items-center gap-2">
              <ArrowDown size={18} /> Download Resume
            </a>
            <a href="https://github.com/Mohdtsf" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-md border border-glass-border glass hover:border-white transition-all flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
          </div>

          {/* Floating Badges */}
          <div className="mt-16 w-full flex flex-wrap justify-center lg:justify-start gap-4 max-w-2xl opacity-80">
            {techBadges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  y: { repeat: Infinity, duration: 4, delay: index * 0.2, ease: "easeInOut" }
                }}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-300 border-glass-border shadow-sm hover:border-neon-blue hover:text-neon-blue transition-colors cursor-default"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end relative mt-10 lg:mt-0"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">

            {/* Glowing Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-electric-purple rounded-full blur-[80px] opacity-20 animate-pulse"></div>

            {/* Orbital Rings representing tech & cybersecurity architecture */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15px] rounded-full border border-dashed border-neon-blue/40"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-30px] rounded-full border border-glass-border"
            ></motion.div>

            {/* Main Image Frame (Glassmorphism) */}
            <div className="absolute inset-0 rounded-full border-2 border-glass-border p-2 overflow-hidden glass hover:border-electric-purple transition-colors duration-500 z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full rounded-full bg-black/60 border border-white/5 overflow-hidden relative group flex items-center justify-center">

                {/* Inner Gradient Base */}
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-purple/20 to-neon-blue/20"></div>

                {/* 
                  * TODO: Place your actual image here!
                  * Example:
                  * <img src="/your-profile.jpg" alt="Mohd Tauseef Ansari" className="absolute inset-0 w-full h-full object-cover z-10" />
                  * OR if using Next.js Image:
                  * <Image src="/your-profile.jpg" alt="Mohd Tauseef Ansari" fill className="object-cover z-10" />
                */}

                {/* Replace the placeholder div with this: */}
                <img
                  src="/mohd-tauseefansari.png"
                  alt="Mohd Tauseef Ansari"
                  draggable="false"
                  className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none select-none [-webkit-user-drag:none] [user-drag:none]"
                />


                {/* <div className="text-center relative z-20 group-hover:scale-110 transition-transform duration-500 flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full glass border border-neon-blue/40 flex items-center justify-center text-neon-blue shadow-[0_0_15px_rgba(0,245,255,0.4)] mb-2">
                    <Terminal size={28} />
                  </div>
                  <span className="font-mono text-sm text-gray-300 block bg-black/50 px-3 py-1 rounded">PLACE IMAGE HERE</span>
                  <span className="text-xs text-neon-blue">src/components/sections/Hero.tsx</span>
                </div> */}

              </div>
            </div>

            {/* Floating Tech Nodes */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-10 -right-4 md:-right-8 glass p-3 md:p-4 rounded-2xl border-neon-blue/30 text-neon-blue shadow-[0_0_20px_rgba(0,245,255,0.3)] z-20 bg-black/50 backdrop-blur-md"
            >
              <Terminal size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 -left-4 md:-left-8 glass p-3 md:p-4 rounded-xl border-electric-purple/30 text-electric-purple shadow-[0_0_20px_rgba(127,90,240,0.3)] z-20 bg-black/50 backdrop-blur-md"
            >
              <Github size={24} />
            </motion.div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
