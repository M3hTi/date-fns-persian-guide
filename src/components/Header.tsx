
import React from 'react';
import { Calendar, Book } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Calendar className="w-8 h-8 text-yellow-400" />
            <div>
              <h1 className="text-2xl font-bold">مستندات date-fns</h1>
              <p className="text-blue-200 text-sm">کتابخانه جاوا اسکریپت برای کار با تاریخ</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Book className="w-5 h-5" />
            <span className="text-sm">نسخه 3.0+</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
