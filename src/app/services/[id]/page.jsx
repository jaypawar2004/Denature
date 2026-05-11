// src/app/services/[id]/page.jsx
// import { services } from "@/data/servicesData";
// import ServiceDetail from "@/components/Services/ServiceDetail";
import Newsletter from "@/components/Newsletter";
import RelatedServices from "@/components/RelatedServices";
import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/data/servicesData";
import { notFound } from "next/navigation";

export default async function SingleServicePage({ params }) {
  // Params ko await karna zaroori hai naye Next.js versions mein
  const { id } = await params; 

  const serviceData = services.find((s) => s.id === id);

  if (!serviceData) {
    notFound();
  }

  return (
    <main>
      <ServiceDetail service={serviceData} />
      <RelatedServices currentId={id} allServices={services} />

      <Newsletter />
    </main>
  );
}