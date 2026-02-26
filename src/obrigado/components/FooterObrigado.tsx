import React from 'react';

export const FooterObrigado: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 px-6 relative w-full z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                {/* Brand Header */}
                <div className="flex items-center gap-2 select-none">
                    <span className="type-label text-slate-900">SOLUÇÕES</span>
                    <img src={`${import.meta.env.BASE_URL}logo-dark.svg`} alt="Logo Causi - Consultoria e Plataforma de Alta Performance Jurídica para Escritórios de Advocacia" className="h-[30px] md:h-[36px] w-auto" />
                </div>

                {/* Legal Information Block */}
                <div className="flex flex-col items-center gap-4 text-center max-w-4xl mx-auto">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-slate-900 text-sm md:text-base">
                            © 2025 Causi. Todos os direitos reservados.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            Rino3 Desenvolvimento Web Ltda — CNPJ: 15.309.763/0001-96 <br className="hidden md:block" />
                            Rua Quinze de Novembro, 2550 — Jardim dos Estados — Campo Grande, MS
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            Contato: <a href="mailto:contato@causi.com.br" className="hover:text-brand-primary transition-colors duration-300">contato@causi.com.br</a>
                        </p>
                    </div>
                    
                    {/* Legal Links */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                        <a href="https://www.causi.com.br/advogado/politica-privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors duration-300 border-b border-transparent hover:border-brand-primary pb-0.5">Política de Privacidade</a>
                        <span className="opacity-20 hidden md:inline">|</span>
                        <a href="https://www.causi.com.br/advogado/termos-uso" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors duration-300 border-b border-transparent hover:border-brand-primary pb-0.5">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
