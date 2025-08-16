import React from 'react';
import CodeExample from '../CodeExample';

const DurationSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-teal-100 rounded-xl p-8 border border-green-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع مدت زمان</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          توابع تخصصی برای کار با Duration ها و تبدیل بازه‌های زمانی به مدت زمان قابل خواندن.
        </p>
      </div>

      <CodeExample
        title="تبدیل بازه به مدت زمان"
        description="استفاده از intervalToDuration:"
        code={`import { intervalToDuration, format } from 'date-fns';

// بازه‌های مختلف
const intervals = [
  {
    start: new Date(2024, 0, 1, 10, 0),
    end: new Date(2024, 0, 1, 14, 30)
  },
  {
    start: new Date(2024, 0, 1),
    end: new Date(2024, 2, 15, 10, 30)
  },
  {
    start: new Date(2022, 0, 1),
    end: new Date(2024, 0, 1)
  }
];

intervals.forEach((interval, index) => {
  const duration = intervalToDuration(interval);
  
  console.log(\`بازه \${index + 1}:\`);
  console.log('شروع:', format(interval.start, 'yyyy/MM/dd HH:mm'));
  console.log('پایان:', format(interval.end, 'yyyy/MM/dd HH:mm'));
  console.log('مدت زمان:', JSON.stringify(duration, null, 2));
  console.log('---');
});

// تابع برای نمایش duration به صورت خوانا
function formatDurationReadable(duration) {
  const parts = [];
  
  if (duration.years) parts.push(\`\${duration.years} سال\`);
  if (duration.months) parts.push(\`\${duration.months} ماه\`);
  if (duration.days) parts.push(\`\${duration.days} روز\`);
  if (duration.hours) parts.push(\`\${duration.hours} ساعت\`);
  if (duration.minutes) parts.push(\`\${duration.minutes} دقیقه\`);
  if (duration.seconds) parts.push(\`\${duration.seconds} ثانیه\`);
  
  return parts.join(' و ') || '0 ثانیه';
}

const workDuration = intervalToDuration({
  start: new Date(2024, 0, 1, 9, 0),
  end: new Date(2024, 0, 1, 17, 30)
});

console.log('مدت زمان کار:', formatDurationReadable(workDuration));`}
        result="مدت زمان: { hours: 4, minutes: 30 }"
      />

      <CodeExample
        title="قالب‌بندی مدت زمان"
        description="استفاده از formatDuration:"
        code={`import { formatDuration, intervalToDuration } from 'date-fns';
import { faIR } from 'date-fns/locale';

// ایجاد duration های مختلف
const durations = [
  { hours: 2, minutes: 30 },
  { days: 5, hours: 8, minutes: 15 },
  { years: 1, months: 6, days: 10 },
  { minutes: 45, seconds: 30 }
];

console.log('قالب‌بندی مدت زمان (انگلیسی):');
durations.forEach((duration, index) => {
  const formatted = formatDuration(duration);
  console.log(\`مدت \${index + 1}: \${formatted}\`);
});

console.log('\\nقالب‌بندی با گزینه‌های مختلف:');
const complexDuration = { years: 2, months: 3, days: 15, hours: 4, minutes: 30 };

// فقط واحدهای بزرگ
const yearAndMonth = formatDuration(complexDuration, { 
  format: ['years', 'months'] 
});
console.log('فقط سال و ماه:', yearAndMonth);

// حداکثر 2 واحد
const limited = formatDuration(complexDuration, { 
  format: ['years', 'months', 'days', 'hours', 'minutes']
});
console.log('کامل:', limited);

// کاربرد عملی: محاسبه مدت پروژه
function calculateProjectDuration(startDate, endDate) {
  const duration = intervalToDuration({ start: startDate, end: endDate });
  return formatDuration(duration, { 
    format: ['years', 'months', 'days'],
    zero: true 
  });
}

const projectStart = new Date(2024, 0, 1);
const projectEnd = new Date(2024, 8, 15);
console.log('مدت پروژه:', calculateProjectDuration(projectStart, projectEnd));`}
        result="مدت 1: 2 hours 30 minutes"
      />

      <CodeExample
        title="محاسبه دقیق تفاوت‌ها"
        description="تفاوت‌های دقیق بین تاریخ‌ها:"
        code={`import { 
  differenceInYears, differenceInMonths, differenceInDays,
  differenceInHours, differenceInMinutes, differenceInSeconds,
  differenceInMilliseconds, differenceInCalendarDays
} from 'date-fns';

const startDate = new Date(2024, 0, 15, 10, 30, 45); // 15 ژانویه 10:30:45
const endDate = new Date(2024, 3, 20, 14, 45, 30);   // 20 آپریل 14:45:30

// محاسبه تفاوت‌ها
const differences = {
  years: differenceInYears(endDate, startDate),
  months: differenceInMonths(endDate, startDate),
  days: differenceInDays(endDate, startDate),
  calendarDays: differenceInCalendarDays(endDate, startDate),
  hours: differenceInHours(endDate, startDate),
  minutes: differenceInMinutes(endDate, startDate),
  seconds: differenceInSeconds(endDate, startDate),
  milliseconds: differenceInMilliseconds(endDate, startDate)
};

console.log('تفاوت‌های محاسبه شده:');
Object.entries(differences).forEach(([unit, value]) => {
  console.log(\`\${unit}: \${value}\`);
});

// کاربرد عملی: محاسبه سن دقیق
function calculateAge(birthDate, currentDate = new Date()) {
  const years = differenceInYears(currentDate, birthDate);
  const months = differenceInMonths(currentDate, birthDate) % 12;
  const days = differenceInDays(currentDate, birthDate) % 365;
  
  return { years, months, days };
}

const birthDate = new Date(1990, 5, 15); // 15 ژوئن 1990
const age = calculateAge(birthDate);
console.log(\`سن: \${age.years} سال، \${age.months} ماه، \${age.days} روز\`);

// محاسبه زمان باقی‌مانده
function timeRemaining(targetDate, fromDate = new Date()) {
  if (targetDate <= fromDate) return 'زمان گذشته است';
  
  const days = differenceInDays(targetDate, fromDate);
  const hours = differenceInHours(targetDate, fromDate) % 24;
  const minutes = differenceInMinutes(targetDate, fromDate) % 60;
  
  return \`\${days} روز، \${hours} ساعت، \${minutes} دقیقه\`;
}

const deadline = new Date(2024, 11, 31, 23, 59, 59);
console.log('زمان باقی‌مانده تا پایان سال:', timeRemaining(deadline));`}
        result="days: 96"
      />

      <CodeExample
        title="کار با Business Days"
        description="محاسبه روزهای کاری و تفاوت‌ها:"
        code={`import { 
  addBusinessDays, subBusinessDays, 
  differenceInBusinessDays, 
  isWeekend, format 
} from 'date-fns';

const startDate = new Date(2024, 2, 15); // جمعه 15 مارس

console.log('محاسبات روزهای کاری:');
console.log('تاریخ شروع:', format(startDate, 'yyyy/MM/dd - EEEE'));

// اضافه کردن روزهای کاری
const add5Business = addBusinessDays(startDate, 5);
const add10Business = addBusinessDays(startDate, 10);

console.log('+5 روز کاری:', format(add5Business, 'yyyy/MM/dd - EEEE'));
console.log('+10 روز کاری:', format(add10Business, 'yyyy/MM/dd - EEEE'));

// کم کردن روزهای کاری
const sub3Business = subBusinessDays(startDate, 3);
console.log('-3 روز کاری:', format(sub3Business, 'yyyy/MM/dd - EEEE'));

// محاسبه تفاوت روزهای کاری
const projectStart = new Date(2024, 2, 1);
const projectEnd = new Date(2024, 2, 31);

const businessDaysDiff = differenceInBusinessDays(projectEnd, projectStart);
console.log(\`روزهای کاری مارس: \${businessDaysDiff} روز\`);

// تابع کمکی برای محاسبه deadline
function calculateDeadline(startDate, businessDaysNeeded) {
  const deadline = addBusinessDays(startDate, businessDaysNeeded);
  const isWeekendDay = isWeekend(deadline);
  
  return {
    date: deadline,
    formatted: format(deadline, 'yyyy/MM/dd - EEEE'),
    isWeekend: isWeekendDay,
    warning: isWeekendDay ? 'تاریخ در آخر هفته قرار دارد' : null
  };
}

const taskDeadline = calculateDeadline(new Date(2024, 2, 20), 7);
console.log('Deadline کار:', taskDeadline.formatted);
if (taskDeadline.warning) console.log('هشدار:', taskDeadline.warning);`}
        result="جمعه 15 مارس"
      />

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3">فهرست توابع مدت زمان</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
          <div className="space-y-2">
            <div><strong>Duration ها:</strong></div>
            <div>• intervalToDuration - تبدیل بازه</div>
            <div>• formatDuration - قالب‌بندی</div>
            <div>• addDuration - اضافه کردن</div>
            <div>• subtractDuration - کم کردن</div>
          </div>
          <div className="space-y-2">
            <div><strong>تفاوت‌ها:</strong></div>
            <div>• differenceIn* - تمام واحدها</div>
            <div>• differenceInBusinessDays - روزهای کاری</div>
            <div>• differenceInCalendarDays - روزهای تقویمی</div>
            <div>• Business day functions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationSection;