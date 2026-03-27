"use client";

import { motion, useMotionTemplate, useMotionValue, Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MouseEvent } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black text-slate-50 group"
      onMouseMove={handleMouseMove}
    >
      
      {/* Magnetic Interactive Glow Effect (Desktop) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition duration-1000 opacity-0 group-hover:opacity-100 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              750px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* Fallback Static Glow (Mobile) */}
      <div className="absolute top-1/3 -right-24 w-[800px] h-[800px] bg-emerald-900/15 blur-[120px] rounded-full pointer-events-none md:hidden z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/5 blur-[150px] rounded-full pointer-events-none md:hidden z-0"></div>

      <div className="container relative z-10 px-6 md:px-12 mx-auto max-w-6xl">
        <motion.div 
          className="flex flex-col items-start text-left space-y-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            <span className="text-sm font-medium text-slate-300">Recherche d'alternance 3 ans</span>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              Léo Fernandez
            </h1>
            <p className="text-2xl md:text-4xl font-medium tracking-tight text-slate-400">
              Ingénierie Logicielle &amp; Systèmes Sécurisés.
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants} 
            className="max-w-2xl text-lg md:text-xl text-slate-500 leading-relaxed font-light"
          >
            Étudiant en <strong className="text-slate-300 font-medium">BUT RACA</strong>, je conçois des applications robustes et scalables. Actuellement à la recherche d'une alternance stimulante en entreprise pour septembre.
          </motion.p>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              icon={ArrowRight} 
              className="bg-white text-black hover:bg-slate-200"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mon profil
            </Button>
            <Button variant="ghost" size="lg" icon={Download} iconPosition="left">
              Télécharger mon CV
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
