import React, { useState } from 'react';
import { Button } from '../../programa-de-aceleracao-juridica/components/Button';
import { Mail, Lock, CheckCircle2 } from 'lucide-react';

export const SignUpHero: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for registration would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-screen py-16 md:py-12 flex flex-col items-center justify-center">
      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-x-0 top-0 bottom-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full mb-8 md:mb-12 text-center">
          {/* Logo / Label */}
          <div className="flex flex-col items-center gap-6 mb-10 reveal-hidden">
             <div className="flex items-center gap-2 select-none">
               <div 
                  className="h-10 md:h-12 w-32 bg-brand-deep" 
                  style={{ 
                    maskImage: `url('${import.meta.env.BASE_URL}logo.svg')`,
                    WebkitMaskImage: `url('${import.meta.env.BASE_URL}logo.svg')`,
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'left center',
                    WebkitMaskPosition: 'left center',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain'
                  }} 
                />
            </div>
          </div>

          <h1 className="text-[2rem] md:text-[3rem] font-sans font-black leading-[1.2] mb-4">
             <span className="text-slate-900">Crie sua conta na</span><br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-primary box-decoration-clone">
               Plataforma Causi
             </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto mb-12">
            Preencha os campos abaixo para configurar seu acesso e começar a transformar sua advocacia hoje mesmo.
          </p>

          {/* Form Container */}
          <div className="w-full max-w-md mx-auto bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-1">E-mail Profissional</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="seu@email.com.br"
                    className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-900"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Defina uma Senha</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-900"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Confirme sua Senha</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-900"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              </div>

              <div className="mt-4">
                <Button 
                  type="submit"
                  className="w-full py-6 text-xl shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)] transition-all duration-500"
                >
                  <span className="font-black text-white">Criar conta</span>
                </Button>
              </div>

              <div className="flex items-center gap-2 justify-center mt-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs text-slate-500 font-medium">Conexão Segura e Criptografada</span>
              </div>
            </form>
          </div>
      </div>
    </section>
  );
};
