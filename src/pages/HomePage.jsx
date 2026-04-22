import HomeContactSection from "../components/sections/home/HomeContactSection";
import HomeHeroSection from "../components/sections/home/HomeHeroSection";
import HomeProjectsSection from "../components/sections/home/HomeProjectsSection";
import HomeServicesSection from "../components/sections/home/HomeServicesSection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function HomePage() {
  usePageMeta(
    "دار المعمار | الاستشارات الهندسية والاستثمار العقاري",
    "الموقع الرسمي لشركة دار المعمار للاستشارات الهندسية والاستثمار العقاري في بنغازي."
  );

  return (
    <main>
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeProjectsSection />
      <HomeContactSection />
    </main>
  );
}
