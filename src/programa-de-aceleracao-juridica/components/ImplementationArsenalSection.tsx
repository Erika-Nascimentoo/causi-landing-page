import React from 'react';
import { Users, Zap, MonitorPlay, MessagesSquare, MessageCircle, Gift } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const ArsenalCard: React.FC<{ icon: any; title: string; description: string; isBonus?: boolean }> = ({ icon: Icon, title, description, isBonus }) => (
  <div className={`group relative bg-brand-card border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 inner-glow flex flex-col gap-6 reveal-hidden ${isBonus ? 'border-brand-primary/40 shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]' : 'border-white/10 hover:border-brand-primary/50'}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all shrink-0 ${isBonus ? 'bg-brand-primary text-white border-brand-primary shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]' : 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary group-hover:bg-brand-primary/20'}`}>
      <Icon className="w-7 h-7" />
    </div>
    
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">{title}</h3>
      </div>
      <p className="text-text-secondary leading-relaxed text-base">{description}</p>
    </div>
  </div>
);

export const ImplementationArsenalSection: React.FC = () => {
    const sectionRef = useReveal();

    const arsenalItems = [
        {
            icon: Users,
            title: "A Imersão ao Vivo com a Equipe Causi",
            description: "O encontro onde vamos desenhar a arquitetura do seu faturamento passo a passo."
        },
        {
            icon: Zap,
            title: "A Auditoria de Aceleração",
            description: "Nossa inteligência artificial vai diagnosticar exatamente por onde o seu dinheiro está vazando hoje."
        },
        {
            icon: MonitorPlay,
            title: "Sala de Aula Causi",
            description: "Um acervo de aulas e materiais práticos para você acelerar a instalação do seu sistema."
        },
        {
            icon: MessagesSquare,
            title: "Encontros Mensais de Estratégia",
            description: "Reuniões exclusivas em grupo para tirar dúvidas e manter sua máquina de faturamento azeitada."
        },
        {
            icon: MessageCircle,
            title: "Grupo de Networking (WhatsApp)",
            description: "Uma comunidade de advogados que decidiram abandonar o improviso e profissionalizar a gestão."
        },
        {
            icon: Gift,
            isBonus: true,
            title: "BÔNUS: 30 Dias Grátis do Plano Profissional do Causi",
            description: "A ferramenta tecnológica que sustenta todo o método pronta para você usar."
        }
    ];

    return (
        <section ref={sectionRef} className="py-12 md:py-24 px-6 bg-bg-page relative overflow-hidden">
            {/* Blueprint Grid Overlay */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        O seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">arsenal de implementação</span>
                    </h2>
                    <p className="type-body-lg text-center text-text-secondary max-w-4xl mx-auto">
                        Tudo o que está incluso no seu acesso ao <strong className="text-text-primary">Programa de Aceleração Jurídica</strong>
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {arsenalItems.map((item, idx) => (
                        <ArsenalCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};