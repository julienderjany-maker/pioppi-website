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
    "Pioppi is a premium healthy lifestyle restaurant in Gombe, Kinshasa — fresh food, signature drinks, artisan bakery and community.",
  keywords: [
    "healthy restaurant Kinshasa",
    "restaurant Gombe",
    "matcha Kinshasa",
    "healthy food Kinshasa",
    "brunch Kinshasa",
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
    type: "website",
    images: [
      {
        url: "/hero-boulevard.png",
        width: 1173,
        height: 1341,
        alt: "Pioppi — healthy restaurant on the boulevard in Gombe, Kinshasa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pioppi | Healthy Restaurant in Kinshasa",
    description:
      "Eat Better. Live Better. Gather Better. Premium healthy dining in Gombe, Kinshasa.",
    images: ["/hero-boulevard.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pioppi",
  description:
    "Premium healthy lifestyle restaurant in Gombe, Kinshasa — fresh food, signature drinks, artisan bakery and community.",
  url: "https://pioppi.cafe",
  image: "https://pioppi.cafe/hero-boulevard.png",
  servesCuisine: ["Healthy", "Breakfast", "Salads", "Coffee & Matcha"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gombe, Kinshasa",
    addressCountry: "CD",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "21:00",
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
