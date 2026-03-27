import { SplitLayout } from "@/components/split/SplitLayout";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <SplitLayout 
      leftContent={null} // Déjà géré à l'intérieur de SplitLayout pour ce test
      rightContent={
        <>
          <AboutSection />
          <ProjectsSection />
        </>
      }
    />
  );
}
