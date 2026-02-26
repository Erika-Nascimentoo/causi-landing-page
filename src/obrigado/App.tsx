import React from 'react';
import { HeroObrigado } from './components/HeroObrigado';
import { FooterObrigado } from './components/FooterObrigado';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <div className="flex-1">
        <HeroObrigado />
      </div>
      <FooterObrigado />
    </main>
  );
};

export default App;
