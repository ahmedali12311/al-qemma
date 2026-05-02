import ContactContentSection from "../components/sections/contact/ContactContentSection";
import ContactHeroSection from "../components/sections/contact/ContactHeroSection";
import SectionStack from "../components/layout/SectionStack";
import { usePageMeta } from "../hooks/usePageMeta";

const contactConnectors = [
  {
    from: "#ffffff",
    to: "#ffffff",
    accent: "rgba(90, 92, 59, 0.3)",
    heightClass: "h-16 md:h-20",
    variant: "blueprint",
  },
];

export default function ContactPage() {
  usePageMeta(
    "تواصل مع القمة | استشارة ومتابعة مشروعك",
    "تواصل مع شركة القمة للاستشارات الهندسية والاستثمار العقاري عبر الهاتف أو البريد الإلكتروني."
  );

  return (
    <main className="grid w-full gap-0 py-0">
      <SectionStack connectors={contactConnectors}>
        <ContactHeroSection />
        <ContactContentSection />
      </SectionStack>
    </main>
  );
}
