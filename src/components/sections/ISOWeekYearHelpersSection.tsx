
import React from 'react';
import CodeExample from '../CodeExample';

const ISOWeekYearHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-50 to-teal-100 rounded-xl p-8 border border-cyan-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع سال ISO</h2>
        <p className="text-lg text-gray-700 leading-relaxed">توابع مربوط به سال‌های ISO Week-Numbering.</p>
      </div>

      <CodeExample
        title="سال‌های ISO"
        description="کار با استاندارد ISO:"
        code={`import { getISOWeekYear, getISOWeeksInYear, startOfISOWeekYear, endOfISOWeekYear, format } from 'date-fns';

const date = new Date(2024, 2, 15);

console.log('تاریخ:', format(date, 'yyyy/MM/dd'));
console.log('سال ISO:', getISOWeekYear(date));
console.log('تعداد هفته‌های ISO:', getISOWeeksInYear(date));
console.log('شروع سال ISO:', format(startOfISOWeekYear(date), 'yyyy/MM/dd'));
console.log('پایان سال ISO:', format(endOfISOWeekYear(date), 'yyyy/MM/dd'));`}
        result="تاریخ: 2024/03/15"
      />

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-cyan-800 mb-3">فهرست توابع سال ISO</h3>
        <div className="text-sm text-cyan-700">
          addISOWeekYears، subISOWeekYears، differenceInISOWeekYears، 
          getISOWeekYear، setISOWeekYear، getISOWeeksInYear، 
          startOfISOWeekYear، endOfISOWeekYear، lastDayOfISOWeekYear، isSameISOWeekYear
        </div>
      </div>
    </div>
  );
};

export default ISOWeekYearHelpersSection;
