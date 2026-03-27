"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileCode, 
  FileJson, 
  FileText, 
  Files, 
  Search, 
  GitBranch, 
  Settings, 
  UserCircle,
  X,
  ChevronRight,
  Monitor,
  Terminal,
  Layout,
  MessageSquare
} from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

type FileKey = "README.md" | "profil.tsx" | "projets.json" | "contact.md";

export function IdeShell() {
  const [activeFile, setActiveFile] = useState<FileKey>("README.md");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const files = [
    { id: "README.md", label: "README.md", icon: FileText, color: "text-blue-400" },
    { id: "profil.tsx", label: "profil.tsx", icon: FileCode, color: "text-emerald-400" },
    { id: "projets.json", label: "projets.json", icon: FileJson, color: "text-yellow-400" },
    { id: "contact.md", label: "contact.md", icon: MessageSquare, color: "text-purple-400" },
  ];

  return (
    <div className="flex h-screen bg-[#0d0d0d] text-slate-300 font-sans overflow-hidden">
      
      {/* 1. Activity Bar (Narrowest Left Bar) */}
      <div className="w-12 md:w-16 flex flex-col items-center py-4 bg-[#0a0a0a] border-r border-white/5 space-y-4">
        <div className="p-2 text-white border-l-2 border-emerald-500">
          <Files size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 text-slate-500 hover:text-white transition-colors cursor-not-allowed">
          <Search size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 text-slate-500 hover:text-white transition-colors cursor-not-allowed">
          <GitBranch size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 text-slate-500 hover:text-white transition-colors cursor-not-allowed">
          <Monitor size={24} strokeWidth={1.5} />
        </div>
        <div className="mt-auto p-2 text-slate-500 hover:text-white transition-colors cursor-pointer">
          <UserCircle size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 text-slate-500 hover:text-white transition-colors cursor-pointer">
          <Settings size={24} strokeWidth={1.5} />
        </div>
      </div>

      {/* 2. Sidebar / File Explorer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 260, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="hidden md:flex flex-col bg-[#0d0d0d] border-r border-white/5"
          >
            <div className="p-4 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-slate-500">
              <span>EXPLORATEUR</span>
              <X size={14} className="cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
            </div>
            
            <div className="px-2">
              <div className="flex items-center space-x-1 p-1 text-slate-200 font-semibold text-xs cursor-pointer hover:bg-white/5 rounded">
                <ChevronRight size={14} className="rotate-90 transition-transform" />
                <span className="uppercase">PORTFOLIO-ENG</span>
              </div>
              
              <div className="mt-1 space-y-[2px]">
                {files.map((file) => (
                  <div
                    key={file.id}
                    onClick={() => setActiveFile(file.id as FileKey)}
                    className={`
                      group flex items-center space-x-2 px-6 py-1.5 cursor-pointer text-sm transition-all
                      ${activeFile === file.id ? "bg-emerald-500/10 text-emerald-400 border-r-2 border-emerald-500" : "hover:bg-white/5 text-slate-400 hover:text-slate-200"}
                    `}
                  >
                    <file.icon size={16} className={activeFile === file.id ? "text-emerald-400" : file.color} />
                    <span>{file.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Editor Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0a0a0a]">
        
        {/* Tabs Bar */}
        <div className="flex bg-[#0d0d0d] overflow-x-auto no-scrollbar">
          {files.map((file) => (
            <div
              key={file.id}
              onClick={() => setActiveFile(file.id as FileKey)}
              className={`
                flex items-center space-x-2 px-4 py-2.5 text-xs font-medium border-r border-white/5 min-w-[120px] cursor-pointer transition-colors
                ${activeFile === file.id ? "bg-[#0a0a0a] text-emerald-400 border-t border-t-emerald-500" : "hover:bg-white/5 text-slate-500 hover:text-slate-300"}
              `}
            >
              <file.icon size={14} className={activeFile === file.id ? "text-emerald-400" : file.color} />
              <span>{file.label}</span>
              {activeFile === file.id && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />}
            </div>
          ))}
        </div>

        {/* Content Viewport */}
        <div className="flex-1 overflow-y-auto relative custom-scrollbar">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/2 blur-[150px] pointer-events-none opacity-50"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFile}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeFile === "README.md" && <Hero />}
              {activeFile === "profil.tsx" && <AboutSection />}
              {activeFile === "projets.json" && <ProjectsSection />}
              {activeFile === "contact.md" && (
                <div className="p-12 flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <Terminal size={48} className="mx-auto text-emerald-500" />
                    <h2 className="text-2xl font-bold text-white">Prêt à collaborer ?</h2>
                    <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                      L'interface de contact est en cours d'initialisation. En attendant, tu peux me joindre via LinkedIn ou GitHub.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Status Bar */}
        <div className="h-6 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between px-3 text-[10px] text-slate-500 font-medium select-none">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-emerald-500/80">
              <GitBranch size={12} />
              <span>main*</span>
            </div>
            <div className="flex items-center space-x-1 animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Running Dev Server...</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Spaces: 2</span>
            <span>UTF-8</span>
            <span>TypeScript React</span>
          </div>
        </div>
      </div>
    </div>
  );
}
