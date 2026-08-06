import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sri Venkateswara Enterprises | Industrial Oil & Lubricant Distributor",
  description:
    "Sri Venkateswara Enterprises — established 2001 in Somanur, Tamil Nadu. Authorised distributor of APAR and dealer of SERVO, Bharat Petroleum, Klüber, Castrol, Mobil, and Mosil industrial lubricants.",
  keywords: [
    "industrial lubricants",
    "hydraulic oil",
    "gear oil",
    "cutting oil",
    "lubricant distributor Tamil Nadu",
    "APAR distributor",
    "SERVO oil dealer",
    "Sri Venkateswara Enterprises",
    "Somanur lubricants",
  ],
  openGraph: {
    title: "Sri Venkateswara Enterprises | Industrial Oil & Lubricant Distributor",
    description:
      "Trusted industrial lubricant distributor since 2001. Distributing APAR & dealing in SERVO, BPCL, Castrol, Mobil, Klüber, Mosil. Serving Tamil Nadu industry 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
