import React, { useState } from 'react';
import './App.css';
import {
  Header,
  HeroSection,
  CompetitionPlatformSection,
  PlanningGuidesSection,
  InnovationCenterSection,
  NextPitchAssistantSection,
  Footer,
  HowItWorksPage,
  CompetitionsPage,
  PricingPage
} from './components';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <CompetitionPlatformSection />
            <PlanningGuidesSection />
            <InnovationCenterSection />
            <NextPitchAssistantSection />
          </>
        );
      case 'howitworks':
        return <HowItWorksPage />;
      case 'competitions':
        return <CompetitionsPage />;
      case 'pricing':
        return <PricingPage />;
      default:
        return (
          <>
            <HeroSection />
            <CompetitionPlatformSection />
            <PlanningGuidesSection />
            <InnovationCenterSection />
            <NextPitchAssistantSection />
          </>
        );
    }
  };

  return (
    <div className="App min-h-screen bg-white font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;