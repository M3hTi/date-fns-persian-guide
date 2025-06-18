
import React from 'react';
import CodeExample from '../CodeExample';

const ConversionHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-xl p-8 border border-emerald-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع تبدیل واحدها</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns مجموعه‌ای از توابع مفید برای تبدیل بین واحدهای زمانی مختلف فراهم می‌کند.
        </p>
      </div>

      <CodeExample
        title="تبدیل روز و هفته"
        description="تبدیل بین روز و هفته با استفاده از daysToWeeks و weeksToDays:"
        code={`import { daysToWeeks, weeksToDays } from 'date-fns';

// تبدیل روز به هفته
console.log(daysToWeeks(14));    // 2 - دو هفته
console.log(daysToWeeks(10));    // 1.42... - یک هفته و نیم تقریبی
console.log(daysToWeeks(7));     // 1 - یک هفته

// تبدیل هفته به روز
console.log(weeksToDays(2));     // 14 - دو هفته
console.log(weeksToDays(1.5));   // 10.5 - یک هفته و نیم
console.log(weeksToDays(4));     // 28 - چهار هفته

// کاربرد عملی
const projectDuration = 35; // روز
const projectWeeks = daysToWeeks(projectDuration);
console.log(\`مدت پروژه: \${projectWeeks.toFixed(1)} هفته\`);`}
        result="2"
      />

      <CodeExample
        title="تبدیل ساعت"
        description="تبدیل ساعت به واحدهای کوچک‌تر:"
        code={`import { 
  hoursToMilliseconds, 
  hoursToMinutes, 
  hoursToSeconds 
} from 'date-fns';

// تبدیل ساعت به واحدهای مختلف
console.log(hoursToMinutes(2));      // 120 - دو ساعت
console.log(hoursToSeconds(1));      // 3600 - یک ساعت
console.log(hoursToMilliseconds(1)); // 3600000 - یک ساعت

// محاسبه ساعت کاری
const workingHours = 8;
const workingMinutes = hoursToMinutes(workingHours);
const workingSeconds = hoursToSeconds(workingHours);

console.log(\`ساعت کاری روزانه:\`);
console.log(\`- \${workingHours} ساعت\`);
console.log(\`- \${workingMinutes} دقیقه\`);
console.log(\`- \${workingSeconds} ثانیه\`);`}
        result="120"
      />

      <CodeExample
        title="تبدیل دقیقه"
        description="تبدیل دقیقه به واحدهای مختلف:"
        code={`import { 
  minutesToHours, 
  minutesToMilliseconds, 
  minutesToSeconds 
} from 'date-fns';

// تبدیل دقیقه به واحدهای مختلف
console.log(minutesToHours(120));        // 2 - دو ساعت
console.log(minutesToSeconds(5));        // 300 - پنج دقیقه
console.log(minutesToMilliseconds(1));   // 60000 - یک دقیقه

// تبدیل زمان جلسه
const meetingMinutes = 90;
const meetingHours = minutesToHours(meetingMinutes);
const meetingSeconds = minutesToSeconds(meetingMinutes);

console.log(\`مدت جلسه:\`);
console.log(\`- \${meetingMinutes} دقیقه\`);
console.log(\`- \${meetingHours} ساعت\`);
console.log(\`- \${meetingSeconds} ثانیه\`);

// محاسبه استراحت
const breakTime = 15; // دقیقه
console.log(\`زمان استراحت: \${minutesToSeconds(breakTime)} ثانیه\`);`}
        result="2"
      />

      <CodeExample
        title="تبدیل میلی‌ثانیه"
        description="تبدیل میلی‌ثانیه به واحدهای بزرگ‌تر:"
        code={`import { 
  millisecondsToHours, 
  millisecondsToMinutes, 
  millisecondsToSeconds 
} from 'date-fns';

// تبدیل میلی‌ثانیه به واحدهای مختلف
console.log(millisecondsToSeconds(5000));    // 5 - پنج ثانیه
console.log(millisecondsToMinutes(60000));   // 1 - یک دقیقه
console.log(millisecondsToHours(3600000));   // 1 - یک ساعت

// اندازه‌گیری عملکرد
const startTime = Date.now();
// ... انجام عملیات
const endTime = Date.now();
const duration = endTime - startTime;

console.log(\`زمان اجرا:\`);
console.log(\`- \${duration} میلی‌ثانیه\`);
console.log(\`- \${millisecondsToSeconds(duration)} ثانیه\`);

// تنظیم تایمر
const timerMs = 30000; // 30 ثانیه
console.log(\`تایمر: \${millisecondsToSeconds(timerMs)} ثانیه\`);`}
        result="5"
      />

      <CodeExample
        title="تبدیل ثانیه"
        description="تبدیل ثانیه به واحدهای مختلف:"
        code={`import { 
  secondsToHours, 
  secondsToMilliseconds, 
  secondsToMinutes 
} from 'date-fns';

// تبدیل ثانیه به واحدهای مختلف
console.log(secondsToMinutes(120));        // 2 - دو دقیقه
console.log(secondsToHours(7200));         // 2 - دو ساعت
console.log(secondsToMilliseconds(5));     // 5000 - پنج ثانیه

// محاسبه مدت ویدیو
const videoDuration = 3665; // ثانیه
const hours = Math.floor(secondsToHours(videoDuration));
const minutes = Math.floor(secondsToMinutes(videoDuration % 3600));
const seconds = videoDuration % 60;

console.log(\`مدت ویدیو: \${hours}:\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`);

// تبدیل countdown
const countdown = 300; // 5 دقیقه
console.log(\`شمارش معکوس: \${secondsToMinutes(countdown)} دقیقه\`);`}
        result="2"
      />

      <CodeExample
        title="تبدیل ماه و سال"
        description="تبدیل بین ماه، فصل و سال:"
        code={`import { 
  monthsToQuarters, 
  monthsToYears, 
  quartersToMonths, 
  quartersToYears,
  yearsToMonths,
  yearsToQuarters,
  yearsToDays
} from 'date-fns';

// تبدیل ماه
console.log(monthsToQuarters(6));    // 2 - دو فصل
console.log(monthsToYears(24));      // 2 - دو سال

// تبدیل فصل
console.log(quartersToMonths(3));    // 9 - نه ماه
console.log(quartersToYears(8));     // 2 - دو سال

// تبدیل سال
console.log(yearsToMonths(2));       // 24 - بیست و چهار ماه
console.log(yearsToQuarters(3));     // 12 - دوازده فصل
console.log(yearsToDays(1));         // 365 - یک سال (غیر کبیسه)

// محاسبه دوره قرارداد
const contractYears = 3;
const contractMonths = yearsToMonths(contractYears);
const contractQuarters = yearsToQuarters(contractYears);

console.log(\`مدت قرارداد:\`);
console.log(\`- \${contractYears} سال\`);
console.log(\`- \${contractMonths} ماه\`);
console.log(\`- \${contractQuarters} فصل\`);`}
        result="2"
      />

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-cyan-800 mb-3">فهرست کامل توابع تبدیل</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-cyan-700">
          <div className="space-y-2">
            <div><strong>روز و هفته:</strong></div>
            <div>• daysToWeeks - تبدیل روز به هفته</div>
            <div>• weeksToDays - تبدیل هفته به روز</div>
            
            <div className="mt-4"><strong>ساعت:</strong></div>
            <div>• hoursToMilliseconds - ساعت به میلی‌ثانیه</div>
            <div>• hoursToMinutes - ساعت به دقیقه</div>
            <div>• hoursToSeconds - ساعت به ثانیه</div>
          </div>
          <div className="space-y-2">
            <div><strong>دقیقه:</strong></div>
            <div>• minutesToHours - دقیقه به ساعت</div>
            <div>• minutesToMilliseconds - دقیقه به میلی‌ثانیه</div>
            <div>• minutesToSeconds - دقیقه به ثانیه</div>
            
            <div className="mt-4"><strong>ثانیه:</strong></div>
            <div>• secondsToHours - ثانیه به ساعت</div>
            <div>• secondsToMilliseconds - ثانیه به میلی‌ثانیه</div>
            <div>• secondsToMinutes - ثانیه به دقیقه</div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">کاربردهای عملی تبدیل واحدها</h3>
        <ul className="space-y-2 text-purple-700 text-sm">
          <li>• محاسبه مدت زمان پروژه‌ها</li>
          <li>• تبدیل زمان در تایمرها و شمارش معکوس</li>
          <li>• اندازه‌گیری عملکرد و زمان اجرای کد</li>
          <li>• محاسبه مدت قراردادها و دوره‌های زمانی</li>
          <li>• تنظیم timeout و interval</li>
          <li>• نمایش زمان در فرمت‌های مختلف</li>
        </ul>
      </div>
    </div>
  );
};

export default ConversionHelpersSection;
