import React, { useState } from 'react';
import { Button } from '../../programa-de-aceleracao-juridica/components/Button';
import { Mail, Lock, CheckCircle2, User, Building2, Loader2, AlertCircle } from 'lucide-react';

export const SignUpHero: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    account_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validação básica
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://www.causi.com.br/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          user_name: formData.user_name,
          account_name: formData.account_name
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ocorreu um erro ao criar a conta.');
      }

      setSuccess(true);
      // Redirecionar após sucesso se necessário
      // window.location.href = 'https://app.causi.com.br';
    } catch (err: any) {
      setError(err.message || 'Erro na conexão com o servidor. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="relative w-full bg-white overflow-hidden min-h-screen py-16 md:py-12 flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto px-6 relative z-20 text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-black text-slate-900">Conta Criada!</h2>
          <p className="text-slate-600">
            Enviamos um e-mail de confirmação para <strong className="text-slate-900 font-bold">{formData.email}</strong>. 
            Acesse sua caixa de entrada e clique no botão para confirmar a sua conta. Verifique também a caixa de spam.
          </p>
          <Button onClick={() => window.location.href = 'https://app.causi.com.br/login'} className="w-full">
            <span className="font-black text-white">Acessar Painel</span>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-screen py-16 md:py-12 flex flex-col items-center justify-center">
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
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full mb-8 md:mb-12 text-center">
          {/* Logo / Label */}
          <div className="flex flex-col items-center gap-6 mb-10 reveal-hidden">
             <div className="flex items-center gap-2 select-none">
               <div 
                  className="h-10 md:h-12 w-32 bg-brand-deep" 
                  style={{ 
                    maskImage: `url('${import.meta.env.BASE_URL}logo.svg')`,
                    WebkitMaskImage: `url('${import.meta.env.BASE_URL}logo.svg')`,
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'left center',
                    WebkitMaskPosition: 'left center',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain'
                  }} 
                />
            </div>
          </div>

          <h1 className="text-[2rem] md:text-[3rem] font-sans font-black leading-[1.2] mb-4">
             <span className="text-slate-900">Crie sua conta na</span><br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-primary box-decoration-clone">
               Plataforma Causi
             </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto mb-12">
            Preencha os campos abaixo para configurar seu acesso e começar a transformar sua advocacia hoje mesmo.
          </p>

          {/* Form Container */}
          <div className="w-full max-w-lg mx-auto bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              
              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium animate-in fade-in slide-in-from-top-1 duration-300">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Seu Nome</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Nome completo"
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-900"
                      required
                      value={formData.user_name}
                      onChange={(e) => setFormData({...formData, user_name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Escritório</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Nome do escritório"
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-900"
                      required
                      value={formData.account_name}
                      onChange={(e) => setFormData({...formData, account_name: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-1">E-mail Profissional</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="seu@email.com.br"
                    className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-900"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-900"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Confirmar Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-900"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 text-xl shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Criando conta...</span>
                    </div>
                  ) : (
                    <span className="font-black text-white">Criar minha conta agora</span>
                  )}
                </Button>
              </div>

              <div className="flex items-center gap-2 justify-center mt-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs text-slate-500 font-medium">Conexão Segura e Criptografada</span>
              </div>
            </form>
          </div>
      </div>
    </section>
  );
};
