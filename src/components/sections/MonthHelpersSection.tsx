
import React from 'react';
import CodeExample from '../CodeExample';

const MonthHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-rose-50 to-pink-100 rounded-xl p-8 border border-rose-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع ماه</h2>
        <p className="text-lg text-gray-700 leading-relaxed">توابع جامع برای کار با ماه‌ها و محاسبات ماهانه.</p>
      </div>

      <CodeExample
        title="محاسبات ماهانه"
        description="کار با ماه‌ها:"
        code={`import { addMonths, subMonths, getMonth, getDaysInMonth, startOfMonth, endOfMonth, format } from 'date-fns';

const date = new Date(2024, 2, 15); // مارس

console.log('تاریخ:', format(date, 'yyyy/MM/dd'));
console.log('شماره ماه:', getMonth(date) + 1); // 0-based
console.log('تعداد روزهای ماه:', getDaysInMonth(date));
console.log('شروع ماه:', format(startOfMonth(date), 'yyyy/MM/dd'));
console.log('پایان ماه:', format(endOfMonth(date), 'yyyy/MM/dd'));

console.log('+2 ماه:', format(addMonths(date, 2), 'yyyy/MM/dd'));
console.log('-1 ماه:', format(subMonths(date, 1), 'yyyy/MM/dd'));`}
        result="تاریخ: 2024/03/15"
      />

      <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-rose-800 mb-3">فهرست توابع ماه</h3>
        <div className="text-sm text-rose-700">
          addMonths، subMonths، differenceInMonths، getMonth، setMonth، 
          getDaysInMonth، startOfMonth، endOfMonth، lastDayOfMonth، 
          isFirstDayOfMonth، isLastDayOfMonth، isSameMonth، isThisMonth، eachWeekendOfMonth
        </div>
      </div>
    </div>
  );
};

export default MonthHelpersSection;
