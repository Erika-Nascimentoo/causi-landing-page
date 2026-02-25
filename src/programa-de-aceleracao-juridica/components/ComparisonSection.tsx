import React from 'react';
import { Check, X, Target, UserCheck, Infinity } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

const PillarCard: React.FC<{ icon: any; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col gap-6 reveal-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    
    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
      <Icon className="w-7 h-7 text-white" />
    </div>
    
    <div className="flex flex-col gap-3">
      <h3 className="type-h3 text-white">{title}</h3>
      <p className="text-purple-100/70 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const ComparisonSection: React.FC = () => {
    const sectionRef = useReveal();

    return (
        <section id="comparison" ref={sectionRef} className="py-20 md:py-32 px-6 bg-brand-deep relative overflow-hidden">
            {/* Blueprint Grid Overlay in Purple */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-deep/50 pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <span className="inline-flex items-center gap-4 text-white uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs px-4 py-1.5 border border-white/20 rounded-full mb-4">
                        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)] ml-1" />
                        OS 3 PILARES
                    </span>
                    <h2 className="type-h2 text-center text-white mb-6 leading-relaxed">
                        Você vai construir dentro do <span className="bg-brand-primary/40 px-2 py-0.5 rounded-sm box-decoration-clone font-black">Programa de Aceleração Jurídica</span> do <span className="bg-brand-primary/40 px-2 py-0.5 rounded-sm box-decoration-clone font-black">Causi</span> o seu <span className="bg-brand-primary/60 px-2 py-0.5 rounded-sm font-black box-decoration-clone">Sistema Operacional de Receita</span>
                    </h2>
                    <p className="type-body-lg text-center text-purple-100 max-w-4xl mx-auto">
                        Nós pegamos as estratégias das maiores empresas do mundo e adaptamos para a rotina real da sua advocacia.
                    </p>
                </header>

                {/* SOR Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {[
                        {
                            icon: Target,
                            title: "Engenharia de Atração",
                            description: "O método que troca a sorte pela precisão, trazendo novos interessados todos os dias."
                        },
                        {
                            icon: UserCheck,
                            title: "Protocolo de Admissão",
                            description: "A estratégia que filtra quem só quer \"tirar dúvida\" e deixa o contrato pronto para ser assinado."
                        },
                        {
                            icon: Infinity,
                            title: "Gestão de Perpetuidade",
                            description: "A inteligência que faz você parar de descartar clientes e cria dinheiro que entra todo mês."
                        }
                    ].map((pillar, idx) => (
                        <PillarCard key={idx} {...pillar} />
                    ))}
                </div>





                {/* Conclusão: Sistema Operacional */}
                <div className="mt-20 max-w-4xl mx-auto text-center reveal-hidden">
                    <h4 className="type-h4 text-purple-100/90 leading-relaxed md:text-2xl font-medium mb-10">
                        Mas o Sistema não é apenas uma ideia. Para você <span className="text-white font-bold">parar de enxugar gelo</span>, você precisa das ferramentas certas.
                    </h4>
                    
                    <div className="flex justify-center">
                        <Button 
                            onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            VER ARSENAL DE IMPLEMENTAÇÃO
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};