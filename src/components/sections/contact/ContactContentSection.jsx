import { contactMethods } from "../../../site-data";
import {
  buttonPrimaryClass,
  containerClass,
  eyebrowClass,
  glassCardClass,
  pageSectionClass,
  paragraphClass,
  sectionHeadingClass,
} from "../../../lib/ui";

const inputClass =
  "w-full rounded-2xl border border-slate-300 bg-white/85 px-4 py-3 text-slate-900 outline-none transition focus:border-[#bf6a33]/50 focus:ring-4 focus:ring-[#bf6a33]/10";

export default function ContactContentSection() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`طلب جديد من الموقع - ${service}`);
    const body = encodeURIComponent(
      [
        "السلام عليكم،",
        "",
        `الاسم: ${name}`,
        `الهاتف: ${phone}`,
        `الخدمة المطلوبة: ${service}`,
        "",
        "تفاصيل الطلب:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:dar.alma3mar@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className={pageSectionClass}>
      <div className={`${containerClass} grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)]`}>
        <div className={`${glassCardClass} p-7`}>
          <div className="mb-6 max-w-2xl">
            <span className={eyebrowClass}>بيانات الشركة</span>
            <h2 className={`mt-4 ${sectionHeadingClass}`}>طرق الوصول إلى دار المعمار</h2>
            <p className={`mt-3 ${paragraphClass}`}>
              اختر وسيلة التواصل الأنسب لك، وسنكون سعداء بمناقشة المتطلبات
              الفنية أو العقارية لمشروعك.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((item) => (
              <a
                className="flex min-h-36 flex-col gap-2 rounded-[24px] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_34px_rgba(12,18,24,0.08)] transition hover:-translate-y-1 hover:border-[#bf6a33]/30"
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <span className="text-sm text-slate-500">{item.label}</span>
                <strong className="text-base font-bold leading-7 text-slate-900">
                  {item.value}
                </strong>
              </a>
            ))}
          </div>
        </div>

        <div className={`${glassCardClass} p-7`}>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="mb-1">
              <span className={eyebrowClass}>أرسل رسالة</span>
              <h2 className={`mt-4 ${sectionHeadingClass}`}>نموذج تواصل سريع</h2>
              <p className={`mt-3 ${paragraphClass}`}>
                هذا النموذج يجهز رسالة بريد إلكتروني مباشرة إلى الشركة بالبيانات
                التي تكتبها.
              </p>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-800">الاسم</span>
              <input className={inputClass} type="text" name="name" placeholder="اكتب اسمك" required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-800">رقم الهاتف</span>
              <input className={inputClass} type="tel" name="phone" placeholder="مثال: +218 ..." required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-800">نوع الخدمة</span>
              <select className={inputClass} name="service" defaultValue="استشارة هندسية">
                <option value="استشارة هندسية">استشارة هندسية</option>
                <option value="تصميم معماري">تصميم معماري</option>
                <option value="تنفيذ وإشراف">تنفيذ وإشراف</option>
                <option value="استثمار عقاري">استثمار عقاري</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-800">تفاصيل الطلب</span>
              <textarea
                className={`${inputClass} min-h-40 resize-y`}
                name="message"
                rows="6"
                placeholder="اكتب تفاصيل مشروعك أو استفسارك"
                required
              ></textarea>
            </label>

            <button className={buttonPrimaryClass} type="submit">
              تجهيز الرسالة
            </button>

            <p className="text-sm leading-7 text-slate-500">
              بعد الضغط سيتم فتح برنامج البريد الافتراضي لديك برسالة جاهزة.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
