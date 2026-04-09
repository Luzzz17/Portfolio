import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-black py-12 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright & Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Logo />
            <p className="text-slate-700 dark:text-slate-400 text-sm font-light">
              &copy; {new Date().getFullYear()} Léo Fernandez. Conception Logicielle.
            </p>
          </div>

          {/* Contact / CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a 
              href="mailto:fernandez06.leo@gmail.com" 
              className="text-slate-700 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-sm font-medium"
              aria-label="Envoyer un email"
            >
              <Mail size={18} />
              <span>Me contacter</span>
            </a>
            
            <div className="w-12 h-px sm:w-px sm:h-6 bg-slate-300 dark:bg-white/10"></div>

            {/* Social Links */}
            <div className="flex items-center space-x-5">
              <a 
                href="https://github.com/Luzzz17" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub de Léo Fernandez"
              >
                <GithubIcon size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/fernandezleo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                aria-label="LinkedIn de Léo Fernandez"
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
