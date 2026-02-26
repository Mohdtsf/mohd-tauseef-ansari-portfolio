'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, Instagram, Youtube, Facebook, ArrowUp, Terminal } from 'lucide-react';
import { FaDiscord, FaTwitch } from 'react-icons/fa';
import { Logo } from '../logo';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Mohdtsf", label: "GitHub", hoverColor: "hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mohd-tauseef-ansari/", label: "LinkedIn", hoverColor: "hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]" },
    { icon: <Twitter size={20} />, href: "https://x.com/MoTauseefAnsari", label: "Twitter", hoverColor: "hover:text-sky-400 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/tauseefansari131484?igsh=MWR4Y285OTRucG50NQ==", label: "Instagram", hoverColor: "hover:text-pink-500 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1AxGx7Aw4Y/", label: "Facebook", hoverColor: "hover:text-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]" },
    // { icon: <Youtube size={20} />, href: "https://youtube.com/", label: "YouTube", hoverColor: "hover:text-red-500 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]" },
    // { icon: <FaDiscord size={20} />, href: "https://discord.com/", label: "Discord", hoverColor: "hover:text-indigo-400 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(129,140,248,0.4)]" },
    // { icon: <FaTwitch size={20} />, href: "https://twitch.tv/", label: "Twitch", hoverColor: "hover:text-purple-500 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]" },
    // { icon: <Mail size={20} />, href: "mailto:mohdtauseefansari34@gmail.com", label: "Email", hoverColor: "hover:text-neon-blue hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]" },
  ];

  return (
    <footer className="relative mt-20 pt-16 overflow-hidden">
      {/* Background glow & grid */}
      <div className="absolute inset-0 top-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-purple to-transparent opacity-50 blur-[1px]"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pb-8">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-8 mb-16">

          {/* Brand & Intro */}
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" aria-label="home" className="flex items-center space-x-2 group mb-6">
              <Logo />
            </Link>
            <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
              Architecting secure, highly-scalable, and intelligent systems. Bridging the gap between cutting-edge AI and robust cybersecurity.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 border border-glass-border font-mono text-xs text-neon-blue shadow-[0_0_10px_rgba(0,245,255,0.1)]">
              <Terminal size={14} className="animate-pulse" />
              <span>System online. nominal.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/5 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-purple shadow-[0_0_8px_rgba(127,90,240,0.8)] animate-pulse"></span>
              Navigation
            </h3>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                    className="hover:text-neon-blue transition-all flex items-center gap-2 group text-sm"
                  >
                    <span className="text-electric-purple opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 font-mono text-xs">&gt;</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_8px_rgba(0,245,255,0.8)] animate-pulse"></span>
              Connect
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-4 w-full justify-items-center md:justify-items-start">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-glass border border-glass-border text-gray-400 flex items-center justify-center transition-all duration-300 ${link.hoverColor}`}
                  title={link.label}
                >
                  <div className="hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8"></div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p className="flex items-center gap-2">
            © {currentYear} Mohd Tauseef Ansari.
            {/* <span className="hidden sm:inline">|</span>
            <span className="mt-1 sm:mt-0 font-mono text-xs opacity-70 hover:text-electric-purple transition-colors cursor-default">v1.2.0.RELEASE</span> */}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-glass-border hover:border-neon-blue hover:text-neon-blue transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Back to top</span>
            <div className="p-1 rounded-full bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>

      </div>

      {/* Extreme Bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-electric-purple to-transparent opacity-50 blur-[2px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-80"></div>
    </footer>
  );
}
