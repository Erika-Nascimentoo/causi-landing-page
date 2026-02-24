import React from 'react';
import { Layout, UserX, FileWarning, Bot } from 'lucide-react';
import { FeatureCardProps } from '../types';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

const ProblemCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group relative bg-brand-card border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col inner-glow reveal-hidden overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

    {/* Hover Glow Effect - Neon Splash */}
    <div className="absolute -inset-[2px] bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl rounded-2xl"></div>

    <div className="relative z-10 flex flex-col gap-6 flex-grow">
      {Icon && (
        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-all shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)] group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)] shrink-0">
          <Icon className="w-7 h-7 text-red-500" />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <h3 className="type-h3 leading-tight text-text-primary tracking-tight">{title}</h3>
        <p className="type-body">{description}</p>
      </div>
    </div>
  </div>
);

export const ProblemSection: React.FC = () => {
  const sectionRef = useReveal();
  const problems = [
    {
      icon: Layout,
      title: "A Agência de Posts",
      description: "Você pagou por posts bonitinhos e feed harmônico, mas descobriu que curtida não gera honorário e não paga o boleto do seu escritório."
    },
    {
      icon: UserX,
      title: "O Gestor de Contatinhos",
      description: "Você recebeu dezenas de curiosos que só roubaram seu tempo, sem fechar um único contrato real por falta de filtro."
    },
    {
      icon: FileWarning,
      title: "O Guru dos Milagres",
      description: "Você comprou cursos, PDFs ou planilhas que prometiam lucro fácil, mas percebeu que material teórico não substitui um sistema de trabalho real."
    },
    {
      icon: Bot,
      title: "A IA do Piloto Automático",
      description: "Você instalou robôs que prometiam fechar contratos sozinhos, mas descobriu que tecnologia sem processo comercial só serve para perder clientes de forma automática."
    }
  ];

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

      {/* Background Texture/Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-screen-2xl mx-auto">
        <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
          <h2 className="type-h2 text-center text-text-primary mb-6">
            Você já tentou as <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">saídas fáceis</span>, mas elas só serviram para aumentar o seu cansaço
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <ProblemCard key={idx} {...prob} />
          ))}
        </div>
      </div>
    </section>
  );
};