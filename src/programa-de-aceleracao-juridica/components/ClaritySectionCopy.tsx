import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export const ClaritySectionCopy: React.FC = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="py-12 md:py-24 px-6 bg-bg-page relative">
      {/* Background container with overflow-hidden for decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blueprint Grid Overlay - Consistent with other sections */}
        <div
          className="absolute inset-x-0 top-0 bottom-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side empty for now as requested */}
          <div className="hidden lg:block"></div>

          {/* Combined Text Container on the Right */}
          <div className="flex flex-col gap-12 reveal-hidden">
            {/* First Block: Balde Furado */}
            <div>
              <p className="type-h3 text-left leading-tight">
                <span className="text-red-500 font-bold">O erro é simples:</span> Você está tentando encher um balde furado. Não adianta trazer mais gente se você não tem um método para atender, filtrar e cobrar o valor justo...
              </p>
            </div>

            {/* Second Block: Advogado Estrategista */}
            <div className="flex flex-col gap-8">
              <h2 className="type-h3 text-left leading-tight text-white/90">
                O <span className="text-brand-primary font-bold">Programa de Aceleração Jurídica</span> foi criado para transformar o advogado que trabalha no improviso em um verdadeiro <span className="text-brand-primary font-bold">estrategista</span>, instalando um <span className="text-brand-primary font-bold">Sistema Operacional de Receita</span> para consertar as três falhas que impedem a sua advocacia de crescer.
              </h2>

              {/* Strategic List with Standardized Check Icons and Descriptions */}
              <ul className="flex flex-col gap-8 mt-4">
                <li className="flex items-start gap-5">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <span className="text-xl md:text-2xl text-text-primary font-bold">Falha de Atração</span>
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">Pare de ser invisível e crie um canal próprio de interessados reais.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <span className="text-xl md:text-2xl text-text-primary font-bold">Falha de Conversão</span>
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">Pare de ser escravo do celular e use um filtro que prepara o cliente para pagar o valor justo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <span className="text-xl md:text-2xl text-text-primary font-bold">Falha de Perpetuidade</span>
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">Pare de enxugar gelo e transforme cada contrato em faturamento recorrente.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
