"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";

export function AboutSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }


  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
            onMouseMove={handleMouseMove}
          >
            {/* Emerald Aura behind photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Photo Container Frame with Interactive Border */}
            <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-white/50 dark:bg-slate-900/50 group backdrop-blur-xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-300">
              
              {/* Diffused Back Glow (Follows Mouse) */}
              <motion.div
                className="absolute inset-x-0 inset-y-0 -z-10 pointer-events-none opacity-0 group-hover:opacity-100 blur-[30px] transition-opacity duration-700"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      120px circle at ${springX}px ${springY}px,
                      rgba(16, 185, 129, 0.4),
                      transparent 80%
                    )
                  `,
                }}
              />

              {/* Interactive Sharp Border Glow */}
              <motion.div
                className="absolute -inset-[1px] z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      100px circle at ${springX}px ${springY}px,
                      rgba(16, 185, 129, 0.9),
                      transparent 70%
                    )
                  `,
                  maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                  maskClip: 'content-box, border-box',
                  maskComposite: 'exclude',
                  padding: '1.5px',
                  borderRadius: 'inherit',
                }}
              />

              {/* Subtle Atmospheric Blur Border (The "Lueur") */}
              <motion.div
                className="absolute -inset-[4px] z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      150px circle at ${springX}px ${springY}px,
                      rgba(16, 185, 129, 0.4),
                      transparent 80%
                    )
                  `,
                  maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                  maskClip: 'content-box, border-box',
                  maskComposite: 'exclude',
                  padding: '6px',
                  borderRadius: 'inherit',
                  filter: 'blur(6px)',
                }}
              />

              {/* Image Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-[1px] overflow-hidden rounded-2xl">
                <div className="relative w-full h-full rounded-[15px] overflow-hidden">
                  <Image 
                    src="/leo.png" 
                    alt="Léo Fernandez" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Subtle inner shadow/gradient */}
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] pointer-events-none"></div>
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors duration-300">
                Mon <span className="text-emerald-500">Profil</span>
              </h2>
            </div>

            <div className="space-y-5 text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-300">
              <p>
                Passionné par le développement depuis mes premières lignes de code, je suis actuellement étudiant en <strong className="text-slate-900 dark:text-slate-200 font-medium transition-colors">2ème année de <span className="whitespace-nowrap">BUT Informatique</span></strong>, spécialité <span className="text-emerald-500 dark:text-emerald-400/90 font-medium">Réalisation d&apos;Applications (RACA)</span>.
              </p>
              <p>
                Mon approche de l&apos;ingénierie logicielle repose sur le pragmatisme : concevoir des architectures robustes, intégrer la sécurité dès le départ, et fournir une expérience utilisateur fluide.
              </p>
              <p>
                Ma perspective ? Intégrer une équipe ambitieuse pour une <strong className="text-slate-900 dark:text-white font-medium border-b border-emerald-500/50 pb-0.5 transition-colors">alternance de 3 ans</strong> en cycle ingénieur.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
