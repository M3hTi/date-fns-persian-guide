
import React from 'react';
import CodeExample from '../CodeExample';

const HelperSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-50 to-teal-100 rounded-xl p-8 border border-emerald-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع کمکی</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns مجموعه‌ای از توابع کمکی برای کارهای خاص و بررسی‌های مفید در کار با تاریخ فراهم می‌کند.
        </p>
      </div>

      <CodeExample
        title="بررسی نوع و اعتبار"
        description="توابع برای بررسی معتبر بودن و نوع داده‌های تاریخ:"
        code={`import { isDate, isValid, isExists } from 'date-fns';

// بررسی آبجکت Date
console.log(isDate(new Date()));        // true
console.log(isDate('2024-01-01'));      // false
console.log(isDate(1234567890));        // false

// بررسی اعتبار تاریخ
const validDate = new Date('2024-01-01');
const invalidDate = new Date('invalid');

console.log(isValid(validDate));        // true
console.log(isValid(invalidDate));      // false

// بررسی وجود تاریخ
console.log(isExists(2024, 1, 29));     // true - 29 فوریه در سال کبیسه
console.log(isExists(2023, 1, 29));     // false - 29 فوریه در سال عادی
console.log(isExists(2024, 12, 31));    // false - ماه 12 وجود ندارد (0-based)`}
        result="true"
      />

      <CodeExample
        title="سال کبیسه و اطلاعات تقویم"
        description="توابع مربوط به سال کبیسه و اطلاعات تقویم:"
        code={`import { 
  isLeapYear, 
  getDaysInMonth, 
  getDaysInYear,
  getWeeksInMonth,
  lastDayOfMonth,
  format 
} from 'date-fns';

const year = 2024;
const date = new Date(2024, 1, 15); // فوریه 2024

// بررسی سال کبیسه
console.log(isLeapYear(new Date(2024, 0, 1))); // true
console.log(isLeapYear(new Date(2023, 0, 1))); // false

// تعداد روزهای ماه
console.log(getDaysInMonth(date));              // 29 - فوریه کبیسه
console.log(getDaysInMonth(new Date(2023, 1))); // 28 - فوریه عادی

// تعداد روزهای سال
console.log(getDaysInYear(date));               // 366 - سال کبیسه

// آخرین روز ماه
const lastDay = lastDayOfMonth(date);
console.log(format(lastDay, 'dd/MM/yyyy'));     // 29/02/2024`}
        result="true"
      />

      <CodeExample
        title="کار با بازه‌های زمانی"
        description="توابع برای کار با interval و بازه‌های زمانی:"
        code={`import { 
  intervalToDuration, 
  areIntervalsOverlapping,
  isWithinInterval,
  formatDuration 
} from 'date-fns';
import { faIR } from 'date-fns/locale';

const start = new Date(2024, 0, 1);    // 1 ژانویه
const end = new Date(2024, 11, 31);    // 31 دسامبر

// محاسبه مدت زمان
const duration = intervalToDuration({ start, end });
console.log(duration); 
// { years: 0, months: 11, days: 30, hours: 0, minutes: 0, seconds: 0 }

// فرمت کردن مدت زمان
const formatted = formatDuration(duration, { locale: faIR });
console.log(formatted); // "11 ماه 30 روز"

// بررسی تداخل بازه‌ها
const interval1 = { start: new Date(2024, 0, 1), end: new Date(2024, 5, 30) };
const interval2 = { start: new Date(2024, 3, 15), end: new Date(2024, 8, 30) };

console.log(areIntervalsOverlapping(interval1, interval2)); // true`}
        result="{ years: 0, months: 11, days: 30 }"
      />

      <CodeExample
        title="تبدیل و فرمت‌های خاص"
        description="توابع برای تبدیل و کار با فرمت‌های خاص:"
        code={`import { 
  toDate, 
  formatISO, 
  formatRFC3339,
  formatRFC7231,
  lightFormat 
} from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45);

// تبدیل امن به Date
const converted = toDate(date);
console.log(converted instanceof Date); // true

// فرمت‌های استاندارد
console.log(formatISO(date));           // 2024-03-15T14:30:45.000Z
console.log(formatRFC3339(date));       // 2024-03-15T14:30:45+00:00
console.log(formatRFC7231(date));       // Fri, 15 Mar 2024 14:30:45 GMT

// فرمت سبک (بدون locale)
console.log(lightFormat(date, 'yyyy-MM-dd')); // 2024-03-15

// تبدیل timestamp به ISO
const timestamp = Date.now();
console.log(formatISO(timestamp));`}
        result="2024-03-15T14:30:45.000Z"
      />

      <CodeExample
        title="توابع کمکی ریاضی"
        description="توابع ریاضی و محاسباتی خاص:"
        code={`import { 
  roundToNearestMinutes,
  roundToNearestHours,
  clamp,
  format 
} from 'date-fns';

const date = new Date(2024, 2, 15, 14, 37, 23);

// گرد کردن به نزدیک‌ترین دقیقه
const rounded5min = roundToNearestMinutes(date, { nearestTo: 5 });
console.log(format(rounded5min, 'HH:mm:ss')); // 14:35:00

const rounded15min = roundToNearestMinutes(date, { nearestTo: 15 });
console.log(format(rounded15min, 'HH:mm:ss')); // 14:30:00

// گرد کردن به نزدیک‌ترین ساعت
const roundedHour = roundToNearestHours(date);
console.log(format(roundedHour, 'HH:mm:ss')); // 15:00:00

// محدود کردن تاریخ در بازه
const minDate = new Date(2024, 2, 10);
const maxDate = new Date(2024, 2, 20);
const testDate = new Date(2024, 2, 25);

const clamped = clamp(testDate, { start: minDate, end: maxDate });
console.log(format(clamped, 'dd/MM')); // 20/03 - محدود شده به حداکثر`}
        result="14:35:00"
      />

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-cyan-800 mb-3">دسته‌بندی توابع کمکی</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-cyan-700">
          <div className="space-y-2">
            <div><strong>اعتبارسنجی:</strong> isDate, isValid, isExists</div>
            <div><strong>تقویم:</strong> isLeapYear, getDaysInMonth</div>
            <div><strong>بازه:</strong> intervalToDuration, areIntervalsOverlapping</div>
          </div>
          <div className="space-y-2">
            <div><strong>تبدیل:</strong> toDate, formatISO, formatRFC3339</div>
            <div><strong>ریاضی:</strong> roundToNearestMinutes, clamp</div>
            <div><strong>مدت زمان:</strong> formatDuration</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperSection;
