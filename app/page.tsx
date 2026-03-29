import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { TimelineSection } from "@/components/education/TimelineSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-emerald-700 selection:text-white">
      <Hero />
      <div className="relative">
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
