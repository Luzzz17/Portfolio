"use client";

import { SplitLayout } from "@/components/split/SplitLayout";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <SplitLayout 
      leftContent={null} 
      rightContent={
        <>
          {/* Intro Section */}
          <section className="pt-8 md:pt-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest leading-none mt-0.5">Focus : Alternance 3 ans</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 leading-tight tracking-tight">
                Ingénierie Logicielle & <span className="text-emerald-500 font-medium font-serif italic">Systèmes Sécurisés</span>.
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                Étudiant en BUT Informatique, je conçois des applications robustes et scalables. Actuellement à la recherche d'une alternance stimulante en entreprise pour septembre.
              </p>
            </motion.div>
          </section>

          <AboutSection />
          <ProjectsSection />
        </>
      }
    />
  );
}
