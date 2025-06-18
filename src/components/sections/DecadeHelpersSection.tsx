
import React from 'react';
import CodeExample from '../CodeExample';

const DecadeHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-violet-50 to-purple-100 rounded-xl p-8 border border-violet-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع دهه</h2>
        <p className="text-lg text-gray-700 leading-relaxed">توابع مربوط به دهه‌ها و محاسبات دهه‌ای.</p>
      </div>

      <CodeExample
        title="محاسبات دهه‌ای"
        description="کار با دهه‌ها:"
        code={`import { getDecade, startOfDecade, endOfDecade, lastDayOfDecade, format } from 'date-fns';

const date = new Date(2024, 2, 15);

console.log('تاریخ:', format(date, 'yyyy/MM/dd'));
console.log('دهه:', getDecade(date)); // 2020 (2020-2029)
console.log('شروع دهه:', format(startOfDecade(date), 'yyyy/MM/dd'));
console.log('پایان دهه:', format(endOfDecade(date), 'yyyy/MM/dd'));
console.log('آخرین روز دهه:', format(lastDayOfDecade(date), 'yyyy/MM/dd'));

// مثال‌های مختلف
const dates = [
  new Date(1995, 5, 15), // دهه 1990
  new Date(2005, 5, 15), // دهه 2000  
  new Date(2024, 5, 15), // دهه 2020
];

dates.forEach(d => {
  console.log(\`\${format(d, 'yyyy')} → دهه \${getDecade(d)}\`);
});`}
        result="تاریخ: 2024/03/15"
      />

      <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-violet-800 mb-3">فهرست توابع دهه</h3>
        <div className="text-sm text-violet-700">
          getDecade، startOfDecade، endOfDecade، lastDayOfDecade
        </div>
      </div>
    </div>
  );
};

export default DecadeHelpersSection;
