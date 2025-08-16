import React from 'react';
import CodeExample from '../CodeExample';

const UtilitySection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-100 rounded-xl p-8 border border-purple-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع کاربردی</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          مجموعه‌ای از توابع کاربردی برای انجام عملیات پیشرفته روی تاریخ‌ها.
        </p>
      </div>

      <CodeExample
        title="یافتن نزدیک‌ترین و دورترین تاریخ"
        description="استفاده از closestTo و farthestTo:"
        code={`import { closestTo, farthestTo, format } from 'date-fns';

const referenceDate = new Date(2024, 2, 15); // 15 مارس

const dates = [
  new Date(2024, 2, 10), // 10 مارس
  new Date(2024, 2, 20), // 20 مارس  
  new Date(2024, 2, 5),  // 5 مارس
  new Date(2024, 2, 25), // 25 مارس
];

// یافتن نزدیک‌ترین تاریخ
const closest = closestTo(referenceDate, dates);
console.log('تاریخ مرجع:', format(referenceDate, 'yyyy/MM/dd'));
console.log('نزدیک‌ترین:', format(closest, 'yyyy/MM/dd'));

// یافتن دورترین تاریخ
const farthest = farthestTo(referenceDate, dates);
console.log('دورترین:', format(farthest, 'yyyy/MM/dd'));

// کاربرد عملی: یافتن نزدیک‌ترین meeting
const today = new Date();
const meetings = [
  new Date(2024, 2, 18, 10, 0), // جلسه 1
  new Date(2024, 2, 20, 14, 30), // جلسه 2
  new Date(2024, 2, 16, 9, 0),   // جلسه 3
];

const nextMeeting = closestTo(today, meetings);
console.log('نزدیک‌ترین جلسه:', format(nextMeeting, 'yyyy/MM/dd HH:mm'));`}
        result="نزدیک‌ترین: 2024/03/10"
      />

      <CodeExample
        title="یافتن حداقل و حداکثر تاریخ"
        description="استفاده از min و max:"
        code={`import { min, max, format } from 'date-fns';

// مجموعه‌ای از تاریخ‌ها
const projectDates = [
  new Date(2024, 1, 15), // شروع پروژه
  new Date(2024, 5, 30), // پایان فاز 1
  new Date(2024, 8, 15), // پایان فاز 2
  new Date(2024, 11, 1), // پایان پروژه
];

// یافتن اولین و آخرین تاریخ
const startDate = min(projectDates);
const endDate = max(projectDates);

console.log('شروع پروژه:', format(startDate, 'yyyy/MM/dd'));
console.log('پایان پروژه:', format(endDate, 'yyyy/MM/dd'));

// محاسبه مدت زمان کل
const duration = (endDate - startDate) / (1000 * 60 * 60 * 24);
console.log(\`مدت زمان کل: \${Math.round(duration)} روز\`);

// کاربرد با تاریخ‌های ورودی کاربر
function getDateRange(dates) {
  if (!dates || dates.length === 0) return null;
  
  return {
    earliest: min(dates),
    latest: max(dates),
    span: max(dates) - min(dates)
  };
}

const userDates = [
  new Date('2024-03-01'),
  new Date('2024-03-15'),
  new Date('2024-03-08')
];

const range = getDateRange(userDates);
console.log('محدوده انتخاب شده:', 
  format(range.earliest, 'dd/MM') + ' تا ' + format(range.latest, 'dd/MM'));`}
        result="شروع پروژه: 2024/02/15"
      />

      <CodeExample
        title="محدود کردن تاریخ در بازه"
        description="استفاده از clamp برای محدود کردن تاریخ:"
        code={`import { clamp, format } from 'date-fns';

// تعریف بازه مجاز (ماه مارس)
const allowedRange = {
  start: new Date(2024, 2, 1),   // 1 مارس
  end: new Date(2024, 2, 31)     // 31 مارس
};

// تاریخ‌های مختلف برای تست
const testDates = [
  { date: new Date(2024, 1, 15), desc: 'قبل از بازه' },
  { date: new Date(2024, 2, 15), desc: 'داخل بازه' },
  { date: new Date(2024, 3, 15), desc: 'بعد از بازه' },
];

console.log('محدود کردن تاریخ‌ها:');
testDates.forEach(({ date, desc }) => {
  const clamped = clamp(date, allowedRange);
  console.log(\`\${desc}: \${format(date, 'dd/MM')} → \${format(clamped, 'dd/MM')}\`);
});

// کاربرد عملی: محدود کردن انتخاب تاریخ
function restrictDateSelection(selectedDate, minDate, maxDate) {
  return clamp(selectedDate, { start: minDate, end: maxDate });
}

// تست برای انتخاب تاریخ تولد (حداکثر 100 سال پیش)
const now = new Date();
const minBirthDate = new Date(now.getFullYear() - 100, 0, 1);
const maxBirthDate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());

const invalidBirthDate = new Date(1900, 0, 1); // خیلی قدیمی
const validBirthDate = restrictDateSelection(invalidBirthDate, minBirthDate, maxBirthDate);

console.log('تاریخ تولد اصلاح شده:', format(validBirthDate, 'yyyy/MM/dd'));`}
        result="قبل از بازه: 15/02 → 01/03"
      />

      <CodeExample
        title="انتقال تاریخ بین context ها"
        description="استفاده از transpose برای تغییر context تاریخ:"
        code={`import { transpose, format } from 'date-fns';

// تاریخ اصلی
const originalDate = new Date(2024, 2, 15, 14, 30, 0);

// انتقال به context جدید (تغییر مرجع زمانی)
const newContext = new Date(2024, 5, 1); // 1 ژوئن

const transposed = transpose(originalDate, newContext);

console.log('تاریخ اصلی:', format(originalDate, 'yyyy/MM/dd HH:mm'));
console.log('Context جدید:', format(newContext, 'yyyy/MM/dd'));
console.log('تاریخ منتقل شده:', format(transposed, 'yyyy/MM/dd HH:mm'));

// کاربرد عملی: تبدیل timezone های مختلف
function transferToNewTimezone(date, referenceDate) {
  // شبیه‌سازی تغییر timezone
  const timezoneOffset = referenceDate.getTimezoneOffset() - date.getTimezoneOffset();
  return transpose(date, new Date(date.getTime() + timezoneOffset * 60000));
}

// مثال کاربردی
const meetingTime = new Date(2024, 2, 15, 10, 0); // 10 صبح
const transferredTime = transpose(meetingTime, new Date(2024, 2, 15, 18, 0));

console.log('زمان جلسه اصلی:', format(meetingTime, 'HH:mm'));
console.log('زمان منتقل شده:', format(transferredTime, 'HH:mm'));`}
        result="تاریخ اصلی: 2024/03/15 14:30"
      />

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">فهرست توابع کاربردی</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
          <div className="space-y-2">
            <div><strong>مقایسه و انتخاب:</strong></div>
            <div>• closestTo - نزدیک‌ترین تاریخ</div>
            <div>• farthestTo - دورترین تاریخ</div>
            <div>• min - کمترین تاریخ</div>
            <div>• max - بیشترین تاریخ</div>
          </div>
          <div className="space-y-2">
            <div><strong>تنظیم و انتقال:</strong></div>
            <div>• clamp - محدود کردن در بازه</div>
            <div>• transpose - انتقال context</div>
            <div>• constructFrom - ساخت از مرجع</div>
            <div>• constructNow - ساخت زمان حال</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilitySection;