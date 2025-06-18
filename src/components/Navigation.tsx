
import React, { useState } from 'react';
import { 
  Clock, Calendar, Settings, Code, FileText, Calculator, RotateCcw, MapPin, List, AlertCircle,
  RefreshCw, Timer, Zap, Hourglass, Sun, Hash, CalendarDays, Target, Layers, Milestone,
  ChevronDown, ChevronRight
} from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }: { 
  activeSection: string; 
  setActiveSection: (section: string) => void;
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['core']);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const categories = [
    {
      id: 'core',
      name: 'اصول پایه',
      icon: FileText,
      sections: [
        { id: 'intro', name: 'مقدمه', icon: FileText },
        { id: 'format', name: 'قالب‌بندی', icon: Calendar },
        { id: 'parse', name: 'تجزیه', icon: Code },
        { id: 'calculate', name: 'محاسبات', icon: Calculator },
        { id: 'compare', name: 'مقایسه', icon: Settings },
        { id: 'get', name: 'دریافت مقادیر', icon: List },
        { id: 'set', name: 'تنظیم مقادیر', icon: RotateCcw },
        { id: 'helper', name: 'توابع کمکی عمومی', icon: AlertCircle },
        { id: 'constants', name: 'ثوابت', icon: Hash },
      ]
    },
    {
      id: 'helpers',
      name: 'توابع کمکی تخصصی',
      icon: Layers,
      sections: [
        { id: 'conversion', name: 'تبدیل واحدها', icon: RefreshCw },
        { id: 'interval', name: 'بازه‌های زمانی', icon: Target },
        { id: 'timestamp', name: 'Unix Timestamp', icon: Hash },
        { id: 'generic', name: 'توابع عمومی', icon: Layers },
      ]
    },
    {
      id: 'time-units',
      name: 'واحدهای زمانی',
      icon: Clock,
      sections: [
        { id: 'millisecond', name: 'میلی‌ثانیه', icon: Zap },
        { id: 'second', name: 'ثانیه', icon: Timer },
        { id: 'minute', name: 'دقیقه', icon: Clock },
        { id: 'hour', name: 'ساعت', icon: Hourglass },
      ]
    },
    {
      id: 'calendar-units',
      name: 'واحدهای تقویمی',
      icon: Calendar,
      sections: [
        { id: 'day', name: 'روز', icon: Sun },
        { id: 'weekday', name: 'روزهای هفته', icon: CalendarDays },
        { id: 'week', name: 'هفته', icon: Calendar },
        { id: 'isoweek', name: 'هفته ISO', icon: Calendar },
        { id: 'month', name: 'ماه', icon: Calendar },
        { id: 'quarter', name: 'فصل', icon: Target },
        { id: 'year', name: 'سال', icon: Milestone },
        { id: 'isoweekyear', name: 'سال ISO', icon: Milestone },
        { id: 'decade', name: 'دهه', icon: Milestone },
      ]
    },
    {
      id: 'advanced',
      name: 'پیشرفته',
      icon: MapPin,
      sections: [
        { id: 'timezone', name: 'منطقه زمانی', icon: MapPin },
      ]
    }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-20 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            {/* Mobile dropdown for small screens */}
            <div className="lg:hidden py-4">
              <select 
                value={activeSection} 
                onChange={(e) => setActiveSection(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-sm"
              >
                {categories.map(category => (
                  <optgroup key={category.id} label={category.name}>
                    {category.sections.map(section => (
                      <option key={section.id} value={section.id}>
                        {section.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:block">
              {categories.map(category => (
                <div key={category.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </div>
                    {expandedCategories.includes(category.id) ? 
                      <ChevronDown className="w-4 h-4" /> : 
                      <ChevronRight className="w-4 h-4" />
                    }
                  </button>
                  
                  {expandedCategories.includes(category.id) && (
                    <div className="bg-gray-50 border-t border-gray-100">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 p-2">
                        {category.sections.map((section) => {
                          const Icon = section.icon;
                          return (
                            <button
                              key={section.id}
                              onClick={() => setActiveSection(section.id)}
                              className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                                activeSection === section.id
                                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md transform scale-105'
                                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                              }`}
                            >
                              <Icon className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{section.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
