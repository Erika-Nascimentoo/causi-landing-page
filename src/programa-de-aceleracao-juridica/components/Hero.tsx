import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center gap-16 md:gap-20">
          {/* Group 1: Eyebrow (Logo & Label) */}
          <div className="flex flex-col items-center gap-6 reveal-hidden">
            <div className="flex items-center gap-2 select-none">
              <span className="type-label text-brand-deep">SOLUÇÕES</span>
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

          {/* Group 2: Core Message (Title & Subtitle) */}
          <div className="flex flex-col items-center gap-6 md:gap-8 text-center max-w-4xl mx-auto">
            <div className="reveal-hidden">
              <span className="inline-flex items-center gap-2 text-brand-deep uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs px-4 py-1.5 border border-brand-deep/20 rounded-full mb-2 bg-brand-deep/5">
                <ShieldCheck className="w-4 h-4" />
                O Fim do Improviso na Advocacia
              </span>
            </div>
            <h1 className="text-[2.2rem] md:text-[3.5rem] font-black leading-[1.2] pb-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-primary box-decoration-clone reveal-hidden">
              Programa de Aceleração Jurídica
            </h1>

            <h2 className="text-xl md:text-2xl font-medium leading-[1.6] text-slate-600 reveal-hidden max-w-3xl mx-auto">
              Advogado, saia do improviso e <span className="text-brand-primary font-bold">feche contratos todos os dias</span> instalando o método do Causi para organizar sua advocacia e recuperar sua paz de agenda.
            </h2>
          </div>

          <div className="flex flex-col items-center reveal-hidden">
            <Button onClick={() => document.getElementById('routine')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="font-black text-white">Conhecer o programa</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};