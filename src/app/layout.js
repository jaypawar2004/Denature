import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO & BRANDING CONFIGURATION ---
export const metadata = {
  title: {
    default: "Tigris Smile | Professional Denture Clinic Brisbane",
    template: "%s | Tigris Smile"
  },
  description: "Expert denture repairs, relines, and custom sports mouth guards in Brisbane. Quality care for a confident smile.",
  keywords: ["Denture Brisbane", "Denture Repair", "Mouth Guards Brisbane", "Denture Reline", "Tigris Smile"],
  authors: [{ name: "Tigris Smile" }],
  icons: {
    icon: "/images/main-logo.png", // public folder mein favicon hona chahiye
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Tigris Smile | Professional Denture Clinic Brisbane",
    description: "Quality denture solutions and custom mouth guards in Brisbane.",
    url: "https://tigrissmile.com.au", // Apni actual domain yahan daalna
    siteName: "Tigris Smile",
    images: [
      {
        url: "/images/consultant .jpeg", // Social media par share karne par jo image dikhegi
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Components */}
        <PromoPopup />
        <Footer />
      </body>
    </html>
  );
}