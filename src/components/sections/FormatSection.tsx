
import React from 'react';
import CodeExample from '../CodeExample';

const FormatSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">قالب‌بندی تاریخ</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns امکانات پیشرفته‌ای برای قالب‌بندی تاریخ‌ها فراهم می‌کند. می‌توانید تاریخ‌ها را به شیوه‌های مختلف نمایش دهید.
        </p>
      </div>

      <CodeExample
        title="تابع format پایه"
        description="استفاده از تابع format برای قالب‌بندی تاریخ:"
        code={`import { format } from 'date-fns';

const date = new Date(2024, 2, 15); // 15 مارس 2024

// قالب‌های مختلف
console.log(format(date, 'yyyy/MM/dd'));        // 2024/03/15
console.log(format(date, 'dd-MM-yyyy'));        // 15-03-2024
console.log(format(date, 'MMMM dd, yyyy'));     // March 15, 2024
console.log(format(date, 'EEEE, MMMM do'));     // Friday, March 15th`}
        result="2024/03/15"
      />

      <CodeExample
        title="قالب‌بندی فارسی"
        description="استفاده از locale فارسی برای نمایش تاریخ به شمسی:"
        code={`import { format } from 'date-fns';
import { faIR } from 'date-fns/locale';

const date = new Date(2024, 2, 15);

// با locale فارسی
const persianDate = format(date, 'yyyy/MM/dd', { locale: faIR });
const persianFull = format(date, 'EEEE، dd MMMM yyyy', { locale: faIR });

console.log(persianDate);     // ۱۴۰۲/۱۲/۲۵
console.log(persianFull);     // جمعه، ۲۵ اسفند ۱۴۰۲`}
        result="۱۴۰۲/۱۲/۲۵"
      />

      <CodeExample
        title="قالب‌های سفارشی"
        description="ایجاد قالب‌های پیچیده‌تر برای نمایش تاریخ و زمان:"
        code={`import { format } from 'date-fns';

const now = new Date();

// قالب‌های زمان
console.log(format(now, 'HH:mm:ss'));           // 14:30:25
console.log(format(now, 'hh:mm a'));            // 02:30 PM
console.log(format(now, 'HH:mm, dd/MM/yyyy'));  // 14:30, 15/03/2024

// قالب‌های خاص
console.log(format(now, "'امروز:' EEEE"));      // امروز: Friday
console.log(format(now, 'do 'of' MMMM'));       // 15th of March`}
        result="14:30:25"
      />

      <CodeExample
        title="formatDistance - فاصله زمانی"
        description="نمایش فاصله زمانی بین دو تاریخ به صورت نسبی:"
        code={`import { formatDistance, formatDistanceToNow } from 'date-fns';
import { faIR } from 'date-fns/locale';

const pastDate = new Date(2024, 1, 1);
const futureDate = new Date(2024, 5, 15);

// فاصله بین دو تاریخ
const distance = formatDistance(pastDate, futureDate, { locale: faIR });
console.log(distance); // ۴ ماه

// فاصله تا الان
const distanceToNow = formatDistanceToNow(pastDate, { 
  locale: faIR,
  addSuffix: true 
});
console.log(distanceToNow); // ۲ ماه پیش`}
        result="۴ ماه"
      />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">نمادهای قالب‌بندی رایج</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div><code className="bg-blue-100 px-2 py-1 rounded">yyyy</code> - سال چهار رقمی</div>
            <div><code className="bg-blue-100 px-2 py-1 rounded">MM</code> - ماه دو رقمی</div>
            <div><code className="bg-blue-100 px-2 py-1 rounded">dd</code> - روز دو رقمی</div>
            <div><code className="bg-blue-100 px-2 py-1 rounded">HH</code> - ساعت 24 ساعته</div>
          </div>
          <div className="space-y-2">
            <div><code className="bg-blue-100 px-2 py-1 rounded">MMMM</code> - نام کامل ماه</div>
            <div><code className="bg-blue-100 px-2 py-1 rounded">EEEE</code> - نام کامل روز</div>
            <div><code className="bg-blue-100 px-2 py-1 rounded">mm</code> - دقیقه</div>
            <div><code className="bg-blue-100 px-2 py-1 rounded">ss</code> - ثانیه</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormatSection;
