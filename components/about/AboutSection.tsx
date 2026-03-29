"use client";

import { motion } from "framer-motion";
import { User, Code2, Database, LayoutTemplate, ShieldCheck, TerminalSquare } from "lucide-react";

export function AboutSection() {
  const skills = [
    { name: "TypeScript", icon: Code2 },
    { name: "React & Next.js", icon: LayoutTemplate },
    { name: "PHP & Laravel", icon: Database },
    { name: "SQL & Bases de données", icon: Database },
    { name: "Architecture JS/TS", icon: TerminalSquare },
    { name: "Sécurité web", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Emerald Aura behind photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Photo Container Frame */}
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-slate-900/50 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.05)] flex items-center justify-center group backdrop-blur-xl">
              
              {/* Technical Targeting Crosshairs */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-emerald-500/40"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-emerald-500/40"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-emerald-500/40"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-emerald-500/40"></div>
              
              {/* Horizontal/Vertical center lines (very subtle) */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-emerald-500/5 -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-500/5 -translate-x-1/2"></div>

              {/* Le contenu ici sera remplacé quand le fichier Image (.jpg) sera importé */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 group-hover:text-emerald-500/60 transition-colors duration-500">
                <div className="relative">
                  <User size={80} strokeWidth={1} />
                  <motion.div 
                    className="absolute -inset-4 border border-emerald-500/20 rounded-full"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Mon <span className="text-emerald-500">Profil</span>
              </h2>
            </div>

            <div className="space-y-5 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                Passionné par le développement depuis mes premières lignes de code, je suis actuellement étudiant en <strong className="text-slate-200 font-medium">2ème année de <span className="whitespace-nowrap">BUT Informatique</span></strong>, spécialité <span className="text-emerald-400/90 font-medium">Réalisation d'Applications (RACA)</span>.
              </p>
              <p>
                Mon approche de l'ingénierie logicielle repose sur le pragmatisme : concevoir des architectures robustes, intégrer la sécurité dès le départ, et fournir une expérience utilisateur fluide.
              </p>
              <p>
                Ma perspective ? Intégrer une équipe ambitieuse pour une <strong className="text-white font-medium border-b border-emerald-500/50 pb-0.5">alternance de 3 ans</strong> en cycle ingénieur.
              </p>
            </div>

            {/* Skills grid */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">
                Compétences Clés
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div key={skill.name} className="group flex items-center space-x-2 px-3 py-1.5 bg-white/[0.02] border border-white/5 rounded-md hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all cursor-default">
                    <skill.icon size={14} className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-[11px] font-mono tracking-tight text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
