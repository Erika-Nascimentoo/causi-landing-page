import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

export const ComparisonSection: React.FC = () => {
    const sectionRef = useReveal();

    return (
        <section ref={sectionRef} className="py-16 md:py-32 px-6 bg-bg-page relative overflow-hidden">
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

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full max-w-[800px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <div className="text-center mb-16 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        Veja onde seu escritório está e <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">onde ele pode chegar</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Old Way - Artesanal */}
                    <div className="group relative bg-brand-card rounded-2xl border border-white/10 overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 inner-glow reveal-hidden">
                        {/* Hover Glow Effect - Neon Splash */}
                        <div className="absolute -inset-[2px] bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl rounded-2xl"></div>

                        <div className="p-8 relative z-10">
                            <div className="mb-6">
                                <h3 className="type-h3 text-red-500">O Modelo Artesanal</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Gestão por Instinto", desc: "O faturamento depende de fatores externos e da sorte. Você nunca sabe como será o próximo mês." },
                                    { title: "Preço Questionado", desc: "O cliente te compara com o colega ao lado e você sente que precisa dar descontos para não perder o caso." },
                                    { title: "Vazamento de Contratos", desc: "Bons leads chegam, mas se perdem por falta de script, demora no atendimento ou improviso comercial." },
                                    { title: "Sobrecarga Centralizada", desc: "Você é o motor único. Se você não opera cada detalhe, das petições ao financeiro, nada acontece." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-red-500/10">
                                            <X className="w-3.5 h-3.5 text-red-500" />
                                        </div>
                                        <p className="type-body">
                                            <strong className="text-red-500/90">{item.title}:</strong> {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* New Way - Causi Estratégico */}
                    <div className="group relative bg-brand-card rounded-2xl border border-brand-primary/20 shadow-[inset_0_0_60px_rgba(139,92,246,0.1)] overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-2 inner-glow reveal-hidden">
                        {/* Hover Glow Effect - Neon Splash */}
                        <div className="absolute -inset-[2px] bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl rounded-2xl"></div>

                        <div className="p-8 relative z-10">
                            <div className="mb-6">
                                <h3 className="type-h3 text-brand-primary">O Modelo Estratégico</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Fluxo Previsível", desc: "Um processo modelado para você atrair oportunidades qualificadas de forma previsível e estratégica na sua advocacia." },
                                    { title: "Posicionamento de Valor", desc: "Sua autoridade é estabelecida previamente, retirando o preço da mesa e focando na solução do problema." },
                                    { title: "Eficiência em Vendas", desc: "Protocolos claros de fechamento que garantem o máximo de aproveitamento de cada oportunidade que chega." },
                                    { title: "Visão de Estrategista", desc: "Você assume o controle do negócio, com processos rodando e dados claros para decidir onde investir e crescer." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-brand-primary/10">
                                            <Check className="w-3.5 h-3.5 text-brand-primary" />
                                        </div>
                                        <p className="type-body">
                                            <strong className="text-brand-primary/90">{item.title}:</strong> {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-24 text-center flex flex-col items-center gap-8 px-4 reveal-hidden">
                    <p className="type-cta max-w-3xl">Pronto para abandonar o manual e abraçar o estratégico?</p>
                    <Button>INICIAR DIAGNÓSTICO AGORA</Button>
                </div>
            </div>
        </section>
    );
};