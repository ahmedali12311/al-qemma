import { Link } from "react-router-dom";
import { featuredProjects } from "../../../site-data";
import {
  containerClass,
  eyebrowClass,
  pageSectionClass,
  sectionHeadingClass,
  tagClass,
} from "../../../lib/ui";

export default function HomeProjectsSection() {
  return (
    <section className={pageSectionClass}>
      <div className={containerClass}>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className={eyebrowClass}>أبرز المشاريع</span>
            <h2 className={`mt-4 ${sectionHeadingClass}`}>
              نماذج من الأعمال المنشورة لشركة دار المعمار
            </h2>
          </div>
          <Link className="text-sm font-bold text-[#915025]" to="/projects">
            عرض جميع التفاصيل
          </Link>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              className={`overflow-hidden rounded-[28px] border shadow-[0_16px_34px_rgba(12,18,24,0.08)] ${
                project.featured
                  ? "border-transparent bg-gradient-to-br from-[#102933] to-[#bf6a33] text-[#fffaf5]"
                  : "border-slate-200 bg-white/80"
              }`}
              key={project.title}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span
                  className={
                    project.featured
                      ? "inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
                      : tagClass
                  }
                >
                  {project.tag}
                </span>
                <h3 className="mt-4 font-['Cairo'] text-2xl font-bold">
                  {project.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-8 ${
                    project.featured ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {project.text}
                </p>
                <ul
                  className={`mt-4 grid gap-2 text-sm ${
                    project.featured ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {project.meta.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
