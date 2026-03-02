import React from 'react';
import { CheckCircle2, Gift, ShieldCheck, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

const OfferListItem: React.FC<{ title: React.ReactNode; description?: string; isBonus?: boolean }> = ({ title, description, isBonus }) => {
  if (isBonus) {
    return (
      <li className="relative flex flex-col items-center justify-center p-6 mt-8 border-2 border-brand-primary rounded-2xl group text-center">
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[11px] uppercase tracking-widest font-bold h-7 px-5 rounded-full flex items-center justify-center gap-1.5 leading-none pt-[1px]">
          <Gift className="w-3.5 h-3.5" />
          <span>SUPER BÔNUS</span>
        </div>
        <div className="text-lg md:text-xl leading-relaxed text-slate-900">
          <span className="font-bold">{title}</span>
          {description && <span className="text-slate-600 block text-[1.1rem] md:text-lg mt-1">{description}</span>}
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-4 py-3 md:py-3.5 group">
      <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 md:mt-1">
        <CheckCircle2 className="w-6 h-6 text-brand-primary" />
      </div>
      <div className="text-[1.1rem] md:text-xl leading-snug md:leading-snug text-left text-slate-800 flex-1">
        <span className="font-extrabold">{title}</span>
        {description && <span className="text-slate-600 block text-[1.1rem] md:text-lg mt-1.5 leading-relaxed">{description}</span>}
      </div>
    </li>
  );
};

const getNextImersionDate = (): string => {
  const now = new Date();
  
  const getSecondTuesday = (year: number, month: number) => {
    let day = 1;
    let tuesdaysCount = 0;
    while (tuesdaysCount < 2) {
      const d = new Date(year, month, day);
      if (d.getDay() === 2) { // 2 = Tuesday
        tuesdaysCount++;
      }
      if (tuesdaysCount < 2) {
        day++;
      }
    }
    return new Date(year, month, day, 18, 0, 0); // 18h no fuso local
  };

  let imersionDate = getSecondTuesday(now.getFullYear(), now.getMonth());

  // Se a data de hoje já passou a data da imersão (segunda terca às 18h) pega o mes seguinte
  if (now.getTime() > imersionDate.getTime()) {
    imersionDate = getSecondTuesday(now.getFullYear(), now.getMonth() + 1);
  }

  const dd = String(imersionDate.getDate()).padStart(2, '0');
  const mm = String(imersionDate.getMonth() + 1).padStart(2, '0');
  const yy = String(imersionDate.getFullYear()).slice(-2);

  return `${dd}/${mm}/${yy}`;
};

export const SorSystemSection: React.FC = () => {
    const sectionRef = useReveal();
    const nextImersionDate = getNextImersionDate();

    return (
        <section id="offer" ref={sectionRef} className="py-32 px-6 bg-bg-page relative overflow-hidden">
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

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <header className="text-center mb-8 md:mb-10 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        O <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow box-decoration-clone font-black">Programa de Aceleração Jurídica</span> não é mais um cursinho para você assistir e esquecer
                    </h2>
                    <p className="type-sub text-center text-text-secondary max-w-4xl mx-auto mt-4">
                        É a instalação definitiva do seu <strong className="text-text-primary font-bold">Sistema Operacional de Receita</strong>.
                    </p>
                </header>

                {/* Alert Box - Moved outside header to perfectly match Pricing Card width */}
                <div className="reveal-hidden max-w-lg mx-auto mb-6">
                    <div className="text-[15px] md:text-[17px] font-bold text-rose-600 bg-rose-500/10 backdrop-blur-md border border-rose-500/20 py-4 md:py-5 px-5 md:px-6 rounded-2xl flex items-start gap-3 md:gap-4 text-left w-full shadow-lg shadow-rose-500/5">
                        <AlertCircle className="w-6 h-6 md:w-7 md:h-7 shrink-0 mt-0.5" />
                        <span className="leading-snug">Atenção: A próxima Imersão ao Vivo acontecerá no dia {nextImersionDate} às 18h de Brasília. As vagas na sala são limitadas para garantirmos a qualidade do diagnóstico.</span>
                    </div>
                </div>

                {/* Centralized High Impact Pricing Card */}
                <div className="reveal-hidden max-w-lg mx-auto">
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_100px_30px_rgba(255,255,255,0.15)] flex flex-col items-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                        
                        {/* Offer List Integrated Inside Card - NOW AT THE TOP */}
                        <div className="w-full text-left">
                            <h3 className="text-2xl md:text-3xl font-black text-brand-primary mb-6 text-center uppercase">
                                Revisando tudo o que você recebe hoje:
                            </h3>
                            
                            <ul className="flex flex-col">
                                <OfferListItem 
                                    title="Ingresso para a Imersão ao Vivo"
                                />
                                <OfferListItem 
                                    title="O Laudo de Diagnóstico do seu escritório"
                                />
                                <OfferListItem 
                                    title="Treinamentos avançados de vendas e marketing jurídico"
                                />
                                <OfferListItem 
                                    title="O Grupo de Networking Exclusivo"
                                />
                                <OfferListItem 
                                    title="Encontros Estratégicos Mensais"
                                />
                                <OfferListItem 
                                    isBonus
                                    title={<span className="font-medium">Acesso de 30 dias Grátis na <span className="text-brand-primary font-black">Plataforma Causi</span> no Plano Profissional com IA de Atendimento<span className="text-[0.7em] align-super">*</span></span>}
                                />
                            </ul>
                            <p className="text-center text-xs text-slate-400 mt-4 italic">
                                * Acesso de 30 dias grátis no Plano profissional com direito a conexão de 1 número de WhatsApp e 3 usuários.
                            </p>
                        </div>

                        {/* Pricing and Button - NOW AT THE BOTTOM */}
                        <div className="w-full flex flex-col items-center mt-6">
                            <div className="text-center mb-8 max-w-xl mx-auto">
                                <p className="type-body text-slate-600 leading-relaxed mb-4">
                                    O <strong className="font-bold text-slate-900">Programa de Aceleração Jurídica</strong> tem apenas um objetivo: construir o seu Sistema Operacional e colocar dinheiro no caixa do seu escritório.
                                </p>
                                <p className="type-body text-slate-600 leading-relaxed mb-4">
                                    Nós não vamos te cobrar os milhares de reais que uma consultoria tradicional cobra. Mas nós também não damos o acesso de graça, porque precisamos separar os advogados comprometidos dos "curiosos".
                                </p>
                                <p className="type-body text-slate-900 font-bold">
                                    Por isso, nós cobramos apenas um valor simbólico de comprometimento para você sentar à mesa com a nossa equipe:
                                </p>
                            </div>

                            <div className="text-center mb-2">
                                <p className="text-base font-black text-emerald-600 uppercase tracking-widest">
                                    INVESTIMENTO ÚNICO
                                </p>
                                <p className="text-[0.8rem] italic text-slate-500">
                                    (Taxa de Comprometimento)
                                </p>
                            </div>
                            
                            <div className="flex justify-center items-start mt-2 mb-2 select-none">
                                <span className="text-2xl md:text-3xl font-bold mt-3 md:mt-4 text-slate-500">R$</span>
                                <span className="text-[6rem] md:text-[8rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600">
                                    47
                                </span>
                                <span className="text-2xl md:text-3xl font-bold mt-3 md:mt-4 text-slate-500">,90</span>
                            </div>
                            <p className="type-body text-slate-600 mb-8 font-medium text-center leading-relaxed">Pagamento único e seguro.<br />Sem surpresas ou mensalidades ocultas</p>
                            
                            <Button 
                                variant="success"
                                fullWidth 
                                className="py-6 text-[24px] md:text-[28px] shadow-[0_0_30px_rgba(5,150,105,0.4)]"
                                onClick={() => window.location.href = 'https://pay.hotmart.com/N104660231A?off=la2uspqn'}
                            >
                                <span className="font-black">QUERO ENTRAR AGORA</span>
                            </Button>
                            
                            <div className="mt-6 flex flex-col items-center justify-center gap-1 text-slate-500 text-[13px] md:text-sm font-medium">
                                <div className="flex items-center justify-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                    <span>Compra segura processada pela <strong>Hotmart</strong>.</span>
                                </div>
                                <span className="text-center">Garantia incondicional de 7 dias.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};