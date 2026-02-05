import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const FaqFooter: React.FC = () => {
    const sectionRef = useReveal();
    const faqs = [
        {
            question: "A Causi está em conformidade com a OAB?",
            answer: "Sim, 100%. Nossas estratégias são baseadas em provimento de autoridade e conteúdo informativo, respeitando integralmente o Código de Ética e Disciplina da OAB."
        },
        {
            question: "Preciso ter uma equipe de marketing?",
            answer: "Não. Nós instalamos a estrutura e os processos. Você pode gerir internamente ou delegar seguindo nossos protocolos replicáveis."
        },
        {
            question: "Quanto tempo leva para ver resultados?",
            answer: "A estruturação da Vitrine de Autoridade acontece em poucos dias. O fluxo de clientes qualificados costuma estabilizar entre 30 a 60 dias após a implementação completa."
        },
        {
            question: "Isso funciona para qualquer área do Direito?",
            answer: "Funciona para áreas que lidam com problemas de alta urgência ou alto ticket, onde o cliente busca especialista (Ex: Civil, Família, Tributário, Previdenciário, Trabalhista, etc)."
        }
    ];

    return (
        <footer className="bg-bg-page border-t border-white/5 relative overflow-hidden">
            {/* Footer Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* FAQ Section */}
            <section ref={sectionRef} className="py-16 md:py-32 px-6 max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Perguntas</span> Frequentes
                    </h2>
                </div>

                <div className="space-y-4 reveal-hidden">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-brand-card border border-white/10 rounded-xl p-6 hover:border-brand-primary/30 transition-all duration-300">
                            <h3 className="type-h4 mb-3 text-text-primary">{faq.question}</h3>
                            <p className="type-body text-text-secondary">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Simple Footer Bottom */}
            <div className="border-t border-white/5 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                    {/* Brand Header - Same as Hero */}
                    <div className="flex items-center gap-2 select-none">
                        <span className="type-label text-white">SOLUÇÕES</span>
                        <img src="/logo.svg" alt="Logo Causi - Alta Performance Jurídica" className="h-10 md:h-12 w-auto" />
                    </div>

                    {/* Copyright */}
                    <p className="type-body text-sm text-text-secondary">© 2025 Causi. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};