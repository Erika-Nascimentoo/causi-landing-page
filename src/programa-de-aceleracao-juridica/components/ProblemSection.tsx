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
        <h3 className="type-h3 leading-tight text-text-primary font-black">{title}</h3>
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
      title: <>A Agência <br /> de Posts</>,
      description: "Você pagou caro para ter um \"feed harmônico\" e artes bonitinhas no Instagram, mas descobriu da pior forma que curtida não paga aluguel e elogio não vira contrato assinado."
    },
    {
      icon: UserX,
      title: <>O Gestor de <br /> Contatinhos</>,
      description: "Eles prometeram \"chover clientes\", mas só encheram seu WhatsApp de curiosos pedindo orçamento. Você passou o dia respondendo mensagem de graça e não fechou um único honorário."
    },
    {
      icon: FileWarning,
      title: <>A Planilha <br /> Mágica</>,
      description: "Você comprou o cursinho ou a planilha mágica de algum \"especialista\", tentou aplicar sozinho depois de um dia exaustivo no fórum, e as pastas continuam pegando poeira no seu computador."
    },
    {
      icon: Bot,
      title: <>O Robô Burro de <br /> Atendimento</>,
      description: "Você instalou um robô de atendimento esperando paz, mas ele só irritou seus contatos. Sem um processo humano por trás, a tecnologia não fechou vendas, apenas automatizou a perda de clientes."
    }
  ];

  return (
    <section id="problems" ref={sectionRef} className="py-20 md:py-32 px-6 bg-bg-page relative overflow-hidden">
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
          <span className="inline-flex items-center gap-4 text-white uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs px-4 py-1.5 border border-white/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)] ml-1" />
            Tentativas Frustradas
          </span>
          <h2 className="type-h2 text-center text-text-primary mb-6">
            Você já tentou as <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 font-black">saídas fáceis</span>, mas elas só serviram para aumentar o seu cansaço
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <ProblemCard key={idx} {...prob} />
          ))}
        </div>

        {/* Conclusão: Balde Furado */}
        <div className="mt-24 max-w-4xl mx-auto text-center reveal-hidden">
          <div className="flex flex-col gap-8 mb-12">
            <h4 className="type-sub text-text-secondary font-medium leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 font-black">A dura realidade:</span> O seu escritório não tem um problema de "falta de clientes". Ele tem um problema de <span className="text-white font-bold">processo.</span>
            </h4>
            
            <p className="type-sub text-text-secondary font-medium leading-relaxed">
              Contratar agências ou comprar robôs soltos é tentar apagar um incêndio jogando gasolina. Enquanto a sua forma de captar, atender e cobrar não conversar entre si, você vai continuar enxugando gelo. 
            </p>

            <p className="type-sub text-text-secondary font-medium leading-relaxed">
              Você não precisa de mais esforço manual ou de uma nova ferramenta mágica. O que os grandes escritórios usam para crescer em paz é uma única coisa: <br /><span className="text-white font-black">Um Sistema Operacional de Receita.</span>
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="danger"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero consertar o minha advocacia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};