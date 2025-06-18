
import React from 'react';
import CodeExample from '../CodeExample';

const SetMethodsSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-xl p-8 border border-purple-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع تنظیم مقادیر (Set Functions)</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          این توابع برای تغییر اجزای خاص یک تاریخ استفاده می‌شوند.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">توابع تنظیم اجزای پایه</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">setYear</h4>
              <p className="text-gray-600 text-sm">
                سال تاریخ را تغییر می‌دهد اما سایر اجزا (ماه، روز، ساعت) را دست نخورده نگه می‌دارد.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">setMonth</h4>
              <p className="text-gray-600 text-sm">
                ماه تاریخ را تغییر می‌دهد (0-11). اگر روز در ماه جدید وجود نداشته باشد، به آخرین روز ماه تنظیم می‌شود.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">setDate</h4>
              <p className="text-gray-600 text-sm">
                روز ماه را تغییر می‌دهد (1-31). اگر عدد بیشتر از روزهای ماه باشد، به ماه بعد منتقل می‌شود.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">setDay</h4>
              <p className="text-gray-600 text-sm">
                روز هفته را تغییر می‌دهد (0-6). تاریخ را به نزدیک‌ترین روز هفته مشخص شده تنظیم می‌کند.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">setHours / setMinutes / setSeconds</h4>
              <p className="text-gray-600 text-sm">
                ساعت، دقیقه و ثانیه تاریخ را تغییر می‌دهند. سایر اجزای تاریخ تغییر نمی‌کنند.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">setMilliseconds</h4>
              <p className="text-gray-600 text-sm">
                میلی‌ثانیه تاریخ را تنظیم می‌کند (0-999).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">توابع تنظیم پیشرفته</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-violet-500 pl-4">
              <h4 className="font-semibold text-gray-800">setDayOfYear</h4>
              <p className="text-gray-600 text-sm">
                روز سال را تنظیم می‌کند (1-366). مثلاً روز 100 معادل 10 آپریل است.
              </p>
            </div>

            <div className="border-l-4 border-violet-500 pl-4">
              <h4 className="font-semibold text-gray-800">setWeek</h4>
              <p className="text-gray-600 text-sm">
                هفته سال را تنظیم می‌کند (1-53). تاریخ را به همان روز هفته در هفته جدید تنظیم می‌کند.
              </p>
            </div>

            <div className="border-l-4 border-violet-500 pl-4">
              <h4 className="font-semibold text-gray-800">setQuarter</h4>
              <p className="text-gray-600 text-sm">
                فصل سال را تنظیم می‌کند (1-4). تاریخ را به همان نسبت در فصل جدید تنظیم می‌کند.
              </p>
            </div>

            <div className="border-l-4 border-violet-500 pl-4">
              <h4 className="font-semibold text-gray-800">setISOWeek</h4>
              <p className="text-gray-600 text-sm">
                هفته بر اساس استاندارد ISO را تنظیم می‌کند.
              </p>
            </div>

            <div className="border-l-4 border-violet-500 pl-4">
              <h4 className="font-semibold text-gray-800">setISOWeekYear</h4>
              <p className="text-gray-600 text-sm">
                سال بر اساس استاندارد ISO Week را تنظیم می‌کند.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CodeExample
        title="مثال کاربردی توابع Set"
        description="تغییر اجزای مختلف تاریخ:"
        code={`import { 
  setYear, setMonth, setDate, setDay,
  setHours, setMinutes, setSeconds,
  setDayOfYear, setWeek, setQuarter,
  format 
} from 'date-fns';

const originalDate = new Date(2024, 2, 15, 10, 30, 45); // 15 مارس 2024، 10:30:45

// تنظیم اجزای پایه
console.log('اصلی:', format(originalDate, 'yyyy/MM/dd HH:mm:ss'));

const newYear = setYear(originalDate, 2025);
console.log('سال جدید:', format(newYear, 'yyyy/MM/dd HH:mm:ss'));

const newMonth = setMonth(originalDate, 5); // ژوئن
console.log('ماه جدید:', format(newMonth, 'yyyy/MM/dd HH:mm:ss'));

const newDate = setDate(originalDate, 25);
console.log('روز جدید:', format(newDate, 'yyyy/MM/dd HH:mm:ss'));

// تنظیم زمان
const newTime = setHours(setMinutes(setSeconds(originalDate, 0), 0), 14);
console.log('زمان جدید:', format(newTime, 'yyyy/MM/dd HH:mm:ss'));

// تنظیم روز هفته
const monday = setDay(originalDate, 1); // دوشنبه
console.log('دوشنبه:', format(monday, 'yyyy/MM/dd (EEEE)'));

// تنظیم پیشرفته
const day100 = setDayOfYear(originalDate, 100);
console.log('روز 100 سال:', format(day100, 'yyyy/MM/dd'));

const quarter2 = setQuarter(originalDate, 2);
console.log('فصل 2:', format(quarter2, 'yyyy/MM/dd'));`}
        result="اصلی: 2024/03/15 10:30:45"
      />

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">نکات مهم توابع Set</h3>
        <ul className="space-y-2 text-amber-700 text-sm">
          <li>• تمام توابع Set یک آبجکت Date جدید برمی‌گردانند (immutable)</li>
          <li>• تاریخ اصلی تغییر نمی‌کند</li>
          <li>• برای مقادیر نامعتبر، تاریخ خودکار تصحیح می‌شود</li>
          <li>• می‌توانید چند تابع Set را زنجیره‌ای استفاده کنید</li>
          <li>• ماه‌ها از 0 شروع می‌شوند (0=ژانویه)</li>
          <li>• روزهای هفته از 0 شروع می‌شوند (0=یکشنبه)</li>
        </ul>
      </div>
    </div>
  );
};

export default SetMethodsSection;
