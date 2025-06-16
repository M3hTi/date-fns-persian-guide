
import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import IntroSection from '../components/sections/IntroSection';
import FormatSection from '../components/sections/FormatSection';
import ParseSection from '../components/sections/ParseSection';
import CalculateSection from '../components/sections/CalculateSection';
import CompareSection from '../components/sections/CompareSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const renderSection = () => {
    switch (activeSection) {
      case 'intro':
        return <IntroSection />;
      case 'format':
        return <FormatSection />;
      case 'parse':
        return <ParseSection />;
      case 'calculate':
        return <CalculateSection />;
      case 'compare':
        return <CompareSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {renderSection()}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-4">
            مستندات فارسی date-fns - ساخته شده با ❤️ برای توسعه‌دهندگان ایرانی
          </p>
          <div className="text-sm text-gray-400">
            <span>نسخه date-fns: 3.0+ | </span>
            <span>آخرین بروزرسانی: 1403/03/27</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
