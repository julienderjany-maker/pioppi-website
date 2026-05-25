import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pioppi | Healthy Restaurant in Kinshasa",
  description: "Pioppi is a premium healthy lifestyle restaurant in Gombe, Kinshasa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
