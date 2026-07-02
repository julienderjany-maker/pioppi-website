import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pioppi.cafe"),
  title: {
    default: "Pioppi | Healthy Restaurant in Kinshasa",
    template: "%s | Pioppi",
  },
  description:
    "Pioppi — paradis de santé in Gombe, Kinshasa. A premium healthy lifestyle restaurant: fresh food, signature drinks, artisan bakery and community. Restaurant santé au cœur de Kinshasa.",
  keywords: [
    "healthy restaurant Kinshasa",
    "restaurant Gombe",
    "matcha Kinshasa",
    "healthy food Kinshasa",
    "brunch Kinshasa",
    "restaurant santé Kinshasa",
    "manger sain Kinshasa",
    "restaurant santé Gombe",
    "Pioppi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pioppi | Healthy Restaurant in Kinshasa",
    description:
      "Eat Better. Live Better. Gather Better. Pioppi brings premium healthy dining to the heart of Kinshasa.",
    url: "https://pioppi.cafe",
    siteName: "Pioppi",
    locale: "en_US",
    alternateLocale: ["fr_CD"],
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Inside Pioppi — the warm olive-and-cream dining room in Gombe, Kinshasa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pioppi | Healthy Restaurant in Kinshasa",
    description:
      "Eat Better. Live Better. Gather Better. Premium healthy dining in Gombe, Kinshasa.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#171D12",
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pioppi",
  description:
    "Premium healthy lifestyle restaurant in Gombe, Kinshasa — fresh food, signature drinks, artisan bakery and community.",
  url: "https://pioppi.cafe",
  image: "https://pioppi.cafe/og.jpg",
  hasMenu: "https://pioppi.cafe/menu.pdf",
  slogan: "Paradis de santé",
  telephone: "+243900004445",
  sameAs: [
    "https://www.instagram.com/pioppi.drc/",
    "https://www.facebook.com/profile.php?id=61591542536572",
    "https://www.tiktok.com/@pioppi60",
  ],
  servesCuisine: ["Healthy", "Breakfast", "Salads", "Coffee & Matcha"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2ᵉ étage, Immeuble Matrix (LC Waikiki), 119 Boulevard du 30 Juin, Gombe",
    addressLocality: "Kinshasa",
    addressCountry: "CD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -4.3094,
    longitude: 15.29167,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:30",
      closes: "22:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </body>
    </html>
  );
}
