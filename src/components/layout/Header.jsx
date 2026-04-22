import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { containerClass } from "../../lib/ui";
import { navLinks } from "../../site-data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-900/5 bg-[#f9f6f1]/70 backdrop-blur-xl">
      <div className={`${containerClass} flex items-center justify-between gap-4 py-4`}>
        <NavLink
          className="inline-flex items-center gap-3"
          to="/"
          aria-label="العودة إلى الصفحة الرئيسية"
        >
          <span className="grid h-13 w-13 place-items-center rounded-[18px] bg-gradient-to-br from-[#bf6a33] to-[#102933] font-['Cairo'] text-lg font-extrabold tracking-[0.08em] text-[#fff7ef] shadow-[0_14px_28px_rgba(16,41,51,0.16)]">
            DM
          </span>
          <span className="flex flex-col leading-tight">
            <strong className="font-['Cairo'] text-base font-extrabold text-slate-900">
              دار المعمار
            </strong>
            <small className="text-xs text-slate-500">هندسة واستثمار عقاري</small>
          </span>
        </NavLink>

        <button
          className="grid h-12 w-12 rounded-2xl bg-white/80 md:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="mx-auto block h-0.5 w-6 rounded-full bg-slate-800"></span>
          <span className="mx-auto my-1 block h-0.5 w-6 rounded-full bg-slate-800"></span>
          <span className="mx-auto block h-0.5 w-6 rounded-full bg-slate-800"></span>
        </button>

        <nav
          className={`absolute inset-x-4 top-[calc(100%+10px)] ${
            menuOpen ? "flex" : "hidden"
          } flex-col gap-2 rounded-[24px] border border-slate-200 bg-[#fffbf6]/95 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          id="site-nav"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-center text-sm transition ${
                  isActive
                    ? "bg-white/80 text-slate-900"
                    : "text-slate-500 hover:bg-white/80 hover:text-slate-900"
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="rounded-full bg-[#102933] px-4 py-2 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#915025]"
            href="tel:+218913768844"
          >
            اتصل الآن
          </a>
        </nav>
      </div>
    </header>
  );
}
