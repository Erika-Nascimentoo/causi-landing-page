import React from 'react';
import { Shield, Search, FileText, BarChart3 } from 'lucide-react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

export const SolutionSection: React.FC = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="py-12 md:py-24 px-6 bg-bg-page relative overflow-hidden">
      {/* Purple Smoke Effect - Full Section Coverage */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-brand-primary/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-brand-glow/10 blur-[140px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-brand-primary/12 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-brand-glow/8 blur-[90px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Dark Gradient Fades for Smooth Transitions */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-bg-page to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-page to-transparent pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
          <h2 className="type-h2 text-center text-text-primary mb-6">
            Os ativos da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Máquina de Fechar Contratos</span>
          </h2>
          <p className="type-body-lg text-center max-w-3xl mx-auto px-4 text-text-secondary">
            Nós não apenas prestamos um serviço, nós instalamos ferramentas e processos proprietários que passam a pertencer ao seu patrimônio digital.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Wide - Vitrine de Autoridade */}
          <div className="md:col-span-2 bg-gradient-to-br from-brand-primary/30 to-brand-card border border-brand-primary/20 shadow-[inset_0_0_60px_rgba(139,92,246,0.2)] rounded-3xl relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-2 inner-glow reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.5)]">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />
            <div className="p-8 relative z-10 flex flex-col justify-center items-start text-left gap-6 order-2 md:order-1">
              <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-bg-page/80 to-transparent pointer-events-none -z-10 hidden md:block" />
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center border border-brand-primary/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] shrink-0">
                  <Shield className="w-7 h-7 text-brand-glow" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="type-h3 leading-tight tracking-tight text-text-primary">Vitrine de Autoridade</h3>
                  <p className="type-body text-text-secondary">Seu ambiente digital desenvolvido para converter clientes de alto ticket. Não é apenas um site, é uma ferramenta de vendas configurada para gerar credibilidade instantânea.</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto order-1 md:order-2 hidden md:block">
              <img src={`${import.meta.env.BASE_URL}compress-cell.webp`} alt="Vitrine de Autoridade Causi" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-transparent to-transparent hidden md:block" />
            </div>
          </div>

          {/* Card 2: Regular - Radares de Captação */}
          <div className="bg-gradient-to-br from-brand-primary/30 to-brand-card border border-brand-primary/20 shadow-[inset_0_0_60px_rgba(139,92,246,0.2)] p-8 rounded-2xl relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 inner-glow reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.5)]">
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
                <h3 className="type-h3 leading-tight tracking-tight text-text-primary">Radares de Captação</h3>
                <p className="type-body text-text-secondary">Instalamos campanhas de tráfego direto e ferramentas que filtram curiosos e trazem apenas casos lucrativos para o seu comercial de forma ativa.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Regular - Manual de Fechamento */}
          <div className="bg-gradient-to-br from-brand-primary/30 to-brand-card border border-brand-primary/20 shadow-[inset_0_0_60px_rgba(139,92,246,0.2)] p-8 rounded-2xl relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 inner-glow reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.5)]">
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
                <h3 className="type-h3 leading-tight tracking-tight text-text-primary">Manual de Fechamento</h3>
                <p className="type-body text-text-secondary">Scripts e protocolos de atendimento que garantem que nenhuma oportunidade morra por falta de processo ou abordagem comercial correta.</p>
              </div>
            </div>
          </div>

          {/* Card 4: Wide - Dashboard de Inteligência */}
          <div className="md:col-span-2 bg-gradient-to-br from-brand-primary/30 to-brand-card border border-brand-primary/20 shadow-[inset_0_0_60px_rgba(139,92,246,0.2)] rounded-3xl relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-2 inner-glow reveal-hidden shadow-[0_30px_80px_-15px_rgba(139,92,246,0.5)]">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />
            <div className="p-8 relative z-10 flex flex-col justify-center items-start text-left gap-6 order-2 md:order-1">
              <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-bg-page/80 to-transparent pointer-events-none -z-10 hidden md:block" />
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center border border-brand-primary/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] shrink-0">
                  <BarChart3 className="w-7 h-7 text-brand-glow" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="type-h3 leading-tight tracking-tight text-text-primary">Dashboard de Inteligência</h3>
                  <p className="type-body text-text-secondary">Clareza total sobre ROI, custo por lead e faturamento previsto. Um painel customizado para você gerir seu crescimento baseado em dados reais, não em achismos.</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto order-1 md:order-2 hidden md:block" >
              <img src={`${import.meta.env.BASE_URL}compress-info.webp`} alt="Dashboard de Vendas Causi" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-transparent to-transparent hidden md:block" />
            </div>
          </div>
        </div>

        <footer className="mt-20 text-center flex flex-col items-center gap-8 px-4 reveal-hidden">
          <p className="type-cta max-w-3xl">
            Tudo o que você precisa para <span className="text-brand-primary">escalar sua advocacia</span> com profissionalismo.
          </p>
          <Button onClick={() => document.getElementById('proximos-passos')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="font-normal text-white/90">QUERO CRIAR </span>
            <span className="font-black">MINHA MÁQUINA</span>
          </Button>
        </footer>
      </div>
    </section>
  );
};