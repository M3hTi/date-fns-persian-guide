
import React from 'react';
import CodeExample from '../CodeExample';

const HourHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-amber-50 to-orange-100 rounded-xl p-8 border border-amber-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع ساعت</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          مجموعه کاملی از توابع برای کار با ساعت‌ها و زمان‌بندی.
        </p>
      </div>

      <CodeExample
        title="اضافه و کم کردن ساعت"
        description="استفاده از addHours و subHours:"
        code={`import { addHours, subHours, format } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 0); // 14:30

// اضافه کردن ساعت
const add2 = addHours(date, 2);
const add24 = addHours(date, 24);
const add36 = addHours(date, 36);

console.log('زمان اصلی:', format(date, 'yyyy/MM/dd HH:mm'));
console.log('+2 ساعت:', format(add2, 'yyyy/MM/dd HH:mm'));
console.log('+24 ساعت:', format(add24, 'yyyy/MM/dd HH:mm'));
console.log('+36 ساعت:', format(add36, 'yyyy/MM/dd HH:mm'));

// کم کردن ساعت
const sub3 = subHours(date, 3);
const sub12 = subHours(date, 12);

console.log('-3 ساعت:', format(sub3, 'yyyy/MM/dd HH:mm'));
console.log('-12 ساعت:', format(sub12, 'yyyy/MM/dd HH:mm'));`}
        result="2024/03/15 14:30"
      />

      <CodeExample
        title="گرد کردن ساعت"
        description="استفاده از roundToNearestHours:"
        code={`import { roundToNearestHours, format } from 'date-fns';

const times = [
  new Date(2024, 2, 15, 14, 32, 0), // 14:32
  new Date(2024, 2, 15, 16, 45, 0), // 16:45
  new Date(2024, 2, 15, 9, 15, 0),  // 09:15
];

console.log('گرد کردن به نزدیک‌ترین ساعت:');
times.forEach((time, index) => {
  const rounded = roundToNearestHours(time);
  console.log(\`زمان \${index + 1}: \${format(time, 'HH:mm')} → \${format(rounded, 'HH:mm')}\`);
});`}
        result="زمان 1: 14:32 → 15:00"
      />

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">فهرست توابع ساعت</h3>
        <div className="text-sm text-amber-700">
          addHours، subHours، differenceInHours، getHours، setHours، 
          startOfHour، endOfHour، roundToNearestHours، isSameHour، isThisHour
        </div>
      </div>
    </div>
  );
};

export default HourHelpersSection;
