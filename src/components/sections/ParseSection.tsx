
import React from 'react';
import CodeExample from '../CodeExample';

const ParseSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-xl p-8 border border-purple-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">تجزیه و تحلیل تاریخ</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns ابزارهای قدرتمندی برای تجزیه رشته‌های تاریخ و تبدیل آنها به آبجکت Date ارائه می‌دهد.
        </p>
      </div>

      <CodeExample
        title="parse - تجزیه رشته تاریخ"
        description="تبدیل رشته تاریخ به آبجکت Date با قالب مشخص:"
        code={`import { parse, format } from 'date-fns';

// تجزیه تاریخ با قالب مشخص
const dateString = '2024-03-15';
const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());

console.log(format(parsedDate, 'dd/MM/yyyy')); // 15/03/2024

// تجزیه قالب‌های مختلف
const persianDate = '1403/12/25';
const parsed = parse(persianDate, 'yyyy/MM/dd', new Date());

const timeString = '14:30:25';
const parsedTime = parse(timeString, 'HH:mm:ss', new Date());`}
        result="15/03/2024"
      />

      <CodeExample
        title="parseISO - تجزیه فرمت ISO"
        description="تجزیه تاریخ‌های ISO 8601 (فرمت استاندارد وب):"
        code={`import { parseISO, format } from 'date-fns';

// فرمت ISO استاندارد
const isoString = '2024-03-15T14:30:25.000Z';
const parsedISO = parseISO(isoString);

console.log(format(parsedISO, 'yyyy/MM/dd HH:mm:ss'));

// فرمت‌های مختلف ISO
const shortISO = '2024-03-15';
const parsed = parseISO(shortISO);

const withTimezone = '2024-03-15T14:30:25+03:30';
const parsedTZ = parseISO(withTimezone);`}
        result="2024/03/15 14:30:25"
      />

      <CodeExample
        title="isValid - اعتبارسنجی تاریخ"
        description="بررسی معتبر بودن یک آبجکت Date:"
        code={`import { isValid, parse, parseISO } from 'date-fns';

// تاریخ معتبر
const validDate = new Date('2024-03-15');
console.log(isValid(validDate)); // true

// تاریخ نامعتبر
const invalidDate = new Date('invalid date');
console.log(isValid(invalidDate)); // false

// بررسی اعتبار پس از parse
const parsed = parse('32/13/2024', 'dd/MM/yyyy', new Date());
console.log(isValid(parsed)); // false - روز و ماه نامعتبر

// بررسی ISO
const isoDate = parseISO('2024-02-30'); // 30 فوریه وجود ندارد
console.log(isValid(isoDate)); // false`}
        result="true"
      />

      <CodeExample
        title="fromUnixTime - تبدیل timestamp"
        description="تبدیل Unix timestamp به آبجکت Date:"
        code={`import { fromUnixTime, getUnixTime, format } from 'date-fns';

// تبدیل timestamp به تاریخ
const timestamp = 1710504625; // Unix timestamp
const date = fromUnixTime(timestamp);

console.log(format(date, 'yyyy/MM/dd HH:mm:ss'));

// برعکس: تبدیل تاریخ به timestamp
const now = new Date();
const currentTimestamp = getUnixTime(now);

console.log(\`زمان فعلی: \${currentTimestamp}\`);

// کار با milliseconds
const msTimestamp = Date.now();
const dateFromMs = new Date(msTimestamp);`}
        result="2024/03/15 14:30:25"
      />

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-3">نکات مهم در تجزیه تاریخ</h3>
        <ul className="space-y-2 text-red-700 text-sm">
          <li>• همیشه از <code>isValid</code> برای بررسی اعتبار استفاده کنید</li>
          <li>• قالب parse باید دقیقاً با رشته ورودی مطابقت داشته باشد</li>
          <li>• برای تاریخ‌های ISO از <code>parseISO</code> استفاده کنید</li>
          <li>• منطقه زمانی را در نظر بگیرید</li>
          <li>• تاریخ مرجع (reference date) را صحیح انتخاب کنید</li>
        </ul>
      </div>
    </div>
  );
};

export default ParseSection;
