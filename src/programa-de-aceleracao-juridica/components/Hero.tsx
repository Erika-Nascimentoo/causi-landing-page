import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 flex items-center justify-center">
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
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-4xl mx-auto">

            <h1 className="text-[1.8rem] md:text-[2.8rem] font-black leading-[1.2] pb-6 reveal-hidden">
              <span className="text-slate-900">
                Você trabalha muito, mas o <span className="bg-yellow-200 text-slate-900 px-2 py-0.5 rounded-lg box-decoration-clone">dinheiro não sobra no final do mês?</span> O problema não é a sua advocacia,
              </span>
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-primary box-decoration-clone">
                é a sua Engenharia de Faturamento
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-serif leading-[1.6] text-slate-600 reveal-hidden max-w-3xl mx-auto">
              Conheça o <span className="text-brand-primary font-bold">Programa de Aceleração Jurídica</span>: o método passo a passo que tapa os furos do seu escritório, afasta quem só quer "tirar dúvida" e coloca <span className="text-brand-primary font-bold">contratos reais na sua mesa</span>.
            </h2>

            <div className="flex flex-col items-center reveal-hidden mt-4 md:mt-6">
              <Button onClick={() => document.getElementById('routine')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="font-black text-white">Ver como funciona</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};