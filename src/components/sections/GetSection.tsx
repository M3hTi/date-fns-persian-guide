
import React from 'react';
import CodeExample from '../CodeExample';

const GetSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-xl p-8 border border-cyan-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">دریافت مقادیر از تاریخ</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns مجموعه‌ای از توابع برای استخراج اجزای مختلف تاریخ مانند سال، ماه، روز و غیره فراهم می‌کند.
        </p>
      </div>

      <CodeExample
        title="دریافت اجزای تاریخ"
        description="استخراج سال، ماه، روز از یک تاریخ:"
        code={`import { getYear, getMonth, getDate, getDay } from 'date-fns';

const date = new Date(2024, 2, 15); // 15 مارس 2024

// دریافت اجزای تاریخ
console.log(getYear(date));   // 2024 - سال
console.log(getMonth(date));  // 2 - ماه (0-based)
console.log(getDate(date));   // 15 - روز ماه
console.log(getDay(date));    // 5 - روز هفته (0=یکشنبه, 6=شنبه)

// برای ماه 1-based
console.log(getMonth(date) + 1); // 3 - ماه (1-based)`}
        result="2024"
      />

      <CodeExample
        title="دریافت اجزای زمان"
        description="استخراج ساعت، دقیقه، ثانیه از یک تاریخ:"
        code={`import { getHours, getMinutes, getSeconds, getMilliseconds } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45, 123);

// دریافت اجزای زمان
console.log(getHours(date));        // 14 - ساعت
console.log(getMinutes(date));      // 30 - دقیقه
console.log(getSeconds(date));      // 45 - ثانیه
console.log(getMilliseconds(date)); // 123 - میلی‌ثانیه

// فرمت کامل زمان
const timeStr = \`\${getHours(date)}:\${getMinutes(date)}:\${getSeconds(date)}\`;
console.log(timeStr); // "14:30:45"`}
        result="14"
      />

      <CodeExample
        title="دریافت اطلاعات هفته و ماه"
        description="استخراج شماره هفته، روزهای ماه و غیره:"
        code={`import { 
  getWeek, getWeekOfMonth, getWeeksInMonth,
  getDaysInMonth, getDaysInYear, getDayOfYear,
  getQuarter 
} from 'date-fns';

const date = new Date(2024, 2, 15); // 15 مارس 2024

// اطلاعات هفته
console.log(getWeek(date));         // شماره هفته در سال
console.log(getWeekOfMonth(date));  // شماره هفته در ماه

// اطلاعات ماه و سال
console.log(getDaysInMonth(date));  // 31 - تعداد روزهای مارس
console.log(getDaysInYear(date));   // 366 - سال کبیسه
console.log(getDayOfYear(date));    // روز چندم سال

// فصل سال
console.log(getQuarter(date));      // 1 - فصل اول (ژانویه-مارس)`}
        result="11"
      />

      <CodeExample
        title="دریافت Unix Timestamp"
        description="تبدیل تاریخ به Unix timestamp:"
        code={`import { getTime, getUnixTime } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 0);

// Unix timestamp (میلی‌ثانیه)
const milliseconds = getTime(date);
console.log(milliseconds); // 1710506200000

// Unix timestamp (ثانیه)
const seconds = getUnixTime(date);
console.log(seconds); // 1710506200

// مقایسه با Date.now()
console.log(Date.now() === getTime(new Date())); // true`}
        result="1710506200"
      />

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-teal-800 mb-3">فهرست کامل توابع Get</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-teal-700">
          <div className="space-y-2">
            <div><strong>تاریخ:</strong> getYear, getMonth, getDate</div>
            <div><strong>زمان:</strong> getHours, getMinutes, getSeconds</div>
            <div><strong>هفته:</strong> getDay, getWeek, getWeekOfMonth</div>
          </div>
          <div className="space-y-2">
            <div><strong>دوره:</strong> getQuarter, getDayOfYear</div>
            <div><strong>تعداد:</strong> getDaysInMonth, getDaysInYear</div>
            <div><strong>Timestamp:</strong> getTime, getUnixTime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSection;
