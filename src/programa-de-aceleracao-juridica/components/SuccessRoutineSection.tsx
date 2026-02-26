import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Button } from './Button';

export const SuccessRoutineSection: React.FC = () => {
  const sectionRef = useReveal();
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (timelineRef.current && progressLineRef.current) {
            const rect = timelineRef.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            
            // Calcula quanto já passamos do centro da tela em relação ao topo da timeline
            const scrolledPast = viewportCenter - rect.top;
            let progress = scrolledPast / rect.height;
            
            // Limita o progresso entre 0 e 100%
            progress = Math.max(0, Math.min(1, progress));
            
            progressLineRef.current.style.height = `${progress * 100}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Checagem inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      step: "01",
      title: "O Acesso Imediato",
      description: "Assim que confirmar o pagamento, você recebe as instruções em um vídeo explicativo e garante a sua vaga na próxima Imersão ao Vivo. É o fim da dúvida e o início da sua organização. As imersões acontecem todos os meses e você pode participar quantas vezes quiser."
    },
    {
      step: "02",
      title: "O Raio-X do seu Escritório",
      description: "Antes mesmo do nosso encontro, você preenche o Diagnóstico Automático e a nossa inteligência mapeia instantaneamente por onde o seu dinheiro está vazando hoje."
    },
    {
      step: "03",
      title: "A Imersão ao Vivo",
      description: "No dia marcado, nós nos encontramos online. Com o seu diagnóstico em mãos, nós vamos desenhar o Sistema Operacional de Receita exato para o seu momento."
    },
    {
      step: "04",
      title: "A Instalação do Sistema",
      description: <>Você não precisa ser o <em className="italic">"Cara do T.I"</em>. Logo após a imersão, a nossa equipe vai te ajudar a plugar e ligar a IA do Causi no seu WhatsApp para barrar os curiosos <em className="italic">(usando seus 30 dias grátis)</em>.</>
    },
    {
      step: "05",
      title: "A Manutenção",
      description: "O sistema está rodando. Agora você entra para o grupo de WhatsApp exclusivo e participa dos nossos encontros mensais apenas para tirar dúvidas e aprender mais, assim você ajusta os parafusos corretos e visualiza o seu faturamento crescer."
    }
  ];

  return (
    <section id="outcome" ref={sectionRef} className="relative bg-white pt-[270px] pb-32 md:py-0">
      
      {/* Sticky Background Image - Occupying 50% of the section width on the left */}
      {/* Header Background Image - Simple for Mobile / Sticky for Desktop */}
      <div className="absolute top-0 left-0 w-full lg:h-full lg:w-1/2 z-[1] h-[400px] lg:h-full overflow-hidden pointer-events-none">
        <div className="relative lg:sticky lg:top-0 h-full w-full">
            <div 
              className="w-full h-full bg-cover bg-no-repeat opacity-70 lg:opacity-100"
              style={{ 
                backgroundImage: `url('${import.meta.env.BASE_URL}feliz-atendendo.webp?v=7')`,
                backgroundPosition: 'center -50px'
              }}
            />
            {/* Fades to blend with the white bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white lg:hidden"></div>
            <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-white/50 to-white"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full py-0 md:py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Empty spacer for the image side on desktop (6 cols = 50%) */}
          <div className="lg:col-span-6 hidden lg:block" />

          {/* Right Side: Content - Occupying 50% (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-8 md:gap-12">
            <div className="reveal-hidden flex flex-col items-center lg:items-start">
              <span className="inline-flex items-center justify-center gap-2.5 text-slate-600 uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs h-7 md:h-8 px-5 border border-slate-200 rounded-full mb-6 leading-none pt-[1px]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                O SEU MAPA DE EXECUÇÃO
              </span>
              <h2 className="type-h2 mb-4 leading-tight text-center lg:text-left text-slate-900">
                Como serão os seus <span className="text-brand-primary font-black">próximos passos</span> após destravar o seu acesso hoje:
              </h2>
            </div>

            {/* Vertical Timeline */}
            <div ref={timelineRef} className="relative flex flex-col gap-0">
              {/* Central Line (Base) */}
              <div className="absolute left-3 md:left-4 top-4 bottom-4 w-px bg-slate-200 -translate-x-1/2" />
              
              {/* Central Line (Progress) - Preenche com scroll */}
              <div 
                ref={progressLineRef}
                className="absolute left-3 md:left-4 top-4 w-[2px] bg-brand-primary -translate-x-1/2 shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-75 ease-out" 
                style={{ 
                  height: '0%', 
                  maxHeight: 'calc(100% - 32px)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
              />

              {steps.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-8 pb-10 last:pb-0 group reveal-hidden">
                  {/* Point */}
                  <div className="relative shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-primary shadow-[0_0_12px_rgba(139,92,246,0.5)]" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-black text-brand-primary tracking-widest uppercase">
                        Passo {item.step}
                      </span>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="type-body text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal-hidden mt-6 flex justify-center lg:justify-start">
              <Button 
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero garantir meu acesso agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
