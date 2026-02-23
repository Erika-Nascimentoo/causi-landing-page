import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

export const ComparisonSection: React.FC = () => {
    const sectionRef = useReveal();

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

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full max-w-[800px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        Por que a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Programa de Aceleração Jurídica</span> é o único caminho seguro?
                    </h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Market Failures */}
                    <div className="group relative bg-gradient-to-br from-red-500/[0.07] via-brand-card to-brand-card rounded-2xl border border-red-500/20 overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 inner-glow reveal-hidden">
                        <div className="absolute inset-0 bg-red-500/[0.03] pointer-events-none"></div>
                        <div className="absolute -inset-[2px] bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl rounded-2xl"></div>

                        <div className="p-8 relative z-10">
                            <div className="mb-6">
                                <h3 className="type-h3 text-red-500">Onde o Mercado Falha</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Cursos de Marketing", desc: "Vendem teoria e geram ansiedade. No final, você tem muito conhecimento, mas continua sem nada pronto para rodar." },
                                    { title: "Agências de Tráfego", desc: "Focam em cliques e métricas de vaidade. Elas ignoram se o seu atendimento é ruim e se você está perdendo dinheiro no fechamento." },
                                    { title: "Consultorias Complexas", desc: "Exigem softwares caros e processos burocráticos. Elas esquecem que você precisa de caixa rápido, não de mais planilhas difíceis." },
                                    { title: "Escravidão do Conteúdo", desc: "Muitos cursos te obrigam a virar um \"blogueiro\" e postar todo dia para ter atenção. Se você para de postar, sua captação morre." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-red-500/10">
                                            <X className="w-3.5 h-3.5 text-red-500" />
                                        </div>
                                        <p className="type-body text-text-primary">
                                            <strong className="text-red-500/90">{item.title}:</strong> {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Causi Advantage */}
                    <div className="group relative bg-gradient-to-br from-brand-primary/[0.12] via-brand-card to-brand-card rounded-2xl border border-brand-primary/30 shadow-[inset_0_0_60px_rgba(139,92,246,0.15)] overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-2 inner-glow reveal-hidden">
                        <div className="absolute inset-0 bg-brand-primary/[0.05] pointer-events-none"></div>
                        <div className="absolute -inset-[2px] bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl rounded-2xl"></div>

                        <div className="p-8 relative z-10">
                            <div className="mb-6">
                                <h3 className="type-h3 text-brand-primary">A Vitória da Estruturação</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Velocidade Real", desc: "Você não estuda para fazer; nós entregamos sua Landing Page e seus Vídeos prontos. Você pula a teoria e vai direto para a captação." },
                                    { title: "Seguro de Investimento", desc: "Blindamos seu Google Meu Negócio e seus Scripts de Vendas antes de você investir 1 real. Garantimos que nenhum lead seja desperdiçado." },
                                    { title: "Foco no Lucro Líquido", desc: "Sem burocracia. Instalamos apenas o essencial para você ter processos comerciais claros, previsibilidade de caixa e escala real." },
                                    { title: "Captação Invisível e Ativa", desc: "Sua máquina trabalha 24h atraindo clientes de alto nível sem que você precise postar todo dia ou expor sua vida pessoal para vender." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-brand-primary/10">
                                            <Check className="w-3.5 h-3.5 text-brand-primary" />
                                        </div>
                                        <p className="type-body text-text-primary">
                                            <strong className="text-brand-primary/90">{item.title}:</strong> {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <footer className="mt-20 text-center flex flex-col items-center gap-8 px-4 reveal-hidden">
                    <p className="type-cta max-w-3xl">Pronto para parar de desperdiçar dinheiro e <span className="text-brand-primary">profissionalizar</span> sua advocacia?</p>
                    <Button onClick={() => document.getElementById('proximos-passos')?.scrollIntoView({ behavior: 'smooth' })}>
                        <span className="font-normal text-white/90">QUERO CRIAR </span>
                        <span className="font-black">MINHA MÁQUINA</span>
                    </Button>
                </footer>
            </div>
        </section>
    );
};