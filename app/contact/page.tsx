"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const contactLinks = [
  {
    name: "GitHub",
    handle: "@Luzzz17",
    href: "https://github.com/Luzzz17",
    icon: GithubIcon,
    color: "slate",
    description: "Consultez mes repositories, mes contributions et ma méthodologie Git."
  },
  {
    name: "LinkedIn",
    handle: "Léo Fernandez",
    href: "https://www.linkedin.com/in/fernandezleo/",
    icon: LinkedinIcon,
    color: "blue",
    description: "Mon réseau professionnel et mon parcours détaillé en entreprise."
  },
  {
    name: "Email",
    handle: "fernandez06.leo@gmail.com",
    href: "mailto:fernandez06.leo@gmail.com",
    icon: Mail,
    color: "emerald",
    description: "Pour toute proposition d'alternance ou échange technique direct."
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white selection:bg-emerald-500/30 transition-colors duration-300">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-[600px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-24 w-[600px] h-[600px] bg-emerald-900/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group mb-8"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Retour à l&apos;accueil</span>
          </Link>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Me <span className="text-emerald-500">Contacter</span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-400 font-light max-w-2xl leading-relaxed transition-colors duration-300">
              Disponible pour échanger sur des opportunités d&apos;alternance en cycle ingénieur ou sur vos projets technologiques.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={`Me contacter via ${link.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-white/[0.04] shadow-sm dark:shadow-none hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)] dark:hover:shadow-none transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-white/5 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-6`}>
                  <link.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{link.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-500/80 font-mono text-xs mb-4">{link.handle}</p>
                <p className="text-slate-700 dark:text-slate-400 text-sm font-light leading-relaxed transition-colors duration-300">
                  {link.description}
                </p>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
                <ExternalLink size={20} />
              </div>
              
              {/* Subtle light effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
