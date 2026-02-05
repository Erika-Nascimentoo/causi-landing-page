import React from 'react';
import { cn } from '../lib/utils';
import { useReveal } from '../hooks/useReveal';
import { Timeline, TimelineItem } from './Timeline';
import { Button } from './Button';
import { ShineBorder } from './ui/ShineBorder';

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

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-32 px-6 bg-transparent relative overflow-hidden group/journey"
            id="estruturacao"
        >
            {/* --- BACKGROUND ELEMENTS (Smoke / Nebula) --- */}
            {/* Top Left Smoke Element (z-index: 1) */}
            <div
                className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] z-[1] opacity-70 blur-[100px] animate-smoke-pulse-15 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(0, 0, 0, 0) 70%)'
                }}
            />

            {/* Bottom Right Smoke Element (z-index: 1) */}
            <div
                className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] z-[1] opacity-70 blur-[100px] animate-smoke-pulse-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(0, 0, 0, 0) 70%)'
                }}
            />

            {/* --- EDGE FEATHERING (Soft Borders) (z-index: 3) --- */}
            <div
                className="absolute top-0 left-0 w-full h-[150px] z-[3] pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, #020202 10%, transparent 100%)'
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-full h-[150px] z-[3] pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, #020202 10%, transparent 100%)'
                }}
            />

            {/* Static Grid Overlay for texture (z-index: 1) */}
            <div
                className="absolute inset-0 z-[1] opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            {/* --- CONTENT LAYER --- */}
            <div className="max-w-screen-2xl mx-auto relative lg:z-[2] z-auto">
                <div className="text-center mb-16 px-4 max-w-[960px] mx-auto reveal-hidden relative z-[10] lg:z-auto">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        Como será a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">estruturação?</span>
                    </h2>
                    <p className="type-body-lg text-center max-w-3xl mx-auto px-4">
                        Serão 4 encontros estratégicos, seguindo uma progressão acompanhada por especialistas dedicados no seu caso.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto reveal-hidden relative z-[2] lg:z-auto">
                    <Timeline items={items} />
                </div>

                <div className="mt-16 text-center flex flex-col items-center gap-8 px-4 reveal-hidden relative z-[10]">
                    <Button>INICIAR DIAGNÓSTICO AGORA</Button>
                </div>
            </div>
        </section>
    );
};
