import React from 'react';
import { Rocket } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'danger-outline' | 'success';
  fullWidth?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  icon = false,
  className = '',
  ...props
}) => {
  const baseStyles = "group relative cursor-pointer px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none overflow-hidden";

  const variants = {
    primary: "bg-brand-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] border border-white/10",
    secondary: "bg-white text-brand-dark hover:bg-gray-100",
    outline: "border border-brand-primary/50 text-brand-primary hover:bg-brand-primary/10",
    danger: "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] border border-white/10",
    'danger-outline': "border-2 border-red-500/50 text-red-500 hover:border-red-500 hover:bg-red-500/5",
    success: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_40px_rgba(5,150,105,0.5)] border border-white/10"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className} flex items-center justify-center gap-3`}
      {...props}
    >


      {/* Button Content */}
      <span className="relative z-10 uppercase font-black">{children}</span>
      {icon && <Rocket className="relative z-10 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}

      {/* Subtle Inner Glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </button>
  );
};