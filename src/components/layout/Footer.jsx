import { NavLink } from "react-router-dom";
import { footerCopy, navLinks } from "../../site-data";
import { containerClass } from "../../lib/ui";
import LogoSvg from "../sections/gallery/LogoSvg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#ffffff] pt-20 pb-10 overflow-hidden">
      {/* خط علوي ذهبي */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-[#5a5c3b]/30 to-transparent" />
      {/* شبكة هندسية خفيفة */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#5a5c3b 1px, transparent 1px), linear-gradient(90deg, #5a5c3b 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className={`${containerClass} relative z-10`}>
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="flex flex-col items-start gap-8 border-r border-slate-100 pr-8 md:pr-14">
            <NavLink className="group flex flex-col gap-5" to="/">
              <div className="h-16 w-16 flex items-center overflow-hidden">
                <LogoSvg showText={false} />
              </div>
              <div className="space-y-1.5">
                <h2 className="font-['Cairo'] text-2xl font-black tracking-tight text-slate-900 leading-none">
                  القمة
                </h2>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-[#5a5c3b] transition-all duration-500 group-hover:w-10" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#5a5c3b]/70">
                    Benghazi Office
                  </span>
                </div>
              </div>
            </NavLink>
            <p className="max-w-xs text-sm leading-[1.9] text-slate-400 font-light italic">
              {footerCopy?.["/"] || "نصمم استثمارات عقارية مستدامة ونشرف على أدق تفاصيل التنفيذ لنضمن لك جودة تليق بتطلعاتك."}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-7">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 border-b border-slate-100 pb-3">
              الصفحات
            </h3>
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-300 flex items-center gap-2.5 group ${
                      isActive ? "text-[#5a5c3b]" : "text-slate-500 hover:text-slate-900"
                    }`
                  }
                >
                  <span className="h-px w-0 bg-[#5a5c3b] transition-all duration-300 group-hover:w-3 flex-shrink-0" />
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-7 items-center lg:items-start">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 border-b border-slate-100 pb-3 w-full text-center lg:text-right">
              تواصل
            </h3>
            <div className="space-y-6 flex flex-col items-center lg:items-start w-full">
              <a href="tel:+218925586888" dir="ltr" className="group flex flex-col gap-1 items-center lg:items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#5a5c3b]/50 group-hover:text-[#5a5c3b] transition-colors">
                  Phone
                </span>
                <span className="text-base font-light text-slate-600 group-hover:text-slate-900 transition-colors tracking-wide">
                  092 558 6888
                </span>
              </a>
              <a href="mailto:alkmaahcompny@gmail.com" className="group flex flex-col gap-1 items-center lg:items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#5a5c3b]/50 group-hover:text-[#5a5c3b] transition-colors">
                  Email
                </span>
                <span className="text-base font-light text-slate-600 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                  alkmaahcompny@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-slate-100 flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">
            © {year} Al Qemma · Engineering Design & Consulting
          </div>
          <div className="flex items-center gap-5">
            <span className="h-px w-8 bg-slate-200" />
            <a
              href="https://www.facebook.com/p/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%82%D9%85%D8%A9-%D9%84%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%88%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-61550579819591/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-[#5a5c3b] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute left-[-2%] bottom-[-6%] opacity-[0.025] pointer-events-none select-none">
        <span className="text-[22vw] font-black leading-none text-[#5a5c3b]">QEMMA</span>
      </div>
    </footer>
  );
}
