
import React from 'react';
import CodeExample from '../CodeExample';

const MethodExplanationsSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-8 border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">توضیح کامل توابع date-fns</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          در این بخش توضیح کاملی از تمام توابع date-fns ارائه شده است.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">توابع قالب‌بندی (Format Functions)</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">format</h4>
              <p className="text-gray-600 text-sm">
                این تابع اصلی‌ترین تابع برای قالب‌بندی تاریخ است. شما می‌توانید یک تاریخ و یک pattern (الگو) به آن بدهید و آن تاریخ را بر اساس الگوی مشخص شده فرمت کند.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">formatDistance</h4>
              <p className="text-gray-600 text-sm">
                فاصله زمانی بین دو تاریخ را به صورت متنی نمایش می‌دهد. مثلاً "۲ ساعت پیش" یا "در ۳ روز آینده".
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">formatDistanceToNow</h4>
              <p className="text-gray-600 text-sm">
                فاصله یک تاریخ تا زمان فعلی را نمایش می‌دهد. برای نمایش زمان‌های نسبی مثل "۱۰ دقیقه پیش" استفاده می‌شود.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">formatDuration</h4>
              <p className="text-gray-600 text-sm">
                مدت زمان را به صورت متنی نمایش می‌دهد. مثلاً "۲ ساعت و ۳۰ دقیقه".
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">formatRelative</h4>
              <p className="text-gray-600 text-sm">
                تاریخ را نسبت به تاریخ مرجع (معمولاً امروز) نمایش می‌دهد. مثلاً "دیروز" یا "جمعه گذشته".
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">توابع تجزیه (Parse Functions)</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">parse</h4>
              <p className="text-gray-600 text-sm">
                رشته تاریخ را با استفاده از pattern مشخص شده تجزیه کرده و به آبجکت Date تبدیل می‌کند.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">parseISO</h4>
              <p className="text-gray-600 text-sm">
                رشته‌های تاریخ ISO 8601 (فرمت استاندارد وب) را تجزیه می‌کند. برای کار با API ها بسیار مفید است.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">parseJSON</h4>
              <p className="text-gray-600 text-sm">
                داده JSON که حاوی تاریخ است را تجزیه می‌کند.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">isValid</h4>
              <p className="text-gray-600 text-sm">
                بررسی می‌کند که آیا یک آبجکت Date معتبر است یا نه. برای اعتبارسنجی تاریخ‌ها ضروری است.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">توابع محاسبات (Calculation Functions)</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800">add</h4>
              <p className="text-gray-600 text-sm">
                مقدار مشخصی (سال، ماه، روز، ساعت و غیره) به تاریخ اضافه می‌کند. می‌توانید چندین واحد را همزمان اضافه کنید.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800">sub</h4>
              <p className="text-gray-600 text-sm">
                مقدار مشخصی از تاریخ کم می‌کند. برعکس تابع add عمل می‌کند.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800">addYears / subYears</h4>
              <p className="text-gray-600 text-sm">
                سال‌هایی به تاریخ اضافه یا از آن کم می‌کند. کبیسه بودن سال را در نظر می‌گیرد.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800">addMonths / subMonths</h4>
              <p className="text-gray-600 text-sm">
                ماه‌هایی به تاریخ اضافه یا از آن کم می‌کند. اگر روز در ماه جدید وجود نداشته باشد، به آخرین روز ماه تنظیم می‌شود.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800">addDays / subDays</h4>
              <p className="text-gray-600 text-sm">
                روزهایی به تاریخ اضافه یا از آن کم می‌کند. ساده‌ترین توابع محاسباتی هستند.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800">addBusinessDays / subBusinessDays</h4>
              <p className="text-gray-600 text-sm">
                روزهای کاری (بدون آخر هفته) به تاریخ اضافه یا از آن کم می‌کند. برای محاسبات تجاری مفید است.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">توابع مقایسه (Comparison Functions)</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-gray-800">isBefore / isAfter</h4>
              <p className="text-gray-600 text-sm">
                بررسی می‌کند که آیا یک تاریخ قبل یا بعد از تاریخ دیگر است.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-gray-800">isEqual</h4>
              <p className="text-gray-600 text-sm">
                بررسی می‌کند که آیا دو تاریخ کاملاً برابر هستند (تا میلی‌ثانیه).
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-gray-800">isSameDay / isSameMonth / isSameYear</h4>
              <p className="text-gray-600 text-sm">
                بررسی می‌کند که آیا دو تاریخ در همان روز، ماه یا سال قرار دارند.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-gray-800">isWithinInterval</h4>
              <p className="text-gray-600 text-sm">
                بررسی می‌کند که آیا یک تاریخ در بازه زمانی مشخصی قرار دارد.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-gray-800">compareAsc / compareDesc</h4>
              <p className="text-gray-600 text-sm">
                دو تاریخ را مقایسه کرده و -1، 0 یا 1 برمی‌گرداند. برای مرتب‌سازی مفید است.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-gray-800">isToday / isTomorrow / isYesterday</h4>
              <p className="text-gray-600 text-sm">
                بررسی می‌کند که آیا تاریخ مربوط به امروز، فردا یا دیروز است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodExplanationsSection;
