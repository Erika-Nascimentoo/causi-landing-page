import React from 'react';
import { Shield, Search, FileText, BarChart3 } from 'lucide-react';
import { Button } from './Button';
import { ShineBorder } from './ui/ShineBorder';
import { useReveal } from '../hooks/useReveal';

export const SolutionSection: React.FC = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="py-16 md:py-32 px-6 bg-bg-page relative overflow-hidden">
      {/* Purple Smoke Effect - Full Section Coverage */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-brand-primary/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-brand-glow/10 blur-[140px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-brand-primary/12 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-brand-glow/8 blur-[90px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Dark Gradient Fades for Smooth Transitions */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-bg-page to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-page to-transparent pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
          <h2 className="type-h2 text-center text-text-primary mb-6">
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Estruturação Estratégica</span> que instalamos na sua operação
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Wide - Vitrine de Autoridade */}
          <ShineBorder borderRadius={24} borderWidth={2} duration={8} className="md:col-span-2 bg-brand-card/80 border border-white/5 reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.3)]">
            <div className="relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-2 w-full">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="p-8 relative z-10 flex flex-col justify-center items-start text-left gap-6 order-2 md:order-1">
                {/* Text Side Gradient Overlay - Desktop Only */}
                <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-bg-page/80 to-transparent pointer-events-none -z-10 hidden md:block" />
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center border border-brand-primary/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] shrink-0">
                    <Shield className="w-7 h-7 text-brand-glow" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="type-h3 leading-tight tracking-tight text-text-primary">Vitrine de Autoridade</h3>
                    <p className="type-body">Ambiente digital desenhado para gerar confiança imediata. O cliente decide contratar antes do primeiro contacto, eliminando as barreiras de preço.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto order-1 md:order-2 hidden md:block">
                <img src="compress-cell.webp" alt="Demonstração da Vitrine de Autoridade digital para advogados" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-80 group-hover:opacity-100" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-transparent to-transparent hidden md:block" />
              </div>
            </div>
          </ShineBorder>

          {/* Card 2: Regular - Radar de Captação */}
          <ShineBorder borderRadius={24} borderWidth={2} duration={8} className="bg-brand-card/80 border border-white/5 reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.3)]">
            <div className="p-8 relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 w-full h-full">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="relative z-10 flex flex-col h-full justify-center items-start gap-6 text-left">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center border border-brand-primary/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] shrink-0">
                  <Search className="w-7 h-7 text-brand-glow" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="type-h3 leading-tight tracking-tight text-text-primary">Radar de Captação</h3>
                  <p className="type-body">Mecanismo que atrai quem tem problemas urgentes agora. Saia da instabilidade das indicações para um fluxo diário de clientes qualificados.</p>
                </div>
              </div>
            </div>
          </ShineBorder>

          {/* Card 3: Regular - Protocolo de Conversão */}
          <ShineBorder borderRadius={24} borderWidth={2} duration={8} className="bg-brand-card/80 border border-white/5 reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.3)]">
            <div className="p-8 relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 w-full h-full">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="relative z-10 flex flex-col h-full justify-center items-start gap-6 text-left">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center border border-brand-primary/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] shrink-0">
                  <FileText className="w-7 h-7 text-brand-glow" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="type-h3 leading-tight tracking-tight text-text-primary">Protocolo de Conversão</h3>
                  <p className="type-body">Scripts e treinos para fechar contratos na primeira consulta. Elimine o "vou pensar" e pare de perder tempo com quem não vai contratar.</p>
                </div>
              </div>
            </div>
          </ShineBorder>

          {/* Card 4: Wide - Painel de Controle */}
          <ShineBorder borderRadius={24} borderWidth={2} duration={8} className="md:col-span-2 bg-brand-card/80 border border-white/5 reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.3)]">
            <div className="relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-2 w-full">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="p-8 relative z-10 flex flex-col justify-center items-start text-left gap-6 order-2 md:order-1">
                {/* Text Side Gradient Overlay - Desktop Only */}
                <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-bg-page/80 to-transparent pointer-events-none -z-10 hidden md:block" />
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center border border-brand-primary/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] shrink-0">
                    <BarChart3 className="w-7 h-7 text-brand-glow" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="type-h3 leading-tight tracking-tight text-text-primary">Painel de Indicadores</h3>
                    <p className="type-body">Clareza total sobre lucro e custo de aquisição. Substitua o "feeling" e os achismos por uma gestão profissional baseada em dados reais.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto order-1 md:order-2 hidden md:block">
                <img src="compress-info.webp" alt="Interface do Painel de Indicadores e métricas jurídicas" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-80 group-hover:opacity-100" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-transparent to-transparent hidden md:block" />
              </div>
            </div>
          </ShineBorder>
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