export default async function sitemap() {
  const baseUrl = "https://tigrissmile.com.au";

  // Agar future me aur pages add karo (jaise /about, /services), toh unhe bas is array me jod dena
  const routes = [
    "/home",
    "/services",
    "/payment-plan",
    "/about",
    "/bookingform",
    "/contact",
    "/gallery",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}