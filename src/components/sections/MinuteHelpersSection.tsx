
import React from 'react';
import CodeExample from '../CodeExample';

const MinuteHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-50 to-emerald-100 rounded-xl p-8 border border-teal-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع دقیقه</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          مجموعه کاملی از توابع برای کار با دقیقه‌ها و گرد کردن زمان.
        </p>
      </div>

      <CodeExample
        title="اضافه و کم کردن دقیقه"
        description="استفاده از addMinutes و subMinutes:"
        code={`import { addMinutes, subMinutes, format } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 0); // 14:30

// اضافه کردن دقیقه
const add15 = addMinutes(date, 15);
const add60 = addMinutes(date, 60);
const add90 = addMinutes(date, 90);

console.log('زمان اصلی:', format(date, 'HH:mm'));
console.log('+15 دقیقه:', format(add15, 'HH:mm'));
console.log('+60 دقیقه:', format(add60, 'HH:mm'));
console.log('+90 دقیقه:', format(add90, 'HH:mm'));

// کم کردن دقیقه
const sub30 = subMinutes(date, 30);
const sub120 = subMinutes(date, 120);

console.log('-30 دقیقه:', format(sub30, 'HH:mm'));
console.log('-120 دقیقه:', format(sub120, 'HH:mm'));`}
        result="14:30"
      />

      <CodeExample
        title="گرد کردن دقیقه"
        description="استفاده از roundToNearestMinutes:"
        code={`import { roundToNearestMinutes, format } from 'date-fns';

const times = [
  new Date(2024, 2, 15, 14, 32, 45), // 14:32:45
  new Date(2024, 2, 15, 14, 37, 30), // 14:37:30
  new Date(2024, 2, 15, 14, 23, 15), // 14:23:15
];

console.log('گرد کردن به نزدیک‌ترین 5 دقیقه:');
times.forEach((time, index) => {
  const rounded = roundToNearestMinutes(time, { nearestTo: 5 });
  console.log(\`زمان \${index + 1}: \${format(time, 'HH:mm:ss')} → \${format(rounded, 'HH:mm')}\`);
});

console.log('گرد کردن به نزدیک‌ترین 15 دقیقه:');
times.forEach((time, index) => {
  const rounded = roundToNearestMinutes(time, { nearestTo: 15 });
  console.log(\`زمان \${index + 1}: \${format(time, 'HH:mm:ss')} → \${format(rounded, 'HH:mm')}\`);
});`}
        result="زمان 1: 14:32:45 → 14:35"
      />

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-teal-800 mb-3">فهرست توابع دقیقه</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-teal-700">
          <div className="space-y-2">
            <div>• addMinutes - اضافه کردن دقیقه</div>
            <div>• subMinutes - کم کردن دقیقه</div>
            <div>• differenceInMinutes - تفاوت به دقیقه</div>
            <div>• getMinutes - دریافت دقیقه (0-59)</div>
          </div>
          <div className="space-y-2">
            <div>• setMinutes - تنظیم دقیقه</div>
            <div>• startOfMinute - شروع دقیقه</div>
            <div>• endOfMinute - پایان دقیقه</div>
            <div>• roundToNearestMinutes - گرد کردن</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinuteHelpersSection;
