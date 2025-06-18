
import React from 'react';
import CodeExample from '../CodeExample';

const GetMethodsSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع دریافت مقادیر (Get Functions)</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          این توابع برای دریافت اجزای مختلف یک تاریخ استفاده می‌شوند.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">توابع دریافت اجزای پایه</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">getYear</h4>
              <p className="text-gray-600 text-sm">
                سال تاریخ را برمی‌گرداند. مثلاً برای تاریخ "2024/03/15" عدد 2024 را برمی‌گرداند.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">getMonth</h4>
              <p className="text-gray-600 text-sm">
                شماره ماه را برمی‌گرداند (0-11). توجه کنید که ژانویه 0 و دسامبر 11 است.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">getDate</h4>
              <p className="text-gray-600 text-sm">
                روز ماه را برمی‌گرداند (1-31). برای "15 مارس" عدد 15 را برمی‌گرداند.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">getDay</h4>
              <p className="text-gray-600 text-sm">
                روز هفته را برمی‌گرداند (0-6). یکشنبه 0، دوشنبه 1 و ... شنبه 6 است.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">getHours / getMinutes / getSeconds</h4>
              <p className="text-gray-600 text-sm">
                ساعت (0-23)، دقیقه (0-59) و ثانیه (0-59) تاریخ را برمی‌گردانند.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">getMilliseconds</h4>
              <p className="text-gray-600 text-sm">
                میلی‌ثانیه تاریخ را برمی‌گرداند (0-999).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">توابع دریافت اطلاعات پیشرفته</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold text-gray-800">getDayOfYear</h4>
              <p className="text-gray-600 text-sm">
                شماره روز در سال را برمی‌گرداند (1-366). مثلاً 1 ژانویه روز 1 و 31 دسامبر روز 365 است.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold text-gray-800">getWeek</h4>
              <p className="text-gray-600 text-sm">
                شماره هفته در سال را برمی‌گرداند (1-53). بر اساس استاندارد ISO محاسبه می‌شود.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold text-gray-800">getQuarter</h4>
              <p className="text-gray-600 text-sm">
                فصل سال را برمی‌گرداند (1-4). Q1: ژانویه-مارس، Q2: آپریل-ژوئن، Q3: جولای-سپتامبر، Q4: اکتبر-دسامبر.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold text-gray-800">getDaysInMonth</h4>
              <p className="text-gray-600 text-sm">
                تعداد روزهای ماه را برمی‌گرداند (28-31). سال کبیسه را نیز در نظر می‌گیرد.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold text-gray-800">getDaysInYear</h4>
              <p className="text-gray-600 text-sm">
                تعداد روزهای سال را برمی‌گرداند (365 یا 366). برای سال کبیسه 366 و برای سال عادی 365.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold text-gray-800">getDecade</h4>
              <p className="text-gray-600 text-sm">
                دهه سال را برمی‌گرداند. مثلاً برای سال 2024، دهه 2020 را برمی‌گرداند.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold text-gray-800">getTime / getUnixTime</h4>
              <p className="text-gray-600 text-sm">
                getTime: تعداد میلی‌ثانیه از 1 ژانویه 1970 را برمی‌گرداند.
                getUnixTime: تعداد ثانیه از 1 ژانویه 1970 را برمی‌گرداند (Unix timestamp).
              </p>
            </div>
          </div>
        </div>
      </div>

      <CodeExample
        title="مثال کاربردی توابع Get"
        description="استفاده از توابع مختلف Get:"
        code={`import { 
  getYear, getMonth, getDate, getDay, 
  getHours, getMinutes, getSeconds,
  getDayOfYear, getWeek, getQuarter,
  getDaysInMonth, getTime, getUnixTime
} from 'date-fns';

const date = new Date(2024, 2, 15, 14, 30, 45); // 15 مارس 2024، 14:30:45

// اجزای پایه
console.log('سال:', getYear(date));           // 2024
console.log('ماه:', getMonth(date) + 1);       // 3 (مارس)
console.log('روز:', getDate(date));            // 15
console.log('روز هفته:', getDay(date));        // 5 (جمعه)

// زمان
console.log('ساعت:', getHours(date));          // 14
console.log('دقیقه:', getMinutes(date));       // 30
console.log('ثانیه:', getSeconds(date));       // 45

// اطلاعات پیشرفته
console.log('روز سال:', getDayOfYear(date));   // 75
console.log('هفته:', getWeek(date));           // 11
console.log('فصل:', getQuarter(date));         // 1

// تعداد روزها
console.log('روزهای ماه:', getDaysInMonth(date)); // 31

// Timestamp
console.log('زمان:', getTime(date));
console.log('Unix:', getUnixTime(date));`}
        result="سال: 2024"
      />
    </div>
  );
};

export default GetMethodsSection;
