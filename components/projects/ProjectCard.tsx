import { ExternalLink, GitBranch } from "lucide-react";

export type ProjectCategory = "Pro" | "Académique" | "Perso";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col justify-between h-full p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)]">
      <div>
        <div className="flex justify-between items-start mb-5">
          <span className="px-3 py-1 text-xs font-bold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
            {project.category}
          </span>
          <div className="flex space-x-3 text-slate-400">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                <GitBranch size={20} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-8 font-light text-sm md:text-base">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-900/50 rounded-md border border-slate-700/50">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
