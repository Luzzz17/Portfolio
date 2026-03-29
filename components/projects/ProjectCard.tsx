import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

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
    <div className="group relative flex flex-col justify-between h-full p-6 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md transition-all duration-500 hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] overflow-hidden">
      
      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-emerald-500 transition-colors"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-emerald-500 transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-emerald-500 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-emerald-500 transition-colors"></div>

      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 rounded-sm border border-emerald-500/20">
            {project.category}
          </span>
          <div className="flex space-x-3 text-slate-500">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                <GithubIcon size={18} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-6 font-light text-sm">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2 py-0.5 text-[9px] font-mono text-slate-400 bg-white/5 rounded-sm border border-white/10 group-hover:border-emerald-500/20 group-hover:text-slate-300 transition-colors">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
