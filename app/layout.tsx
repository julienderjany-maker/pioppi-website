import type { Metadata } from "next";
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
  title: "Pioppi | Healthy Restaurant in Kinshasa",
  description:
    "Pioppi is a premium healthy lifestyle restaurant in Gombe, Kinshasa — fresh food, signature drinks, artisan bakery and community.",
  openGraph: {
    title: "Pioppi | Healthy Restaurant in Kinshasa",
    description:
      "Eat Better. Live Better. Gather Better. Pioppi brings premium healthy dining to the heart of Kinshasa.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream font-sans antialiased">{children}</body>
    </html>
  );
}
