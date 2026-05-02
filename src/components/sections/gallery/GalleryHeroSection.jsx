import { motion } from "framer-motion";
import { containerClass } from "../../../lib/ui";
import LogoSvg from "./LogoSvg";

export default function GalleryHeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#f1f5f9] pt-40 pb-20">
      <div className={`${containerClass} flex flex-col items-center z-10`}>
        
        {/* Animated Exact Logo Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-10 h-48 w-48 sm:h-56 sm:w-56 flex items-center justify-center"
        >
          <LogoSvg />
        </motion.div>

        {/* Header Text */}
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#5a5c3b]" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#5a5c3b]">
              معرض الأعمال المنفذة
            </span>
            <span className="h-px w-12 bg-[#5a5c3b]" />
          </div>
          <h1 className="font-['Cairo'] text-4xl font-black text-slate-900 md:text-6xl mb-6 leading-tight">
            مشاريع تحاكي <br/><span className="text-[#5a5c3b]">الواقع</span>
          </h1>
          <p className="text-base leading-relaxed text-slate-500/80">
            نستعرض في هذه المساحة نتاج رحلة من التصميم والإشراف. كل صورة تروي قصة إتقان هندسي.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
