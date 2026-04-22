import ProjectsDetailsSection from "../components/sections/projects/ProjectsDetailsSection";
import ProjectsHeroSection from "../components/sections/projects/ProjectsHeroSection";
import ProjectsProcessSection from "../components/sections/projects/ProjectsProcessSection";
import ProjectsScopesSection from "../components/sections/projects/ProjectsScopesSection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ProjectsPage() {
  usePageMeta(
    "مشاريع دار المعمار | أعمالنا الهندسية والعقارية",
    "استعرض المشاريع والأعمال البارزة لشركة دار المعمار للاستشارات الهندسية والاستثمار العقاري."
  );

  return (
    <main>
      <ProjectsHeroSection />
      <ProjectsDetailsSection />
      <ProjectsScopesSection />
      <ProjectsProcessSection />
    </main>
  );
}
