import { workScopes } from "../../../site-data";
import { containerClass, eyebrowClass, glassCardClass, pageSectionClass, paragraphClass, sectionHeadingClass } from "../../../lib/ui";

export default function ProjectsScopesSection() {
  return (
    <section className={`${pageSectionClass} bg-gradient-to-b from-white/30 to-[#ece3d6]/50`}>
      <div className={containerClass}>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className={eyebrowClass}>نطاق العمل</span>
            <h2 className={`mt-4 ${sectionHeadingClass}`}>
              أنواع المشاريع التي تخدمها دار المعمار
            </h2>
          </div>
          <p className="max-w-md text-sm leading-8 text-slate-500">
            إلى جانب المشاريع المنشورة، تعمل الشركة ضمن نطاق أوسع من الحلول
            الهندسية والعقارية.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workScopes.map((item) => (
            <article className={`${glassCardClass} p-6`} key={item.title}>
              <h3 className="font-['Cairo'] text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-8 text-slate-500">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
