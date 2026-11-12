import type { Metadata, Viewport } from "next";
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

const BASE_URL = "https://www.srivenkateswaraenterprises.com";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Sri Venkateswara Enterprises | Industrial Lubricant Distributor in Tamil Nadu",
    template: "%s | Sri Venkateswara Enterprises",
  },

  description:
    "Sri Venkateswara Enterprises — authorised APAR lubricant distributor and dealer for Castrol, Shell, Mobil, SERVO, Bharat Petroleum, Klüber & Mosil. Industrial oil supplier in Somanur, Coimbatore, Tamil Nadu since 2001. Hydraulic oil, gear oil, cutting oil, greases & specialty lubricants for textile, automotive, metalworking & more.",

  keywords: [
    // Brand & identity
    "Sri Venkateswara Enterprises",
    "SVE Enterprises",
    "SVE oil",
    "SVE lubricants",
    // Core product keywords
    "industrial lubricants",
    "industrial oil supplier",
    "lubricant distributor",
    "hydraulic oil",
    "gear oil",
    "cutting oil",
    "specialty greases",
    "transformer oil",
    "compressor oil",
    "spindle oil",
    "slideway oil",
    "turbine oil",
    "heat transfer oil",
    "quenching oil",
    "rust preventive oil",
    "textile lubricants",
    "metalworking fluids",
    "automotive lubricants",
    // Distributor / dealer keywords
    "APAR lubricant distributor",
    "APAR oil distributor Tamil Nadu",
    "Castrol dealer",
    "Shell lubricant dealer",
    "Mobil oil dealer",
    "SERVO oil dealer",
    "Bharat Petroleum dealer",
    "Klüber lubricant dealer",
    "Mosil lubricant dealer",
    "Molygraph dealer",
    // Location keywords
    "lubricant distributor Tamil Nadu",
    "industrial oil supplier Tamil Nadu",
    "lubricant supplier Coimbatore",
    "oil distributor Coimbatore",
    "industrial lubricant Somanur",
    "lubricant distributor near me",
    "Coimbatore oil supplier",
    "Coimbatore lubricant distributor",
    "Coimbatore industrial oil supplier",
    "oil supplier near me",
    // Industry-specific
    "textile industry lubricants",
    "spinning unit lubricant",
    "weaving unit lubricant",
    "metalworking cutting fluid",
    "CNC machine oil",
    "automotive engine oil distributor",
    "compressor oil supplier",
    "pump lubricant supplier",
    "rubber industry oil",
    "paper mill lubricant",
    "sugar mill lubricant",
    // Long-tail
    "bulk industrial lubricant supplier Tamil Nadu",
    "industrial oil distributor Coimbatore",
    "wholesale lubricant supplier Tamil Nadu",
    "ISO VG 32 hydraulic oil",
    "ISO VG 46 hydraulic oil",
    "industrial gear oil supplier",
    "24 hour lubricant supply",
    "authorised APAR distributor Coimbatore",
  ],

  authors: [{ name: "Sri Venkateswara Enterprises" }],
  creator: "Sri Venkateswara Enterprises",
  publisher: "Sri Venkateswara Enterprises",

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Sri Venkateswara Enterprises",
    title:
      "Sri Venkateswara Enterprises | Industrial Lubricant Distributor in Tamil Nadu",
    description:
      "Authorised APAR distributor & multi-brand dealer since 2001. Industrial oils, hydraulic oil, gear oil, cutting oil & specialty lubricants for textile, automotive, metalworking & more industries. Serving Coimbatore, Tamil Nadu 24/7.",
    images: [
      {
        url: "/images/Final-Logo.png",
        width: 1200,
        height: 630,
        alt: "Sri Venkateswara Enterprises — Industrial Lubricant Distributor, Tamil Nadu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sri Venkateswara Enterprises | Industrial Lubricant Distributor Tamil Nadu",
    description:
      "Authorised APAR distributor & multi-brand dealer since 2001. Industrial oils, hydraulic oil, gear oil & specialty lubricants. Serving Coimbatore, Tamil Nadu 24/7.",
    images: ["/images/Final-Logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Industrial Lubricants & Oils",

  verification: {
    // Add your Google Search Console verification token here when available:
    // google: "YOUR_VERIFICATION_TOKEN",
  },
};

// ── JSON-LD Structured Data ─────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sri Venkateswara Enterprises",
  alternateName: "SVE Enterprises",
  url: BASE_URL,
  logo: `${BASE_URL}/images/Final-Logo.png`,
  image: `${BASE_URL}/images/Final-Logo.png`,
  description:
    "Sri Venkateswara Enterprises is an authorised APAR lubricant distributor and multi-brand dealer established in 2001, supplying industrial oils, hydraulic oil, gear oil, cutting oil, greases and specialty lubricants to industries across Tamil Nadu.",
  foundingDate: "2001",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73-G, Eagle Plaza",
    addressLocality: "Somanur",
    addressRegion: "Tamil Nadu",
    postalCode: "641659",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9842934524",
      contactType: "customer service",
      availableLanguage: ["English", "Tamil"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  email: "srivenkateswaraenterprises594@gmail.com",
  areaServed: {
    "@type": "State",
    name: "Tamil Nadu",
    containedInPlace: { "@type": "Country", name: "India" },
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Sri Venkateswara Enterprises",
  description:
    "Authorised APAR industrial lubricant distributor and dealer for Castrol, Shell, Mobil, SERVO, Bharat Petroleum, Klüber & Mosil. Supplying hydraulic oil, gear oil, cutting oil, specialty greases and lubricants for textile, automotive, metalworking and other industries in Tamil Nadu since 2001.",
  url: BASE_URL,
  telephone: "+91-9842934524",
  email: "srivenkateswaraenterprises594@gmail.com",
  image: `${BASE_URL}/images/Final-Logo.png`,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73-G, Eagle Plaza",
    addressLocality: "Somanur",
    addressRegion: "Tamil Nadu",
    postalCode: "641659",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.02,
    longitude: 77.03,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Lubricants & Oils",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hydraulic Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Gear Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cutting Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Spindle Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Compressor Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Transformer Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Turbine Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Slideway Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Specialty Greases" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rust Preventive Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Quenching Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Heat Transfer Oil" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Sri Venkateswara Enterprises",
  description:
    "Official website of Sri Venkateswara Enterprises — industrial lubricant distributor in Tamil Nadu, India.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/#products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        {/* Canonical */}
        <link rel="canonical" href={BASE_URL} />

        {/* Geo meta — helps local SEO for Tamil Nadu / India */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Somanur, Tamil Nadu, India" />
        <meta name="geo.position" content="11.02;77.03" />
        <meta name="ICBM" content="11.02, 77.03" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en-IN" />

        {/* Instant WhatsApp & preconnects */}
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://api.whatsapp.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
