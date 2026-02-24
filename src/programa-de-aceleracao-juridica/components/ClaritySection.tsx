import React from 'react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

const ClarityStepCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => {
  const [isActive, setIsActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger active state when card is in the middle of the viewport
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-brand-card border rounded-2xl p-6 md:p-8 transition-all duration-500 inner-glow flex flex-col sm:flex-row gap-6 items-start reveal-hidden hover:-translate-y-1 ${
        isActive 
          ? 'border-brand-primary/50 -translate-y-1' 
          : 'border-white/10'
      } hover:border-brand-primary/50`}
    >
      {/* Hover/Active Glow Effect - Neon Splash (similar to ProblemCard) */}
      <div className={`absolute -inset-[2px] bg-brand-primary/20 transition-opacity duration-500 -z-10 blur-xl rounded-2xl ${
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}></div>

      {/* Internal Gradient (similar to ProblemCard) */}
      <div className={`absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent transition-opacity duration-300 rounded-2xl pointer-events-none ${
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}></div>

      <div className={`text-4xl font-black transition-all duration-500 shrink-0 relative z-10 ${
        isActive ? 'text-brand-primary opacity-100 scale-110' : 'text-brand-primary opacity-20 group-hover:opacity-100 group-hover:scale-110'
      }`}>
        {number}
      </div>
      
      <div className="flex flex-col gap-2 relative z-10">
        <h3 className={`type-h3 transition-colors duration-500 text-text-primary`}>
          {title}
        </h3>
        <p className={`type-body transition-colors duration-500 ${
          isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
        }`}>
          {description}
        </p>
      </div>

      {/* Subtle border glow shadow */}
      <div className={`absolute inset-0 rounded-2xl shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-opacity duration-500 pointer-events-none ${
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`} />
    </div>
  );
};

export const ClaritySection: React.FC = () => {
  const sectionRef = useReveal();

  const steps = [
    {
      number: "01",
      title: "Falha de Atração",
      description: "Pare de ser invisível e crie um canal próprio de interessados reais."
    },
    {
      number: "02",
      title: "Falha de Conversão",
      description: "Pare de ser escravo do celular e use um filtro que prepara o cliente para pagar o valor justo."
    },
    {
      number: "03",
      title: "Falha de Perpetuidade",
      description: "Pare de enxugar gelo e transforme cada contrato em faturamento recorrente."
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-24 px-6 bg-bg-page relative">
      {/* Background container with overflow-hidden for decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blueprint Grid Overlay - Consistent with other sections */}
        <div
          className="absolute inset-x-0 top-0 bottom-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cards Container - Centered and max-width restricted */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col gap-6 mb-8">
            {steps.map((item, idx) => (
              <ClarityStepCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
