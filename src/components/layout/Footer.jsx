import { NavLink, useLocation } from "react-router-dom";
import { footerCopy, navLinks } from "../../site-data";
import { containerClass } from "../../lib/ui";

export default function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();
  const copy = footerCopy[location.pathname] || footerCopy["/"];

  return (
    <footer className="mt-6 border-t border-slate-900/10 bg-gradient-to-b from-white/55 to-[#ece3d6]/80 py-10 md:py-12">
      <div className={`${containerClass} grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.72fr)_minmax(0,0.72fr)]`}>
        <div>
          <NavLink className="mb-4 inline-flex items-center gap-3" to="/">
            <span className="grid h-13 w-13 place-items-center rounded-[18px] bg-gradient-to-br from-[#bf6a33] to-[#102933] font-['Cairo'] text-lg font-extrabold tracking-[0.08em] text-[#fff7ef] shadow-[0_14px_28px_rgba(16,41,51,0.16)]">
              DM
            </span>
            <span className="flex flex-col leading-tight">
              <strong className="font-['Cairo'] text-base font-extrabold text-slate-900">
                دار المعمار
              </strong>
              <small className="text-xs text-slate-500">
                الاستشارات الهندسية والاستثمار العقاري
              </small>
            </span>
          </NavLink>
          <p className="max-w-xl text-sm leading-8 text-slate-500">{copy}</p>
        </div>

        <div>
          <h3 className="font-['Cairo'] text-xl font-bold text-slate-900">روابط سريعة</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="text-sm text-slate-500 transition hover:text-[#915025]"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-['Cairo'] text-xl font-bold text-slate-900">بيانات التواصل</h3>
          <div className="mt-4 grid gap-3">
            <a
              href="tel:+218913768844"
              dir="ltr"
              className="text-sm text-slate-500 transition hover:text-[#915025]"
            >
              +218 91-3768844
            </a>
            <a
              href="mailto:dar.alma3mar@gmail.com"
              className="text-sm text-slate-500 transition hover:text-[#915025]"
            >
              dar.alma3mar@gmail.com
            </a>
            <a
              href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&FORM=FBKPL1&q=Dubai+street%2C+Benghazi%2C+Libya"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-500 transition hover:text-[#915025]"
            >
              شارع دبي، بنغازي، ليبيا
            </a>
          </div>
        </div>
      </div>

      <div className={`${containerClass} mt-8 border-t border-slate-900/10 pt-5 text-sm text-slate-500`}>
        <p>© {year} دار المعمار. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
