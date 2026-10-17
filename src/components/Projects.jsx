import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, ArrowUpRight, Sparkles, Database, 
  Terminal, ShieldCheck, CheckCircle2, X, Layers, Cpu, Server, Code2 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & RAG' },
    { id: 'fullstack', label: 'Full-Stack & APIs' },
    { id: 'healthcare', label: 'Healthcare Systems' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ai') return project.badge.toLowerCase().includes('ai');
    if (selectedFilter === 'fullstack') return project.badge.toLowerCase().includes('enterprise') || project.badge.toLowerCase().includes('stack');
    if (selectedFilter === 'healthcare') return project.badge.toLowerCase().includes('healthcare');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07070a] border-t border-white/[0.05]">
      {/* Background glow behind center card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
            03 / SELECTED WORKS
          </span>
          <div className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        {/* Section Heading & Subtitle matching reference video 13s */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Featured Engineering Projects
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Production-grade web applications, dynamic workflow automation, and intelligent retrieval systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'text-white bg-purple-600/20 border border-purple-500/50 shadow-md shadow-purple-900/30'
                    : 'text-neutral-400 hover:text-white bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.15]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Card Grid matching the reference video composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isHighlight = Boolean(project.highlight);

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                    isHighlight
                      ? 'bg-gradient-to-b from-purple-950/20 via-[#111119] to-[#0c0c13] border-2 border-purple-500/40 shadow-2xl shadow-purple-950/30 lg:-translate-y-2'
                      : 'bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.08] hover:border-purple-500/30 shadow-xl'
                  }`}
                >
                  {/* Subtle top glow highlight on hovered/featured card */}
                  {isHighlight && (
                    <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                  )}

                  <div>
                    {/* Header: Badge & Number */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[11px] font-mono tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full border ${
                        isHighlight 
                          ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                          : 'bg-white/[0.04] text-neutral-400 border-white/[0.08]'
                      }`}>
                        {project.badge}
                      </span>
                      <span className="font-mono text-xs text-neutral-500 font-semibold">
                        {project.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle / Role Context */}
                    <p className="text-xs font-mono text-purple-400/90 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.points.slice(0, 2).map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                          isHighlight
                            ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/30'
                            : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]'
                        }`}
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/[0.08] transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Deep-Dive Technical Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0e16] border border-purple-500/30 p-6 sm:p-8 shadow-2xl shadow-purple-950/50 text-white"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {activeModalProject.badge}
                </span>
                <span className="text-xs font-mono text-neutral-500">Project #{activeModalProject.number}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                {activeModalProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-purple-400 mb-6">
                {activeModalProject.subtitle}
              </p>

              <div className="text-sm text-neutral-300 leading-relaxed mb-6 space-y-3">
                <p>{activeModalProject.description}</p>
                <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs font-mono text-purple-200">
                  ⚡ Benchmark & Performance: {activeModalProject.metrics}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Technical Architecture & Key Highlights
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.1] text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="py-3 px-5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 text-xs sm:text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
