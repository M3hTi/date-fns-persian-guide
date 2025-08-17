
import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import IntroSection from '../components/sections/IntroSection';
import FormatSection from '../components/sections/FormatSection';
import ParseSection from '../components/sections/ParseSection';
import CalculateSection from '../components/sections/CalculateSection';
import CompareSection from '../components/sections/CompareSection';
import GetSection from '../components/sections/GetSection';
import SetSection from '../components/sections/SetSection';
import HelperSection from '../components/sections/HelperSection';
import TimezoneSection from '../components/sections/TimezoneSection';
import ConstantsSection from '../components/sections/ConstantsSection';
import ConversionHelpersSection from '../components/sections/ConversionHelpersSection';
import IntervalHelpersSection from '../components/sections/IntervalHelpersSection';
import TimestampHelpersSection from '../components/sections/TimestampHelpersSection';
import MillisecondHelpersSection from '../components/sections/MillisecondHelpersSection';
import SecondHelpersSection from '../components/sections/SecondHelpersSection';
import MinuteHelpersSection from '../components/sections/MinuteHelpersSection';
import HourHelpersSection from '../components/sections/HourHelpersSection';
import DayHelpersSection from '../components/sections/DayHelpersSection';
import WeekdayHelpersSection from '../components/sections/WeekdayHelpersSection';
import WeekHelpersSection from '../components/sections/WeekHelpersSection';
import ISOWeekHelpersSection from '../components/sections/ISOWeekHelpersSection';
import MonthHelpersSection from '../components/sections/MonthHelpersSection';
import QuarterHelpersSection from '../components/sections/QuarterHelpersSection';
import YearHelpersSection from '../components/sections/YearHelpersSection';
import ISOWeekYearHelpersSection from '../components/sections/ISOWeekYearHelpersSection';
import DecadeHelpersSection from '../components/sections/DecadeHelpersSection';
import GenericHelpersSection from '../components/sections/GenericHelpersSection';
import MethodExplanationsSection from '../components/sections/MethodExplanationsSection';
import GetMethodsSection from '../components/sections/GetMethodsSection';
import SetMethodsSection from '../components/sections/SetMethodsSection';
import ValidationSection from '../components/sections/ValidationSection';
import UtilitySection from '../components/sections/UtilitySection';
import DurationSection from '../components/sections/DurationSection';
import DifferenceSection from '../components/sections/DifferenceSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const renderSection = () => {
    switch (activeSection) {
      case 'intro':
        return <IntroSection />;
      case 'method-explanations':
        return <MethodExplanationsSection />;
      case 'get-methods':
        return <GetMethodsSection />;
      case 'set-methods':
        return <SetMethodsSection />;
      case 'format':
        return <FormatSection />;
      case 'parse':
        return <ParseSection />;
      case 'calculate':
        return <CalculateSection />;
      case 'compare':
        return <CompareSection />;
      case 'get':
        return <GetSection />;
      case 'set':
        return <SetSection />;
      case 'helper':
        return <HelperSection />;
      case 'timezone':
        return <TimezoneSection />;
      case 'constants':
        return <ConstantsSection />;
      case 'conversion':
        return <ConversionHelpersSection />;
      case 'interval':
        return <IntervalHelpersSection />;
      case 'timestamp':
        return <TimestampHelpersSection />;
      case 'millisecond':
        return <MillisecondHelpersSection />;
      case 'second':
        return <SecondHelpersSection />;
      case 'minute':
        return <MinuteHelpersSection />;
      case 'hour':
        return <HourHelpersSection />;
      case 'day':
        return <DayHelpersSection />;
      case 'weekday':
        return <WeekdayHelpersSection />;
      case 'week':
        return <WeekHelpersSection />;
      case 'isoweek':
        return <ISOWeekHelpersSection />;
      case 'month':
        return <MonthHelpersSection />;
      case 'quarter':
        return <QuarterHelpersSection />;
      case 'year':
        return <YearHelpersSection />;
      case 'isoweekyear':
        return <ISOWeekYearHelpersSection />;
      case 'decade':
        return <DecadeHelpersSection />;
      case 'generic':
        return <GenericHelpersSection />;
      case 'validation':
        return <ValidationSection />;
      case 'utility':
        return <UtilitySection />;
      case 'duration':
        return <DurationSection />;
      case 'difference':
        return <DifferenceSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" dir="rtl">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {renderSection()}
        </div>
      </main>

      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                مستندات جامع date-fns
              </h3>
              <p className="text-gray-300 text-lg">
                راهنمای کامل و به‌روز برای توسعه‌دهندگان ایرانی
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                📚 بیش از 200 تابع مستند شده
              </span>
              <span className="flex items-center gap-2">
                🌟 نسخه date-fns: 3.6+
              </span>
              <span className="flex items-center gap-2">
                🚀 آخرین بروزرسانی: 1403/03/27
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
