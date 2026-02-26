import React from 'react';
import { XCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Button } from './Button';

export const RoutineProblemSection: React.FC = () => {
  const sectionRef = useReveal();

  const points = [
    <> <strong className="text-white">O plantão gratuito:</strong> Seu celular apita no sábado à noite com pessoas querendo "tirar uma dúvida rapidinho" de graça, roubando o tempo da sua família.</>,
    <> <strong className="text-white">A humilhação do vácuo:</strong> Você gasta energia explicando o caso, envia o valor dos seus honorários e recebe um frio "vou pensar e te aviso" (e a pessoa nunca mais responde).</>,
    <> <strong className="text-white">A roleta russa financeira:</strong> Você olha para a agenda do mês que vem e sente um frio na barriga porque não faz ideia de onde virão os próximos clientes pagantes.</>
  ];

  return (
    <section id="routine" ref={sectionRef} className="relative pt-[270px] pb-32 md:pt-32 px-6 bg-bg-page overflow-hidden min-h-[800px] block md:flex md:items-center">
      
      {/* Background Image - Header on Mobile / Side on Desktop */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 lg:h-full z-[1] overflow-hidden h-[400px] pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat grayscale opacity-70 lg:opacity-100"
          style={{ 
            backgroundImage: `url('${import.meta.env.BASE_URL}advogado-cansado.webp?v=5')`
          }}
        />
        {/* Fades to blend with the dark page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-page lg:hidden"></div>
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-bg-page via-bg-page/50 to-transparent"></div>
        {/* Extra bottom fade for desktop as requested */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 hidden lg:block bg-gradient-to-t from-bg-page to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Content - Occupying the left half */}
          <div className="lg:col-span-6 flex flex-col gap-6 md:gap-10">
            <div className="reveal-hidden flex flex-col items-center lg:items-start">
              <span className="inline-flex items-center justify-center gap-2.5 text-white uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs h-7 md:h-8 px-5 border border-white/20 rounded-full mb-6 leading-none pt-[1px]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                OS BASTIDORES DA SUA ADVOCACIA
              </span>
              <h2 className="type-h2 mb-4 leading-tight text-center lg:text-left">
                Você estudou muito para ser um <span className="text-white">advogado respeitado</span>, mas a sua rotina hoje parece a de uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 font-black">secretária:</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {points.map((text, idx) => (
                <div key={idx} className="relative flex items-start gap-4 reveal-hidden">
                  {/* Icon */}
                  <div className="shrink-0 mt-1">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>

                  {/* Text Content */}
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal-hidden mt-4 flex justify-center lg:justify-start">
              <Button 
                variant="danger"
                onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Mas eu já tentei resolver isso
              </Button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};
