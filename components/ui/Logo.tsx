"use client";

import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-500"
      >
        {/* Main geometric 'L' structure */}
        <motion.path
          d="M8 6V26H24"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Accent dot / technical detail */}
        <motion.circle
          cx="24"
          cy="26"
          r="3"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
        />
        {/* Abstract "Cyber" line */}
        <motion.path
          d="M12 6H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </svg>
      <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors duration-300">
        Léo<span className="text-emerald-500">.</span>
      </span>
    </div>
  );
}
