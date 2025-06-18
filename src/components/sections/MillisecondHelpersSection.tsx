
import React from 'react';
import CodeExample from '../CodeExample';

const MillisecondHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-50 to-pink-100 rounded-xl p-8 border border-red-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع میلی‌ثانیه</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          توابع مربوط به میلی‌ثانیه برای کارهای دقیق زمان‌سنجی و اندازه‌گیری عملکرد.
        </p>
      </div>

      <CodeExample
        title="اضافه کردن میلی‌ثانیه"
        description="استفاده از addMilliseconds برای اضافه کردن میلی‌ثانیه:"
        code={`import { addMilliseconds, format } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45, 123); // 15 مارس، 14:30:45.123

// اضافه کردن میلی‌ثانیه‌های مختلف
const add500ms = addMilliseconds(date, 500);
const add1000ms = addMilliseconds(date, 1000);
const add5000ms = addMilliseconds(date, 5000);

console.log('زمان اصلی:', format(date, 'HH:mm:ss.SSS'));
console.log('+500ms:', format(add500ms, 'HH:mm:ss.SSS'));
console.log('+1000ms:', format(add1000ms, 'HH:mm:ss.SSS'));
console.log('+5000ms:', format(add5000ms, 'HH:mm:ss.SSS'));

// اضافه کردن تاخیر به انیمیشن
const animationStart = new Date();
const delays = [100, 250, 500, 750];

delays.forEach((delay, index) => {
  const animationTime = addMilliseconds(animationStart, delay);
  console.log(\`انیمیشن \${index + 1}: \${format(animationTime, 'HH:mm:ss.SSS')}\`);
});`}
        result="14:30:45.123"
      />

      <CodeExample
        title="محاسبه تفاوت میلی‌ثانیه"
        description="استفاده از differenceInMilliseconds برای محاسبه تفاوت:"
        code={`import { differenceInMilliseconds, format } from 'date-fns';

const startTime = new Date(2024, 2, 15, 14, 30, 45, 100);
const endTime = new Date(2024, 2, 15, 14, 30, 47, 350);

// محاسبه تفاوت
const diffMs = differenceInMilliseconds(endTime, startTime);
console.log(\`تفاوت: \${diffMs} میلی‌ثانیه\`); // 2250 میلی‌ثانیه

// اندازه‌گیری زمان اجرای کد
function measurePerformance(operation, name) {
  const start = new Date();
  
  operation(); // اجرای عملیات
  
  const end = new Date();
  const duration = differenceInMilliseconds(end, start);
  console.log(\`\${name}: \${duration}ms\`);
  return duration;
}

// تست عملکرد
measurePerformance(() => {
  // شبیه‌سازی عملیات
  let sum = 0;
  for(let i = 0; i < 1000000; i++) {
    sum += i;
  }
}, 'محاسبه مجموع');

// محاسبه زمان پاسخ
const requestStart = new Date(2024, 2, 15, 14, 30, 0, 0);
const responseTime = new Date(2024, 2, 15, 14, 30, 0, 250);
const latency = differenceInMilliseconds(responseTime, requestStart);
console.log(\`تاخیر شبکه: \${latency}ms\`);`}
        result="2250"
      />

      <CodeExample
        title="دریافت و تنظیم میلی‌ثانیه"
        description="استفاده از getMilliseconds و setMilliseconds:"
        code={`import { getMilliseconds, setMilliseconds, format } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45, 789);

// دریافت میلی‌ثانیه
const ms = getMilliseconds(date);
console.log('میلی‌ثانیه فعلی:', ms); // 789

// تنظیم میلی‌ثانیه‌های مختلف
const setTo0 = setMilliseconds(date, 0);
const setTo500 = setMilliseconds(date, 500);
const setTo999 = setMilliseconds(date, 999);

console.log('اصلی:', format(date, 'HH:mm:ss.SSS'));
console.log('صفر:', format(setTo0, 'HH:mm:ss.SSS'));
console.log('500:', format(setTo500, 'HH:mm:ss.SSS'));
console.log('999:', format(setTo999, 'HH:mm:ss.SSS'));

// گرد کردن به نزدیک‌ترین ثانیه
function roundToSecond(date) {
  const ms = getMilliseconds(date);
  return ms >= 500 ? 
    setMilliseconds(date, 0) : 
    setMilliseconds(date, 0);
}

const roundedDate = roundToSecond(date);
console.log('گرد شده:', format(roundedDate, 'HH:mm:ss.SSS'));`}
        result="789"
      />

      <CodeExample
        title="کار با میلی‌ثانیه در تایمر"
        description="استفاده از میلی‌ثانیه برای تایمر و شمارش معکوس:"
        code={`import { addMilliseconds, differenceInMilliseconds, format } from 'date-fns';

// کلاس تایمر
class PrecisionTimer {
  constructor(durationMs) {
    this.duration = durationMs;
    this.startTime = null;
    this.endTime = null;
  }
  
  start() {
    this.startTime = new Date();
    this.endTime = addMilliseconds(this.startTime, this.duration);
    console.log('تایمر شروع شد:', format(this.startTime, 'HH:mm:ss.SSS'));
    console.log('پایان در:', format(this.endTime, 'HH:mm:ss.SSS'));
  }
  
  getRemainingTime() {
    if (!this.startTime) return this.duration;
    
    const now = new Date();
    const remaining = differenceInMilliseconds(this.endTime, now);
    return Math.max(0, remaining);
  }
  
  getProgress() {
    if (!this.startTime) return 0;
    
    const now = new Date();
    const elapsed = differenceInMilliseconds(now, this.startTime);
    return Math.min(100, (elapsed / this.duration) * 100);
  }
}

// استفاده از تایمر
const timer = new PrecisionTimer(5000); // 5 ثانیه
timer.start();

// شبیه‌سازی چک کردن تایمر
setTimeout(() => {
  console.log(\`باقیمانده: \${timer.getRemainingTime()}ms\`);
  console.log(\`پیشرفت: \${timer.getProgress().toFixed(1)}%\`);
}, 2000);`}
        result="تایمر شروع شد: 14:30:45.789"
      />

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-3">فهرست توابع میلی‌ثانیه</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-red-700">
          <div className="space-y-2">
            <div><strong>addMilliseconds</strong></div>
            <div>اضافه کردن میلی‌ثانیه به تاریخ</div>
            
            <div className="mt-3"><strong>getMilliseconds</strong></div>
            <div>دریافت میلی‌ثانیه از تاریخ (0-999)</div>
          </div>
          <div className="space-y-2">
            <div><strong>setMilliseconds</strong></div>
            <div>تنظیم میلی‌ثانیه تاریخ</div>
            
            <div className="mt-3"><strong>differenceInMilliseconds</strong></div>
            <div>محاسبه تفاوت به میلی‌ثانیه</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillisecondHelpersSection;
