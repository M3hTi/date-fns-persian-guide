
import React from 'react';
import CodeExample from '../CodeExample';

const ConstantsSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-100 rounded-xl p-8 border border-indigo-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ثوابت و مقادیر از پیش تعریف شده</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns مجموعه‌ای از ثوابت مفید برای محاسبات زمانی و مقایسه‌ها ارائه می‌دهد.
        </p>
      </div>

      <CodeExample
        title="ثوابت زمانی"
        description="مقادیر ثابت برای واحدهای زمانی (بر حسب میلی‌ثانیه):"
        code={`import { 
  secondsInMinute, secondsInHour, secondsInDay,
  secondsInWeek, secondsInMonth, secondsInYear,
  millisecondsInSecond, millisecondsInMinute,
  millisecondsInHour, millisecondsInDay
} from 'date-fns/constants';

// ثوابت بر حسب ثانیه
console.log(secondsInMinute); // 60
console.log(secondsInHour);   // 3600
console.log(secondsInDay);    // 86400
console.log(secondsInWeek);   // 604800
console.log(secondsInMonth);  // 2629746 (متوسط)
console.log(secondsInYear);   // 31556952 (متوسط)

// ثوابت بر حسب میلی‌ثانیه
console.log(millisecondsInSecond); // 1000
console.log(millisecondsInMinute); // 60000
console.log(millisecondsInHour);   // 3600000
console.log(millisecondsInDay);    // 86400000

// استفاده در محاسبات
const threeDaysInMs = 3 * millisecondsInDay;
const twoHoursInMs = 2 * millisecondsInHour;`}
        result="60"
      />

      <CodeExample
        title="ثوابت تقویمی"
        description="مقادیر ثابت برای کار با تقویم:"
        code={`import { 
  daysInWeek, daysInYear, monthsInQuarter, monthsInYear,
  quartersInYear, maxTime, minTime
} from 'date-fns/constants';

// ثوابت تقویمی
console.log(daysInWeek);       // 7
console.log(daysInYear);       // 365 (سال عادی)
console.log(monthsInQuarter);  // 3
console.log(monthsInYear);     // 12
console.log(quartersInYear);   // 4

// حداکثر و حداقل تاریخ قابل پردازش
console.log(maxTime); // 8640000000000000 (حداکثر timestamp)
console.log(minTime); // -8640000000000000 (حداقل timestamp)

// تبدیل به تاریخ
const maxDate = new Date(maxTime);
const minDate = new Date(minTime);

console.log(maxDate.getFullYear()); // 275760
console.log(minDate.getFullYear()); // -271821`}
        result="7"
      />

      <CodeExample
        title="استفاده عملی ثوابت"
        description="کاربرد ثوابت در محاسبات واقعی:"
        code={`import { 
  millisecondsInDay, millisecondsInHour, millisecondsInMinute,
  secondsInDay, daysInWeek 
} from 'date-fns/constants';
import { format, addMilliseconds } from 'date-fns';

const now = new Date();

// محاسبه زمان‌های مختلف
const tomorrow = addMilliseconds(now, millisecondsInDay);
const nextWeek = addMilliseconds(now, daysInWeek * millisecondsInDay);
const in2Hours = addMilliseconds(now, 2 * millisecondsInHour);

console.log('فردا:', format(tomorrow, 'yyyy/MM/dd'));
console.log('هفته آینده:', format(nextWeek, 'yyyy/MM/dd'));
console.log('دو ساعت دیگر:', format(in2Hours, 'HH:mm'));

// محاسبه مدت زمان کاری (8 ساعت در روز)
const workingHoursPerDay = 8;
const workingDayInMs = workingHoursPerDay * millisecondsInHour;
console.log(\`یک روز کاری: \${workingDayInMs} میلی‌ثانیه\`);

// محاسبه deadline پروژه (30 روز کاری)
const projectDays = 30;
const projectDurationMs = projectDays * millisecondsInDay;
const projectDeadline = addMilliseconds(now, projectDurationMs);
console.log('ددلاین پروژه:', format(projectDeadline, 'yyyy/MM/dd'));`}
        result="فردا: 2024/03/16"
      />

      <CodeExample
        title="ثوابت برای validation"
        description="استفاده از ثوابت برای اعتبارسنجی:"
        code={`import { maxTime, minTime, millisecondsInDay } from 'date-fns/constants';
import { isValid } from 'date-fns';

// تابع اعتبارسنجی بازه زمانی
function isValidDateRange(startDate, endDate) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  
  // بررسی حداقل و حداکثر
  if (start < minTime || start > maxTime) return false;
  if (end < minTime || end > maxTime) return false;
  
  // بررسی منطقی بودن بازه
  if (start >= end) return false;
  
  // بررسی حداکثر طول بازه (مثلاً 1 سال)
  const maxRangeMs = 365 * millisecondsInDay;
  if (end - start > maxRangeMs) return false;
  
  return true;
}

// تست تابع
const start = new Date(2024, 2, 1);
const end = new Date(2024, 2, 15);
const longEnd = new Date(2025, 2, 15);

console.log(isValidDateRange(start, end));     // true
console.log(isValidDateRange(start, longEnd)); // false (بیش از 1 سال)
console.log(isValidDateRange(end, start));     // false (معکوس)

// محاسبه حداکثر تاریخ ممکن برای انتخاب
const today = new Date();
const maxSelectableDate = new Date(today.getTime() + 365 * millisecondsInDay);
console.log('حداکثر تاریخ قابل انتخاب:', maxSelectableDate.toDateString());`}
        result="true"
      />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">فهرست کامل ثوابت</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-700">
          <div className="space-y-3">
            <div>
              <strong>زمان (ثانیه):</strong>
              <div className="text-xs mt-1">
                secondsInMinute (60)<br/>
                secondsInHour (3600)<br/>
                secondsInDay (86400)<br/>
                secondsInWeek (604800)
              </div>
            </div>
            <div>
              <strong>زمان (میلی‌ثانیه):</strong>
              <div className="text-xs mt-1">
                millisecondsInSecond (1000)<br/>
                millisecondsInMinute (60000)<br/>
                millisecondsInHour (3600000)<br/>
                millisecondsInDay (86400000)
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <strong>تقویم:</strong>
              <div className="text-xs mt-1">
                daysInWeek (7)<br/>
                monthsInQuarter (3)<br/>
                monthsInYear (12)<br/>
                quartersInYear (4)
              </div>
            </div>
            <div>
              <strong>محدودیت‌ها:</strong>
              <div className="text-xs mt-1">
                maxTime (8640000000000000)<br/>
                minTime (-8640000000000000)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstantsSection;
