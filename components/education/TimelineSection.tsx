"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, CheckCircle2, Target } from "lucide-react";

const timelineData = [
  {
    date: "2026 - 2029",
    title: "Cycle Ingénieur en Informatique",
    institution: "ITII Picardie - Beauvais",
    description: "Spécialisation en architecture logicielle et ingénierie système. Parcours en apprentissage pour allier expertise technique et vision industrielle.",
    status: "Objectif Alternance",
    icon: Target,
    color: "emerald",
    highlight: false,
  },
  {
    date: "2024 - 2026",
    title: "BUT Informatique (2ème année)",
    institution: "IUT d'Amiens - UPJV",
    description: "Apprentissage approfondi du développement logiciel, de l'administration réseaux et de la conception de bases de données. Parcours Réalisation et Conception d'Applications (RACA).",
    status: "En cours",
    icon: Briefcase,
    color: "slate",
    highlight: false,
  },
  {
    date: "2024",
    title: "Baccalauréat Général",
    institution: "Lycée Cassini - Clermont",
    description: "Spécialités : Mathématiques & Numérique et Sciences Informatiques (NSI). Début de mon intérêt pour la conception et le développement logiciel.",
    status: "Obtenu",
    icon: CheckCircle2,
    color: "slate",
    highlight: false,
  },
];

export function TimelineSection() {
  return (
    <section id="parcours" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white text-center transition-colors duration-300">
            Mon <span className="text-emerald-500">Parcours</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-slate-200 dark:via-slate-800 to-transparent -translate-x-1/2 transition-colors duration-300" />

          <div className="space-y-12 relative">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-emerald-500 z-20 -translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_10px_rgba(16,185,129,0.3)] dark:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-colors duration-300" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"} pl-10 md:pl-0`}>
                  <div className={`p-6 rounded-2xl border ${item.highlight
                    ? "bg-emerald-50 dark:bg-emerald-500/[0.03] border-emerald-200 dark:border-emerald-500/30 shadow-[0_4px_20px_rgba(16,185,129,0.1)] dark:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none"
                    } backdrop-blur-sm group hover:border-emerald-500/40 transition-all duration-300`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-wider text-emerald-500/80 uppercase">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                      <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded ${item.highlight
                        ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                        }`}>
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 transition-colors">
                      <GraduationCap size={16} className="text-emerald-500/60" />
                      {item.institution}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed font-light transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
