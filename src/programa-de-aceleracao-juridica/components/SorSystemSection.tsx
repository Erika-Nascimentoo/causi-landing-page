import React from 'react';
import { CheckCircle2, Gift } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

const OfferListItem: React.FC<{ title: React.ReactNode; description?: string; isBonus?: boolean }> = ({ title, description, isBonus }) => (
  <li className="flex items-center gap-4 py-3 group">
    <div className="w-6 h-6 flex items-center justify-center shrink-0">
      {isBonus ? <Gift className="w-5 h-5 text-amber-500" /> : <CheckCircle2 className="w-5 h-5 text-brand-primary" />}
    </div>
    <div className="text-lg md:text-xl leading-relaxed text-left text-slate-900 flex-1">
      <span className="font-bold">{title}</span>
      {description && <span className="text-slate-600 ml-2">{description}</span>}
    </div>
  </li>
);

export const SorSystemSection: React.FC = () => {
    const sectionRef = useReveal();

    return (
        <section id="offer" ref={sectionRef} className="py-20 md:py-32 px-6 bg-bg-page relative overflow-hidden">
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

            <div className="max-w-2xl mx-auto relative z-10">
                <header className="text-center mb-16 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        O <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow box-decoration-clone font-black">Programa de Aceleração Jurídica</span> não é mais um cursinho para você assistir e esquecer
                    </h2>
                    <p className="type-body-lg text-center text-text-secondary max-w-4xl mx-auto">
                        É a <strong className="text-text-primary font-bold">instalação definitiva</strong> do seu <strong className="text-text-primary font-bold">Sistema Operacional de Receita</strong>.
                    </p>
                </header>

                {/* Centralized High Impact Pricing Card */}
                <div className="reveal-hidden">
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col items-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                        
                        {/* Offer List Integrated Inside Card - NOW AT THE TOP */}
                        <div className="w-full text-left mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 text-center">
                                Revisando tudo o que você recebe hoje:
                            </h3>
                            
                            <ul className="flex flex-col">
                                <OfferListItem 
                                    title={<>Ingresso para a Imersão ao Vivo <span className="italic font-light text-[0.85em]">(Online)</span></>}
                                />
                                <OfferListItem 
                                    title="O Laudo de Diagnóstico do seu escritório"
                                />
                                <OfferListItem 
                                    title={<>Acesso ao Cofre Causi <span className="italic font-light text-[0.85em]">(Vídeo Aulas)</span></>}
                                />
                                <OfferListItem 
                                    title={<>O Grupo de Networking Exclusivo <span className="italic font-light text-[0.85em]">(WhatsApp)</span></>}
                                />
                                <OfferListItem 
                                    title={<>Encontros Estratégicos Mensais <span className="italic font-light text-[0.85em]">(Online)</span></>}
                                />
                                <OfferListItem 
                                    isBonus
                                    title="SUPER BÔNUS: 30 Dias Livres da Plataforma Causi"
                                />
                            </ul>
                        </div>

                        {/* Pricing and Button - NOW AT THE BOTTOM */}
                        <div className="w-full flex flex-col items-center mt-10 pt-10 border-t border-slate-200">
                            <div className="text-center mb-8 max-w-lg text-lg">
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Contratar uma consultoria para estruturar isso custaria milhares de reais. Pagar pelas ferramentas de IA soltas no mercado custaria centenas de reais todos os meses.
                                </p>
                                <p className="text-slate-900 font-bold">
                                    Mas hoje, você tem acesso ao sistema completo, validado por grandes escritórios, por um valor simbólico:
                                </p>
                            </div>

                            <p className="text-base font-bold text-brand-primary uppercase tracking-widest mb-2">Investimento Único</p>
                            
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-2xl font-medium text-slate-600">R$</span>
                                <span className="text-7xl md:text-8xl font-black text-slate-900">47,90</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-8 font-medium text-center">Pagamento único e seguro.<br />Sem surpresas ou mensalidades ocultas</p>
                            
                            <Button 
                                fullWidth 
                                className="py-6 text-xl shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                                onClick={() => window.location.href = 'https://www.causi.com.br/advogado/triagem/servico'}
                            >
                                <span className="font-black">QUERO ENTRAR AGORA</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};