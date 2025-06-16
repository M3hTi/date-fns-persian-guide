
import React from 'react';
import { Clock, Calendar, Settings, Code, FileText } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }: { 
  activeSection: string; 
  setActiveSection: (section: string) => void;
}) => {
  const sections = [
    { id: 'intro', name: 'مقدمه', icon: FileText },
    { id: 'format', name: 'قالب‌بندی', icon: Calendar },
    { id: 'parse', name: 'تجزیه', icon: Code },
    { id: 'calculate', name: 'محاسبات', icon: Clock },
    { id: 'compare', name: 'مقایسه', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-1 rtl:space-x-reverse overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-3 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{section.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
