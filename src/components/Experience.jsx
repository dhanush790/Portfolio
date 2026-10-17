import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07070a] border-t border-white/[0.05]">
      {/* Background soft glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
            04 / CAREER & ACADEMIA
          </span>
          <div className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Experience & Education
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
              Professional internships, computer science foundations, and technical accreditations.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm self-start">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'certifications'
                  ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certifications</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Experience & Internships */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 sm:p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 mr-2">
                      {exp.period}
                    </span>
                    <h3 className="inline-block text-xl sm:text-2xl font-bold text-white font-display">
                      {exp.organization}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-neutral-400 font-mono">
                    {exp.role}
                  </div>
                </div>

                <div className="mb-4 text-sm font-medium text-purple-400">
                  ⚡ Project: {exp.project}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {exp.details.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-purple-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.05] text-purple-300 border border-white/[0.08]">
                      {edu.period}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      {edu.score}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-mono text-purple-400 mb-3">
                    {edu.major}
                  </div>
                  <div className="text-xs text-neutral-300 mb-1 flex items-center gap-1.5">
                    <span>{edu.institution}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-xs text-neutral-400">
                  {edu.highlights}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-purple-500/30 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    {cert.badge}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mt-2 mb-1">
                    {cert.name}
                  </h3>
                  <div className="text-xs text-neutral-400 font-medium mb-3">
                    Issued by: <strong className="text-neutral-200">{cert.issuer}</strong>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
