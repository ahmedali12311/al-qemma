import { containerClass, eyebrowClass, glassCardClass, pageSectionClass, paragraphClass, sectionTitleClass } from "../../../lib/ui";

export default function ProjectsHeroSection() {
  return (
    <section className={pageSectionClass}>
      <div className={`${containerClass} grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)]`}>
        <div>
          <span className={eyebrowClass}>المشاريع</span>
          <h1 className={`mt-4 ${sectionTitleClass}`}>
            أعمال تعكس خبرة تنفيذية وهندسية متكاملة
          </h1>
          <p className={`mt-4 max-w-2xl ${paragraphClass}`}>
            هذه الصفحة تعرض نماذج من المشاريع المنشورة ونطاق العمل الذي تقدمه دار
            المعمار في المشاريع السكنية والفنية والاستثمارية.
          </p>
        </div>

        <div className={`${glassCardClass} grid gap-4 p-6`}>
          <div className="rounded-[22px] border border-slate-200 bg-white/70 p-5">
            <span className="block text-sm text-slate-500">مجالات العمل</span>
            <strong className="mt-2 block text-lg font-bold text-slate-900">
              فلل سكنية، عزل، إشراف، استثمار عقاري
            </strong>
          </div>
          <div className="rounded-[22px] border border-slate-200 bg-white/70 p-5">
            <span className="block text-sm text-slate-500">آلية العمل</span>
            <strong className="mt-2 block text-lg font-bold text-slate-900">
              تصميم، تنسيق تخصصات، تنفيذ ومتابعة
            </strong>
          </div>
          <img
            src="/images/architecture-city.jpg"
            alt="مشهد عمراني حديث"
            className="h-60 w-full rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
