
import React from 'react';
import CodeExample from '../CodeExample';

const CompareSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-pink-50 to-rose-100 rounded-xl p-8 border border-pink-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">مقایسه تاریخ‌ها</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns ابزارهای متنوعی برای مقایسه تاریخ‌ها و بررسی روابط زمانی بین آنها ارائه می‌دهد.
        </p>
      </div>

      <CodeExample
        title="مقایسه‌های پایه"
        description="استفاده از توابع isBefore, isAfter و isEqual:"
        code={`import { isBefore, isAfter, isEqual, compareAsc } from 'date-fns';

const date1 = new Date(2024, 2, 15);  // 15 مارس
const date2 = new Date(2024, 2, 20);  // 20 مارس
const date3 = new Date(2024, 2, 15);  // 15 مارس (مشابه date1)

// مقایسه قبل و بعد
console.log(isBefore(date1, date2));  // true - date1 قبل از date2
console.log(isAfter(date2, date1));   // true - date2 بعد از date1
console.log(isEqual(date1, date3));   // true - دو تاریخ برابر

// مقایسه سه‌تایی
const comparison = compareAsc(date1, date2);
// -1: اول کوچک‌تر، 0: برابر، 1: اول بزرگ‌تر
console.log(comparison); // -1`}
        result="true"
      />

      <CodeExample
        title="بررسی بازه زمانی"
        description="استفاده از isWithinInterval برای بررسی قرارگیری در بازه:"
        code={`import { isWithinInterval, isToday, isThisWeek, isThisMonth } from 'date-fns';

const checkDate = new Date(2024, 2, 17); // 17 مارس
const start = new Date(2024, 2, 15);     // 15 مارس
const end = new Date(2024, 2, 20);       // 20 مارس

// بررسی قرارگیری در بازه
const inInterval = isWithinInterval(checkDate, { start, end });
console.log(inInterval); // true

// بررسی‌های امروز، این هفته، این ماه
const today = new Date();
console.log(isToday(today));           // true
console.log(isThisWeek(checkDate));    // بستگی به تاریخ فعلی دارد
console.log(isThisMonth(checkDate));   // بستگی به ماه فعلی دارد

// بررسی آخر هفته
import { isWeekend } from 'date-fns';
const saturday = new Date(2024, 2, 16);
console.log(isWeekend(saturday)); // true`}
        result="true"
      />

      <CodeExample
        title="مقایسه در سطوح مختلف"
        description="مقایسه تاریخ‌ها در سطح روز، ماه، سال:"
        code={`import { 
  isSameDay, isSameWeek, isSameMonth, isSameYear,
  isSameHour, isSameMinute 
} from 'date-fns';

const date1 = new Date(2024, 2, 15, 10, 30, 45);
const date2 = new Date(2024, 2, 15, 14, 45, 20);
const date3 = new Date(2024, 5, 15, 10, 30, 45);

// مقایسه در سطوح مختلف
console.log(isSameDay(date1, date2));    // true - همان روز
console.log(isSameMonth(date1, date3));  // false - ماه متفاوت
console.log(isSameYear(date1, date3));   // true - همان سال

// مقایسه زمان
console.log(isSameHour(date1, date2));   // false - ساعت متفاوت
console.log(isSameMinute(date1, date3)); // true - همان دقیقه

// مقایسه هفته
console.log(isSameWeek(date1, date2));   // true - همان هفته`}
        result="true"
      />

      <CodeExample
        title="پیدا کردن نزدیک‌ترین و دورترین"
        description="استفاده از closestTo و farthestTo:"
        code={`import { closestTo, max, min, format } from 'date-fns';

const targetDate = new Date(2024, 2, 15); // 15 مارس

const dates = [
  new Date(2024, 2, 10),  // 10 مارس
  new Date(2024, 2, 18),  // 18 مارس
  new Date(2024, 2, 25),  // 25 مارس
  new Date(2024, 1, 28),  // 28 فوریه
];

// نزدیک‌ترین تاریخ
const closest = closestTo(targetDate, dates);
console.log(format(closest, 'dd/MM')); // 18/03

// قدیمی‌ترین و جدیدترین
const oldest = min(dates);
const newest = max(dates);

console.log('قدیمی‌ترین:', format(oldest, 'dd/MM')); // 28/02
console.log('جدیدترین:', format(newest, 'dd/MM'));   // 25/03`}
        result="18/03"
      />

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">راهنمای انتخاب تابع مقایسه</h3>
        <div className="space-y-3 text-sm text-indigo-700">
          <div><strong>مقایسه کلی:</strong> isBefore, isAfter, isEqual, compareAsc</div>
          <div><strong>بررسی بازه:</strong> isWithinInterval</div>
          <div><strong>مقایسه در سطح:</strong> isSameDay, isSameMonth, isSameYear</div>
          <div><strong>بررسی زمان فعلی:</strong> isToday, isThisWeek, isThisMonth</div>
          <div><strong>پیدا کردن حد:</strong> min, max, closestTo</div>
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
