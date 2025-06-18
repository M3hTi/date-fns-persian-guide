
import React from 'react';
import CodeExample from '../CodeExample';

const WeekHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-xl p-8 border border-purple-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع هفته</h2>
        <p className="text-lg text-gray-700 leading-relaxed">توابع مربوط به هفته‌ها و محاسبات هفتگی.</p>
      </div>

      <CodeExample
        title="محاسبات هفتگی"
        description="کار با هفته‌ها:"
        code={`import { addWeeks, subWeeks, getWeek, getWeekOfMonth, startOfWeek, endOfWeek, format } from 'date-fns';

const date = new Date(2024, 2, 15); // 15 مارس

console.log('تاریخ:', format(date, 'yyyy/MM/dd'));
console.log('شماره هفته در سال:', getWeek(date));
console.log('شماره هفته در ماه:', getWeekOfMonth(date));
console.log('شروع هفته:', format(startOfWeek(date), 'yyyy/MM/dd'));
console.log('پایان هفته:', format(endOfWeek(date), 'yyyy/MM/dd'));

console.log('+2 هفته:', format(addWeeks(date, 2), 'yyyy/MM/dd'));
console.log('-1 هفته:', format(subWeeks(date, 1), 'yyyy/MM/dd'));`}
        result="تاریخ: 2024/03/15"
      />

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">فهرست توابع هفته</h3>
        <div className="text-sm text-purple-700">
          addWeeks، subWeeks، differenceInWeeks، getWeek، getWeekOfMonth، 
          getWeeksInMonth، setWeek، startOfWeek، endOfWeek، lastDayOfWeek، 
          isSameWeek، isThisWeek
        </div>
      </div>
    </div>
  );
};

export default WeekHelpersSection;
