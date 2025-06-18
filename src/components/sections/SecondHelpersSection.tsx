
import React from 'react';
import CodeExample from '../CodeExample';

const SecondHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع ثانیه</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          مجموعه کاملی از توابع برای کار با ثانیه‌ها در date-fns.
        </p>
      </div>

      <CodeExample
        title="اضافه و کم کردن ثانیه"
        description="استفاده از addSeconds و subSeconds:"
        code={`import { addSeconds, subSeconds, format } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45); // 15 مارس، 14:30:45

// اضافه کردن ثانیه
const add30s = addSeconds(date, 30);
const add60s = addSeconds(date, 60);
const add3600s = addSeconds(date, 3600); // یک ساعت

console.log('زمان اصلی:', format(date, 'HH:mm:ss'));
console.log('+30 ثانیه:', format(add30s, 'HH:mm:ss'));
console.log('+60 ثانیه:', format(add60s, 'HH:mm:ss'));
console.log('+3600 ثانیه:', format(add3600s, 'HH:mm:ss'));

// کم کردن ثانیه
const sub15s = subSeconds(date, 15);
const sub120s = subSeconds(date, 120); // دو دقیقه

console.log('-15 ثانیه:', format(sub15s, 'HH:mm:ss'));
console.log('-120 ثانیه:', format(sub120s, 'HH:mm:ss'));

// محاسبه زمان انتظار
const waitTime = 45; // ثانیه
const completionTime = addSeconds(new Date(), waitTime);
console.log(\`تکمیل در: \${format(completionTime, 'HH:mm:ss')}\`);`}
        result="14:30:45"
      />

      <CodeExample
        title="شروع و پایان ثانیه"
        description="استفاده از startOfSecond و endOfSecond:"
        code={`import { startOfSecond, endOfSecond, format } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45, 789); // با میلی‌ثانیه

// شروع ثانیه (صفر کردن میلی‌ثانیه)
const startSec = startOfSecond(date);
console.log('شروع ثانیه:', format(startSec, 'HH:mm:ss.SSS'));

// پایان ثانیه (999 میلی‌ثانیه)
const endSec = endOfSecond(date);
console.log('پایان ثانیه:', format(endSec, 'HH:mm:ss.SSS'));

// مقایسه
console.log('اصلی:', format(date, 'HH:mm:ss.SSS'));

// تنظیم تایمر دقیق
function setTimerToNextSecond(callback) {
  const now = new Date();
  const nextSecond = startOfSecond(addSeconds(now, 1));
  const delay = nextSecond.getTime() - now.getTime();
  
  console.log(\`تایمر تنظیم شد برای \${delay}ms\`);
  setTimeout(callback, delay);
}

// استفاده
setTimerToNextSecond(() => {
  console.log('ثانیه جدید!', format(new Date(), 'HH:mm:ss'));
});`}
        result="14:30:45.000"
      />

      <CodeExample
        title="مقایسه ثانیه‌ها"
        description="استفاده از isSameSecond و isThisSecond:"
        code={`import { isSameSecond, isThisSecond, format } from 'date-fns';

const date1 = new Date(2024, 2, 15, 14, 30, 45, 123);
const date2 = new Date(2024, 2, 15, 14, 30, 45, 789);
const date3 = new Date(2024, 2, 15, 14, 30, 46, 0);

// مقایسه ثانیه (میلی‌ثانیه نادیده گرفته می‌شود)
console.log('همان ثانیه:', isSameSecond(date1, date2)); // true
console.log('ثانیه متفاوت:', isSameSecond(date1, date3)); // false

// بررسی ثانیه فعلی
const now = new Date();
console.log('ثانیه فعلی:', isThisSecond(now)); // true

// تاخیر یک ثانیه
setTimeout(() => {
  console.log('بعد از یک ثانیه:', isThisSecond(now)); // false
}, 1000);

// گروه‌بندی رویدادها بر اساس ثانیه
const events = [
  { time: new Date(2024, 2, 15, 14, 30, 45, 100), action: 'click' },
  { time: new Date(2024, 2, 15, 14, 30, 45, 500), action: 'hover' },
  { time: new Date(2024, 2, 15, 14, 30, 46, 0), action: 'scroll' }
];

const eventsInSameSecond = events.filter(event => 
  isSameSecond(event.time, events[0].time)
);

console.log(\`رویدادهای همان ثانیه: \${eventsInSameSecond.length}\`);`}
        result="true"
      />

      <CodeExample
        title="دریافت و تنظیم ثانیه"
        description="استفاده از getSeconds و setSeconds:"
        code={`import { getSeconds, setSeconds, format } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45); // 45 ثانیه

// دریافت ثانیه
const seconds = getSeconds(date);
console.log('ثانیه فعلی:', seconds); // 45

// تنظیم ثانیه‌های مختلف
const setTo0 = setSeconds(date, 0);
const setTo30 = setSeconds(date, 30);
const setTo59 = setSeconds(date, 59);

console.log('اصلی:', format(date, 'HH:mm:ss'));
console.log('ثانیه 0:', format(setTo0, 'HH:mm:ss'));
console.log('ثانیه 30:', format(setTo30, 'HH:mm:ss'));
console.log('ثانیه 59:', format(setTo59, 'HH:mm:ss'));

// ساخت زمان‌های منظم
const baseTime = new Date(2024, 2, 15, 14, 30, 0);
const regularTimes = [0, 15, 30, 45].map(sec => setSeconds(baseTime, sec));

console.log('زمان‌های منظم:');
regularTimes.forEach((time, index) => {
  console.log(\`زمان \${index + 1}: \${format(time, 'HH:mm:ss')}\`);
});

// تنظیم زمان دقیق
function setExactTime(hour, minute, second) {
  const today = new Date();
  return setSeconds(
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, minute),
    second
  );
}

const meetingTime = setExactTime(15, 30, 0);
console.log('زمان جلسه:', format(meetingTime, 'HH:mm:ss'));`}
        result="45"
      />

      <CodeExample
        title="محاسبه تفاوت ثانیه"
        description="استفاده از differenceInSeconds:"
        code={`import { differenceInSeconds, format, addMinutes } from 'date-fns';

const start = new Date(2024, 2, 15, 14, 30, 0);
const end = new Date(2024, 2, 15, 14, 32, 30);

// محاسبه تفاوت
const diffSeconds = differenceInSeconds(end, start);
console.log(\`تفاوت: \${diffSeconds} ثانیه\`); // 150 ثانیه

// تبدیل به دقیقه و ثانیه
const minutes = Math.floor(diffSeconds / 60);
const remainingSeconds = diffSeconds % 60;
console.log(\`\${minutes} دقیقه و \${remainingSeconds} ثانیه\`);

// محاسبه مدت جلسه
const meetingStart = new Date(2024, 2, 15, 10, 0, 0);
const meetingEnd = new Date(2024, 2, 15, 11, 30, 0);
const meetingDuration = differenceInSeconds(meetingEnd, meetingStart);

console.log(\`مدت جلسه: \${meetingDuration} ثانیه\`);
console.log(\`معادل: \${meetingDuration / 60} دقیقه\`);

// شمارش معکوس
function countdown(targetTime) {
  const now = new Date();
  const remaining = differenceInSeconds(targetTime, now);
  
  if (remaining <= 0) {
    return 'زمان به پایان رسیده!';
  }
  
  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;
  
  return \`\${hours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
}

const deadline = addMinutes(new Date(), 5); // 5 دقیقه دیگر
console.log('شمارش معکوس:', countdown(deadline));`}
        result="150"
      />

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-cyan-800 mb-3">فهرست توابع ثانیه</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-cyan-700">
          <div className="space-y-2">
            <div><strong>محاسبات:</strong></div>
            <div>• addSeconds - اضافه کردن ثانیه</div>
            <div>• subSeconds - کم کردن ثانیه</div>
            <div>• differenceInSeconds - تفاوت به ثانیه</div>
            
            <div className="mt-3"><strong>مقایسه:</strong></div>
            <div>• isSameSecond - همان ثانیه</div>
            <div>• isThisSecond - ثانیه فعلی</div>
          </div>
          <div className="space-y-2">
            <div><strong>دریافت/تنظیم:</strong></div>
            <div>• getSeconds - دریافت ثانیه (0-59)</div>
            <div>• setSeconds - تنظیم ثانیه</div>
            
            <div className="mt-3"><strong>محدوده:</strong></div>
            <div>• startOfSecond - شروع ثانیه</div>
            <div>• endOfSecond - پایان ثانیه</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHelpersSection;
