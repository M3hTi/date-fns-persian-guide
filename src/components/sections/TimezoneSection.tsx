
import React from 'react';
import CodeExample from '../CodeExample';

const TimezoneSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-rose-50 to-pink-100 rounded-xl p-8 border border-rose-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">کار با منطقه زمانی</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          برای کار حرفه‌ای با منطقه‌های زمانی، از کتابخانه date-fns-tz استفاده می‌کنیم که قابلیت‌های پیشرفته‌تری ارائه می‌دهد.
        </p>
      </div>

      <CodeExample
        title="نصب date-fns-tz"
        description="برای کار با منطقه زمانی، کتابخانه date-fns-tz را نصب کنید:"
        code={`# نصب date-fns-tz
npm install date-fns-tz

# یا با yarn
yarn add date-fns-tz`}
      />

      <CodeExample
        title="قالب‌بندی با منطقه زمانی"
        description="نمایش تاریخ در منطقه‌های زمانی مختلف:"
        code={`import { formatInTimeZone } from 'date-fns-tz';
import { faIR } from 'date-fns/locale';

const date = new Date('2024-03-15T12:00:00Z'); // UTC

// تهران (UTC+3:30)
const tehranTime = formatInTimeZone(
  date, 
  'Asia/Tehran', 
  'yyyy/MM/dd HH:mm:ss zzz'
);
console.log(tehranTime); // 2024/03/15 15:30:00 +0330

// دبی (UTC+4)
const dubaiTime = formatInTimeZone(
  date, 
  'Asia/Dubai', 
  'yyyy/MM/dd HH:mm:ss zzz'
);
console.log(dubaiTime); // 2024/03/15 16:00:00 +04

// با locale فارسی
const persianTime = formatInTimeZone(
  date, 
  'Asia/Tehran', 
  'EEEE، dd MMMM yyyy ساعت HH:mm',
  { locale: faIR }
);
console.log(persianTime); // جمعه، ۲۴ اسفند ۱۴۰۲ ساعت ۱۵:۳۰`}
        result="2024/03/15 15:30:00 +0330"
      />

      <CodeExample
        title="تبدیل منطقه زمانی"
        description="تبدیل تاریخ بین منطقه‌های زمانی مختلف:"
        code={`import { toZonedTime, fromZonedTime } from 'date-fns-tz';

const utcDate = new Date('2024-03-15T12:00:00Z');

// تبدیل UTC به منطقه زمانی محلی
const tehranDate = toZonedTime(utcDate, 'Asia/Tehran');
console.log(tehranDate); // Date object در زمان تهران

// تبدیل از منطقه زمانی محلی به UTC
const localDate = new Date(2024, 2, 15, 15, 30, 0); // 15:30 تهران
const backToUTC = fromZonedTime(localDate, 'Asia/Tehran');
console.log(backToUTC); // برگشت به UTC

// مثال عملی: ذخیره در دیتابیس
const userInputTime = '15:30'; // کاربر در تهران
const userDate = new Date(\`2024-03-15T\${userInputTime}:00\`);
const utcForStorage = fromZonedTime(userDate, 'Asia/Tehran');
console.log(utcForStorage.toISOString()); // برای ذخیره در دیتابیس`}
        result="2024-03-15T15:30:00.000+03:30"
      />

      <CodeExample
        title="دریافت منطقه زمانی"
        description="تشخیص و کار با منطقه زمانی فعلی:"
        code={`import { getTimezoneOffset } from 'date-fns-tz';

const date = new Date('2024-03-15T12:00:00Z');

// دریافت offset منطقه زمانی (بر حسب دقیقه)
const tehranOffset = getTimezoneOffset('Asia/Tehran', date);
console.log(tehranOffset); // -210 (معادل +03:30)

const dubaiOffset = getTimezoneOffset('Asia/Dubai', date);
console.log(dubaiOffset); // -240 (معادل +04:00)

// تبدیل به ساعت
const tehranHours = Math.abs(tehranOffset) / 60;
console.log(\`تهران: UTC+\${tehranHours}\`); // تهران: UTC+3.5

// دریافت منطقه زمانی مرورگر
const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(browserTimezone); // مثلاً "Asia/Tehran"

// لیست منطقه‌های زمانی رایج ایران و منطقه
const iranTimezones = [
  'Asia/Tehran',
  'Asia/Dubai',
  'Asia/Kuwait',
  'Asia/Riyadh'
];`}
        result="-210"
      />

      <CodeExample
        title="محاسبات با منطقه زمانی"
        description="انجام محاسبات زمانی با در نظر گیری منطقه زمانی:"
        code={`import { addHours, addDays, format } from 'date-fns';
import { toZonedTime, formatInTimeZone } from 'date-fns-tz';

// تاریخ شروع در UTC
const startUTC = new Date('2024-03-15T09:00:00Z');

// تبدیل به زمان تهران برای نمایش
const startTehran = toZonedTime(startUTC, 'Asia/Tehran');

// اضافه کردن 8 ساعت کاری
const endWorkDay = addHours(startUTC, 8);

// نمایش در منطقه زمانی تهران
const workStart = formatInTimeZone(
  startUTC, 
  'Asia/Tehran', 
  'HH:mm'
);
const workEnd = formatInTimeZone(
  endWorkDay, 
  'Asia/Tehran', 
  'HH:mm'
);

console.log(\`شروع کار: \${workStart}\`); // شروع کار: 12:30
console.log(\`پایان کار: \${workEnd}\`);   // پایان کار: 20:30

// محاسبه تعطیلات با منطقه زمانی
const vacation = addDays(startUTC, 7);
const vacationDate = formatInTimeZone(
  vacation,
  'Asia/Tehran',
  'yyyy/MM/dd'
);
console.log(\`شروع تعطیلات: \${vacationDate}\`);`}
        result="شروع کار: 12:30"
      />

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">نکات مهم منطقه زمانی</h3>
        <ul className="space-y-2 text-amber-700 text-sm">
          <li>• همیشه تاریخ‌ها را در UTC ذخیره کنید</li>
          <li>• فقط برای نمایش از منطقه زمانی محلی استفاده کنید</li>
          <li>• <code>Asia/Tehran</code> منطقه زمانی رسمی ایران است</li>
          <li>• ایران تغییر ساعت تابستانی ندارد (از 2022)</li>
          <li>• از <code>formatInTimeZone</code> برای نمایش استفاده کنید</li>
          <li>• <code>toZonedTime</code> و <code>fromZonedTime</code> برای تبدیل</li>
        </ul>
      </div>
    </div>
  );
};

export default TimezoneSection;
