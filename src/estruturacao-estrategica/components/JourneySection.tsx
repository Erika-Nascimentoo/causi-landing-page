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
            title: "Semana 1: Setup e Posicionamento",
            description: "Configuramos seus radares e vitrine. Definimos a narrativa que irá atrair seu cliente ideal e eliminamos o amadorismo do seu perfil digital, preparando a base para a escala.",
            icon: <span className="font-bold">1</span>,
        },
        {
            id: "2",
            title: "Semana 2: Engenharia de Conversão",
            description: "Instalamos seus novos scripts de vendas e protocolos de triagem. Treinamos seu time no \"Filtro de Elite\" para garantir que você só foque em quem realmente assina o contrato.",
            icon: <span className="font-bold">2</span>,
        },
        {
            id: "3",
            title: "Semana 3: Escala e Ajustes Finos",
            description: "Abrimos as comportas de captação sob nossa supervisão. Analisamos os primeiros dados reais e otimizamos o funil para garantir o máximo de eficiência e ROI comercial.",
            icon: <span className="font-bold">3</span>,
        },
        {
            id: "4",
            title: "Semana 4: Entrega da Máquina",
            description: "Sua operação comercial está rodando. Entregamos seu Dashboard de Indicadores e finalizamos o onboarding para que você assuma o controle total do seu crescimento.",
            icon: <span className="font-bold">4</span>,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-12 md:py-24 px-6 bg-transparent relative overflow-hidden group/journey"
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
            <div className="max-w-screen-2xl mx-auto relative z-10">
                <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        A Jornada dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">30 dias</span>
                    </h2>
                    <p className="type-body-lg text-center max-w-3xl mx-auto px-4">
                        Um cronograma agressivo focado em tirar sua máquina do papel e colocá-la para gerar receita real.
                    </p>
                </header>

                <div className="max-w-4xl mx-auto reveal-hidden">
                    <Timeline items={items} />
                </div>

                <footer className="mt-20 text-center flex flex-col items-center gap-8 px-4 reveal-hidden">
                    <p className="type-cta max-w-3xl">
                        Pare de jogar oportunidades no lixo e comece a <span className="text-brand-primary">escalar seu faturamento</span>.
                    </p>
                    <Button onClick={() => document.getElementById('proximos-passos')?.scrollIntoView({ behavior: 'smooth' })}>
                        <span className="font-normal text-white/90">QUERO CRIAR </span>
                        <span className="font-black">MINHA MÁQUINA</span>
                    </Button>
                </footer>
            </div>
        </section>
    );
};
