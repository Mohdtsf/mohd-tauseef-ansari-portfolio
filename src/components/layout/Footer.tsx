import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border glass mt-20">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-mono font-bold text-xl tracking-tighter text-foreground text-gradient">
              Mohdtsf<span className="text-neon-blue">_</span>
            </span>
            <p className="text-gray-400 text-sm mt-2 text-center md:text-left max-w-md">
              Full-Stack Developer & Cyber Security Enthusiast. Building secure, premium, and futuristic web experiences.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/Mohdtsf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-glass-border hover:border-neon-blue hover:text-neon-blue text-gray-400 transition-all hover:shadow-[0_0_10px_rgba(0,245,255,0.3)]">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mohd-tauseef-ansari/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-glass-border hover:border-electric-purple hover:text-electric-purple text-gray-400 transition-all hover:shadow-[0_0_10px_rgba(127,90,240,0.3)]">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:mohdtauseefansari34@gmail.com" className="p-2 rounded-full border border-glass-border hover:border-neon-blue hover:text-neon-blue text-gray-400 transition-all hover:shadow-[0_0_10px_rgba(0,245,255,0.3)]">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Mohd Tauseef Ansari. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="#projects" className="hover:text-gray-300 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30"></div>
    </footer>
  );
}
