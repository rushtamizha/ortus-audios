import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import SupportChat from "@/components/SupportChat";
import LeadPopup from "@/components/LeadPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- 1. SEO Metadata Configuration ---
export const metadata = {
  title: "Ortus Audios | Premium Home Theatre & AV Solutions Karnataka",
  description: "Experience world-class cinematic sound with Ortus Audios. Authorized dealers for ELAC, BenQ, and Epson in Kammanahalli, Karnataka. Bespoke acoustic design and installation.",
  keywords: ["Home Theatre Karnataka", "ELAC Speakers India", "Audio Video Solutions Kammanahalli", "Projector Installation Karnataka", "Hi-Fi Audio Store"],
  authors: [{ name: "Ortus Audios" }],
  metadataBase: new URL('https://ortusaudios.in'),
  icons: {
    icon: [
      { url: '/logo.jpg' }, // Main favicon
      { url: '/logo.jpg', sizes: '32x32', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/logo.jpg', sizes: '180x180', type: 'image/jpeg' }, // For iPhone home screens
    ],
  }, // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ortus Audios | Premium Home Theatre Solutions",
    description: "Bespoke Home Cinema & Premium Audio Systems in Karnataka.",
    url: 'https://ortusaudios.in',
    siteName: 'Ortus Audios',
    images: [
      {
        url: '/ortusaudios.webp', // Add a high-res showroom photo in your public folder
        width: 1200,
        height: 630,
        alt: 'Ortus Audios Showroom Karnataka',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// --- 2. Local Business Schema (JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ortus Audios",
  "image": "https://ortusaudios.in/logo.jpg", 
  "@id": "https://ortusaudios.in",
  "url": "https://ortusaudios.in",
  "telephone": "+919108333211",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.27, 2nd Floor, Kullappa Circle, Nehru Road, Kammanahalli",
    "addressLocality": "Karnataka",
    "postalCode": "560084",
    "addressRegion": "KA",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0158, // Double check these exact coordinates on Google Maps
    "longitude": 77.6379
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61575452211098",
    "https://www.instagram.com/0rtusaudios/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020205]">
        <main className="flex-grow">
          <AuthProvider>
            <Navbar/>
            {children}
            <SupportChat/>
            <LeadPopup/>
            <Footer/>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}