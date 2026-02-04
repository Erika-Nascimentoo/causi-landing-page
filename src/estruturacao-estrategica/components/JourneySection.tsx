import React from 'react';
import { cn } from '../lib/utils';
import { useReveal } from '../hooks/useReveal';
import { Timeline, TimelineItem } from './Timeline';
import { Button } from './Button';
import { Calendar, Check, Clock, MessageSquare, Shield, Zap, Search } from 'lucide-react';

export const JourneySection: React.FC = () => {
    const sectionRef = useReveal();

    const items: TimelineItem[] = [
        {
            id: "1",
            title: "Diagnóstico do Escritório",
            description: "Realizamos um briefing 360º para entender sua estrutura atual, volume de demandas e metas de faturamento. Analisamos seu posicionamento digital para identificar gargalos que impedem o crescimento escalável.",
            icon: <span className="font-bold">1</span>,
        },
        {
            id: "2",
            title: "Diagnóstico Comercial",
            description: "Implementamos o \"motor comercial\" do escritório. Definimos scripts de atendimento, protocolos de follow-up e um plano de ação claro para transformar consultas em contratos assinados de forma previsível.",
            icon: <span className="font-bold">2</span>,
        },
        {
            id: "3",
            title: "Diagnóstico de Marketing",
            description: "Conduzimos uma análise competitiva profunda e definimos a narrativa de autoridade. Produzimos e aprovamos os materiais estratégicos e criativos que servirão como radar para atrair o público qualificado.",
            icon: <span className="font-bold">3</span>,
        },
        {
            id: "4",
            title: "Entregáveis & Onboarding",
            description: "Entrega da sua nova Vitrine de Autoridade configurada, criativos validados e treinamento da equipe para operar os novos sistemas. Você sai com a estrutura pronta para rodar e captar imediatamente.",
            icon: <span className="font-bold">4</span>,
        },
    ];

    const [isHovered, setIsHovered] = React.useState(false);

    // Note: The user asked to keep the header from the original Section 2
    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-32 px-6 bg-bg-page relative overflow-hidden group/journey"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                (e.currentTarget as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
                (e.currentTarget as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Side Glows - Vertical atmosphere on the edges */}
            <div className="absolute top-0 left-0 w-[500px] h-full bg-brand-primary/12 blur-[130px] rounded-full -translate-x-3/4 pointer-events-none opacity-60" />
            <div className="absolute top-0 right-0 w-[500px] h-full bg-brand-glow/12 blur-[130px] rounded-full translate-x-3/4 pointer-events-none opacity-60" />

            {/* Base Grid Overlay (Subtle & Faded for Transitions) */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}
            />

            {/* Subtle Magnifier: 1.25x Zoom, smaller radius for a 'clean' look */}
            <div
                className={cn(
                    "absolute inset-0 pointer-events-none transition-opacity duration-500",
                    isHovered ? "opacity-100" : "opacity-0"
                )}
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px', // Subtler 1.25x Zoom
                    backgroundPosition: 'calc(var(--mouse-x) * -0.25) calc(var(--mouse-y) * -0.25)',
                    maskImage: 'radial-gradient(circle 120px at var(--mouse-x, -500px) var(--mouse-y, -500px), black 0%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle 120px at var(--mouse-x, -500px) var(--mouse-y, -500px), black 0%, transparent 100%)'
                }}
            />

            {/* Very subtle highlight to indicate focus area without physical rim */}
            <div
                className={cn(
                    "absolute inset-0 pointer-events-none transition-opacity duration-500",
                    isHovered ? "opacity-100" : "opacity-0"
                )}
                style={{
                    background: 'radial-gradient(circle 120px at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(139, 92, 246, 0.08) 0%, transparent 100%)',
                }}
            />


            <div className="max-w-screen-2xl mx-auto relative z-10">
                <div className="text-center mb-16 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        Como será a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">estruturação?</span>
                    </h2>
                    <p className="type-body-lg text-center max-w-3xl mx-auto px-4">
                        Serão 4 encontros estratégicos, seguindo uma progressão acompanhada por especialistas dedicados no seu caso.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto reveal-hidden">
                    <Timeline items={items} />
                </div>

                <div className="mt-16 text-center flex flex-col items-center gap-8 px-4 reveal-hidden">
                    <Button>AGENDAR MINHA ESTRUTURAÇÃO</Button>
                </div>
            </div>
        </section>
    );
};
