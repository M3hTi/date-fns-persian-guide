
import React from 'react';
import CodeExample from '../CodeExample';

const WeekdayHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-teal-100 rounded-xl p-8 border border-green-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع روزهای هفته</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          توابع مربوط به روزهای هفته، تشخیص روز و ناوبری بین روزها.
        </p>
      </div>

      <CodeExample
        title="تشخیص روزهای هفته"
        description="بررسی روز هفته با توابع مختلف:"
        code={`import { 
  isMonday, isTuesday, isWednesday, isThursday, 
  isFriday, isSaturday, isSunday, isWeekend,
  format 
} from 'date-fns';

const dates = [
  new Date(2024, 2, 11), // دوشنبه
  new Date(2024, 2, 15), // جمعه  
  new Date(2024, 2, 16), // شنبه
  new Date(2024, 2, 17), // یکشنبه
];

dates.forEach(date => {
  console.log(\`\${format(date, 'yyyy/MM/dd')}:\`);
  console.log('  دوشنبه:', isMonday(date));
  console.log('  جمعه:', isFriday(date));
  console.log('  شنبه:', isSaturday(date));
  console.log('  یکشنبه:', isSunday(date));
  console.log('  آخر هفته:', isWeekend(date));
});`}
        result="2024/03/11:"
      />

      <CodeExample
        title="ناوبری بین روزها"
        description="رفتن به روز بعدی یا قبلی:"
        code={`import { 
  nextMonday, nextFriday, nextSaturday,
  previousMonday, previousFriday, previousSaturday,
  format 
} from 'date-fns';

const date = new Date(2024, 2, 15); // جمعه

console.log('تاریخ فعلی:', format(date, 'yyyy/MM/dd - EEEE'));
console.log('دوشنبه بعدی:', format(nextMonday(date), 'yyyy/MM/dd - EEEE'));
console.log('جمعه بعدی:', format(nextFriday(date), 'yyyy/MM/dd - EEEE'));
console.log('شنبه بعدی:', format(nextSaturday(date), 'yyyy/MM/dd - EEEE'));
console.log('دوشنبه قبلی:', format(previousMonday(date), 'yyyy/MM/dd - EEEE'));`}
        result="تاریخ فعلی: 2024/03/15 - Friday"
      />

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3">فهرست توابع روزهای هفته</h3>
        <div className="text-sm text-green-700">
          getDay، getISODay، setDay، setISODay، isMonday-isSunday، isWeekend،
          nextDay، previousDay، nextMonday-nextSunday، previousMonday-previousSunday
        </div>
      </div>
    </div>
  );
};

export default WeekdayHelpersSection;
