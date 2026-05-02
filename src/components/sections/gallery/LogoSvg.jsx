import { motion } from "framer-motion";

export default function LogoSvg({ className, showText = true }) {
  const olive = "#5a5c3b";
  const lime = "#c8d44b";

  // دالة مساعدة لرسم الأقواس بدقة هندسية
  const describeArc = (cx, cy, radius, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, radius, endAngle);
    const end = polarToCartesian(cx, cy, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  };

  const polarToCartesian = (cx, cy, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: cx + (radius * Math.cos(angleInRadians)),
      y: cy + (radius * Math.sin(angleInRadians))
    };
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.15, duration: 1.2, ease: "easeInOut" },
        opacity: { delay: i * 0.15, duration: 0.2 },
      },
    }),
  };

  // مركز وقطر الأقواس
  const cx = 250;
  const cy = 205; // رفع المركز قليلاً للأعلى
  const r = 165;

  return (
    <motion.svg
      viewBox="0 0 500 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      dir="ltr"
    >
      {/* 1. الأقواس الليمونية (4 قطع متناظرة تماماً) */}
      <g stroke={lime} strokeWidth="18" strokeLinecap="round">
        {/* أعلى اليمين */}
        <motion.path
          d={describeArc(cx, cy, r, 15, 75)}
          variants={draw} initial="hidden" animate="visible" custom={0}
        />
        {/* أعلى اليسار */}
        <motion.path
          d={describeArc(cx, cy, r, 285, 345)}
          variants={draw} initial="hidden" animate="visible" custom={0.2}
        />
        {/* أسفل اليمين */}
        <motion.path
          d={describeArc(cx, cy, r, 105, 165)}
          variants={draw} initial="hidden" animate="visible" custom={0.4}
        />
        {/* أسفل اليسار */}
        <motion.path
          d={describeArc(cx, cy, r, 195, 255)}
          variants={draw} initial="hidden" animate="visible" custom={0.6}
        />
      </g>

      {/* 2. الأيقونة المركزية (Pillar) */}
      <g transform="translate(0, 0)">
        {/* قاعدة العمود السداسية */}
        <motion.path
          d="M 250 60 L 340 105 L 340 305 L 250 350 L 160 305 L 160 105 Z"
          fill={olive}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        
        {/* الخطوط البيضاء (Grooves) - شكل V */}
        {[135, 175, 215, 255, 295].map((y, i) => (
          <motion.path
            key={y}
            d={`M 160 ${y-20} L 250 ${y+25} L 340 ${y-20}`}
            stroke="white"
            strokeWidth="10"
            strokeLinecap="butt"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={1.2 + i * 0.1}
          />
        ))}
        
        {/* السطح العلوي لإعطاء عمق */}
        <motion.path
          d="M 160 105 L 250 150 L 340 105 L 250 60 Z"
          fill="rgba(255,255,255,0.05)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        />
      </g>

      {/* 3. النصوص */}
      {showText && (
        <g transform="translate(250, 420)">
          <motion.text
            x="0"
            y="0"
            fill={olive}
            textAnchor="middle"
            fontSize="46"
            fontWeight="900"
            fontFamily="Cairo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            شركة القمة للتصميم
          </motion.text>
          
          <g transform="translate(0, 52)">
            <motion.path d="M -185 0 L -155 -8 L -155 8 Z" fill={lime} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} />
            <motion.path d="M 185 0 L 155 -8 L 155 8 Z" fill={lime} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} />
            
            <motion.text
              x="0"
              y="7"
              fill={olive}
              textAnchor="middle"
              fontSize="30"
              fontWeight="700"
              fontFamily="Cairo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              والإستشارات الهندسية
            </motion.text>
          </g>
        </g>
      )}
    </motion.svg>
  );
}
