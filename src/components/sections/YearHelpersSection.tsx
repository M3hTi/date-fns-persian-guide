
import React from 'react';
import CodeExample from '../CodeExample';

const YearHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-8 border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع سال</h2>
        <p className="text-lg text-gray-700 leading-relaxed">توابع جامع برای کار با سال‌ها و محاسبات سالانه.</p>
      </div>

      <CodeExample
        title="محاسبات سالانه"
        description="کار با سال‌ها:"
        code={`import { addYears, subYears, getYear, getDaysInYear, isLeapYear, startOfYear, endOfYear, format } from 'date-fns';

const date = new Date(2024, 2, 15);

console.log('تاریخ:', format(date, 'yyyy/MM/dd'));
console.log('سال:', getYear(date));
console.log('تعداد روزهای سال:', getDaysInYear(date));
console.log('سال کبیسه؟', isLeapYear(date));
console.log('شروع سال:', format(startOfYear(date), 'yyyy/MM/dd'));
console.log('پایان سال:', format(endOfYear(date), 'yyyy/MM/dd'));

console.log('+2 سال:', format(addYears(date, 2), 'yyyy/MM/dd'));
console.log('-1 سال:', format(subYears(date, 1), 'yyyy/MM/dd'));`}
        result="تاریخ: 2024/03/15"
      />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">فهرست توابع سال</h3>
        <div className="text-sm text-blue-700">
          addYears، subYears، differenceInYears، getYear، setYear، 
          getDaysInYear، isLeapYear، startOfYear، endOfYear، lastDayOfYear، 
          isSameYear، isThisYear، eachWeekendOfYear
        </div>
      </div>
    </div>
  );
};

export default YearHelpersSection;
