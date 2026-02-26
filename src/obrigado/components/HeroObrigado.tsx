import React from 'react';
import { Button } from '../../programa-de-aceleracao-juridica/components/Button';
import { useReveal } from '../../programa-de-aceleracao-juridica/hooks/useReveal';

export const HeroObrigado: React.FC = () => {
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
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full mb-8 md:mb-12">
        <div className="flex flex-col items-center gap-6 md:gap-10">
          
          {/* Eyebrow Label */}
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

          <div className="flex flex-col items-center gap-4 text-center w-full">
            <h1 className="text-[1.8rem] md:text-[2.8rem] font-sans font-black leading-[1.2] pb-0 reveal-hidden">
               <span className="text-slate-900">
                Parabéns! Sua vaga está garantida.
               </span>
               <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-primary box-decoration-clone">
                 Falta apenas um passo
               </span>
            </h1>
            <p className="text-lg md:text-xl font-sans font-normal leading-[1.6] text-slate-600 reveal-hidden max-w-2xl mx-auto">
               Assista ao vídeo abaixo com as instruções cruciais do que você deve fazer agora antes de entrar no sistema e aproveitar o seu acesso.
            </p>
          </div>
        </div>
      </div>

      {/* Video Container Area */}
      <div className="w-full max-w-4xl mx-auto px-6 relative z-10 reveal-hidden mb-10">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.2)] bg-slate-900 border border-slate-200">
             {/* If you have a youtube/vimeo link, place it here in an iframe instead of this div */}
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 bg-slate-800">
                 {/* Video Placeholder Content */}
                 <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center animate-pulse">
                     <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-brand-primary border-b-8 border-b-transparent ml-1" />
                 </div>
                 <p className="text-slate-400 font-medium tracking-widest uppercase text-sm">Espaço para seu Vídeo</p>
            </div>
        </div>
      </div>

      <div className="w-full relative z-10 flex flex-col items-center reveal-hidden px-6">
          <Button 
            className="shadow-[0_0_60px_-5px_rgba(139,92,246,0.6)] hover:shadow-[0_0_100px_-5px_rgba(139,92,246,0.9)] transition-all duration-500 py-6 text-xl md:text-2xl px-12 md:px-16"
            onClick={() => window.open('https://app.causi.com.br/register', '_blank')}
          >
            <span className="font-black text-white px-8">Criar conta gratuita</span>
          </Button>
      </div>

    </section>
  );
};
