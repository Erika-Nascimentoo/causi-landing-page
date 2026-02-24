import React from 'react';
import { XCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export const RoutineProblemSection: React.FC = () => {
  const sectionRef = useReveal();

  const points = [
    "Você atende pessoas no WhatsApp sábado à noite e elas nem te respondem depois.",
    "Você envia o valor do seu trabalho e a pessoa simplesmente some.",
    "Você depende da sorte para saber se vai ter cliente novo no mês que vem."
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-bg-page relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-hidden">
          <h2 className="type-h2 mb-8 leading-tight">
            Você estudou muito para ser um <span className="text-white">advogado respeitado</span>, mas a sua rotina hoje parece a de uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">secretária:</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {points.map((text, idx) => (
            <div key={idx} className="relative flex items-center gap-6 p-6 md:p-8 bg-[#0A0A0B] border border-white/5 rounded-2xl reveal-hidden">
              {/* Icon */}
              <div className="shrink-0">
                <XCircle className="w-8 h-8 text-red-500/80" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <p className="type-body-lg text-text-primary leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}

          {/* Closing Statement Card */}
          <div className="group relative bg-gradient-to-br from-red-500/[0.07] via-[#0A0A0B] to-[#0A0A0B] rounded-2xl border border-red-500/20 p-6 md:p-8 reveal-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-red-500/[0.03] pointer-events-none"></div>
            <p className="relative z-10 type-body-lg text-center text-text-primary">
              Isso não é um escritório. É apenas um <span className="text-red-500 font-bold">autoemprego que te escraviza.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
