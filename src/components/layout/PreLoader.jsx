import { motion } from 'framer-motion';
import LogoSvg from '../sections/gallery/LogoSvg';

export default function PreLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-[#050a15] px-5 sm:px-8"
      initial={{ scaleY: 1, transformOrigin: "bottom" }}
      animate={{ scaleY: 1, transformOrigin: "bottom" }}
      exit={{ 
        scaleY: 0,
        transformOrigin: "bottom",
        transition: { 
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
          delay: 2.5
        } 
      }}
      style={{ willChange: "transform" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full max-w-[24rem] flex-col items-center text-center"
      >
        {/* Dar Al M3mar Logo Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 md:w-56 md:h-56 mb-4"
        >
          <LogoSvg />
        </motion.div>

        {/* تمت إزالة شريط التحميل التقليدي والتركيز على رسم الشعار */}
      </motion.div>
    </motion.div>
  );
}
