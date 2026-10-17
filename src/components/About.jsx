import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, CheckCircle2, Award, BookOpen, Sparkles, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07070a] border-t border-white/[0.05]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
            01 / WHO I AM
          </span>
          <div className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        {/* Two-Column Layout matching reference video 8s */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Floating Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[380px] rounded-3xl p-4 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.1] backdrop-blur-xl shadow-2xl shadow-purple-950/20 group"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 mb-4 border border-white/[0.06]">
                <img
                  src="/images/portrait-original.png"
                  alt="Dhanush M"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-transparent to-transparent opacity-60" />

                {/* Status indicator pill on photo */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3.5 rounded-xl bg-[#09090e]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-medium text-white/90">Open for Opportunities</span>
                  </div>
                  <span className="text-[11px] font-mono text-purple-400">2026</span>
                </div>
              </div>

              {/* Roles / Tags bar */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                  Full-Stack Developer
                </span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  AI & RAG Engineer
                </span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                  FastAPI & React
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Key Info */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-purple-400">Dhanush M</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-normal">
                Final-year <strong className="text-white font-medium">B.Tech Artificial Intelligence & Data Science</strong> student at <strong className="text-white font-medium">Coimbatore Institute of Engineering and Technology</strong> (CGPA 8.40).
              </p>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
                I specialize in engineering modern web applications with seamless frontend-backend communication, robust REST API workflows, and intelligent data systems. With production experience from the <strong className="text-neutral-200">Infosys Virtual Internship</strong> developing dynamic workflow engines and building cutting-edge <strong className="text-neutral-200">RAG (Retrieval-Augmented Generation)</strong> assistants with ChromaDB and LLMs, I turn complex specifications into resilient, intuitive digital experiences.
              </p>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
                {personalInfo.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-purple-500/30 transition-colors group"
                  >
                    <div className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-neutral-300 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5 leading-tight">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs & Social Links */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 shadow-md shadow-white/10"
                >
                  <span>Connect With Me</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/[0.1] text-sm font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/[0.1] text-sm font-medium transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
