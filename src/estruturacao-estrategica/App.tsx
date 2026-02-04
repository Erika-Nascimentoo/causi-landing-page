import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ComparisonSection } from './components/ComparisonSection';
import { QualificationSection } from './components/QualificationSection';
import { FaqFooter } from './components/FaqFooter';
import { JourneySection } from './components/JourneySection';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <JourneySection />
      <ComparisonSection />
      <QualificationSection />
      <FaqFooter />
    </main>
  );
};

export default App;