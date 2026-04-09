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
      className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-50 group transition-colors duration-300"
      onMouseMove={handleMouseMove}
    >
      
      {/* Magnetic Interactive Glow Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition duration-1000 opacity-0 group-hover:opacity-100"
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


      <div className="container relative z-10 px-6 md:px-12 mx-auto max-w-6xl">
        <motion.div 
          className="flex flex-col items-start text-left space-y-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Recherche d&apos;alternance 3 ans &bull; Hauts-de-France &bull; Mobilité Nationale</span>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors duration-300">
              Léo Fernandez
            </h1>
            <p className="text-2xl md:text-4xl font-medium tracking-tight text-slate-600 dark:text-slate-400 transition-colors duration-300">
              Conception Logicielle &amp; Architecture de Systèmes.
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants} 
            className="max-w-3xl text-lg md:text-xl text-slate-700 dark:text-slate-400 leading-relaxed font-light transition-colors duration-300"
          >
            Futur ingénieur passionné par la résolution de problèmes complexes. En <strong className="text-slate-900 dark:text-slate-200 font-medium whitespace-nowrap">BUT Informatique</strong>, je développe une vision transversale combinant développement, infrastructure et sécurité. À la recherche d&apos;une alternance de 3 ans dans les <strong className="text-slate-900 dark:text-slate-200 font-medium">Hauts-de-France</strong> (Amiens, Beauvais, Compiègne) ou <strong className="text-slate-900 dark:text-slate-200 font-medium">Paris</strong>. Ouvert à une mobilité nationale.
          </motion.p>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              icon={ArrowRight} 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mon profil
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              icon={Download} 
              iconPosition="left"
              onClick={() => window.open("/cv", "_blank")}
            >
              Consulter mon CV
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
