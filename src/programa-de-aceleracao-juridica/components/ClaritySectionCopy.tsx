import React from 'react';
import { Rocket } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Button } from './Button';

export const ClaritySectionCopy: React.FC = () => {
    const sectionRef = useReveal();

    return (
        <section id="solution" ref={sectionRef} className="relative bg-white py-20 md:py-32 px-6 overflow-hidden min-h-[700px] flex items-center">
            
            {/* Background Image - Occupying 50% of the section width on the left */}
            <div className="absolute top-0 left-0 w-full lg:w-[55%] h-full z-0 overflow-hidden hidden lg:block">
                <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${import.meta.env.BASE_URL}advogado-feliz.webp')` }}
                />
                {/* Fades to blend with the white bg */}
                <div className="absolute inset-0 bg-gradient-to-l from-white via-white/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Empty spacer to align content to the right side on desktop - Reduced from span-6 to span-5 */}
                    <div className="lg:col-span-5 hidden lg:block" />

                    {/* Content on the Right half - Increased from span-6 to span-7 */}
                    <div className="lg:col-span-7 flex flex-col gap-10">
                        <div className="reveal-hidden">
                            <span className="inline-flex items-center gap-4 text-slate-600 uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs px-4 py-1.5 border border-slate-200 rounded-full mb-4">
                                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)] ml-1" />
                                A ENGENHARIA DA RECEITA
                            </span>
                             <h2 className="type-h2 mb-4 leading-tight text-left text-slate-900 line-clamp-none">
                                O <span className="text-brand-primary font-black">Sistema Operacional de Receita</span> é construído em cima de 3 engrenagens. Se uma falha, o seu <span className="text-brand-primary font-black">dinheiro vaza.</span>
                            </h2>
                            <p className="text-lg md:text-xl font-serif text-slate-600 mt-4 max-w-2xl leading-relaxed font-semibold">
                                O <span className="text-brand-primary font-bold">Programa de Aceleração Jurídica</span> do <span className="text-brand-primary font-bold">Causi</span> vai te entregar o exato passo a passo para instalar essas 3 peças no seu escritório de forma simples:
                            </p>
                        </div>

                        {/* Strategic List */}
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-start gap-4 reveal-hidden">
                                <div className="w-24 md:w-32 shrink-0">
                                    <span className="text-7xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_#8B5CF6] opacity-40 leading-none">
                                        01
                                    </span>
                                </div>
                                <div className="flex-1 pt-2">
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                        <span className="text-brand-primary font-bold">A Máquina de Atração:</span> Como parar de depender de indicações ou da sorte, e criar um canal de contatos previsível (sem precisar virar blogueirinho de Instagram).
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 reveal-hidden">
                                <div className="w-24 md:w-32 shrink-0">
                                    <span className="text-7xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_#8B5CF6] opacity-40 leading-none">
                                        02
                                    </span>
                                </div>
                                <div className="flex-1 pt-2">
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                        <span className="text-brand-primary font-bold">O Protocolo de Admissão:</span> A trava de segurança que você instala no seu WhatsApp para barrar automaticamente os "curiosos de sábado" e só deixar passar quem tem dinheiro para pagar os seus honorários.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 reveal-hidden">
                                <div className="w-24 md:w-32 shrink-0">
                                    <span className="text-7xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_#8B5CF6] opacity-40 leading-none">
                                        03
                                    </span>
                                </div>
                                <div className="flex-1 pt-2">
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                        <span className="text-brand-primary font-bold">A Manutenção do Lucro:</span> O modelo que grandes escritórios usam para fazer o mesmo cliente comprar de novo ou indicar você ativamente, para você nunca mais ter que começar o mês do zero.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className="reveal-hidden mt-4">
                            <Button 
                                onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Como funciona o programa
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
