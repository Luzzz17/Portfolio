"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectCard, ProjectCategory } from "./ProjectCard";

const ALL_CATEGORY = "Tout";
type FilterType = ProjectCategory | typeof ALL_CATEGORY;

const projectsData: Project[] = [
  {
    id: "konexx",
    title: "Stage Konexx",
    description: "Conception d'une plateforme SaaS full-stack mettant en relation clients et experts freelances. Mise en œuvre d'une authentification sécurisée par Magic Link, de tableaux de bord personnalisés et d'un panneau d'administration complet pour le pilotage de l'activité.",
    category: "Pro",
    techStack: ["React", "TypeScript", "Sécurité", "Architecture"],
  },
  {
    id: "campusgo",
    title: "CampusGo",
    description: "SAE : Plateforme web de covoiturage optimisée pour les déplacements des étudiants vers le campus de l'IUT d'Amiens. Gestion complète des trajets, des profils et des réservations.",
    category: "Académique",
    techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
  },
  {
    id: "sae-1",
    title: "Projets 1ère Année",
    description: "Plusieurs Situations d'Apprentissage et d'Évaluation (SAE) réalisés durant la première année de BUT Informatique. Conception de bases de données et programmation d'outils algorithmiques.",
    category: "Académique",
    techStack: ["C / C++", "Java", "SQL", "UML"],
  },
  {
    id: "portfolio",
    title: "Portfolio Personnel",
    description: "Conception et développement d'un espace personnel moderne et performant. Un projet vitrine mettant en avant mes compétences techniques et ma vision du développement web pour ma recherche d'alternance.",
    category: "Perso",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  }
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>(ALL_CATEGORY);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#experience") {
        setFilter("Pro");
      } else if (hash === "#projects") {
        setFilter(ALL_CATEGORY);
      } else if (hash === "" || hash === "#") {
        setFilter(ALL_CATEGORY);
      }
    };

    handleHashChange(); // Vérification immédiate au chargement initial
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filters: FilterType[] = [ALL_CATEGORY, "Pro", "Académique", "Perso"];

  const filteredProjects = projectsData.filter(
    (project) => filter === ALL_CATEGORY || project.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div id="experience" className="absolute top-0"></div>

      {/* Subtle top border gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white"
          >
            Projets & <span className="text-emerald-500">Expériences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl font-light"
          >
            Un aperçu de mes réalisations techniques. De mes projets académiques à mes expériences en entreprise.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${filter === f
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                : "bg-slate-900/40 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800"
                }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid with Bento Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={
                  project.id === "konexx" ? "md:col-span-4" :
                    project.id === "campusgo" ? "md:col-span-2" :
                      "md:col-span-3"
                }
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
