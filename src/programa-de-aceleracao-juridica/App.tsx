import React from 'react';
import { Hero } from './components/Hero';
import { RoutineProblemSection } from './components/RoutineProblemSection';
import { ProblemSection } from './components/ProblemSection';
import { ClaritySectionCopy } from './components/ClaritySectionCopy';
import { ImplementationArsenalSection } from './components/ImplementationArsenalSection';
import { SuccessRoutineSection } from './components/SuccessRoutineSection';
import { SorSystemSection } from './components/SorSystemSection';
import { FaqFooter } from './components/FaqFooter';


const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <RoutineProblemSection />
      <ProblemSection />
      <ClaritySectionCopy />
      <ImplementationArsenalSection />
      <SuccessRoutineSection />
      <SorSystemSection />
      <FaqFooter />
    </main>
  );
};

export default App;