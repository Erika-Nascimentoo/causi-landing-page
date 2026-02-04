import React from 'react';
import { Eye, Ghost, Lock } from 'lucide-react';
import { FeatureCardProps } from '../types';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

const ProblemCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group relative bg-brand-card border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col inner-glow reveal-hidden overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

    {/* Hover Glow Effect - Neon Splash */}
    <div className="absolute -inset-[2px] bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl rounded-2xl"></div>

    <div className="relative z-10 flex flex-col gap-6 flex-grow">
      {Icon && (
        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-all shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)] group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)] shrink-0">
          <Icon className="w-7 h-7 text-red-500" />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <h3 className="type-h3 leading-tight text-text-primary tracking-tight">{title}</h3>
        <p className="type-body">{description}</p>
      </div>
    </div>
  </div>
);

export const ProblemSection: React.FC = () => {
  const sectionRef = useReveal();
  const problems = [
    {
      icon: Eye,
      title: "Barreira da Percepção",
      description: "Sua competência é invisível para o mercado. Sem uma vitrine de autoridade, você continuará a perder contratos de alto ticket para colegas menos preparados que comunicam melhor."
    },
    {
      icon: Ghost,
      title: "Autoridade Invisível",
      description: "Frustração de ter anos de estrada e ser superado por quem domina o digital. Eles não são melhores advogados, apenas demonstram autoridade antes de você abrir a boca."
    },
    {
      icon: Lock,
      title: "Prisão Operacional",
      description: "Se você parar hoje, o seu lucro para? Se sim, você é escravo da própria estrutura. Você tornou-se o motor de tudo e perdeu a liberdade que a advocacia prometeu."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-bg-page relative overflow-hidden">
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

      {/* Background Texture/Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16 px-4 max-w-[960px] mx-auto reveal-hidden">
          <h2 className="type-h2 text-center text-text-primary mb-6">
            Você atingiu o teto da <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Advocacia</span>
          </h2>
          <p className="type-body-lg text-center max-w-3xl mx-auto px-4">
            O seu esforço tem um limite físico. Se você sente que seu faturamento estagnou mesmo trabalhando mais horas, o problema não é sua competência técnica, mas o modelo de trabalho que você ainda utiliza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, idx) => (
            <ProblemCard key={idx} {...prob} />
          ))}
        </div>

        <div className="mt-24 text-center flex flex-col items-center gap-8 px-4 reveal-hidden">
          <p className="type-cta max-w-3xl">
            O problema não é sua competência técnica, é o seu modelo de entrega. Vamos trocar o esforço físico por <span className="text-brand-primary">protocolos replicáveis</span>.
          </p>
          <Button>INICIAR DIAGNÓSTICO AGORA</Button>
        </div>
      </div>
    </section>
  );
};