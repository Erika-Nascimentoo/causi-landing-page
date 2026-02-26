import React from 'react';
import { SignUpHero } from './components/SignUpHero';
import { FooterObrigado } from '../obrigado/components/FooterObrigado';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white">
      <div className="flex-1">
        <SignUpHero />
      </div>
      <FooterObrigado />
    </main>
  );
};

export default App;
