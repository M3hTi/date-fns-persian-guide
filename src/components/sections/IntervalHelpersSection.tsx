
import React from 'react';
import CodeExample from '../CodeExample';

const IntervalHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-violet-50 to-purple-100 rounded-xl p-8 border border-violet-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع بازه‌های زمانی</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          date-fns ابزارهای قدرتمندی برای کار با بازه‌های زمانی و انجام محاسبات پیچیده روی آنها فراهم می‌کند.
        </p>
      </div>

      <CodeExample
        title="بررسی تداخل بازه‌ها"
        description="استفاده از areIntervalsOverlapping برای بررسی تداخل دو بازه زمانی:"
        code={`import { areIntervalsOverlapping, format } from 'date-fns';

// تعریف بازه‌های زمانی
const interval1 = {
  start: new Date(2024, 2, 1),   // 1 مارس
  end: new Date(2024, 2, 15)     // 15 مارس
};

const interval2 = {
  start: new Date(2024, 2, 10),  // 10 مارس
  end: new Date(2024, 2, 25)     // 25 مارس
};

const interval3 = {
  start: new Date(2024, 2, 20),  // 20 مارس
  end: new Date(2024, 2, 30)     // 30 مارس
};

// بررسی تداخل
console.log(areIntervalsOverlapping(interval1, interval2)); // true
console.log(areIntervalsOverlapping(interval1, interval3)); // false

// بررسی تداخل جلسات
const meeting1 = { start: new Date(2024, 2, 15, 10, 0), end: new Date(2024, 2, 15, 11, 30) };
const meeting2 = { start: new Date(2024, 2, 15, 11, 0), end: new Date(2024, 2, 15, 12, 0) };

const hasConflict = areIntervalsOverlapping(meeting1, meeting2);
console.log(\`تداخل جلسات: \${hasConflict ? 'دارد' : 'ندارد'}\`);`}
        result="true"
      />

      <CodeExample
        title="محدود کردن تاریخ در بازه"
        description="استفاده از clamp برای محدود کردن تاریخ در یک بازه مشخص:"
        code={`import { clamp, format } from 'date-fns';

// تعریف بازه مجاز
const allowedRange = {
  start: new Date(2024, 2, 1),   // 1 مارس
  end: new Date(2024, 2, 31)     // 31 مارس
};

// تاریخ‌های مختلف برای تست
const earlyDate = new Date(2024, 1, 15);    // 15 فوریه (قبل از بازه)
const validDate = new Date(2024, 2, 15);    // 15 مارس (داخل بازه)
const lateDate = new Date(2024, 3, 15);     // 15 آپریل (بعد از بازه)

// محدود کردن تاریخ‌ها
const clampedEarly = clamp(earlyDate, allowedRange);
const clampedValid = clamp(validDate, allowedRange);
const clampedLate = clamp(lateDate, allowedRange);

console.log('تاریخ اولیه:', format(earlyDate, 'yyyy/MM/dd'));
console.log('تاریخ محدود شده:', format(clampedEarly, 'yyyy/MM/dd')); // 2024/03/01

console.log('تاریخ معتبر:', format(clampedValid, 'yyyy/MM/dd'));     // 2024/03/15
console.log('تاریخ دیر:', format(clampedLate, 'yyyy/MM/dd'));       // 2024/03/31`}
        result="2024/03/01"
      />

      <CodeExample
        title="تولید روزهای بازه"
        description="استفاده از eachDayOfInterval برای تولید تمام روزهای یک بازه:"
        code={`import { eachDayOfInterval, format } from 'date-fns';

const interval = {
  start: new Date(2024, 2, 1),   // 1 مارس
  end: new Date(2024, 2, 7)      // 7 مارس
};

// تولید تمام روزهای بازه
const days = eachDayOfInterval(interval);

console.log('روزهای هفته اول مارس:');
days.forEach((day, index) => {
  console.log(\`روز \${index + 1}: \${format(day, 'yyyy/MM/dd - EEEE')}\`);
});

// تولید روزهای کاری (با گام 1 روز)
const workDays = eachDayOfInterval(interval, { step: 1 }).filter(day => {
  const dayOfWeek = day.getDay();
  return dayOfWeek !== 0 && dayOfWeek !== 6; // نه شنبه و نه یکشنبه
});

console.log(\`روزهای کاری: \${workDays.length} روز\`);`}
        result="روز 1: 2024/03/01 - Friday"
      />

      <CodeExample
        title="بازه‌های ساعتی و دقیقه‌ای"
        description="تولید ساعت‌ها و دقیقه‌های یک بازه زمانی:"
        code={`import { eachHourOfInterval, eachMinuteOfInterval, format } from 'date-fns';

// بازه یک روز کاری
const workDay = {
  start: new Date(2024, 2, 15, 9, 0),   // 9 صبح
  end: new Date(2024, 2, 15, 17, 0)     // 5 عصر
};

// تولید ساعت‌های کاری
const workHours = eachHourOfInterval(workDay);
console.log('ساعت‌های کاری:');
workHours.forEach(hour => {
  console.log(format(hour, 'HH:mm'));
});

// بازه جلسه
const meeting = {
  start: new Date(2024, 2, 15, 10, 0),  // 10 صبح
  end: new Date(2024, 2, 15, 10, 30)    // 10:30 صبح
};

// تولید دقیقه‌های جلسه (هر 5 دقیقه)
const meetingSlots = eachMinuteOfInterval(meeting, { step: 5 });
console.log('اسلات‌های جلسه:');
meetingSlots.forEach(slot => {
  console.log(format(slot, 'HH:mm'));
});`}
        result="09:00"
      />

      <CodeExample
        title="بازه‌های ماهانه و فصلی"
        description="تولید ماه‌ها و فصل‌های یک بازه زمانی:"
        code={`import { 
  eachMonthOfInterval, 
  eachQuarterOfInterval, 
  eachYearOfInterval,
  format 
} from 'date-fns';

// بازه سه ساله
const projectDuration = {
  start: new Date(2024, 0, 1),    // 1 ژانویه 2024
  end: new Date(2026, 11, 31)     // 31 دسامبر 2026
};

// تولید ماه‌های پروژه
const projectMonths = eachMonthOfInterval(projectDuration);
console.log(\`تعداد ماه‌های پروژه: \${projectMonths.length}\`);

// اولین 6 ماه
projectMonths.slice(0, 6).forEach((month, index) => {
  console.log(\`ماه \${index + 1}: \${format(month, 'MMMM yyyy')}\`);
});

// تولید فصل‌های پروژه
const projectQuarters = eachQuarterOfInterval(projectDuration);
console.log(\`تعداد فصل‌های پروژه: \${projectQuarters.length}\`);

// تولید سال‌های پروژه
const projectYears = eachYearOfInterval(projectDuration);
console.log('سال‌های پروژه:');
projectYears.forEach(year => {
  console.log(format(year, 'yyyy'));
});`}
        result="36"
      />

      <CodeExample
        title="بازه‌های هفتگی و آخر هفته"
        description="کار با هفته‌ها و روزهای آخر هفته:"
        code={`import { 
  eachWeekOfInterval, 
  eachWeekendOfInterval,
  format,
  startOfWeek,
  endOfWeek 
} from 'date-fns';

// بازه یک ماه
const monthInterval = {
  start: new Date(2024, 2, 1),    // 1 مارس
  end: new Date(2024, 2, 31)      // 31 مارس
};

// تولید هفته‌های ماه
const weeks = eachWeekOfInterval(monthInterval);
console.log('هفته‌های مارس:');
weeks.forEach((week, index) => {
  const weekStart = startOfWeek(week);
  const weekEnd = endOfWeek(week);
  console.log(\`هفته \${index + 1}: \${format(weekStart, 'dd/MM')} تا \${format(weekEnd, 'dd/MM')}\`);
});

// تولید روزهای آخر هفته
const weekends = eachWeekendOfInterval(monthInterval);
console.log(\`تعداد روزهای آخر هفته: \${weekends.length}\`);

weekends.slice(0, 4).forEach(weekend => {
  console.log(\`آخر هفته: \${format(weekend, 'yyyy/MM/dd - EEEE')}\`);
});`}
        result="هفته 1: 25/02 تا 03/03"
      />

      <CodeExample
        title="محاسبه تداخل روزها"
        description="محاسبه تعداد روزهای مشترک بین دو بازه:"
        code={`import { getOverlappingDaysInIntervals } from 'date-fns';

// دو پروژه با زمان‌بندی متفاوت
const project1 = {
  start: new Date(2024, 2, 1),   // 1 مارس
  end: new Date(2024, 2, 20)     // 20 مارس
};

const project2 = {
  start: new Date(2024, 2, 15),  // 15 مارس
  end: new Date(2024, 3, 5)      // 5 آپریل
};

// محاسبه روزهای مشترک
const overlappingDays = getOverlappingDaysInIntervals(project1, project2);
console.log(\`روزهای مشترک: \${overlappingDays} روز\`); // 6 روز

// بررسی تداخل تعطیلات
const vacation1 = {
  start: new Date(2024, 5, 10),  // 10 ژوئن
  end: new Date(2024, 5, 20)     // 20 ژوئن
};

const vacation2 = {
  start: new Date(2024, 5, 18),  // 18 ژوئن
  end: new Date(2024, 5, 30)     // 30 ژوئن
};

const vacationOverlap = getOverlappingDaysInIntervals(vacation1, vacation2);
console.log(\`تداخل تعطیلات: \${vacationOverlap} روز\`); // 3 روز`}
        result="6"
      />

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">فهرست کامل توابع بازه</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-indigo-700">
          <div className="space-y-2">
            <div><strong>بررسی و تحلیل:</strong></div>
            <div>• areIntervalsOverlapping - بررسی تداخل</div>
            <div>• getOverlappingDaysInIntervals - روزهای مشترک</div>
            <div>• isWithinInterval - قرارگیری در بازه</div>
            <div>• clamp - محدود کردن در بازه</div>
            
            <div className="mt-4"><strong>تولید بازه روزانه:</strong></div>
            <div>• eachDayOfInterval - هر روز</div>
            <div>• eachWeekendOfInterval - آخر هفته‌ها</div>
          </div>
          <div className="space-y-2">
            <div><strong>بازه‌های زمانی:</strong></div>
            <div>• eachHourOfInterval - هر ساعت</div>
            <div>• eachMinuteOfInterval - هر دقیقه</div>
            
            <div className="mt-4"><strong>بازه‌های تقویمی:</strong></div>
            <div>• eachWeekOfInterval - هر هفته</div>
            <div>• eachMonthOfInterval - هر ماه</div>
            <div>• eachQuarterOfInterval - هر فصل</div>
            <div>• eachYearOfInterval - هر سال</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntervalHelpersSection;
