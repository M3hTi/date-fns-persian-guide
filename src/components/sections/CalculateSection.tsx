
import React from 'react';
import CodeExample from '../CodeExample';

const CalculateSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-xl p-8 border border-orange-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">محاسبات تاریخ</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns مجموعه کاملی از توابع برای انجام محاسبات پیچیده روی تاریخ‌ها ارائه می‌دهد.
        </p>
      </div>

      <CodeExample
        title="اضافه و کم کردن زمان"
        description="استفاده از توابع add و sub برای محاسبات زمانی:"
        code={`import { add, sub, format } from 'date-fns';

const date = new Date(2024, 2, 15); // 15 مارس 2024

// اضافه کردن زمان‌های مختلف
const added = add(date, {
  years: 1,
  months: 2,
  weeks: 1,
  days: 3,
  hours: 4,
  minutes: 30
});

console.log(format(added, 'yyyy/MM/dd HH:mm'));

// کم کردن زمان
const subtracted = sub(date, {
  months: 6,
  days: 10
});

console.log(format(subtracted, 'yyyy/MM/dd'));`}
        result="2025/05/26 04:30"
      />

      <CodeExample
        title="توابع اضافه کردن ساده"
        description="استفاده از توابع مختص هر واحد زمانی:"
        code={`import { 
  addYears, addMonths, addWeeks, addDays, 
  addHours, addMinutes, addSeconds,
  format 
} from 'date-fns';

const date = new Date(2024, 2, 15, 10, 30, 0);

// اضافه کردن واحدهای مختلف
console.log(format(addYears(date, 2), 'yyyy'));           // 2026
console.log(format(addMonths(date, 3), 'MM'));            // 06
console.log(format(addWeeks(date, 2), 'dd/MM'));          // 29/03
console.log(format(addDays(date, 10), 'dd'));             // 25
console.log(format(addHours(date, 5), 'HH:mm'));          // 15:30
console.log(format(addMinutes(date, 45), 'HH:mm'));       // 11:15
console.log(format(addSeconds(date, 30), 'HH:mm:ss'));    // 10:30:30`}
        result="2026"
      />

      <CodeExample
        title="محاسبه فاصله زمانی"
        description="محاسبه دقیق فاصله بین دو تاریخ:"
        code={`import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

const startDate = new Date(2024, 0, 1);  // 1 ژانویه 2024
const endDate = new Date(2024, 11, 31);  // 31 دسامبر 2024

// فاصله به روز
const daysDiff = differenceInDays(endDate, startDate);
console.log(\`فاصله: \${daysDiff} روز\`); // 365 روز

// فاصله به ماه
const monthsDiff = differenceInMonths(endDate, startDate);
console.log(\`فاصله: \${monthsDiff} ماه\`); // 11 ماه

// محاسبه سن
const birthDate = new Date(1990, 5, 15);
const age = differenceInYears(new Date(), birthDate);
console.log(\`سن: \${age} سال\`);`}
        result="فاصله: 365 روز"
      />

      <CodeExample
        title="ابتدا و انتهای دوره‌ها"
        description="پیدا کردن شروع و پایان ماه، هفته، سال و غیره:"
        code={`import { 
  startOfDay, endOfDay,
  startOfWeek, endOfWeek,
  startOfMonth, endOfMonth,
  startOfYear, endOfYear,
  format 
} from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45); // 15 مارس 2024

// شروع و پایان روز
console.log(format(startOfDay(date), 'HH:mm:ss'));   // 00:00:00
console.log(format(endOfDay(date), 'HH:mm:ss'));     // 23:59:59

// شروع و پایان هفته
console.log(format(startOfWeek(date), 'dd/MM'));     // 10/03 (دوشنبه)
console.log(format(endOfWeek(date), 'dd/MM'));       // 16/03 (یکشنبه)

// شروع و پایان ماه
console.log(format(startOfMonth(date), 'dd'));       // 01
console.log(format(endOfMonth(date), 'dd'));         // 31

// شروع و پایان سال
console.log(format(startOfYear(date), 'dd/MM'));     // 01/01
console.log(format(endOfYear(date), 'dd/MM'));       // 31/12`}
        result="00:00:00"
      />

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3">توابع محاسباتی پرکاربرد</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
          <div className="space-y-2">
            <div><strong>اضافه کردن:</strong> add, addDays, addMonths, addYears</div>
            <div><strong>کم کردن:</strong> sub, subDays, subMonths, subYears</div>
            <div><strong>فاصله:</strong> differenceInDays, differenceInMonths</div>
          </div>
          <div className="space-y-2">
            <div><strong>شروع دوره:</strong> startOfDay, startOfWeek, startOfMonth</div>
            <div><strong>پایان دوره:</strong> endOfDay, endOfWeek, endOfMonth</div>
            <div><strong>گرد کردن:</strong> roundToNearestMinutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateSection;
