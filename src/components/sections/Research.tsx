'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Award, FileText } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="py-24 relative overflow-hidden bg-black/30 border-y border-glass-border">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start tracking-tight">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4"
          >
            <span className="text-transparent border-text">04.</span>
            Research & Publications
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-px bg-glass-border relative"
          >
            <div className="absolute top-0 right-32 h-full w-48 bg-electric-purple"></div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl border-neon-blue/20 relative overflow-hidden group hover:border-electric-purple/40 transition-colors duration-500"
          >
            {/* Top right decorative element */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-neon-blue">
              <BookOpen size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-purple/20 text-electric-purple border border-electric-purple/30 text-xs font-bold uppercase tracking-wider">
                  <Award size={14} /> Scopus Indexed
                </span>
                <span className="text-gray-400 text-sm font-mono border-l border-glass-border pl-4">
                  Journal of Information Systems Engineering and Management
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon-blue transition-all duration-300">
                A Hybrid Encryption Framework Combining AES S-Box Substitution with Modified ChaCha Stream Cipher
              </h3>

              <div className="mb-8">
                <h4 className="text-neon-blue font-semibold mb-3 flex items-center gap-2">
                  <FileText size={18} /> Abstract Preview
                </h4>
                <p className="text-gray-300 leading-relaxed max-w-3xl">
                  The rapid integration of Internet of Things (IoT) devices into modern healthcare creates significant security risks for sensitive patient data. Medical images are particularly vulnerable due to their large file sizes and high pixel redundancy, yet conventional encryption algorithms are often too computationally intensive for the resource-constrained hardware found in IoT devices. This paper proposes a novel hybrid encryption framework designed to resolve this security-performance trade-off. Our method first employs the AES S-box to introduce strong confusion, using its proven non-linear substitution to obscure statistical patterns within the image. Subsequently, a performance-optimized, reduced-round ChaCha20 stream cipher is used to achieve rapid diffusion. This stage ensures that even a single-bit change in the input is spread unpredictably across the entire ciphertext, making the output highly randomized. Experimental analysis confirms the framework's robust security. The scheme achieves an information entropy of ~7.997, indicating near-perfect randomness, while reducing pixel correlation coefficients to negligible values. A Number of Pixel Change Rate (NPCR) exceeding 99.5% for single-bit variations highlights its strong avalanche effect and resilience against differential cryptanalysis. By delivering these strong security guarantees with faster encryption speeds and minimal memory overhead, our hybrid framework presents a practical and scalable solution for securing sensitive medical images in real-time Internet of Health Systems (IoHS) applications like remote diagnostics and secure mobile health.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-glass-border/50">
                <a
                  href="https://www.jisem-journal.com/index.php/journal/article/view/12619"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-white/5 border border-glass-border hover:bg-neon-blue/10 hover:border-neon-blue/50 text-white transition-all flex items-center gap-2 group/btn font-medium"
                >
                  Read Full Publication
                  <ExternalLink size={18} className="text-neon-blue group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
