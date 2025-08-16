import React from 'react';
import CodeExample from '../CodeExample';

const DifferenceSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع محاسبه تفاوت</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          مجموعه کاملی از توابع برای محاسبه تفاوت بین تاریخ‌ها در واحدهای مختلف زمانی.
        </p>
      </div>

      <CodeExample
        title="تفاوت‌های زمانی کوچک"
        description="محاسبه تفاوت در میلی‌ثانیه، ثانیه و دقیقه:"
        code={`import { 
  differenceInMilliseconds, 
  differenceInSeconds, 
  differenceInMinutes,
  format 
} from 'date-fns';

const start = new Date(2024, 2, 15, 10, 30, 45, 500);
const end = new Date(2024, 2, 15, 10, 33, 20, 750);

console.log('زمان شروع:', format(start, 'HH:mm:ss.SSS'));
console.log('زمان پایان:', format(end, 'HH:mm:ss.SSS'));

// محاسبه تفاوت‌ها
const millisDiff = differenceInMilliseconds(end, start);
const secondsDiff = differenceInSeconds(end, start);
const minutesDiff = differenceInMinutes(end, start);

console.log(\`تفاوت میلی‌ثانیه: \${millisDiff} ms\`);
console.log(\`تفاوت ثانیه: \${secondsDiff} s\`);
console.log(\`تفاوت دقیقه: \${minutesDiff} min\`);

// کاربرد عملی: اندازه‌گیری زمان اجرا
function measurePerformance(func) {
  const startTime = new Date();
  func();
  const endTime = new Date();
  
  return {
    milliseconds: differenceInMilliseconds(endTime, startTime),
    seconds: differenceInSeconds(endTime, startTime),
    readable: \`\${differenceInMilliseconds(endTime, startTime)} میلی‌ثانیه\`
  };
}

// تست تابع
const performance = measurePerformance(() => {
  // شبیه‌سازی عملیات
  for(let i = 0; i < 1000000; i++) { /* حلقه */ }
});

console.log('زمان اجرا:', performance.readable);`}
        result="تفاوت میلی‌ثانیه: 155250 ms"
      />

      <CodeExample
        title="تفاوت‌های روزانه و هفتگی"
        description="انواع مختلف محاسبه تفاوت روزها:"
        code={`import { 
  differenceInDays, 
  differenceInCalendarDays,
  differenceInWeeks,
  differenceInCalendarWeeks,
  differenceInBusinessDays,
  format 
} from 'date-fns';

const date1 = new Date(2024, 2, 15, 23, 0); // 15 مارس 23:00
const date2 = new Date(2024, 2, 16, 1, 0);  // 16 مارس 01:00

console.log('تاریخ 1:', format(date1, 'yyyy/MM/dd HH:mm'));
console.log('تاریخ 2:', format(date2, 'yyyy/MM/dd HH:mm'));

// انواع تفاوت روز
console.log('تفاوت روز (کامل):', differenceInDays(date2, date1), 'روز');
console.log('تفاوت تقویمی:', differenceInCalendarDays(date2, date1), 'روز');

// مثال بزرگ‌تر
const projectStart = new Date(2024, 0, 1);  // 1 ژانویه
const projectEnd = new Date(2024, 11, 31);  // 31 دسامبر

const daysDiff = differenceInDays(projectEnd, projectStart);
const calendarDaysDiff = differenceInCalendarDays(projectEnd, projectStart);
const weeksDiff = differenceInWeeks(projectEnd, projectStart);
const calendarWeeksDiff = differenceInCalendarWeeks(projectEnd, projectStart);
const businessDaysDiff = differenceInBusinessDays(projectEnd, projectStart);

console.log('\\nمحاسبات سالانه:');
console.log(\`روزهای کامل: \${daysDiff}\`);
console.log(\`روزهای تقویمی: \${calendarDaysDiff}\`);
console.log(\`هفته‌های کامل: \${weeksDiff}\`);
console.log(\`هفته‌های تقویمی: \${calendarWeeksDiff}\`);
console.log(\`روزهای کاری: \${businessDaysDiff}\`);

// تابع محاسبه تفاوت هوشمند
function calculateSmartDifference(start, end) {
  const days = Math.abs(differenceInDays(end, start));
  
  if (days === 0) return 'امروز';
  if (days === 1) return 'یک روز';
  if (days < 7) return \`\${days} روز\`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    return \`\${weeks} هفته\` + (remainingDays > 0 ? \` و \${remainingDays} روز\` : '');
  }
  
  const months = Math.floor(days / 30);
  return \`حدود \${months} ماه\`;
}

console.log('\\nتفاوت هوشمند:', calculateSmartDifference(projectStart, projectEnd));`}
        result="تفاوت روز (کامل): 0 روز"
      />

      <CodeExample
        title="تفاوت‌های ماهانه و سالانه"
        description="محاسبه تفاوت در واحدهای بزرگ‌تر:"
        code={`import { 
  differenceInMonths, 
  differenceInCalendarMonths,
  differenceInQuarters,
  differenceInCalendarQuarters,
  differenceInYears,
  differenceInCalendarYears,
  format 
} from 'date-fns';

// تاریخ‌های مختلف برای تست
const birthDate = new Date(1990, 5, 15); // 15 ژوئن 1990
const today = new Date(2024, 2, 20);     // 20 مارس 2024

console.log('تاریخ تولد:', format(birthDate, 'yyyy/MM/dd'));
console.log('امروز:', format(today, 'yyyy/MM/dd'));

// محاسبه سن با واحدهای مختلف
const ageInYears = differenceInYears(today, birthDate);
const ageInCalendarYears = differenceInCalendarYears(today, birthDate);
const ageInMonths = differenceInMonths(today, birthDate);
const ageInCalendarMonths = differenceInCalendarMonths(today, birthDate);
const ageInQuarters = differenceInQuarters(today, birthDate);

console.log('\\nمحاسبه سن:');
console.log(\`سال‌های کامل: \${ageInYears}\`);
console.log(\`سال‌های تقویمی: \${ageInCalendarYears}\`);
console.log(\`ماه‌های کامل: \${ageInMonths}\`);
console.log(\`ماه‌های تقویمی: \${ageInCalendarMonths}\`);
console.log(\`فصل‌های کامل: \${ageInQuarters}\`);

// محاسبه سابقه کار
function calculateWorkExperience(startDate, endDate = new Date()) {
  const totalMonths = differenceInMonths(endDate, startDate);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  return {
    years,
    months,
    totalMonths,
    formatted: \`\${years} سال و \${months} ماه\`
  };
}

const jobStart = new Date(2020, 0, 15); // شروع کار
const experience = calculateWorkExperience(jobStart, today);
console.log('\\nسابقه کار:', experience.formatted);

// مقایسه دو پروژه
const project1 = {
  start: new Date(2023, 0, 1),
  end: new Date(2023, 8, 30)
};

const project2 = {
  start: new Date(2023, 6, 1),
  end: new Date(2024, 2, 15)
};

function compareProjectDurations(proj1, proj2) {
  const duration1 = differenceInMonths(proj1.end, proj1.start);
  const duration2 = differenceInMonths(proj2.end, proj2.start);
  
  return {
    project1Duration: duration1,
    project2Duration: duration2,
    difference: Math.abs(duration1 - duration2),
    longer: duration1 > duration2 ? 'پروژه 1' : 'پروژه 2'
  };
}

const comparison = compareProjectDurations(project1, project2);
console.log('\\nمقایسه پروژه‌ها:');
console.log(\`پروژه 1: \${comparison.project1Duration} ماه\`);
console.log(\`پروژه 2: \${comparison.project2Duration} ماه\`);
console.log(\`\${comparison.longer} طولانی‌تر است\`);`}
        result="سال‌های کامل: 33"
      />

      <CodeExample
        title="تفاوت ISO و Calendar"
        description="تفاوت بین محاسبات ISO و تقویمی:"
        code={`import { 
  differenceInISOWeekYears,
  differenceInCalendarISOWeeks,
  differenceInCalendarISOWeekYears,
  getISOWeek,
  getISOWeekYear,
  format 
} from 'date-fns';

// تاریخ‌هایی در مرز سال ISO
const date1 = new Date(2023, 0, 1);  // 1 ژانویه 2023
const date2 = new Date(2024, 0, 7);  // 7 ژانویه 2024

console.log('تاریخ 1:', format(date1, 'yyyy/MM/dd'));
console.log('هفته ISO تاریخ 1:', getISOWeek(date1), 'سال ISO:', getISOWeekYear(date1));

console.log('تاریخ 2:', format(date2, 'yyyy/MM/dd'));
console.log('هفته ISO تاریخ 2:', getISOWeek(date2), 'سال ISO:', getISOWeekYear(date2));

// محاسبه تفاوت‌های ISO
const isoWeekYearsDiff = differenceInISOWeekYears(date2, date1);
const calendarISOWeeksDiff = differenceInCalendarISOWeeks(date2, date1);
const calendarISOWeekYearsDiff = differenceInCalendarISOWeekYears(date2, date1);

console.log('\\nتفاوت‌های ISO:');
console.log(\`سال‌های ISO: \${isoWeekYearsDiff}\`);
console.log(\`هفته‌های ISO تقویمی: \${calendarISOWeeksDiff}\`);
console.log(\`سال‌های ISO تقویمی: \${calendarISOWeekYearsDiff}\`);

// کاربرد عملی: محاسبه هفته‌های کاری سال
function calculateWorkWeeksInYear(year) {
  const yearStart = new Date(year, 0, 1);
  const yearEnd = new Date(year, 11, 31);
  
  // هفته‌های ISO سال
  const isoWeeks = differenceInCalendarISOWeeks(yearEnd, yearStart);
  
  return {
    year,
    isoWeeks: isoWeeks,
    estimatedWorkWeeks: Math.floor(isoWeeks * 0.8), // حدود 80% کاری
    vacationWeeks: Math.floor(isoWeeks * 0.2)
  };
}

const workYear2024 = calculateWorkWeeksInYear(2024);
console.log('\\nتحلیل سال کاری 2024:');
console.log(\`کل هفته‌ها: \${workYear2024.isoWeeks}\`);
console.log(\`هفته‌های کاری تخمینی: \${workYear2024.estimatedWorkWeeks}\`);
console.log(\`هفته‌های تعطیل: \${workYear2024.vacationWeeks}\`);`}
        result="هفته ISO تاریخ 1: 52"
      />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">فهرست کامل توابع تفاوت</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-700">
          <div className="space-y-2">
            <div><strong>واحدهای کوچک:</strong></div>
            <div>• differenceInMilliseconds</div>
            <div>• differenceInSeconds</div>
            <div>• differenceInMinutes</div>
            <div>• differenceInHours</div>
          </div>
          <div className="space-y-2">
            <div><strong>واحدهای متوسط:</strong></div>
            <div>• differenceInDays</div>
            <div>• differenceInCalendarDays</div>
            <div>• differenceInBusinessDays</div>
            <div>• differenceInWeeks</div>
            <div>• differenceInCalendarWeeks</div>
          </div>
          <div className="space-y-2">
            <div><strong>واحدهای بزرگ:</strong></div>
            <div>• differenceInMonths</div>
            <div>• differenceInQuarters</div>
            <div>• differenceInYears</div>
            <div>• ISO variations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;