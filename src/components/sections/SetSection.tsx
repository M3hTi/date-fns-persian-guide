
import React from 'react';
import CodeExample from '../CodeExample';

const SetSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-100 rounded-xl p-8 border border-purple-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">تنظیم مقادیر تاریخ</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          توابع Set در date-fns امکان تغییر اجزای خاص یک تاریخ را بدون تغییر سایر بخش‌ها فراهم می‌کنند.
        </p>
      </div>

      <CodeExample
        title="تنظیم اجزای تاریخ"
        description="تغییر سال، ماه، روز در یک تاریخ موجود:"
        code={`import { setYear, setMonth, setDate, format } from 'date-fns';

const originalDate = new Date(2024, 2, 15); // 15 مارس 2024

// تنظیم سال جدید
const newYear = setYear(originalDate, 2025);
console.log(format(newYear, 'yyyy/MM/dd')); // 2025/03/15

// تنظیم ماه جدید (0-based)
const newMonth = setMonth(originalDate, 5); // ژوئن
console.log(format(newMonth, 'yyyy/MM/dd')); // 2024/06/15

// تنظیم روز جدید
const newDate = setDate(originalDate, 25);
console.log(format(newDate, 'yyyy/MM/dd')); // 2024/03/25

// ترکیب چند تغییر
const modified = setDate(setMonth(setYear(originalDate, 2025), 11), 31);
console.log(format(modified, 'yyyy/MM/dd')); // 2025/12/31`}
        result="2025/03/15"
      />

      <CodeExample
        title="تنظیم اجزای زمان"
        description="تغییر ساعت، دقیقه، ثانیه در یک تاریخ:"
        code={`import { 
  setHours, setMinutes, setSeconds, setMilliseconds,
  format 
} from 'date-fns';

const date = new Date(2024, 2, 15, 10, 20, 30, 100);

// تنظیم ساعت
const newHour = setHours(date, 15);
console.log(format(newHour, 'HH:mm:ss')); // 15:20:30

// تنظیم دقیقه
const newMinute = setMinutes(date, 45);
console.log(format(newMinute, 'HH:mm:ss')); // 10:45:30

// تنظیم ثانیه
const newSecond = setSeconds(date, 0);
console.log(format(newSecond, 'HH:mm:ss')); // 10:20:00

// تنظیم زمان کامل
const fullTime = setMilliseconds(
  setSeconds(setMinutes(setHours(date, 14), 30), 0), 0
);
console.log(format(fullTime, 'HH:mm:ss.SSS')); // 14:30:00.000`}
        result="15:20:30"
      />

      <CodeExample
        title="تنظیم روز هفته"
        description="تنظیم تاریخ به روز خاصی از هفته:"
        code={`import { setDay, format } from 'date-fns';

const date = new Date(2024, 2, 15); // جمعه 15 مارس

// تنظیم به دوشنبه (1)
const monday = setDay(date, 1);
console.log(format(monday, 'EEEE dd/MM')); // دوشنبه 11/03

// تنظیم به چهارشنبه (3)
const wednesday = setDay(date, 3);
console.log(format(wednesday, 'EEEE dd/MM')); // چهارشنبه 13/03

// تنظیم به یکشنبه (0)
const sunday = setDay(date, 0);
console.log(format(sunday, 'EEEE dd/MM')); // یکشنبه 17/03

// نکته: 0=یکشنبه، 1=دوشنبه، ... ، 6=شنبه`}
        result="دوشنبه 11/03"
      />

      <CodeExample
        title="تنظیم فصل و هفته"
        description="تنظیم تاریخ بر اساس فصل و شماره هفته:"
        code={`import { setQuarter, setWeek, setDayOfYear, format } from 'date-fns';

const date = new Date(2024, 2, 15); // 15 مارس

// تنظیم فصل (1-4)
const q2 = setQuarter(date, 2); // فصل دوم
console.log(format(q2, 'yyyy/MM/dd')); // 2024/06/15

const q4 = setQuarter(date, 4); // فصل چهارم
console.log(format(q4, 'yyyy/MM/dd')); // 2024/12/15

// تنظیم شماره هفته در سال
const week30 = setWeek(date, 30);
console.log(format(week30, 'yyyy/MM/dd')); 

// تنظیم روز سال (1-366)
const day100 = setDayOfYear(date, 100);
console.log(format(day100, 'yyyy/MM/dd')); // روز صدم سال`}
        result="2024/06/15"
      />

      <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-violet-800 mb-3">نکات مهم در استفاده از توابع Set</h3>
        <ul className="space-y-2 text-violet-700 text-sm">
          <li>• تمام توابع Set یک آبجکت Date جدید بازمی‌گردانند (immutable)</li>
          <li>• ماه‌ها از 0 شروع می‌شوند (0=ژانویه، 11=دسامبر)</li>
          <li>• روزهای هفته از 0 شروع می‌شوند (0=یکشنبه، 6=شنبه)</li>
          <li>• برای مقادیر نامعتبر، تاریخ خودکار تنظیم می‌شود</li>
          <li>• می‌توانید چند تابع Set را زنجیره‌ای استفاده کنید</li>
        </ul>
      </div>
    </div>
  );
};

export default SetSection;
