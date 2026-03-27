"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/layout/Footer"; // On réutilise tes icônes SVG
import { Mail, ArrowDown } from "lucide-react";

interface SplitLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export function SplitLayout({ leftContent, rightContent }: SplitLayoutProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-black overflow-hidden selection:bg-emerald-700 selection:text-white">
      
      {/* LEFT PANEL : Fixed Identity */}
      <aside 
        onMouseMove={handleMouseMove}
        className="relative w-full lg:w-2/5 h-[60vh] lg:h-full border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between p-8 md:p-12 lg:p-16 overflow-hidden group shrink-0"
      >
        {/* Magnetic Glow (Scoped to Left Panel) */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 transition duration-1000 opacity-0 group-hover:opacity-100 hidden lg:block"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(16, 185, 129, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        
        {/* Fallback glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              Léo<br/>Fernandez
            </h1>
            <p className="mt-4 text-xl lg:text-2xl text-emerald-500 font-medium">
              Conception Logicielle & Architecture de Systèmes.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-slate-400 font-light leading-relaxed text-lg"
          >
            Futur ingénieur. Je développe une vision transversale (Dev, Infra, Sécurité) pour résoudre des défis techniques à grande échelle.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 flex flex-col space-y-8"
        >
          {/* Navigation & Social Links */}
          <div className="hidden lg:flex flex-col space-y-10">
            <nav className="flex flex-col space-y-4 text-sm font-bold tracking-widest uppercase text-slate-500">
              <a href="#about" className="hover:text-emerald-400 transition-colors w-fit">01. Profil</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors w-fit">02. Projets</a>
              <a href="#experience" className="hover:text-emerald-400 transition-colors w-fit">03. Expériences</a>
            </nav>

            <div className="flex items-center space-x-6">
              <a href="https://github.com/Luzzz17" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
                <GithubIcon size={22} />
              </a>
              <a href="https://www.linkedin.com/in/fernandezleo/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
                <LinkedinIcon size={22} />
              </a>
              <div className="h-px w-12 bg-white/10"></div>
              <a 
                href="mailto:contact@leo-fernandez.com" 
                className="group flex items-center space-x-3 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <Mail size={16} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Me contacter</span>
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-between group cursor-pointer text-slate-500 hover:text-emerald-400 transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest">Faire défiler</span>
            <ArrowDown className="animate-bounce" />
          </div>
        </motion.div>
      </aside>

      {/* RIGHT PANEL : Scrollable Content */}
      <main className="flex-1 overflow-y-auto custom-scrollbar bg-black relative">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-24 space-y-32">
          {rightContent}
        </div>
      </main>

    </div>
  );
}
