'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle, AlertCircle, Mail, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after a few seconds on success
      if (submitStatus !== 'error') {
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-electric-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4"
          >
            <span className="text-transparent border-text">06.</span> 
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl text-lg"
          >
            I'm currently open for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-2xl border-neon-blue/20 hover:border-electric-purple/40 transition-colors h-full flex flex-col justify-center gap-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:mohdtauseefansari34@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors text-sm md:text-base break-all">
                    mohdtauseefansari34<br/>@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-electric-purple/10 text-electric-purple border border-electric-purple/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400 text-sm md:text-base">
                    New Delhi, India<br/>
                    <span className="text-xs text-gray-500 mt-1 block">Available for remote work</span>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 rounded-2xl border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col gap-6">
              
              <div className="flex flex-col gap-1.5 border-b border-glass-border focus-within:border-neon-blue transition-colors pb-2 relative group">
                <label htmlFor="name" className="text-sm font-mono text-gray-400 group-focus-within:text-neon-blue transition-colors">Name</label>
                <input 
                  id="name"
                  type="text" 
                  className="bg-transparent border-none outline-none text-white focus:ring-0 px-0 w-full"
                  placeholder="John Doe"
                  {...register("name")}
                />
                {errors.name && <span className="absolute bottom-[-20px] left-0 text-xs text-red-400">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5 border-b border-glass-border focus-within:border-neon-blue transition-colors pb-2 relative group mt-4">
                <label htmlFor="email" className="text-sm font-mono text-gray-400 group-focus-within:text-neon-blue transition-colors">Email</label>
                <input 
                  id="email"
                  type="email" 
                  className="bg-transparent border-none outline-none text-white focus:ring-0 px-0 w-full"
                  placeholder="john@example.com"
                  {...register("email")}
                />
                {errors.email && <span className="absolute bottom-[-20px] left-0 text-xs text-red-400">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5 border-b border-glass-border focus-within:border-electric-purple transition-colors pb-2 relative group mt-4">
                <label htmlFor="message" className="text-sm font-mono text-gray-400 group-focus-within:text-electric-purple transition-colors">Message</label>
                <textarea 
                  id="message"
                  className="bg-transparent border-none outline-none text-white focus:ring-0 px-0 w-full resize-none h-32"
                  placeholder="Hello, I'd like to talk about..."
                  {...register("message")}
                />
                {errors.message && <span className="absolute bottom-[-20px] left-0 text-xs text-red-400">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white/5 border border-glass-border text-white font-medium hover:bg-neon-blue hover:text-black hover:border-neon-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed group/btn"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    Send Message 
                    <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20 text-sm">
                  <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 text-sm">
                  <AlertCircle size={18} /> Something went wrong. Please try again later.
                </motion.div>
              )}

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
