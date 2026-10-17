import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, FileCode, Palette, Layout, Smartphone, Layers,
  Terminal, Zap, Server, Cpu, Network, ShieldCheck, FileText, Bot,
  BrainCircuit, Sparkles, Database, GitCommit, Search, Activity, Mic, Wand2,
  HardDrive, Table, Box, GitBranch, FileCode2, CheckCircle2, Users, Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon mapping dictionary
const iconMap = {
  Code2, FileCode, Palette, Layout, Smartphone, Layers,
  Terminal, Zap, Server, Cpu, Network, ShieldCheck, FileText, Bot,
  BrainCircuit, Sparkles, Database, GitCommit, Search, Activity, Mic, Wand2,
  HardDrive, Table, Box, GitBranch, FileCode2, CheckCircle2, Users, Check
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07070a] border-t border-white/[0.05]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
            02 / TECHNICAL ARSENAL
          </span>
          <div className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        {/* Section Heading & Subtitle matching reference video 11s */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Full-stack expertise across modern web development, artificial intelligence, and cloud infrastructure.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {skillsData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-purple-600/20 border border-purple-500/50 shadow-md shadow-purple-900/30'
                    : 'text-neutral-400 hover:text-white bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.15]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Tag Grid matching reference video */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.07] border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20"
                >
                  {/* Skill Icon */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Skill Name */}
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-medium text-neutral-200 group-hover:text-white truncate">
                      {skill.name}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      {skill.level}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Feature Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-transparent border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-purple-500 shadow-md shadow-purple-500 animate-pulse" />
            <p className="text-xs sm:text-sm text-neutral-300">
              Proficient in end-to-end architectures: <strong>FastAPI / Django REST</strong> backend, <strong>ChromaDB / Vector Search</strong> AI pipelines, and <strong>React.js</strong> client applications.
            </p>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>See in Action</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
