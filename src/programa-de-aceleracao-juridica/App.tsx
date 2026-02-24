import React from 'react';
import { Hero } from './components/Hero';
import { RoutineProblemSection } from './components/RoutineProblemSection';
import { ProblemSection } from './components/ProblemSection';
import { ClaritySection } from './components/ClaritySection';

import { ComparisonSection } from './components/ComparisonSection';
import { QualificationSection } from './components/QualificationSection';
import { FaqFooter } from './components/FaqFooter';


const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <RoutineProblemSection />
      <ProblemSection />
      <ClaritySection />
      <ComparisonSection />
      <QualificationSection />
      <FaqFooter />
    </main>
  );
};

export default App;