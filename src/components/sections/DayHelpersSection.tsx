
import React from 'react';
import CodeExample from '../CodeExample';

const DayHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-50 to-amber-100 rounded-xl p-8 border border-yellow-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع روز</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          مجموعه جامعی از توابع برای کار با روزها، روزهای کاری و محاسبات روزانه.
        </p>
      </div>

      <CodeExample
        title="اضافه و کم کردن روز"
        description="روزهای عادی و روزهای کاری:"
        code={`import { addDays, subDays, addBusinessDays, subBusinessDays, format } from 'date-fns';

const date = new Date(2024, 2, 15); // جمعه 15 مارس

// روزهای عادی
console.log('اصلی:', format(date, 'yyyy/MM/dd - EEEE'));
console.log('+3 روز:', format(addDays(date, 3), 'yyyy/MM/dd - EEEE'));
console.log('-2 روز:', format(subDays(date, 2), 'yyyy/MM/dd - EEEE'));

// روزهای کاری (شنبه و یکشنبه حذف می‌شوند)
console.log('+3 روز کاری:', format(addBusinessDays(date, 3), 'yyyy/MM/dd - EEEE'));
console.log('-2 روز کاری:', format(subBusinessDays(date, 2), 'yyyy/MM/dd - EEEE'));`}
        result="اصلی: 2024/03/15 - Friday"
      />

      <CodeExample
        title="روزهای مهم"
        description="امروز، دیروز، فردا:"
        code={`import { 
  isToday, isTomorrow, isYesterday,
  startOfToday, startOfTomorrow, startOfYesterday,
  endOfToday, endOfTomorrow, endOfYesterday,
  format 
} from 'date-fns';

const testDate = new Date(); // امروز

console.log('بررسی روزها:');
console.log('امروز است؟', isToday(testDate));
console.log('فردا است؟', isTomorrow(addDays(testDate, 1)));
console.log('دیروز است؟', isYesterday(subDays(testDate, 1)));

console.log('شروع و پایان روزها:');
console.log('شروع امروز:', format(startOfToday(), 'HH:mm:ss'));
console.log('پایان امروز:', format(endOfToday(), 'HH:mm:ss'));
console.log('شروع فردا:', format(startOfTomorrow(), 'yyyy/MM/dd HH:mm'));`}
        result="امروز است؟ true"
      />

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">فهرست توابع روز</h3>
        <div className="text-sm text-yellow-700">
          addDays، subDays، addBusinessDays، subBusinessDays، differenceInDays، 
          getDate، setDate، getDayOfYear، setDayOfYear، startOfDay، endOfDay، 
          isToday، isTomorrow، isYesterday، isSameDay
        </div>
      </div>
    </div>
  );
};

export default DayHelpersSection;
