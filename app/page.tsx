import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { TimelineSection } from "@/components/education/TimelineSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-emerald-500/30 transition-colors duration-300">
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
