import { contactMethods } from "../../../site-data";
import { containerClass, pageSectionClass, sectionHeadingClass } from "../../../lib/ui";

export default function HomeContactSection() {
  return (
    <section className={pageSectionClass}>
      <div className={`${containerClass} grid gap-5 rounded-[32px] bg-[linear-gradient(135deg,rgba(16,41,51,0.96),rgba(26,60,72,0.92)),url('/images/architecture-city.jpg')] bg-cover bg-center p-8 text-[#fffaf5] shadow-[0_28px_70px_rgba(16,41,51,0.18)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]`}>
        <div>
          <span className="inline-flex items-center gap-3 text-sm font-bold text-[#f6d3be] before:block before:h-px before:w-10 before:bg-current before:content-['']">
            تواصل معنا
          </span>
          <h2 className={`mt-4 ${sectionHeadingClass} text-white`}>
            نحن جاهزون لمناقشة مشروعك القادم
          </h2>
          <p className="mt-4 text-base leading-8 text-white/80">
            إذا كنت تبحث عن مكتب هندسي يجمع بين الرؤية العملية والتنفيذ المنظم،
            يمكن التواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {contactMethods.map((item) => (
            <a
              className="flex min-h-36 flex-col gap-2 rounded-[24px] border border-slate-200 bg-white/90 p-6 text-slate-800 shadow-[0_16px_34px_rgba(12,18,24,0.08)] transition hover:-translate-y-1 hover:border-[#bf6a33]/30"
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              <span className="text-sm text-slate-500">{item.label}</span>
              <strong className="text-base font-bold leading-7">{item.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
