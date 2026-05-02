import { useEffect, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { containerClass } from "../lib/ui";
import GalleryHeroSection from "../components/sections/gallery/GalleryHeroSection";

const layouts = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

const categories = ["الكل", "تصميم مشروع فيلا سكنية", "فيلا هندسية بتصميم حديث"];

const galleryImages = [
  {
    src: "/images/project/660387776_122281836662019327_9189526532439797575_n.jpg",
    title: "تصميم مشروع فيلا سكنية - الهواري",
    category: "تصميم مشروع فيلا سكنية",
  },
  {
    src: "/images/project/660306541_122281836530019327_5073913178496558183_n.jpg",
    title: "تفاصيل مشروع فيلا سكنية",
    category: "تصميم مشروع فيلا سكنية",
  },
  {
    src: "/images/project/658978146_122281836368019327_8591140431669529926_n.jpg",
    title: "واجهة فيلا سكنية",
    category: "تصميم مشروع فيلا سكنية",
  },
  {
    src: "/images/project/658394892_122281836422019327_8136247648303619496_n.jpg",
    title: "موقع مشروع فيلا سكنية",
    category: "تصميم مشروع فيلا سكنية",
  },
  {
    src: "/images/project/658169056_122281836308019327_1070392058801081620_n.jpg",
    title: "تنفيذ مشروع فيلا سكنية",
    category: "تصميم مشروع فيلا سكنية",
  },
  {
    src: "/images/project/657745408_122281836482019327_5443369319405443580_n.jpg",
    title: "فلل سكنية - القمة",
    category: "تصميم مشروع فيلا سكنية",
  },
  {
    src: "/images/project2/586744842_122265141374019327_5916673390387169092_n.jpg",
    title: "فيلا هندسية بتصميم حديث",
    category: "فيلا هندسية بتصميم حديث",
  },
  {
    src: "/images/project2/586513687_122265141320019327_2518057596911254410_n.jpg",
    title: "تفاصيل التصميم الحديث",
    category: "فيلا هندسية بتصميم حديث",
  },
  {
    src: "/images/project2/586200164_122265141212019327_3243405883845320566_n.jpg",
    title: "فيلا مودرن - القمة",
    category: "فيلا هندسية بتصميم حديث",
  },
];

const IMAGES_PER_PAGE = 6;

// Safe Image Component with fallback
function SafeImage({ src, alt, className }) {
  const [error, setError] = useState(false);
  const fallback = "/images/project/660387776_122281836662019327_9189526532439797575_n.jpg";

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    const images = activeCategory === "الكل"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);
    
    return images.map((image, i) => ({
      ...image,
      id: i,
      originalId: galleryImages.findIndex(gi => gi.src === image.src),
      span: layouts[i % layouts.length],
    }));
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);

  const currentImages = useMemo(() => {
    const start = (currentPage - 1) * IMAGES_PER_PAGE;
    return filteredImages.slice(start, start + IMAGES_PER_PAGE);
  }, [currentPage, filteredImages]);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when category changes
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleKeyDown = useCallback((e) => {
    if (selectedIndex === null) return;
    if (e.key === "Escape") setSelectedIndex(null);
    if (e.key === "ArrowRight") handlePrev();
    if (e.key === "ArrowLeft") handleNext();
  }, [selectedIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown, selectedIndex]);

  const handleNext = () => setSelectedIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setSelectedIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    setTouchStart(0); setTouchEnd(0);
  };

  return (
    <main className="grid w-full gap-0 py-0">
      <GalleryHeroSection />

      <div className="relative bg-[#f1f5f9] pt-16 pb-16">
        <div className={containerClass}>

          {/* ── Filter Tabs ── */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-4 px-4" dir="rtl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-8 py-3.5 text-sm font-bold tracking-wide transition-all duration-500 rounded-full ${
                  activeCategory === cat
                    ? "text-white bg-[#5a5c3b] shadow-lg shadow-[#5a5c3b]/20"
                    : "text-slate-500 bg-white hover:bg-slate-50 shadow-sm"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="active-cat-bg"
                    className="absolute inset-0 z-[-1] rounded-full bg-[#5a5c3b]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Premium Grid Gallery */}
          <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-5 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {currentImages.map((img, i) => (
                <motion.div
                  layout
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  onClick={() => setSelectedIndex(img.id)}
                  className={`group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white transition-all duration-700 hover:shadow-[0_20px_50px_rgba(90, 92, 59,0.12)] ${img.span}`}
                >
                  <SafeImage
                    src={img.src}
                    alt={img.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Subtle Label on hover */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                     <span className="inline-block px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-900 shadow-sm">
                        {img.category}
                     </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400">
              <p className="text-lg font-['Cairo']">لا توجد صور في هذا القسم حالياً</p>
            </div>
          )}

        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="mt-16 pb-8">
            <div className={containerClass}>
              <div className="flex items-center justify-center gap-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 transition-all hover:text-[#5a5c3b] disabled:opacity-20"
                >
                  <span>السابق</span>
                  <span className="h-px w-6 bg-slate-300 transition-all group-hover:w-10 group-hover:bg-[#5a5c3b]" />
                </button>

                <div className="flex items-center gap-4">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`relative h-10 w-10 text-[12px] font-black transition-all ${currentPage === i + 1 ? "text-[#5a5c3b]" : "text-slate-300 hover:text-slate-600"
                        }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                      {currentPage === i + 1 && (
                        <motion.span layoutId="page-dot" className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#5a5c3b]" />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 transition-all hover:text-[#5a5c3b] disabled:opacity-20"
                >
                  <span className="h-px w-6 bg-slate-300 transition-all group-hover:w-10 group-hover:bg-[#5a5c3b]" />
                  <span>التالي</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>


      {/* Full-Screen Lightbox */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] touch-none"
            >
              <div className="absolute inset-0 z-0" onClick={() => setSelectedIndex(null)} />

              <div className="absolute top-0 left-0 right-0 z-[100002] flex items-center justify-between p-8 pointer-events-none">
                <span className="pointer-events-auto font-mono text-[10px] text-white/40 uppercase tracking-[0.5em]">
                  {String(selectedIndex + 1).padStart(2, "0")} / {String(filteredImages.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-xl transition-all hover:bg-white/15 hover:rotate-90"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="relative z-[100001] w-full h-full flex items-center justify-center px-6">
                <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute right-8 top-1/2 -translate-y-1/2 z-[100005] hidden h-20 w-20 items-center justify-center rounded-full text-white/20 transition-all hover:text-white hover:bg-white/5 sm:flex"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute left-8 top-1/2 -translate-y-1/2 z-[100005] hidden h-20 w-20 items-center justify-center rounded-full text-white/20 transition-all hover:text-white hover:bg-white/5 sm:flex"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polyline points="15 18 9 12 15 6"></polyline></svg></button>

                <div className="relative flex items-center justify-center w-full h-full" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center"
                    >
                      <SafeImage src={filteredImages[selectedIndex].src} alt={filteredImages[selectedIndex].title} className="max-h-[85vh] w-auto max-w-full object-contain" />
                      <p className="mt-4 text-white text-sm font-['Cairo'] opacity-60">{filteredImages[selectedIndex].title}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="absolute bottom-12 left-0 right-0 z-[100002] flex items-center justify-center gap-3 pointer-events-none">
                <div className="flex items-center gap-1.5 p-2 bg-white/5 backdrop-blur-md rounded-full pointer-events-auto max-w-[80vw] overflow-x-auto no-scrollbar">
                  {filteredImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                      className={`h-1 shrink-0 transition-all duration-500 rounded-full ${selectedIndex === i ? "w-8 bg-gradient-to-r from-[#5a5c3b] to-[#c8d44b]" : "w-1 bg-white/10"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
}
