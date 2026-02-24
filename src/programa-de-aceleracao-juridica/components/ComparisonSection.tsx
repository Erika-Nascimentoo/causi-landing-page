import React from 'react';
import { Check, X, Target, UserCheck, Infinity } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

const PillarCard: React.FC<{ icon: any; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="group relative bg-brand-card border border-white/10 rounded-2xl p-8 hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-2 inner-glow flex flex-col gap-6 reveal-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    <div className="absolute -inset-[2px] bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl rounded-2xl"></div>
    
    <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-all shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] shrink-0">
      <Icon className="w-7 h-7 text-brand-primary" />
    </div>
    
    <div className="flex flex-col gap-3">
      <h3 className="type-h3 text-text-primary group-hover:text-brand-primary transition-colors">{title}</h3>
      <p className="text-text-secondary leading-relaxed leading-relaxed">{description}</p>
    </div>
  </div>
);

export const ComparisonSection: React.FC = () => {
    const sectionRef = useReveal();

    return (
        <section ref={sectionRef} className="py-12 md:py-24 px-6 bg-bg-page relative overflow-hidden">
            {/* Blueprint Grid Overlay */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}
            />

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full max-w-[800px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        O que você vai construir dentro do <span className="text-brand-primary font-bold">Programa de Aceleração Jurídica</span>: O seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Sistema Operacional de Receita</span>
                    </h2>
                    <p className="type-body-lg text-center text-text-secondary max-w-4xl mx-auto">
                        Nós unimos as práticas mais avançadas de <strong className="text-text-primary">Captação de Clientes, Processos de Venda e Gestão de Faturamento</strong> e as transformamos em uma engenharia feita sob medida para a realidade fática do advogado no Brasil.
                    </p>
                </header>

                {/* SOR Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-7xl mx-auto">
                    {[
                        {
                            icon: Target,
                            title: "Engenharia de Atração",
                            description: "O método que substitui a sorte pela precisão, criando um fluxo constante de novos interessados no seu trabalho."
                        },
                        {
                            icon: UserCheck,
                            title: "Protocolo de Admissão",
                            description: "A estratégia que filtra o curioso, educa o interessado e prepara o fechamento do contrato antes mesmo da reunião."
                        },
                        {
                            icon: Infinity,
                            title: "Gestão de Perpetuidade",
                            description: "A inteligência que impede você de descartar seus clientes e transforma sua base atual em uma fonte de receita recorrente."
                        }
                    ].map((pillar, idx) => (
                        <PillarCard key={idx} {...pillar} />
                    ))}
                </div>





            </div>
        </section>
    );
};