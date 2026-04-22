import { processSteps } from "../../../site-data";
import { containerClass, eyebrowClass, glassCardClass, pageSectionClass, sectionHeadingClass } from "../../../lib/ui";

export default function ProjectsProcessSection() {
  return (
    <section className={pageSectionClass}>
      <div className={`${containerClass} rounded-[32px] border border-white/70 bg-white/75 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl`}>
        <div className="mb-8 max-w-3xl">
          <span className={eyebrowClass}>منهجية العمل</span>
          <h2 className={`mt-4 ${sectionHeadingClass}`}>كيف ننتقل من الفكرة إلى التنفيذ</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article className={`${glassCardClass} p-6`} key={step.number}>
              <strong className="grid h-11 w-11 place-items-center rounded-2xl bg-[#bf6a33]/12 font-['Cairo'] text-xl font-bold text-[#915025]">
                {step.number}
              </strong>
              <h3 className="mt-4 font-['Cairo'] text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-8 text-slate-500">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
