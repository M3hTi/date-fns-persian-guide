
import React from 'react';
import { Download, Star, Users } from 'lucide-react';
import CodeExample from '../CodeExample';

const IntroSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">درباره date-fns</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          date-fns یک کتابخانه مدرن جاوا اسکریپت است که ابزارهای جامعی برای کار با تاریخ و زمان فراهم می‌کند. 
          این کتابخانه بر اساس رویکرد تابعی طراحی شده و بیش از 200 تابع مفید برای دستکاری تاریخ‌ها ارائه می‌دهد.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <Download className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">نصب آسان</h3>
            <p className="text-gray-600 text-sm">با npm یا yarn به راحتی نصب کنید</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <Star className="w-8 h-8 text-yellow-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">پرطرفدار</h3>
            <p className="text-gray-600 text-sm">بیش از 46 میلیون دانلود در ماه</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <Users className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">جامعه فعال</h3>
            <p className="text-gray-600 text-sm">هزاران توسعه‌دهنده در سراسر جهان</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="نصب date-fns"
        description="برای شروع کار با date-fns، ابتدا آن را در پروژه خود نصب کنید:"
        code={`# با npm
npm install date-fns

# یا با yarn
yarn add date-fns

# برای پشتیبانی از منطقه زمانی
npm install date-fns-tz`}
      />

      <CodeExample
        title="اولین مثال"
        description="نحوه import و استفاده از توابع date-fns:"
        code={`import { format, addDays, startOfWeek } from 'date-fns';
import { faIR } from 'date-fns/locale';

// تاریخ فعلی
const now = new Date();

// قالب‌بندی تاریخ به فارسی
const formatted = format(now, 'yyyy/MM/dd', { locale: faIR });

// اضافه کردن 7 روز
const nextWeek = addDays(now, 7);

// شروع هفته
const weekStart = startOfWeek(now);

console.log('امروز:', formatted);
console.log('هفته آینده:', format(nextWeek, 'yyyy/MM/dd'));`}
        result="امروز: 1403/03/27"
      />

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">مزایای کلیدی date-fns</h3>
        <ul className="space-y-2 text-amber-700">
          <li>• <strong>ماژولار:</strong> فقط توابع مورد نیاز را import کنید</li>
          <li>• <strong>TypeScript:</strong> پشتیبانی کامل از TypeScript</li>
          <li>• <strong>Tree-shaking:</strong> حجم نهایی bundle کوچک‌تر</li>
          <li>• <strong>بین‌المللی:</strong> پشتیبانی از تقویم‌های مختلف</li>
          <li>• <strong>مستقل:</strong> بدون وابستگی خارجی</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
