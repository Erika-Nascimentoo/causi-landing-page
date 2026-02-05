import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Timeline, TimelineItem } from './Timeline';
import { Button } from './Button';
import { ShineBorder } from './ui/ShineBorder';
import { Calendar, Check, Clock, MessageSquare, Shield, Zap, Search } from 'lucide-react';

export const JourneySection: React.FC = () => {
    const sectionRef = useReveal();

    const items: TimelineItem[] = [
        {
            id: "1",
            title: "Diagn├│stico do Escrit├│rio",
            description: "Briefing 360┬║ do escrit├│rio e an├ílise de posicionamento digital.",
            icon: <span className="font-bold">1</span>,
        },
        {
            id: "2",
            title: "Diagn├│stico Comercial",
            description: "Instala├º├úo do motor comercial e defini├º├úo de plano de a├º├úo",
            icon: <span className="font-bold">2</span>,
        },
        {
            id: "3",
            title: "Diagn├│stico de Marketing",
            description: "An├ílise competitiva e aprova├º├úo do material para produ├º├úo",
            icon: <span className="font-bold">3</span>,
        },
        {
            id: "4",
            title: "Entreg├íveis",
            description: "Entrega de p├ígina de vendas pronta para convers├úo e criativos editados",
            icon: <span className="font-bold">4</span>,
        },
    ];

    // Note: The user asked to keep the header from the original Section 2
    return (
        <section ref={sectionRef} className="py-16 md:py-32 px-6 bg-bg-page relative overflow-hidden">
            {/* Blueprint Grid Overlay (Same as ProblemSection) */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}
            />

            {/* Background Glow - Purple/Brand color since it's after SolutionSection */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <div className="text-center mb-16 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        Como ser├í a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">estrutura├º├úo?</span>
                    </h2>
                    <p className="type-body-lg text-center max-w-3xl mx-auto px-4">
                        Ser├úo 4 encontros estrat├®gicos, seguindo uma progress├úo acompanhada por especialistas dedicados no seu caso.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.3)]">
                    <ShineBorder borderRadius={24} borderWidth={2} duration={8} className="bg-brand-card/80 border border-white/5">
                        <div className="p-8 md:p-16 w-full">
                            <Timeline items={items} />
                        </div>
                    </ShineBorder>
                </div>

                <div className="mt-16 text-center flex flex-col items-center gap-8 px-4 reveal-hidden">
                    <Button>AGENDAR MINHA ESTRUTURA├ç├âO</Button>
                </div>
            </div>
        </section>
    );
};
