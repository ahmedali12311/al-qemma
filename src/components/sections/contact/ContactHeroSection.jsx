import { containerClass, eyebrowClass, glassCardClass, pageSectionClass, paragraphClass, sectionTitleClass } from "../../../lib/ui";

export default function ContactHeroSection() {
  return (
    <section className={pageSectionClass}>
      <div className={`${containerClass} grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)]`}>
        <div>
          <span className={eyebrowClass}>تواصل معنا</span>
          <h1 className={`mt-4 ${sectionTitleClass}`}>
            ابدأ محادثة مباشرة حول مشروعك أو استشارتك القادمة
          </h1>
          <p className={`mt-4 max-w-2xl ${paragraphClass}`}>
            سواء كنت تبحث عن تصميم معماري، إشراف هندسي، تنفيذ، أو دعم في
            الاستثمار العقاري، يمكننا مساعدتك في تحديد الخطوة التالية.
          </p>
        </div>

        <div className={`${glassCardClass} grid gap-4 p-6`}>
          <div className="rounded-[22px] border border-slate-200 bg-white/70 p-5">
            <span className="block text-sm text-slate-500">القناة الأسرع</span>
            <strong className="mt-2 block text-lg font-bold text-slate-900" dir="ltr">
              +218 91-3768844
            </strong>
          </div>
          <div className="rounded-[22px] border border-slate-200 bg-white/70 p-5">
            <span className="block text-sm text-slate-500">البريد الإلكتروني</span>
            <strong className="mt-2 block text-lg font-bold text-slate-900">
              dar.alma3mar@gmail.com
            </strong>
          </div>
          <img
            src="/images/contact-space.jpg"
            alt="مساحة استقبال حديثة"
            className="h-60 w-full rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
