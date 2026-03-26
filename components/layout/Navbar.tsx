import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold tracking-tighter text-white">
          Léo<span className="text-emerald-500">.</span>
        </span>
      </div>
      <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
        <li><a href="#about" className="hover:text-white transition-colors">Profil</a></li>
        <li><a href="#projects" className="hover:text-white transition-colors">Projets</a></li>
        <li><a href="#experience" className="hover:text-white transition-colors">Expériences</a></li>
      </ul>
      <div>
        <a href="#contact" className="px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Me contacter
        </a>
      </div>
    </nav>
  );
}
