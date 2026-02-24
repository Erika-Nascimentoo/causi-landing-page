import React from 'react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center w-full bg-white overflow-hidden">
      {/* Subtle Background Decoration for White Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Brand Header */}
          <div className="flex flex-col items-center gap-4 reveal-hidden">
            <div className="flex items-center gap-2 select-none">
              <span className="type-label text-slate-900">SOLUÇÕES</span>
              <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo Causi" className="h-10 md:h-12 w-auto invert" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 text-center max-w-5xl mx-auto">
            {/* Real Title with Previous Aesthetic */}
            <h1 className="type-display font-black leading-[1.1] text-slate-900 reveal-hidden">
              Entre para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Programa de Aceleração Jurídica</span>
            </h1>

            {/* Subtitle (Former Title) */}
            <div className="flex flex-col gap-6 max-w-4xl items-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-slate-600 reveal-hidden max-w-5xl">
                Advogado, saia do improviso e feche contratos todos os dias instalando o método do Causi&reg; para organizar sua advocacia e recuperar sua paz de agenda.
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full sm:w-auto reveal-hidden">
            <Button onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="font-black text-white">Conhecer o programa</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};