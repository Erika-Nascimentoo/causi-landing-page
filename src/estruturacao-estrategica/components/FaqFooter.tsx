import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const FaqFooter: React.FC = () => {
    const sectionRef = useReveal();
    const faqs = [
        {
            question: "O Causi está em conformidade com a OAB?",
            answer: "Sim, 100%. Nossas estratégias são baseadas em provimento de autoridade e conteúdo informativo, respeitando integralmente o Código de Ética e Disciplina da OAB."
        },
        {
            question: "Preciso ter uma equipe de marketing?",
            answer: "Não. Nós instalamos a estrutura e os processos. Você pode gerir internamente ou delegar seguindo nossos protocolos replicáveis."
        },
        {
            question: "Vou precisar gravar vídeos ou aparecer todo dia?",
            answer: "Não. A estrutura foca em ativos que trabalham sozinhos. Se você quiser aparecer, potencializa o resultado, mas a máquina é desenhada para converter através de autoridade e processos comerciais."
        },
        {
            question: "Já contratei agências e não tive retorno. Por que seria diferente?",
            answer: "Agências focam apenas em tráfego (cliques). Nós focamos em Estruturação. Além de atrair o lead, preparamos seu Google, sua Landing Page e seus Scripts de Vendas para garantir o fechamento do contrato."
        },
        {
            question: "Vou precisar contratar algum software caro?",
            answer: "Não. Utilizamos as ferramentas que você já tem ou opções gratuitas e acessíveis. O foco é na inteligência do processo jurídico-comercial e não em pendurar mais uma mensalidade de software."
        },
        {
            question: "Quanto tempo leva para ver resultados?",
            answer: "A implementação acontece em poucos dias. O fluxo de clientes qualificados costuma estabilizar entre 30 a 60 dias após a instalação completa da estrutura."
        },
        {
            question: "Isso funciona para qualquer área do Direito?",
            answer: "Funciona para áreas que lidam com problemas de alta urgência ou alto ticket, onde o cliente busca ativamente por um especialista (Ex: Civil, Família, Tributário, Previdenciário, Trabalhista, etc)."
        }
    ];

    return (
        <footer className="bg-bg-page border-t border-white/5 relative overflow-hidden">
            {/* Footer Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* FAQ Section */}
            <section ref={sectionRef} className="py-12 md:py-24 px-6 max-w-4xl mx-auto relative z-10">
                <header className="text-center mb-20 px-4 max-w-[960px] mx-auto reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">Perguntas</span> Frequentes
                    </h2>
                </header>

                <div className="flex flex-col gap-4 reveal-hidden">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-brand-card border border-white/10 rounded-xl p-6 hover:border-brand-primary/30 transition-all duration-300 flex flex-col gap-3">
                            <h3 className="type-h4 text-text-primary">{faq.question}</h3>
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
                        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo Causi - Alta Performance Jurídica" className="h-10 md:h-12 w-auto" />
                    </div>

                    {/* Copyright */}
                    <p className="type-body text-sm text-text-secondary">© 2025 Causi. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};