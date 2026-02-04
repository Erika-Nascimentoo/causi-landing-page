import React from 'react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

export const QualificationSection: React.FC = () => {
    const sectionRef = useReveal();

    return (
        <section ref={sectionRef} className="relative py-16 md:py-32 w-full bg-bg-page overflow-hidden">
            {/* Purple Smoke Effect - Left Side */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-brand-primary/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-[400px] h-[300px] bg-brand-glow/10 blur-[100px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

            {/* Dark Gradient Fades for Smooth Transitions */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-bg-page to-transparent pointer-events-none z-[1]" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-page to-transparent pointer-events-none z-[1]" />

            <div className="max-w-[1080px] mx-auto flex flex-col-reverse lg:flex-row min-h-[60vh] relative">
                {/* Left Side: Text Content */}
                <div className="w-full lg:w-[60%] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 lg:py-12 z-10 relative">
                    <div className="flex flex-col items-center lg:items-start gap-8 w-full border border-brand-primary/30 rounded-2xl p-8 md:p-10">
                        <h2 className="type-h2 text-center lg:text-left">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Pronto para escalar seu escritório?</span>
                        </h2>
                        <p className="type-body-lg text-white text-center lg:text-left max-w-xl">
                            O primeiro passo é um diagnóstico da sua operação atual. Leva 2 minutos e você recebe um plano de ação personalizado.
                        </p>
                        <Button fullWidth aria-label="Iniciar diagnóstico de operação jurídica agora">INICIAR DIAGNÓSTICO AGORA</Button>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="relative w-full h-[40vh] lg:h-auto lg:w-[40%] flex-none overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('compress-luan-mari.webp')" }}
                        role="img"
                        aria-label="Escritório de advocacia moderno e escalável"
                    >
                        {/* Overlay gradient to blend with background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-page lg:bg-gradient-to-r lg:from-bg-page lg:via-transparent lg:to-bg-page"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};