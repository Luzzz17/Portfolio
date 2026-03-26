import React, { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-slate-100 text-slate-900 hover:bg-white hover:scale-[1.02] shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    outline: "border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 hover:border-slate-600",
    ghost: "bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-white"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-md",
    md: "h-11 px-6 text-base rounded-md",
    lg: "h-14 px-8 text-lg rounded-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 ml-2" />}
    </button>
  );
}
