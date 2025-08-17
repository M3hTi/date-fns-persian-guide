import React from 'react';
import CodeExample from '../CodeExample';

const ValidationSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-50 to-pink-100 rounded-xl p-8 border border-red-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع اعتبارسنجی</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          مجموعه‌ای از توابع برای بررسی اعتبار تاریخ‌ها و validation داده‌های زمانی.
        </p>
      </div>

      <CodeExample
        title="بررسی اعتبار تاریخ"
        description="استفاده از isValid و isDate:"
        code={`import { isValid, isDate } from 'date-fns';

// تست انواع ورودی‌ها
const testInputs = [
  new Date(),
  new Date('2024-03-15'),
  new Date('invalid date'),
  '2024-03-15',
  null,
  undefined,
  1710518400000, // timestamp
  'نامعتبر'
];

console.log('بررسی isDate:');
testInputs.forEach((input, index) => {
  console.log(\`ورودی \${index + 1}: \${typeof input} → isDate: \${isDate(input)}\`);
});

console.log('\\nبررسی isValid:');
testInputs.forEach((input, index) => {
  console.log(\`ورودی \${index + 1}: \${typeof input} → isValid: \${isValid(input)}\`);
});

// کاربرد عملی
function validateUserInput(dateInput) {
  if (!isDate(dateInput)) {
    return { valid: false, error: 'ورودی از نوع Date نیست' };
  }
  
  if (!isValid(dateInput)) {
    return { valid: false, error: 'تاریخ نامعتبر است' };
  }
  
  return { valid: true, error: null };
}`}
        result="isDate: true"
      />

      <CodeExample
        title="بررسی وجود تاریخ"
        description="استفاده از isExists برای بررسی وجود واقعی تاریخ:"
        code={`import { isExists } from 'date-fns';

// بررسی تاریخ‌های مختلف
const testDates = [
  { year: 2024, month: 2, day: 29 }, // سال کبیسه
  { year: 2023, month: 2, day: 29 }, // سال عادی
  { year: 2024, month: 4, day: 31 }, // آپریل 31
  { year: 2024, month: 6, day: 15 }, // تاریخ معتبر
];

console.log('بررسی وجود تاریخ‌ها:');
testDates.forEach(({ year, month, day }, index) => {
  const exists = isExists(year, month, day);
  console.log(\`\${year}/\${month}/\${day}: \${exists ? 'موجود' : 'نامعتبر'}\`);
});

// تابع کمکی برای validation فرم
function validateFormDate(year, month, day) {
  if (!isExists(year, month, day)) {
    return 'تاریخ وارد شده در تقویم وجود ندارد';
  }
  return null;
}

// تست تابع
console.log('\\nتست validation:');
console.log(validateFormDate(2024, 2, 29)); // null (معتبر)
console.log(validateFormDate(2023, 2, 29)); // خطا`}
        result="2024/2/29: موجود"
      />

      <CodeExample
        title="بررسی سال کبیسه"
        description="استفاده از isLeapYear:"
        code={`import { isLeapYear } from 'date-fns';

// بررسی سال‌های مختلف
const years = [2020, 2021, 2022, 2023, 2024, 2000, 1900];

console.log('بررسی سال‌های کبیسه:');
years.forEach(year => {
  const isLeap = isLeapYear(new Date(year, 0, 1));
  console.log(\`سال \${year}: \${isLeap ? 'کبیسه' : 'عادی'}\`);
});

// محاسبه روزهای فوریه
function getFebruaryDays(year) {
  return isLeapYear(new Date(year, 0, 1)) ? 29 : 28;
}

console.log('\\nروزهای فوریه:');
[2023, 2024].forEach(year => {
  console.log(\`فوریه \${year}: \${getFebruaryDays(year)} روز\`);
});

// بررسی بازه سال‌ها
function getLeapYearsInRange(startYear, endYear) {
  const leapYears = [];
  for (let year = startYear; year <= endYear; year++) {
    if (isLeapYear(new Date(year, 0, 1))) {
      leapYears.push(year);
    }
  }
  return leapYears;
}

const leapYears2020s = getLeapYearsInRange(2020, 2030);
console.log('سال‌های کبیسه دهه 2020:', leapYears2020s.join(', '));`}
        result="سال 2020: کبیسه"
      />

      <CodeExample
        title="validation مقادیر زمانی"
        description="ترکیب توابع validation برای بررسی کامل:"
        code={`import { isValid, isExists, isLeapYear, isDate, parseISO } from 'date-fns';

// تابع جامع برای validation
function validateDateTime(input) {
  const errors = [];
  
  // بررسی نوع ورودی
  if (typeof input === 'string') {
    try {
      input = parseISO(input);
    } catch {
      errors.push('فرمت رشته نامعتبر');
      return { valid: false, errors };
    }
  }
  
  // بررسی نوع Date
  if (!isDate(input)) {
    errors.push('ورودی از نوع Date نیست');
    return { valid: false, errors };
  }
  
  // بررسی اعتبار Date
  if (!isValid(input)) {
    errors.push('تاریخ نامعتبر');
    return { valid: false, errors };
  }
  
  // بررسی محدوده منطقی
  const year = input.getFullYear();
  if (year < 1900 || year > 2100) {
    errors.push('سال خارج از محدوده مجاز (1900-2100)');
  }
  
  return {
    valid: errors.length === 0,
    errors,
    info: {
      isLeapYear: isLeapYear(input),
      year: year
    }
  };
}

// تست validation
const testInputs = [
  '2024-03-15T14:30:00',
  'تاریخ نامعتبر',
  new Date('2024-02-29'),
  new Date('1850-01-01'),
  new Date()
];

testInputs.forEach((input, index) => {
  const result = validateDateTime(input);
  console.log(\`ورودی \${index + 1}:\`, result.valid ? 'معتبر' : result.errors.join(', '));
});`}
        result="ورودی 1: معتبر"
      />

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-3">فهرست توابع اعتبارسنجی</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-red-700">
          <div className="space-y-2">
            <div><strong>اعتبارسنجی اصلی:</strong></div>
            <div>• isValid - بررسی اعتبار Date</div>
            <div>• isDate - بررسی نوع Date</div>
            <div>• isExists - بررسی وجود تاریخ</div>
          </div>
          <div className="space-y-2">
            <div><strong>بررسی‌های تخصصی:</strong></div>
            <div>• isLeapYear - بررسی سال کبیسه</div>
            <div>• isWeekend - بررسی آخر هفته</div>
            <div>• isFuture/isPast - بررسی زمان</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationSection;