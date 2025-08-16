
import React from 'react';
import { Calendar, Book, Star, Github, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white border-b border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="bg-blue-500 p-3 rounded-xl">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <button 
                onClick={() => navigate('/')}
                className="group"
              >
                <h1 className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors cursor-pointer">
                  مستندات جامع date-fns
                </h1>
              </button>
              <p className="text-gray-600 text-base">
                راهنمای کامل فارسی کتابخانه date-fns برای توسعه‌دهندگان
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <a 
              href="https://github.com/M3hTi/date-fns-persian-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-right"
            >
              <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 hover:bg-gray-100 transition-colors group">
                <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse mb-1">
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                  <Github className="w-4 h-4 text-gray-500" />
                </div>
                <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">GitHub مخزن</div>
              </div>
            </a>
            <div className="text-right">
              <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">نسخه date-fns</div>
                <div className="text-sm font-semibold text-gray-900">3.6+</div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-green-50 rounded-lg px-4 py-3 border border-green-200">
                <div className="text-xs text-green-600 mb-1">وضعیت</div>
                <div className="text-sm font-semibold text-green-700">به‌روز</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
