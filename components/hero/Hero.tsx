"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] // Custom ease-out cubic
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-950 text-slate-50 selection:bg-slate-700 selection:text-white">
      {/* Background Grid Pattern for Technical Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Glow effect */}
      <div className="absolute top-0 -translate-y-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-800/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 px-6 mx-auto max-w-5xl">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            <span className="text-sm font-medium text-slate-300">Disponible pour Septembre</span>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
              Léo Fernandez
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium tracking-wide border-b border-slate-800/80 pb-6 inline-block">
              Ingénieur Informatique &middot; BUT RACA
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants} 
            className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-light"
          >
            Recherche une alternance de 3 ans en <span className="text-slate-200 font-semibold">conception logicielle</span> et <span className="text-slate-200 font-semibold">systèmes sécurisés</span>. Passionné par l'architecture de solutions critiques et robustes.
          </motion.p>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button size="lg" icon={ArrowRight}>
              Voir mes projets
            </Button>
            <Button variant="outline" size="lg" icon={ShieldCheck} iconPosition="left">
              Télécharger mon CV
            </Button>
          </motion.div>

        </motion.div>
      </div>

      {/* Decorative floating elements for technical feel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-12 hidden md:block text-slate-800"
      >
        <Code2 size={64} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
