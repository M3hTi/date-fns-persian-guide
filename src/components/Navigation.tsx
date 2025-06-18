
import React, { useState } from 'react';
import { 
  Clock, Calendar, Settings, Code, FileText, Calculator, RotateCcw, MapPin, List, AlertCircle,
  RefreshCw, Timer, Zap, Hourglass, Sun, Hash, CalendarDays, Target, Layers, Milestone,
  ChevronDown, Menu, X, BookOpen
} from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }: { 
  activeSection: string; 
  setActiveSection: (section: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      id: 'explanations',
      name: 'توضیح توابع',
      sections: [
        { id: 'method-explanations', name: 'توضیح کامل توابع' },
        { id: 'get-methods', name: 'توابع دریافت (Get)' },
        { id: 'set-methods', name: 'توابع تنظیم (Set)' },
      ]
    },
    {
      id: 'core',
      name: 'اصول پایه',
      sections: [
        { id: 'intro', name: 'مقدمه' },
        { id: 'format', name: 'قالب‌بندی' },
        { id: 'parse', name: 'تجزیه' },
        { id: 'calculate', name: 'محاسبات' },
        { id: 'compare', name: 'مقایسه' },
        { id: 'get', name: 'دریافت مقادیر' },
        { id: 'set', name: 'تنظیم مقادیر' },
        { id: 'helper', name: 'توابع کمکی' },
        { id: 'constants', name: 'ثوابت' },
      ]
    },
    {
      id: 'helpers',
      name: 'توابع تخصصی',
      sections: [
        { id: 'conversion', name: 'تبدیل واحدها' },
        { id: 'interval', name: 'بازه‌های زمانی' },
        { id: 'timestamp', name: 'Unix Timestamp' },
        { id: 'generic', name: 'توابع عمومی' },
      ]
    },
    {
      id: 'time-units',
      name: 'واحدهای زمانی',
      sections: [
        { id: 'millisecond', name: 'میلی‌ثانیه' },
        { id: 'second', name: 'ثانیه' },
        { id: 'minute', name: 'دقیقه' },
        { id: 'hour', name: 'ساعت' },
      ]
    },
    {
      id: 'calendar-units',
      name: 'واحدهای تقویمی',
      sections: [
        { id: 'day', name: 'روز' },
        { id: 'weekday', name: 'روزهای هفته' },
        { id: 'week', name: 'هفته' },
        { id: 'isoweek', name: 'هفته ISO' },
        { id: 'month', name: 'ماه' },
        { id: 'quarter', name: 'فصل' },
        { id: 'year', name: 'سال' },
        { id: 'isoweekyear', name: 'سال ISO' },
        { id: 'decade', name: 'دهه' },
      ]
    },
    {
      id: 'advanced',
      name: 'پیشرفته',
      sections: [
        { id: 'timezone', name: 'منطقه زمانی' },
      ]
    }
  ];

  const allSections = categories.flatMap(cat => cat.sections);

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-900">راهنمای date-fns</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="border-t border-gray-100 bg-white max-h-96 overflow-y-auto">
            <div className="p-4 space-y-1">
              {allSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-right px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h2 className="text-lg font-semibold text-gray-900">راهنمای date-fns</h2>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              {categories.map((category) => (
                <div key={category.id} className="relative group">
                  <button className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    <span>{category.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown */}
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      {category.sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full text-right px-3 py-2 rounded-md text-sm transition-colors ${
                            activeSection === section.id
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {section.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
