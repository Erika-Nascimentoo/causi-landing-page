import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const FaqFooter: React.FC = () => {
    const sectionRef = useReveal();
    const faqs = [
        {
            question: "1. Isso é permitido pela OAB?",
            answer: "Sim, 100% alinhado ao provimento da OAB. O Sistema Operacional de Receita não tem nada a ver com panfletagem ou mercantilização da profissão. Ele é focado em gestão interna, organização comercial e atendimento de excelência. É a forma mais ética, segura e profissional de crescer na advocacia hoje."
        },
        {
            question: "2. Eu não entendo nada de tecnologia, vou conseguir usar?",
            answer: "Não se preocupe, você não precisa ser de T.I. O sistema foi desenhado para ser tão simples quanto usar o WhatsApp. Além disso, você não estará sozinho: na Imersão e nos encontros, nossa equipe vai te mostrar o botão exato para apertar. É copiar, colar e rodar."
        },
        {
            question: "3. Isso funciona para a minha área de atuação (nicho)?",
            answer: "Com certeza. Não importa se você faz Previdenciário, Família, Criminal ou Empresarial. Todo escritório precisa atrair contatos, filtrar curiosos e organizar o financeiro. O Sistema Operacional é o alicerce, e durante a Imersão nós te ajudamos a adaptar as regras para a realidade da sua área."
        },
        {
            question: "4. Quanto tempo eu preciso dedicar para ver resultados?",
            answer: "O objetivo do Programa de Aceleração Jurídica é devolver o seu tempo, e não roubar mais dele. Logo na primeira semana, ao ativar o seu Diagnóstico e plugar a IA no WhatsApp, você já vai sentir a diferença cortando os curiosos e organizando o fluxo. O alívio operacional é imediato."
        },
        {
            question: "5. E se eu não puder participar da Imersão ao vivo?",
            answer: "Fique tranquilo. O seu ingresso de R$ 47,90 é o seu passaporte para o programa. Se não puder estar presente na próxima data, sua vaga está automaticamente garantida para a Imersão seguinte. Você não perde absolutamente nada."
        },
        {
            question: "6. Como funciona o bônus de 30 dias da Plataforma Causi?",
            answer: "Nós fazemos com você. Após a Imersão, você vai agendar um Onboarding com a nossa equipe. Nesse encontro, nós ativamos os seus 30 dias gratuitos e configuramos o software Causi no seu WhatsApp juntos. É a garantia de que a tecnologia vai funcionar para você desde o primeiro minuto."
        }
    ];

    return (
        <footer className="bg-bg-page border-t border-white/5 relative overflow-hidden">
            {/* Footer Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* FAQ Section */}
            <section ref={sectionRef} className="pb-12 md:pb-24 pt-0 px-6 max-w-4xl mx-auto relative z-10">
                <header className="text-center mb-10 md:mb-20 px-4 w-full reveal-hidden">
                    <h2 className="type-h2 text-center text-text-primary mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow font-black">Perguntas</span> Frequentes
                    </h2>
                </header>

                <div className="flex flex-col gap-4 reveal-hidden">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-brand-card border border-white/10 rounded-xl p-6 hover:border-brand-primary/30 transition-all duration-300 flex flex-col gap-3">
                            <h3 className="text-lg md:text-xl font-bold leading-snug text-text-primary">{faq.question}</h3>
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
                        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo Causi - Consultoria e Plataforma de Alta Performance Jurídica para Escritórios de Advocacia" className="h-10 md:h-12 w-auto" />
                    </div>

                    {/* Legal Information Block */}
                    <div className="flex flex-col items-center gap-4 text-center max-w-4xl mx-auto">
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-white text-sm md:text-base">
                                © 2025 Causi. Todos os direitos reservados.
                            </p>
                            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                                Rino3 Desenvolvimento Web Ltda — CNPJ: 15.309.763/0001-96 <br className="hidden md:block" />
                                Rua Quinze de Novembro, 2550 — Jardim dos Estados — Campo Grande, MS
                            </p>
                            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                                Contato: <a href="mailto:contato@causi.com.br" className="hover:text-brand-primary transition-colors duration-300">contato@causi.com.br</a>
                            </p>
                        </div>
                        
                        {/* Legal Links */}
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-text-secondary/60">
                            <a href="https://www.causi.com.br/advogado/politica-privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors duration-300 border-b border-transparent hover:border-brand-primary pb-0.5">Política de Privacidade</a>
                            <span className="opacity-20 hidden md:inline">|</span>
                            <a href="https://www.causi.com.br/advogado/termos-uso" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors duration-300 border-b border-transparent hover:border-brand-primary pb-0.5">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};