import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../programa-de-aceleracao-juridica/components/Button';
import { FooterObrigado } from '../obrigado/components/FooterObrigado';

const App: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userEmail = params.get('email');
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 relative overflow-hidden">
        {/* Blueprint Grid Overlay */}
        <div
            className="absolute inset-x-0 top-0 bottom-0 opacity-[0.06] pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
                maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }}
        />

        <div className="max-w-md mx-auto relative z-20 text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900">Conta Criada!</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Enviamos um e-mail de confirmação para <strong className="text-slate-900 font-bold">{email || 'seu e-mail'}</strong>. 
            Acesse sua caixa de entrada e clique no botão para confirmar a sua conta. Verifique também a caixa de spam.
          </p>
          <Button onClick={() => window.location.href = 'https://app.causi.com.br/login'} className="w-full">
            <span className="font-black text-white">Acessar Painel</span>
          </Button>
        </div>
      </div>
      <FooterObrigado />
    </main>
  );
};

export default App;
