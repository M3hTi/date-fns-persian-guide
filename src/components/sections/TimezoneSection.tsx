
import React from 'react';
import CodeExample from '../CodeExample';

const TimezoneSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-100 rounded-xl p-8 border border-indigo-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">کار با مناطق زمانی</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          برای کار حرفه‌ای با مناطق زمانی، از کتابخانه date-fns-tz همراه با date-fns استفاده کنید.
        </p>
      </div>

      <CodeExample
        title="نصب date-fns-tz"
        description="برای کار با timezone ابتدا کتابخانه date-fns-tz را نصب کنید:"
        code={`# نصب کتابخانه timezone
npm install date-fns-tz

# یا با yarn
yarn add date-fns-tz

# import توابع timezone
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';`}
      />

      <CodeExample
        title="تبدیل بین مناطق زمانی"
        description="تبدیل زمان بین UTC و timezone مشخص:"
        code={`import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

// منطقه زمانی تهران
const tehranTZ = 'Asia/Tehran';
const utc = new Date('2024-03-15T12:00:00.000Z');

// تبدیل UTC به زمان محلی تهران
const tehranTime = utcToZonedTime(utc, tehranTZ);
console.log(format(tehranTime, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone: tehranTZ }));
// 2024-03-15 15:30:00 +0330

// تبدیل زمان محلی به UTC
const localTime = new Date('2024-03-15T15:30:00');
const utcTime = zonedTimeToUtc(localTime, tehranTZ);
console.log(format(utcTime, 'yyyy-MM-dd HH:mm:ss', { timeZone: 'UTC' }));
// 2024-03-15 12:00:00`}
        result="2024-03-15 15:30:00 +0330"
      />

      <CodeExample
        title="فرمت کردن با timezone"
        description="نمایش تاریخ با منطقه زمانی مشخص:"
        code={`import { format } from 'date-fns-tz';
import { faIR } from 'date-fns/locale';

const date = new Date('2024-03-15T12:00:00.000Z');

// مناطق زمانی مختلف
const timezones = [
  'Asia/Tehran',     // تهران
  'Europe/London',   // لندن  
  'America/New_York', // نیویورک
  'Asia/Tokyo'       // توکیو
];

timezones.forEach(tz => {
  const formatted = format(date, 'yyyy-MM-dd HH:mm:ss zzz', { 
    timeZone: tz,
    locale: faIR 
  });
  console.log(\`\${tz}: \${formatted}\`);
});

// خروجی نمونه:
// Asia/Tehran: ۲۰۲۴-۰۳-۱۵ ۱۵:۳۰:۰۰ +۰۳:۳۰
// Europe/London: ۲۰۲۴-۰۳-۱۵ ۱۲:۰۰:۰۰ +۰۰:۰۰`}
        result="Asia/Tehran: ۲۰۲۴-۰۳-۱۵ ۱۵:۳۰:۰۰"
      />

      <CodeExample
        title="دریافت اطلاعات timezone"
        description="دریافت offset و اطلاعات منطقه زمانی:"
        code={`import { getTimezoneOffset } from 'date-fns-tz';

const date = new Date('2024-03-15T12:00:00.000Z');

// دریافت offset برای مناطق مختلف (بر حسب دقیقه)
const tehranOffset = getTimezoneOffset('Asia/Tehran', date);
console.log(\`تهران: \${tehranOffset / 60} ساعت\`); // +3.5 ساعت

const londonOffset = getTimezoneOffset('Europe/London', date);
console.log(\`لندن: \${londonOffset / 60} ساعت\`); // 0 ساعت

const newYorkOffset = getTimezoneOffset('America/New_York', date);
console.log(\`نیویورک: \${newYorkOffset / 60} ساعت\`); // -4 یا -5 ساعت

// بررسی DST (تغییر ساعت تابستانی)
const winter = new Date('2024-01-15T12:00:00.000Z');
const summer = new Date('2024-07-15T12:00:00.000Z');

console.log('زمستان:', getTimezoneOffset('Europe/London', winter));
console.log('تابستان:', getTimezoneOffset('Europe/London', summer));`}
        result="تهران: 3.5 ساعت"
      />

      <CodeExample
        title="کار با Intl API"
        description="استفاده از API های مرورگر برای timezone:"
        code={`// دریافت timezone محلی کاربر
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('منطقه زمانی کاربر:', userTimezone);

// لیست تمام timezone های موجود
const timezones = Intl.supportedValuesOf('timeZone');
console.log('تعداد timezone های پشتیبانی شده:', timezones.length);

// فرمت کردن با Intl
const date = new Date();
const formatter = new Intl.DateTimeFormat('fa-IR', {
  timeZone: 'Asia/Tehran',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
});

console.log(formatter.format(date));
// خروجی: ۱۵ اسفند ۱۴۰۲، ۱۵:۳۰ +۰۳:۳۰

// اطلاعات کامل timezone
const parts = formatter.formatToParts(date);
console.log(parts);`}
        result="منطقه زمانی کاربر: Asia/Tehran"
      />

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-orange-800 mb-3">نکات مهم در کار با Timezone</h3>
        <ul className="space-y-2 text-orange-700 text-sm">
          <li>• همیشه UTC را به عنوان مرجع اصلی در پایگاه داده ذخیره کنید</li>
          <li>• از timezone های IANA استاندارد استفاده کنید (مثل Asia/Tehran)</li>
          <li>• تغییر ساعت تابستانی (DST) را در نظر بگیرید</li>
          <li>• برای نمایش به کاربر، از timezone محلی او استفاده کنید</li>
          <li>• در محاسبات، همیشه به UTC تبدیل کنید</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">مناطق زمانی رایج ایران و منطقه</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div className="space-y-1">
            <div><code>Asia/Tehran</code> - ایران (+3:30)</div>
            <div><code>Asia/Dubai</code> - امارات (+4:00)</div>
            <div><code>Asia/Kuwait</code> - کویت (+3:00)</div>
          </div>
          <div className="space-y-1">
            <div><code>Europe/Istanbul</code> - ترکیه (+3:00)</div>
            <div><code>Asia/Baku</code> - آذربایجان (+4:00)</div>
            <div><code>Asia/Ashgabat</code> - ترکمنستان (+5:00)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimezoneSection;
