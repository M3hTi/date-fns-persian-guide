
import React from 'react';
import CodeExample from '../CodeExample';

const ConstantsSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-xl p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ثوابت و مقادیر ثابت</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns مجموعه‌ای از ثوابت مفید برای محاسبات زمانی و تبدیل واحدها فراهم می‌کند.
        </p>
      </div>

      <CodeExample
        title="ثوابت زمانی پایه"
        description="ثوابت برای تبدیل بین واحدهای زمانی مختلف:"
        code={`import {
  millisecondsInSecond,
  millisecondsInMinute,
  millisecondsInHour,
  millisecondsInDay,
  millisecondsInWeek,
  secondsInMinute,
  secondsInHour,
  secondsInDay,
  minutesInHour,
  minutesInDay,
  hoursInDay,
  daysInWeek
} from 'date-fns/constants';

// میلی‌ثانیه
console.log('یک ثانیه:', millisecondsInSecond);     // 1000
console.log('یک دقیقه:', millisecondsInMinute);     // 60000
console.log('یک ساعت:', millisecondsInHour);        // 3600000
console.log('یک روز:', millisecondsInDay);          // 86400000
console.log('یک هفته:', millisecondsInWeek);        // 604800000

// ثانیه
console.log('ثانیه در دقیقه:', secondsInMinute);    // 60
console.log('ثانیه در ساعت:', secondsInHour);       // 3600
console.log('ثانیه در روز:', secondsInDay);         // 86400

// دقیقه و ساعت
console.log('دقیقه در ساعت:', minutesInHour);      // 60
console.log('دقیقه در روز:', minutesInDay);        // 1440
console.log('ساعت در روز:', hoursInDay);           // 24
console.log('روز در هفته:', daysInWeek);           // 7`}
        result="1000"
      />

      <CodeExample
        title="ثوابت تقویمی"
        description="ثوابت مربوط به ماه‌ها، فصل‌ها و دوره‌های تقویمی:"
        code={`import {
  monthsInQuarter,
  monthsInYear,
  quartersInYear,
  daysInYear,
  maxTime,
  minTime
} from 'date-fns/constants';

// تقویم
console.log('ماه در فصل:', monthsInQuarter);        // 3
console.log('ماه در سال:', monthsInYear);           // 12
console.log('فصل در سال:', quartersInYear);         // 4
console.log('روز در سال:', daysInYear);            // 365

// حدود زمانی JavaScript
console.log('حداکثر زمان:', new Date(maxTime));
// Wed Apr 20 2275 01:00:00 GMT+0430

console.log('حداقل زمان:', new Date(minTime));
// Tue Apr 20 -271821 01:00:00 GMT+0430

// محاسبه با ثوابت
const hoursInWeek = hoursInDay * daysInWeek;
console.log('ساعت در هفته:', hoursInWeek);         // 168

const minutesInWeek = minutesInDay * daysInWeek;
console.log('دقیقه در هفته:', minutesInWeek);     // 10080`}
        result="3"
      />

      <CodeExample
        title="استفاده عملی از ثوابت"
        description="کاربرد ثوابت در محاسبات واقعی:"
        code={`import { 
  millisecondsInDay, 
  millisecondsInHour,
  secondsInDay,
  minutesInHour 
} from 'date-fns/constants';
import { format, addMilliseconds } from 'date-fns';

// تبدیل روز به میلی‌ثانیه
function addDaysInMs(date, days) {
  return addMilliseconds(date, days * millisecondsInDay);
}

const today = new Date();
const tomorrow = addDaysInMs(today, 1);
console.log('فردا:', format(tomorrow, 'yyyy/MM/dd'));

// محاسبه deadline (5 روز کاری)
const workingDays = 5;
const deadline = addDaysInMs(today, workingDays);
console.log('مهلت:', format(deadline, 'yyyy/MM/dd'));

// تبدیل ساعت کاری به میلی‌ثانیه
const workingHours = 8;
const workingTimeMs = workingHours * millisecondsInHour;
console.log('زمان کاری به ms:', workingTimeMs);

// محاسبه تعداد ساعات کاری در ماه
const workingDaysInMonth = 22;
const totalWorkingHours = workingDaysInMonth * workingHours;
console.log('ساعت کاری در ماه:', totalWorkingHours);`}
        result="فردا: 2024/03/16"
      />

      <CodeExample
        title="ساخت تبدیل‌کننده واحد"
        description="استفاده از ثوابت برای ساخت تابع‌های تبدیل:"
        code={`import {
  millisecondsInSecond,
  millisecondsInMinute,
  millisecondsInHour,
  millisecondsInDay,
  secondsInMinute,
  secondsInHour,
  minutesInHour
} from 'date-fns/constants';

// کلاس تبدیل‌کننده زمان
class TimeConverter {
  static msToSeconds(ms) {
    return Math.floor(ms / millisecondsInSecond);
  }
  
  static msToMinutes(ms) {
    return Math.floor(ms / millisecondsInMinute);
  }
  
  static msToHours(ms) {
    return Math.floor(ms / millisecondsInHour);
  }
  
  static msToDays(ms) {
    return Math.floor(ms / millisecondsInDay);
  }
  
  static formatDuration(ms) {
    const days = this.msToDays(ms);
    const hours = this.msToHours(ms % millisecondsInDay);
    const minutes = this.msToMinutes(ms % millisecondsInHour);
    const seconds = this.msToSeconds(ms % millisecondsInMinute);
    
    return \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;
  }
}

// استفاده
const duration = 90061000; // حدود یک روز
console.log(TimeConverter.formatDuration(duration));
// خروجی: "1d 1h 1m 1s"`}
        result="1d 1h 1m 1s"
      />

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-emerald-800 mb-3">جدول ثوابت date-fns</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-emerald-700">
            <thead>
              <tr className="border-b border-emerald-200">
                <th className="text-right py-2">ثابت</th>
                <th className="text-right py-2">مقدار</th>
                <th className="text-right py-2">توضیح</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              <tr><td><code>millisecondsInSecond</code></td><td>1000</td><td>میلی‌ثانیه در ثانیه</td></tr>
              <tr><td><code>secondsInMinute</code></td><td>60</td><td>ثانیه در دقیقه</td></tr>
              <tr><td><code>minutesInHour</code></td><td>60</td><td>دقیقه در ساعت</td></tr>
              <tr><td><code>hoursInDay</code></td><td>24</td><td>ساعت در روز</td></tr>
              <tr><td><code>daysInWeek</code></td><td>7</td><td>روز در هفته</td></tr>
              <tr><td><code>monthsInYear</code></td><td>12</td><td>ماه در سال</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-violet-800 mb-3">نکات استفاده از ثوابت</h3>
        <ul className="space-y-2 text-violet-700 text-sm">
          <li>• استفاده از ثوابت کد را خواناتر و قابل نگهداری‌تر می‌کند</li>
          <li>• از magic number ها جلوگیری می‌کند</li>
          <li>• محاسبات پیچیده زمانی را آسان‌تر می‌کند</li>
          <li>• امکان خطا در تایپ اعداد را کاهش می‌دهد</li>
          <li>• برای تبدیل بین واحدهای زمانی مختلف مفید است</li>
        </ul>
      </div>
    </div>
  );
};

export default ConstantsSection;
