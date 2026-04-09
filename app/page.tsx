import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { TimelineSection } from "@/components/education/TimelineSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Léo Fernandez",
    "jobTitle": "Étudiant Ingénieur en Informatique",
    "url": "https://leofernandez.fr",
    "sameAs": [
      "https://www.linkedin.com/in/fernandezleo/",
      "https://github.com/Luzzz17"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Hauts-de-France & Mobilité Nationale",
      "addressLocality": "Amiens, Beauvais, Compiègne, Paris, France",
      "addressCountry": "FR"
    },
    "description": "Étudiant en BUT Informatique (RACA) à la recherche d'une alternance de 3 ans en conception logicielle. Basé dans les Hauts-de-France, ouvert à une mobilité nationale.",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "BUT Informatique (RACA)"
      }
    ],
    "seeks": {
      "@type": "Demand",
      "availability": "https://schema.org/InStock",
      "description": "Alternance de 3 ans en Ingénierie Informatique / Conception Logicielle - Hauts-de-France & Mobilité Nationale"
    }
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": personJsonLd
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-emerald-500/30 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <Hero />
      <div className="relative">
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
