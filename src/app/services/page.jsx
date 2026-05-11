import FAQSection from "@/components/FAQSectionServices";
import HelpBanner from "@/components/HelpBanner";
import Newsletter from "@/components/Newsletter";
import ServiceGrid from "@/components/ServiceGrid";
import { services } from "@/data/servicesData";

export default function ServicesPage() {
  return (
    <main className="bg-white py-20 mt-15 md:px-39">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-slate-900">Our Services</h1>
      </div>
      <ServiceGrid services={services} />
      <FAQSection />
      <HelpBanner />
      <Newsletter />
    </main>
  );
}