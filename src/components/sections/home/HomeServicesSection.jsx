import { homeServices } from "../../../site-data";
import {
  containerClass,
  eyebrowClass,
  glassCardClass,
  pageSectionClass,
  paragraphClass,
  sectionHeadingClass,
} from "../../../lib/ui";

export default function HomeServicesSection() {
  return (
    <section className={pageSectionClass}>
      <div className={containerClass}>
        <div className="mb-8 max-w-3xl">
          <span className={eyebrowClass}>خدماتنا</span>
          <h2 className={`mt-4 ${sectionHeadingClass}`}>
            حلول شاملة تخدم المشروع من الدراسة حتى التنفيذ
          </h2>
          <p className={`mt-3 ${paragraphClass}`}>
            دار المعمار تقدم باقة خدمات هندسية وعقارية مصممة لتقليل المخاطر ورفع
            جودة النتيجة النهائية.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {homeServices.map((service) => (
            <article className={`${glassCardClass} p-6`} key={service.title}>
              <h3 className="font-['Cairo'] text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-8 text-slate-500">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
