
import React from 'react';
import CodeExample from '../CodeExample';

const ISOWeekHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-xl p-8 border border-indigo-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع هفته ISO</h2>
        <p className="text-lg text-gray-700 leading-relaxed">توابع مربوط به هفته‌های ISO استاندارد.</p>
      </div>

      <CodeExample
        title="هفته‌های ISO"
        description="کار با استاندارد ISO:"
        code={`import { getISOWeek, startOfISOWeek, endOfISOWeek, format } from 'date-fns';

const date = new Date(2024, 2, 15);

console.log('تاریخ:', format(date, 'yyyy/MM/dd'));
console.log('شماره هفته ISO:', getISOWeek(date));
console.log('شروع هفته ISO:', format(startOfISOWeek(date), 'yyyy/MM/dd'));
console.log('پایان هفته ISO:', format(endOfISOWeek(date), 'yyyy/MM/dd'));`}
        result="تاریخ: 2024/03/15"
      />

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">فهرست توابع هفته ISO</h3>
        <div className="text-sm text-indigo-700">
          getISOWeek، setISOWeek، startOfISOWeek، endOfISOWeek، 
          lastDayOfISOWeek، differenceInCalendarISOWeeks، isSameISOWeek، isThisISOWeek
        </div>
      </div>
    </div>
  );
};

export default ISOWeekHelpersSection;
