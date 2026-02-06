import React from 'react';
import { Button } from './Button';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-bg-page">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row min-h-screen relative">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-start lg:justify-center px-6 md:px-12 lg:px-20 pt-0 md:pt-20 pb-10 md:pb-20 z-10 relative">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full">
            {/* Brand Header */}
            <div className="flex items-center gap-2 select-none">
              <span className="type-label text-white">SOLUÇÕES</span>
              <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo Causi - Consultoria em Alta Performance Jurídica" className="h-10 md:h-12 w-auto" />
            </div>

            <h1 className="type-display text-center lg:text-left">
              Saia da <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Advocacia Artesanal</span> e instale um <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Sistema de Receita Previsível</span> no seu escritório
            </h1>

            <p className="type-body-lg max-w-lg text-center lg:text-left">
              Transforme sua prática jurídica com inteligência de dados. Alcance crescimento escalável e liberdade operacional sem depender do acaso.
            </p>

            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <Button onClick={() => document.getElementById('proximos-passos')?.scrollIntoView({ behavior: 'smooth' })}>INICIAR DIAGNÓSTICO AGORA</Button>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full h-[55vh] lg:h-auto lg:w-[40%] flex-none overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-solo.webp')` }}
          >
            {/* Overlay gradient to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-page lg:bg-gradient-to-r lg:from-bg-page lg:via-transparent lg:to-bg-page"></div>
          </div>
        </div>
      </div>
    </section>
  );
};