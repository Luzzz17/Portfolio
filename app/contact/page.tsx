"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft, Send, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
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
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
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
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group mb-8"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Retour à l'accueil</span>
          </Link>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Me <span className="text-emerald-500">Contacter</span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
              Disponible pour échanger sur des opportunités d'alternance en cycle ingénieur ou sur vos projets technologiques.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors mb-6`}>
                  <link.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-400 transition-colors">{link.name}</h3>
                <p className="text-emerald-500/80 font-mono text-xs mb-4">{link.handle}</p>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
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
