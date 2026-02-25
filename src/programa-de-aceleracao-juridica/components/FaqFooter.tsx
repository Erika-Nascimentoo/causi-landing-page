import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const FaqFooter: React.FC = () => {
    const sectionRef = useReveal();
    const faqs = [
        {
            question: "1. Isso é permitido pela OAB?",
            answer: "Sim. Nosso sistema foca em gestão, faturamento e profissionalização. Nós não usamos estratégias de \"venda agressiva\" ou mercantilização. O Sistema Operacional de Receita é a forma mais ética e segura de crescer hoje no Brasil."
        },
        {
            question: "2. Eu não entendo nada de tecnologia, vou conseguir usar?",
            answer: "Com certeza. O sistema foi desenhado para ser simples e direto. Além disso, você recebe o acesso à ferramenta pronta e o passo a passo na imersão com os especialistas do Causi."
        },
        {
            question: "3. Isso funciona para o meu nicho?",
            answer: "Sim. Toda advocacia precisa de Atração, Conversão e Perpetuidade. O sistema é a base de qualquer escritório, não importa a área do Direito."
        },
        {
            question: "4. Quanto tempo eu preciso dedicar para ver resultados?",
            answer: "O objetivo do sistema é justamente te devolver tempo. Logo na primeira semana, com a Auditoria e os 30 dias de plataforma, você já começa a organizar a casa e estancar as perdas."
        },
        {
            question: "5. E se eu não puder participar da Imersão ao vivo?",
            answer: "Não se preocupe. O seu ingresso dá direito à participação na próxima data disponível. Você sempre terá uma vaga garantida no próximo encontro com a equipe."
        },
        {
            question: "6. Como funciona o bônus de 30 dias do Plano Profissional?",
            answer: "Assim que você entrar no grupo, nossa equipe liberará o seu acesso total à plataforma para você já começar a usar o método na prática."
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow font-black">Perguntas</span> Frequentes
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