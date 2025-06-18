
import React from 'react';
import { Calendar, Book, Star, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-8 shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl shadow-lg">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                مستندات جامع date-fns
              </h1>
              <p className="text-blue-200 text-lg font-medium">
                راهنمای کامل فارسی کتابخانه date-fns برای توسعه‌دهندگان
              </p>
              <div className="flex items-center space-x-4 rtl:space-x-reverse mt-3">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-blue-300">
                  <Star className="w-4 h-4" />
                  <span>بیش از 200 تابع</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-blue-300">
                  <Book className="w-4 h-4" />
                  <span>20+ دسته‌بندی</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <div className="text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-sm text-blue-200">نسخه date-fns</div>
                <div className="text-lg font-bold text-white">3.6+</div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg px-4 py-2 shadow-lg">
                <div className="text-sm text-green-100">وضعیت</div>
                <div className="text-lg font-bold text-white">به‌روز</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
