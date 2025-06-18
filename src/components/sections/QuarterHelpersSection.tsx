
import React from 'react';
import CodeExample from '../CodeExample';

const QuarterHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-xl p-8 border border-emerald-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع فصل</h2>
        <p className="text-lg text-gray-700 leading-relaxed">توابع مربوط به فصل‌های سال (Quarter).</p>
      </div>

      <CodeExample
        title="محاسبات فصلی"
        description="کار با فصل‌ها:"
        code={`import { addQuarters, subQuarters, getQuarter, startOfQuarter, endOfQuarter, format } from 'date-fns';

const date = new Date(2024, 2, 15); // مارس = فصل 1

console.log('تاریخ:', format(date, 'yyyy/MM/dd'));
console.log('شماره فصل:', getQuarter(date));
console.log('شروع فصل:', format(startOfQuarter(date), 'yyyy/MM/dd'));
console.log('پایان فصل:', format(endOfQuarter(date), 'yyyy/MM/dd'));

console.log('+1 فصل:', format(addQuarters(date, 1), 'yyyy/MM/dd'));
console.log('-1 فصل:', format(subQuarters(date, 1), 'yyyy/MM/dd'));`}
        result="تاریخ: 2024/03/15"
      />

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-emerald-800 mb-3">فهرست توابع فصل</h3>
        <div className="text-sm text-emerald-700">
          addQuarters، subQuarters، differenceInQuarters، getQuarter، setQuarter، 
          startOfQuarter، endOfQuarter، lastDayOfQuarter، isSameQuarter، isThisQuarter
        </div>
      </div>
    </div>
  );
};

export default QuarterHelpersSection;
