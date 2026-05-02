import { useEffect } from "react";
import { motion } from "framer-motion";
import LogoSvg from "./sections/gallery/LogoSvg";

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // نمنح وقت كافٍ لاكتمال حركات الـ SVG قبل إخفاء الـ preloader
    const timer = setTimeout(() => {
      onComplete();
    }, 4500); // زدنا الوقت قليلاً لتظهر كل تفاصيل اللوجو

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px]">
        <LogoSvg className="w-full h-full" />
      </div>
      
      {/* الخط الصغير السفلي لمسة فنية إضافية */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="mt-4 h-px w-32 bg-[#5a5c3b]/30 origin-center"
      />
    </motion.div>
  );
}
