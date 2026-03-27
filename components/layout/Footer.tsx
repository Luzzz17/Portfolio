import { Mail } from "lucide-react";

const GithubIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer() {
  return (
    <footer id="contact" className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright & Brand */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-xl font-bold tracking-tighter text-white">
              Léo<span className="text-emerald-500">.</span>
            </span>
            <p className="text-slate-500 text-sm font-light">
              &copy; {new Date().getFullYear()} Léo Fernandez. Conception Logicielle.
            </p>
          </div>

          {/* Contact / CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a 
              href="mailto:contact@leo-fernandez.com" 
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center space-x-2 text-sm font-medium"
              aria-label="Envoyer un email"
            >
              <Mail size={18} />
              <span>Me contacter</span>
            </a>
            
            <div className="w-12 h-px sm:w-px sm:h-6 bg-white/10"></div>

            {/* Social Links */}
            <div className="flex items-center space-x-5">
              <a 
                href="https://github.com/Luzzz17" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/fernandezleo/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-emerald-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
