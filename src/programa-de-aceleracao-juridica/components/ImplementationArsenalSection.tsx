import React from 'react';
import { Users, Zap, MonitorPlay, MessagesSquare, MessageCircle, Gift, Ticket, ClipboardList, Library, Compass, Bot } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Button } from './Button';

const ArsenalCard: React.FC<{ 
    icon: any; 
    title: React.ReactNode; 
    description: string; 
    isBonus?: boolean; 
    className?: string;
    image?: string;
}> = ({ icon: Icon, title, description, isBonus, className, image }) => (
  <div className={`group relative bg-black/40 backdrop-blur-md border rounded-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col reveal-hidden overflow-hidden ${
    isBonus 
      ? 'border-brand-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.4)] lg:flex-row' 
      : 'border-brand-primary/20 hover:border-brand-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]'
  } ${className || ''}`}>
    {/* Internal Purple Glow & Glass Effects */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none rounded-2xl z-0" />
    <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(139,92,246,0.12)] pointer-events-none rounded-2xl z-0" />
    
    {/* Image Layer - Exact 425x317, moved to the right tip, no padding. Brighter glow applied. */}
    {image && isBonus && (
      <div className="absolute top-12 right-[-40px] w-[425px] h-[317px] pointer-events-none z-10 hidden lg:block">
        <div className="h-full relative overflow-hidden rounded-tl-[15px] border-l border-t border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.6)]">
          <img 
            src={image} 
            alt="Interface da Plataforma" 
            className="w-full h-full object-cover object-left-top transition-transform duration-500" 
          />
        </div>
      </div>
    )}

    {/* Content Layer - Dynamically sized for 425x317 image with 20px gap */}
    <div className={`px-8 pb-8 flex flex-col gap-4 relative z-30 pt-10 ${isBonus ? 'lg:w-[calc(100%-405px)] lg:py-12 lg:pr-8' : 'flex-1'}`}>
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center border border-brand-primary/20 bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary/20 transition-all shrink-0`}>
        <Icon className="w-7 h-7" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="type-h3 leading-tight text-text-primary transition-colors">
          {title}
        </h3>
        <p className="type-body text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const ImplementationArsenalSection: React.FC = () => {
    const sectionRef = useReveal();

    const OnlineBadge = () => (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-brand-primary/20 text-brand-primary border border-brand-primary/30 ml-1 whitespace-nowrap align-middle">
            ONLINE
        </span>
    );

    const BonusBadge = () => (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30 ml-2 align-middle uppercase">
            Bônus
        </span>
    );

    const arsenalItems = [
        {
            icon: Ticket,
            title: <>Ingresso para a <br /> Imersão ao Vivo <OnlineBadge /></>,
            description: "O encontro prático (via chamada de vídeo) onde vamos desenhar juntos o plano para o seu escritório parar de vazar dinheiro."
        },
        {
            icon: ClipboardList,
            title: "O Laudo de Diagnóstico",
            description: "Um raio-x inteligente que analisa a sua rotina atual e te mostra, em segundos, exatamente onde estão os furos do seu faturamento."
        },
        {
            icon: Users,
            title: <>O Grupo de Networking <br /> Exclusivo</>,
            description: "Uma comunidade blindada no WhatsApp com advogados que decidiram profissionalizar a gestão. Você não está mais sozinho no mercado."
        },
        {
            icon: Compass,
            title: <>Encontros Estratégicos <br /> Mensais <OnlineBadge /></>,
            description: "Reuniões de alinhamento em grupo (via chamada de vídeo) com a nossa equipe para tirar suas dúvidas e garantir que o seu novo sistema não pare de rodar."
        },
        {
            icon: Bot,
            title: <>30 Dias Grátis da <br /> Plataforma Causi <BonusBadge /></>,
            description: "Não basta ter o método se você tiver que fazer tudo no Excel. Ao entrar hoje, nós vamos liberar e configurar junto com você a nossa inteligência artificial para atender, filtrar e agendar seus clientes 24 horas por dia no seu WhatsApp.",
            isBonus: true,
            className: "lg:col-span-2",
            image: "/frame-59.png"
        }
    ];

    return (
        <section id="arsenal" ref={sectionRef} className="py-20 md:py-32 px-6 bg-bg-page relative overflow-hidden">
            {/* Blueprint Grid Overlay */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}
            />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <span className="inline-flex items-center gap-4 text-white uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs px-4 py-1.5 border border-white/20 rounded-full mb-4">
                        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)] ml-1" />
                        A IMPLEMENTAÇÃO
                    </span>
                    <h2 className="type-h2 text-center text-text-primary mb-6 leading-tight">
                        Tudo o que você recebe hoje ao destravar o seu acesso ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow font-black">Programa de Aceleração Jurídica</span>
                    </h2>
                    <p className="type-body-lg text-center text-text-secondary max-w-4xl mx-auto">
                        Você não está comprando um evento, está recebendo as chaves de um <strong className="text-text-primary">ecossistema completo</strong> para profissionalizar o seu faturamento.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6 mb-12">
                    {arsenalItems.map((item, idx) => (
                        <ArsenalCard key={idx} {...item} />
                    ))}
                </div>

                {/* Conclusão: Fluxo de Resultados */}
                <div className="mt-20 max-w-4xl mx-auto text-center reveal-hidden">

                    <div className="flex justify-center">
                        <Button 
                            onClick={() => document.getElementById('outcome')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            LIBERAR MEU ARSENAL POR R$ 47,90
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};