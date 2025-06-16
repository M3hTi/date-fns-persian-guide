
import React from 'react';
import CodeExample from '../CodeExample';

const HelperSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-50 to-teal-100 rounded-xl p-8 border border-emerald-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع کمکی</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns مجموعه‌ای از توابع کمکی برای کارهای مختلف مانند اعتبارسنجی، تبدیل و محاسبات خاص ارائه می‌دهد.
        </p>
      </div>

      <CodeExample
        title="اعتبارسنجی تاریخ"
        description="بررسی صحت و اعتبار تاریخ‌ها:"
        code={`import { isValid, isDate, isExists } from 'date-fns';

// بررسی معتبر بودن
const validDate = new Date(2024, 2, 15);
const invalidDate = new Date('invalid');

console.log(isValid(validDate));   // true
console.log(isValid(invalidDate)); // false

// بررسی نوع Date
console.log(isDate(validDate));     // true
console.log(isDate('2024-03-15'));  // false
console.log(isDate(123456789));     // false

// بررسی وجود تاریخ
console.log(isExists(2024, 1, 29)); // true - 29 فوریه در سال کبیسه
console.log(isExists(2023, 1, 29)); // false - 29 فوریه در سال عادی
console.log(isExists(2024, 3, 31)); // false - 31 آوریل وجود ندارد`}
        result="true"
      />

      <CodeExample
        title="بررسی نوع روز"
        description="تشخیص آخر هفته، روز کاری و موارد خاص:"
        code={`import { 
  isWeekend, isMonday, isTuesday, isWednesday, 
  isThursday, isFriday, isSaturday, isSunday,
  isFirstDayOfMonth, isLastDayOfMonth
} from 'date-fns';

const friday = new Date(2024, 2, 15);    // جمعه
const saturday = new Date(2024, 2, 16);  // شنبه
const firstDay = new Date(2024, 2, 1);   // اول مارس
const lastDay = new Date(2024, 2, 31);   // آخر مارس

// بررسی آخر هفته
console.log(isWeekend(friday));    // true
console.log(isWeekend(saturday));  // true

// بررسی روزهای خاص
console.log(isFriday(friday));     // true
console.log(isSaturday(saturday)); // true

// بررسی اول و آخر ماه
console.log(isFirstDayOfMonth(firstDay)); // true
console.log(isLastDayOfMonth(lastDay));   // true`}
        result="true"
      />

      <CodeExample
        title="بررسی سال کبیسه و دوره‌ها"
        description="تشخیص سال کبیسه و بررسی دوره‌های زمانی:"
        code={`import { 
  isLeapYear, isThisYear, isThisMonth, isThisWeek,
  isToday, isTomorrow, isYesterday, isFuture, isPast
} from 'date-fns';

const date2024 = new Date(2024, 0, 1);  // 2024 سال کبیسه
const date2023 = new Date(2023, 0, 1);  // 2023 سال عادی
const today = new Date();
const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

// بررسی سال کبیسه
console.log(isLeapYear(date2024)); // true
console.log(isLeapYear(date2023)); // false

// بررسی دوره فعلی
console.log(isThisYear(today));   // true
console.log(isThisMonth(today));  // true
console.log(isThisWeek(today));   // true

// بررسی زمان نسبی
console.log(isToday(today));       // true
console.log(isTomorrow(tomorrow)); // true
console.log(isYesterday(yesterday)); // true
console.log(isFuture(tomorrow));   // true
console.log(isPast(yesterday));    // true`}
        result="true"
      />

      <CodeExample
        title="ایجاد تاریخ‌های خاص"
        description="ساخت تاریخ‌هایی با مشخصات خاص:"
        code={`import { 
  lightFormat, formatISO, formatRFC3339, formatRFC7231,
  parseJSON, toDate 
} from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 0);

// قالب‌های سبک
console.log(lightFormat(date, 'yyyy-MM-dd')); // 2024-03-15

// فرمت‌های استاندارد
console.log(formatISO(date)); // 2024-03-15T14:30:00+03:30
console.log(formatRFC3339(date)); // 2024-03-15T14:30:00+03:30
console.log(formatRFC7231(date)); // Fri, 15 Mar 2024 11:00:00 GMT

// تبدیل JSON به تاریخ
const jsonDate = '2024-03-15T14:30:00.000Z';
const parsed = parseJSON(jsonDate);
console.log(parsed); // Date object

// تبدیل مقادیر مختلف به Date
console.log(toDate(1710504600000)); // Date از timestamp
console.log(toDate('2024-03-15'));  // Date از string`}
        result="2024-03-15"
      />

      <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-sky-800 mb-3">دسته‌بندی توابع کمکی</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-sky-700">
          <div className="space-y-3">
            <div>
              <strong>اعتبارسنجی:</strong>
              <div>isValid, isDate, isExists</div>
            </div>
            <div>
              <strong>بررسی روز:</strong>
              <div>isWeekend, isMonday, isFriday</div>
            </div>
            <div>
              <strong>بررسی دوره:</strong>
              <div>isToday, isThisWeek, isThisMonth</div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <strong>زمان نسبی:</strong>
              <div>isFuture, isPast, isTomorrow</div>
            </div>
            <div>
              <strong>تبدیل:</strong>
              <div>toDate, parseJSON, formatISO</div>
            </div>
            <div>
              <strong>ویژه:</strong>
              <div>isLeapYear, lightFormat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperSection;
