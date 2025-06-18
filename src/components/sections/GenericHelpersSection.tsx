
import React from 'react';
import CodeExample from '../CodeExample';

const GenericHelpersSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توابع عمومی</h2>
        <p className="text-lg text-gray-700 leading-relaxed">توابع عمومی و کمکی برای ساخت و دستکاری تاریخ‌ها.</p>
      </div>

      <CodeExample
        title="ساخت تاریخ"
        description="استفاده از constructFrom و constructNow:"
        code={`import { constructFrom, constructNow } from 'date-fns';

// ساخت تاریخ جدید بر اساس تاریخ موجود
const referenceDate = new Date(2024, 2, 15);
const newDate = constructFrom(referenceDate, '2025-06-01');

console.log('تاریخ مرجع:', referenceDate);
console.log('تاریخ جدید:', newDate);

// ساخت تاریخ فعلی
const now = constructNow(referenceDate);
console.log('الان:', now);

// استفاده در تایم زون مختلف
const utcDate = constructFrom(referenceDate, Date.UTC(2024, 5, 15));
console.log('UTC:', utcDate);`}
        result="تاریخ مرجع: Fri Mar 15 2024"
      />

      <CodeExample
        title="انتقال تاریخ"
        description="استفاده از transpose:"
        code={`import { transpose } from 'date-fns';

// انتقال یک تاریخ به کنتکست تاریخ دیگر
const sourceDate = new Date(2024, 2, 15, 14, 30, 0);
const targetContext = new Date(2025, 0, 1);

const transposed = transpose(sourceDate, targetContext);

console.log('تاریخ اصلی:', sourceDate);
console.log('کنتکست هدف:', targetContext);
console.log('تاریخ منتقل شده:', transposed);

// مفید برای حفظ زمان اما تغییر کنتکست
const meeting = new Date(2024, 2, 15, 10, 0, 0);
const nextYear = new Date(2025, 0, 1);
const nextYearMeeting = transpose(meeting, nextYear);

console.log('جلسه امسال:', meeting);
console.log('جلسه سال آینده:', nextYearMeeting);`}
        result="تاریخ اصلی: Fri Mar 15 2024"
      />

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">فهرست توابع عمومی</h3>
        <div className="text-sm text-slate-700">
          <div className="space-y-2">
            <div><strong>constructFrom</strong> - ساخت تاریخ بر اساس مرجع</div>
            <div><strong>constructNow</strong> - ساخت تاریخ فعلی با کنتکست</div>
            <div><strong>transpose</strong> - انتقال تاریخ به کنتکست جدید</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericHelpersSection;
