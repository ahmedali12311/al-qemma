import { projectDetails } from "../../../site-data";
import { containerClass, eyebrowClass, pageSectionClass, paragraphClass, sectionHeadingClass, tagClass } from "../../../lib/ui";

export default function ProjectsDetailsSection() {
  return (
    <section className={pageSectionClass}>
      <div className={containerClass}>
        <div className="mb-8 max-w-3xl">
          <span className={eyebrowClass}>مشاريع منشورة</span>
          <h2 className={`mt-4 ${sectionHeadingClass}`}>نماذج موثقة من منشورات الشركة</h2>
          <p className={`mt-3 ${paragraphClass}`}>
            اعتمدنا في هذه الصفحة على الأعمال التي ظهرت ضمن منشورات دار المعمار
            والبيانات التي زودتنا بها.
          </p>
        </div>

        <div className="grid gap-6">
          {projectDetails.map((project) => (
            <article
              className="grid overflow-hidden rounded-[32px] border border-white/70 bg-white/75 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]"
              key={project.title}
            >
              <div className="min-h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <span className={tagClass}>{project.date}</span>
                  <h3 className="font-['Cairo'] text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm leading-8 text-slate-500">{project.text}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {project.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[18px] border border-slate-200 bg-[#f4efe7]/85 p-4"
                    >
                      <span className="block text-sm text-slate-500">{fact.label}</span>
                      <strong className="mt-2 block text-base font-bold text-slate-900">
                        {fact.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
