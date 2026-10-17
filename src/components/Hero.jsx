import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % personalInfo.heroHeadlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentHeadline = personalInfo.heroHeadlines[headlineIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#07070a]"
    >
      {/* Background ambient lighting matching reference video frames */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial purple glow behind portrait */}
        <div className="absolute top-1/4 right-0 lg:right-1/4 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-br from-purple-700/25 via-indigo-600/20 to-transparent blur-[130px] -z-10 animate-pulse-slow" />
        {/* Secondary ambient glow bottom-left */}
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-purple-900/15 blur-[120px] -z-10" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50 -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Column: Typography & CTAs (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10 pt-4 lg:pt-0">
            {/* Small uppercase introductory badge matching video */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 mb-5"
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-500 shadow-sm shadow-purple-500" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-neutral-400 uppercase font-mono">
                HI, I'M <span className="text-white">DHANUSH</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300">
                AI & Full-Stack
              </span>
            </motion.div>

            {/* Oversized Dynamic Bold Headline in 2 Stacked Lines matching reference video */}
            <div className="relative min-h-[140px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[230px] flex items-center mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={headlineIndex}
                  initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black uppercase tracking-tight leading-[0.88] select-none"
                >
                  <div className="text-white drop-shadow-sm">
                    {currentHeadline.line1}
                  </div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-purple-400">
                    {currentHeadline.line2}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Short Editorial Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl mb-10"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-purple-600/30 transition-all duration-300 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-purple-500/50 font-medium text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-neutral-400 hover:text-white text-sm font-medium transition-colors"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View Summary</span>
              </a>
            </motion.div>

            {/* Bottom Scroll Indicator matching reference video */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-neutral-500 hover:text-neutral-300 transition-colors uppercase cursor-pointer group w-fit"
            >
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="text-purple-400 font-bold"
              >
                ↓
              </motion.span>
              <span>SCROLL TO EXPLORE TIMELINE</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait Composition (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-full max-w-[440px] lg:max-w-[500px] aspect-[4/5] flex items-end justify-center"
            >
              {/* Backlight halo glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/35 via-indigo-500/20 to-transparent rounded-full filter blur-3xl opacity-85 transform scale-95 translate-y-6" />
              
              {/* Portrait image with bottom gradient mask matching the reference video */}
              <div 
                className="relative w-full h-full flex items-end justify-center"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)'
                }}
              >
                <img
                  src="/images/portrait-cutout.png"
                  alt="Dhanush M - AI & Full-Stack Developer"
                  className="w-full h-full object-contain object-bottom filter contrast-[1.04] brightness-[0.98] drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Floating Tech Pill Badge on Portrait */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-2 -left-4 sm:left-2 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-purple-500/30 shadow-2xl shadow-purple-950/40"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white tracking-wide">FastAPI • React • RAG</div>
                  <div className="text-[11px] text-neutral-400">CIET • CGPA 8.40</div>
                </div>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute top-6 right-0 glass-card px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-neutral-300">Open to Hire</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
