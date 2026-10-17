import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight, 
  Sparkles, MessageSquare, Clock, ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#a855f7', '#6366f1', '#ec4899']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <section id="contact" className="pt-24 pb-12 relative overflow-hidden bg-[#07070a] border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
            05 / GET IN TOUCH
          </span>
          <div className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        {/* Section Heading matching reference video */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Exceptional</span>.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Interested in full-stack engineering, FastAPI & React platforms, or AI/RAG architectures? Reach out directly or send an inquiry.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
                  System Status: Active
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Currently open for full-time software engineering roles, AI/ML development, and technical collaborations starting in 2026/2027.
              </p>
            </div>

            {/* Email Card with One-Click Copy */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <div className="text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-3 bg-black/40 p-3.5 rounded-2xl border border-white/[0.06]">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-mono text-neutral-200 hover:text-purple-400 truncate transition-colors"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-xs text-emerald-400 mt-2 font-mono flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.07]">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>Phone</span>
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.07]">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-semibold text-neutral-200">
                  {personalInfo.location}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
                    Thank you for reaching out. I'll review your note and get back to you promptly at {formState.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] focus:border-purple-500/60 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-neutral-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] focus:border-purple-500/60 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-neutral-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Your Message / Opportunity
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Dhanush, I reviewed your portfolio and would like to discuss a software engineering opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] focus:border-purple-500/60 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-neutral-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Grand Typography Signature matching reference video 16s with stroke & neon aura */}
        <div className="relative pt-6 pb-2 flex items-center justify-center select-none pointer-events-none overflow-hidden">
          <div 
            className="font-display font-black text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] tracking-wider uppercase leading-none text-center"
            style={{
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.16)',
              color: 'rgba(255, 255, 255, 0.03)',
              textShadow: '0 0 40px rgba(168, 85, 247, 0.25)'
            }}
          >
            DHANUSH
          </div>
        </div>

      </div>
    </section>
  );
}
