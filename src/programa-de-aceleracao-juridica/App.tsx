import React from 'react';
import { Hero } from './components/Hero';
import { RoutineProblemSection } from './components/RoutineProblemSection';
import { ProblemSection } from './components/ProblemSection';
import { ClaritySectionCopy } from './components/ClaritySectionCopy';

import { ComparisonSection } from './components/ComparisonSection';
import { ImplementationArsenalSection } from './components/ImplementationArsenalSection';
import { SorSystemSection } from './components/SorSystemSection';
import { FaqFooter } from './components/FaqFooter';


const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <RoutineProblemSection />
      <ProblemSection />
      <ClaritySectionCopy />
      <ComparisonSection />
      <ImplementationArsenalSection />
      <SorSystemSection />
      <FaqFooter />
    </main>
  );
};

export default App;