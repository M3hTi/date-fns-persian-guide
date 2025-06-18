
import React from 'react';
import CodeExample from '../CodeExample';

const TimestampHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع Unix Timestamp</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          توابع مربوط به Unix timestamp برای تبدیل بین تاریخ و زمان‌های عددی استاندارد.
        </p>
      </div>

      <CodeExample
        title="دریافت timestamp"
        description="استفاده از getTime و getUnixTime برای دریافت timestamp:"
        code={`import { getTime, getUnixTime, format } from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 0); // 15 مارس 2024، 14:30

// دریافت timestamp به میلی‌ثانیه (JavaScript standard)
const timestampMs = getTime(date);
console.log('Timestamp (ms):', timestampMs); // 1710506200000

// دریافت Unix timestamp به ثانیه (Unix standard)
const unixTimestamp = getUnixTime(date);
console.log('Unix Timestamp:', unixTimestamp); // 1710506200

// مقایسه با Date.now()
const now = new Date();
console.log('الان (ms):', getTime(now));
console.log('الان (Unix):', getUnixTime(now));

// محاسبه تفاوت
const timeDiff = getTime(now) - getTime(date);
console.log(\`تفاوت: \${Math.floor(timeDiff / 1000)} ثانیه\`);`}
        result="1710506200000"
      />

      <CodeExample
        title="تبدیل از Unix timestamp"
        description="استفاده از fromUnixTime برای تبدیل Unix timestamp به تاریخ:"
        code={`import { fromUnixTime, format } from 'date-fns';
import { faIR } from 'date-fns/locale';

// Unix timestamp های مختلف
const timestamps = [
  1710506200,    // 15 مارس 2024
  1640995200,    // 1 ژانویه 2022
  1577836800,    // 1 ژانویه 2020
  0              // 1 ژانویه 1970 (epoch)
];

console.log('تبدیل Unix timestamps:');
timestamps.forEach((timestamp, index) => {
  const date = fromUnixTime(timestamp);
  const formatted = format(date, 'yyyy/MM/dd HH:mm:ss', { locale: faIR });
  console.log(\`Timestamp \${index + 1}: \${timestamp} → \${formatted}\`);
});

// تبدیل timestamp از API
const apiResponse = { createdAt: 1710506200, updatedAt: 1710509800 };
const createdDate = fromUnixTime(apiResponse.createdAt);
const updatedDate = fromUnixTime(apiResponse.updatedAt);

console.log('ساخته شده:', format(createdDate, 'yyyy/MM/dd HH:mm'));
console.log('بروزرسانی:', format(updatedDate, 'yyyy/MM/dd HH:mm'));`}
        result="Timestamp 1: 1710506200 → ۱۴۰۲/۱۲/۲۵ ۱۴:۳۰:۰۰"
      />

      <CodeExample
        title="کار با timestamp های فعلی"
        description="عملیات با timestamp زمان فعلی:"
        code={`import { getTime, getUnixTime, fromUnixTime, format } from 'date-fns';

// دریافت timestamp فعلی
const now = new Date();
const currentMs = getTime(now);
const currentUnix = getUnixTime(now);

console.log('زمان فعلی:');
console.log('- میلی‌ثانیه:', currentMs);
console.log('- Unix:', currentUnix);
console.log('- تاریخ:', format(now, 'yyyy/MM/dd HH:mm:ss'));

// محاسبه timestamp گذشته و آینده
const oneHourAgo = currentUnix - (60 * 60);        // یک ساعت قبل
const oneHourLater = currentUnix + (60 * 60);      // یک ساعت بعد
const oneDayAgo = currentUnix - (24 * 60 * 60);    // یک روز قبل

console.log('یک ساعت قبل:', format(fromUnixTime(oneHourAgo), 'HH:mm'));
console.log('یک ساعت بعد:', format(fromUnixTime(oneHourLater), 'HH:mm'));
console.log('یک روز قبل:', format(fromUnixTime(oneDayAgo), 'yyyy/MM/dd'));

// ساخت timestamp برای ذخیره در دیتابیس
const userData = {
  id: 1,
  name: 'احمد',
  createdAt: currentUnix,
  lastLogin: currentUnix
};

console.log('داده کاربر:', userData);`}
        result="زمان فعلی:"
      />

      <CodeExample
        title="تبدیل دوطرفه timestamp"
        description="تبدیل بین timestamp و تاریخ:"
        code={`import { getTime, getUnixTime, fromUnixTime, format } from 'date-fns';

// تابع کمکی برای تبدیل دوطرفه
function timestampConverter() {
  const now = new Date();
  
  return {
    // تبدیل تاریخ به timestamp
    toTimestamp: (date) => ({
      milliseconds: getTime(date),
      unix: getUnixTime(date)
    }),
    
    // تبدیل timestamp به تاریخ
    fromTimestamp: (timestamp, isUnix = true) => {
      if (isUnix) {
        return fromUnixTime(timestamp);
      } else {
        return new Date(timestamp);
      }
    },
    
    // فرمت نمایش
    formatTimestamp: (timestamp, isUnix = true) => {
      const date = isUnix ? fromUnixTime(timestamp) : new Date(timestamp);
      return format(date, 'yyyy/MM/dd HH:mm:ss');
    }
  };
}

const converter = timestampConverter();

// تست تبدیل
const testDate = new Date(2024, 2, 15, 10, 30, 0);
const timestamps = converter.toTimestamp(testDate);

console.log('تاریخ اصلی:', format(testDate, 'yyyy/MM/dd HH:mm:ss'));
console.log('Unix timestamp:', timestamps.unix);
console.log('Milliseconds timestamp:', timestamps.milliseconds);

// برگشت به تاریخ
const backToDate = converter.fromTimestamp(timestamps.unix);
console.log('برگشت به تاریخ:', format(backToDate, 'yyyy/MM/dd HH:mm:ss'));`}
        result="تاریخ اصلی: 2024/03/15 10:30:00"
      />

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">فهرست توابع Timestamp</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-yellow-700">
          <div className="space-y-2">
            <div><strong>getTime</strong></div>
            <div>دریافت timestamp به میلی‌ثانیه</div>
            <div className="text-xs text-yellow-600">مشابه Date.prototype.getTime()</div>
          </div>
          <div className="space-y-2">
            <div><strong>getUnixTime</strong></div>
            <div>دریافت Unix timestamp به ثانیه</div>
            <div className="text-xs text-yellow-600">استاندارد Unix</div>
          </div>
          <div className="space-y-2">
            <div><strong>fromUnixTime</strong></div>
            <div>تبدیل Unix timestamp به تاریخ</div>
            <div className="text-xs text-yellow-600">تبدیل از ثانیه به Date</div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3">کاربردهای عملی Timestamp</h3>
        <ul className="space-y-2 text-green-700 text-sm">
          <li>• ذخیره زمان در دیتابیس به فرمت استاندارد</li>
          <li>• تبادل داده با API های مختلف</li>
          <li>• محاسبه تفاوت زمان با دقت بالا</li>
          <li>• مرتب‌سازی رکوردها بر اساس زمان</li>
          <li>• پیاده‌سازی cache با زمان انقضا</li>
          <li>• لاگ‌گیری و ردیابی رویدادها</li>
        </ul>
      </div>
    </div>
  );
};

export default TimestampHelpersSection;
