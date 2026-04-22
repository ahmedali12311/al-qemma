import ContactContentSection from "../components/sections/contact/ContactContentSection";
import ContactHeroSection from "../components/sections/contact/ContactHeroSection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ContactPage() {
  usePageMeta(
    "تواصل مع دار المعمار | استشارة ومتابعة مشروعك",
    "تواصل مع شركة دار المعمار للاستشارات الهندسية والاستثمار العقاري عبر الهاتف أو البريد الإلكتروني."
  );

  return (
    <main>
      <ContactHeroSection />
      <ContactContentSection />
    </main>
  );
}
