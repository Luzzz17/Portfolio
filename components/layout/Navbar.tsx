"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Profil", href: "/#about" },
    { name: "Compétences", href: "/#skills" },
    { name: "Parcours", href: "/#parcours" },
    { name: "Projets", href: "/#projects" },
    { name: "Expériences", href: "/#experience" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Intercepter uniquement si nous sommes déjà sur la page d'accueil
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
        // Déclencher manuellement l'événement pour les composants à l'écoute (ex: ProjectsSection)
        window.dispatchEvent(new Event('hashchange'));
      }
    }
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <Logo />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action & Mobile Toggle */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <ThemeToggle />
        
        {/* Email Shortcut Icon */}
        <a 
          href="mailto:fernandez06.leo@gmail.com"
          className="p-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors hidden sm:block"
          title="Envoyer un email directement"
        >
          <Mail size={20} />
        </a>

        <Link 
          href="/contact" 
          className="hidden sm:inline-block px-5 py-2.5 text-sm font-bold text-slate-950 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
        >
          Me contacter
        </Link>

        {/* Hamburger Menu Icon */}
        <button 
          className="md:hidden text-slate-900 dark:text-white p-1 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors ml-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/10 p-6 md:hidden flex flex-col space-y-4 shadow-2xl transition-colors duration-300"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 py-2 border-b border-slate-100 dark:border-white/5 flex items-center justify-between group"
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScroll(e, link.href);
                  }}
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500">→</span>
                </Link>
              ))}
              
              <a 
                href="mailto:fernandez06.leo@gmail.com"
                className="flex items-center gap-3 text-slate-500 dark:text-slate-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Mail size={18} />
                <span>Email direct</span>
              </a>

            <Link 
              href="/contact"
              className="w-full text-center px-5 py-4 text-sm font-bold text-slate-950 bg-emerald-500 rounded-2xl mt-4 shadow-[0_10px_20px_rgba(16,185,129,0.2)]"
              onClick={() => setIsOpen(false)}
            >
              Me contacter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
