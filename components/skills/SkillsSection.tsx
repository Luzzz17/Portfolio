"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Code2,
  Database,
  LayoutTemplate,
  ServerCog,
  ChevronDown
} from "lucide-react";

// Types
type Skill = {
  name: string;
};

type Category = {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: Skill[];
  color: string;
};

// Data
const skillCategories: Category[] = [
  {
    title: "Développement Frontend",
    icon: LayoutTemplate,
    description: "Conception d'interfaces web personnalisées, interactives et responsives.",
    color: "from-blue-500/20 to-cyan-500/30",
    skills: [
      { name: "React" }, { name: "Next.js" }, { name: "TypeScript" },
      { name: "Tailwind CSS" }, { name: "HTML5/CSS3" }
    ]
  },
  {
    title: "Backend & Base de Données",
    icon: Database,
    description: "Développement de la logique côté serveur et gestion des bases de données relationnelles.",
    color: "from-emerald-500/20 to-teal-500/30",
    skills: [
      { name: "Node.js" }, { name: "PHP" }, 
      { name: "Laravel" }, { name: "PostgreSQL" }, { name: "MySQL" }
    ]
  },
  {
    title: "Langages de Programmation",
    icon: Code2,
    description: "Polyvalence technique allant de la programmation orientée objet au développement web.",
    color: "from-purple-500/20 to-pink-500/30",
    skills: [
      { name: "JavaScript" }, { name: "TypeScript" }, { name: "Python" }, 
      { name: "Java" }, { name: "C" }, { name: "C++" }, { name: "C#" }, { name: "PHP" }
    ]
  },
  {
    title: "Architecture & Méthodologies",
    icon: ServerCog,
    description: "Conteneurisation, gestion de versions, sécurité et travail en équipe sous méthodes agiles.",
    color: "from-orange-500/20 to-red-500/30",
    skills: [
      { name: "Docker" }, { name: "Git / GitHub" }, { name: "Linux bash" }, 
      { name: "Agile / Scrum" }, { name: "Design Patterns" }, { name: "Sécurité Web" }
    ]
  }
];

// Filtrer certains éléments qui ne rendent pas bien dans le bandeau infini
const excludeFromMarquee = ["Linux bash", "Agile / Scrum", "Design Patterns", "Sécurité Web"];

// Extraction de toutes les compétences uniques pour le bandeau défilant
const allSkillsList = Array.from(new Set(
  skillCategories.flatMap(cat => cat.skills.map(s => s.name))
)).filter(skill => !excludeFromMarquee.includes(skill));


function AccordionItem({ 
  category, 
  isOpen, 
  onClick 
}: { 
  category: Category; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        isOpen 
          ? "bg-white/80 dark:bg-slate-900/80 border-slate-300 dark:border-white/20 shadow-md my-4" 
          : "bg-white/40 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 my-2"
      } backdrop-blur-md cursor-pointer`}
      onClick={onClick}
    >
      {/* Interactive Hover Glow (Follows mouse) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Accordion Header */}
      <div 
        className="relative z-10 p-5 md:p-6 flex items-center justify-between"
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-center gap-5 md:gap-6 w-full">
          <div className={`flex shrink-0 items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl border transition-colors duration-500 ${
            isOpen 
              ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400" 
              : "bg-slate-100 border-slate-200 text-slate-500 dark:bg-white/5 dark:border-white/10 dark:text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400"
          }`}>
            <category.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
          </div>
          <div className="flex-1 pr-4">
            <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"}`}>
              {category.title}
            </h4>
            <p className={`text-sm font-light transition-all duration-500 mt-1 hidden sm:block ${isOpen ? "text-slate-600 dark:text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>
              {category.description}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 transition-colors ${isOpen ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-500 group-hover:text-emerald-500"}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      {/* Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* Soft internal gradient background for the content area */}
            <div className="relative p-5 md:p-6 pt-0 z-10 w-full border-t border-slate-100 dark:border-white/5 mt-4">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-100 dark:opacity-50 pointer-events-none rounded-b-2xl" />
              
              <div className="relative z-20 flex flex-wrap gap-2 md:gap-3 pt-6">
                {category.skills.map((skill, index) => (
                  <motion.span
                    initial={{ scale: 0.95, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.3, ease: "easeOut" }}
                    key={index}
                    onClick={(e) => e.stopPropagation()} // Prevent closing accordion when clicking on tag
                    className="inline-flex justify-center items-center px-4 py-2 text-sm md:text-[15px] font-mono font-medium rounded-xl 
                               bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 
                               border border-slate-200/80 dark:border-white/10 
                               hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400
                               hover:border-emerald-300 dark:hover:border-emerald-500/50
                               hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10
                               transition-all duration-300 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mr-2.5"></span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SkillsSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-black transition-colors duration-300">
      
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors duration-300">
            Mon <span className="text-emerald-500">Arsenal</span> Technologique
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light transition-colors duration-300">
            Des outils modernes et une base solide pour construire des systèmes performants et évolutifs, de la base de données à l&apos;interface.
          </p>
        </motion.div>

        {/* Stacked Accordion */}
        <div className="flex flex-col relative z-20">
          {skillCategories.map((category, index) => (
            <AccordionItem 
              key={index} 
              category={category} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
        
      {/* Infinite Marquee Strip */}
      <div className="mt-20 md:mt-28 w-full relative flex overflow-hidden border-y border-slate-200 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md py-5 transition-colors duration-300">
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-10 pointer-events-none" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-10 pointer-events-none" />
         
         <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex whitespace-nowrap items-center font-mono text-[15px] md:text-base tracking-tight text-slate-500 dark:text-slate-400 select-none"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 px-6 items-center">
                {allSkillsList.map((tech, j) => (
                  <span key={j} className="flex items-center gap-3 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-emerald-500/50"></span>
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}
