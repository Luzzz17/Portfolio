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
            <div className="relative w-full max-w-sm aspect-square rounded-[2rem] overflow-hidden bg-slate-900/50 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)] flex items-center justify-center group backdrop-blur-xl">
              
              {/* Le contenu ici sera remplacé quand le fichier Image (.jpg) sera importé */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 group-hover:text-emerald-500/60 transition-colors duration-500">
                <User size={80} strokeWidth={1} />
                <span className="mt-6 text-sm font-medium tracking-wide uppercase">Emplacement Image</span>
                <span className="text-xs text-slate-600 mt-2">Glisser une photo de profil ici</span>
              </div>
              
              {/* Corner decorative anchors (tech vibe) */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-lg"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-500/40 rounded-br-lg"></div>
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
              <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-transparent rounded-full"></div>
            </div>

            <div className="space-y-5 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                Passionné par le développement depuis mes premières lignes de code, je suis actuellement étudiant en <strong className="text-slate-200 font-medium">2ème année de BUT Informatique</strong>, spécialité <span className="text-emerald-400/90 font-medium">Réalisation d'Applications (RACA)</span>.
              </p>
              <p>
                Mon approche de l'ingénierie logicielle repose sur le pragmatisme : concevoir des architectures robustes, intégrer la sécurité "by design", et fournir une expérience utilisateur fluide. L'aspect esthétique et la performance vont de pair dans mes créations.
              </p>
              <p>
                Ma perspective actuelle ? Rejoindre une équipe ambitieuse pour une <strong className="text-white font-medium border-b border-emerald-500/50 pb-0.5">alternance de 3 ans</strong> en cycle ingénieur dès septembre, où je pourrai relever des défis techniques de haut niveau.
              </p>
            </div>

            {/* Skills grid */}
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-5">Technologies & Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="group flex items-center space-x-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-sm hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-default">
                    <skill.icon size={18} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
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
