// ============================================================
// COMPANY CONFIGURATION — Edit this file to update all contact
// details, links, and company info across the entire website.
// ============================================================

export const COMPANY = {
  name: "Sri Venkateswara Enterprises",
  shortName: "SVE",
  tagline: "Frictionless Motion, Infinite Endurance",
  established: 2001,
  experience: "25+ Years",

  address: {
    line1: "73-G, Eagle Plaza",
    line2: "Somanur",
    city: "Tamil Nadu",
    pincode: "641659",
    full: "73-G, Eagle Plaza, Somanur, Tamil Nadu - 641659",
  },

  contact: {
    // Primary phone (Call) — updated number
    phone: "+91 9842934524",
    phoneDisplay: "+91 98429 34524",
    phoneTel: "tel:+919842934524",

    // WhatsApp
    whatsapp: "+919842934524",
    whatsappMessage:
      "Hello Sri Venkateswara Enterprises, I would like to know more about your products and services.",
    get whatsappUrl() {
      // Official wa.me links must not contain '+' or spaces
      const cleanNumber = this.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
      return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
        this.whatsappMessage
      )}`;
    },

    email: "srivenkateswaraenterprises594@gmail.com",
    workingHours: "24 Hours",
  },

  // Google Maps embed URL — derived from the provided Maps link
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d77.03!3d11.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ffc57299dcfb%3A0x8a4d624c82a38509!2sSri%20Venkateswara%20Enterprises!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Social / nav
  googleMapsLink:
    "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwi4zLT7y8qVAxUAAAAAHQAAAAAQBg..i&pvq=Cg0vZy8xMWdmOTZsNDEzIiIKHHNyaSB2ZW5rYXRlc3dhcmEgZW50ZXJwcmlzZXMQAhgD",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Distributors", href: "#distributors" },
  { label: "Dealers", href: "#dealers" },
  { label: "Contact Us", href: "#contact" },
];

// ============================================================
// HERO SLIDES — Replace videoUrl values with real MP4 videos.
// Recommended size: 1920×1080px minimum (16:9 landscape)
// Videos should be 5-8 second seamless loops, muted.
// ============================================================
export const HERO_SLIDES = [
  {
    id: 1,
    headline: "Powering Industry\nWith Precision Lubrication",
    subheadline:
      "Industrial-grade oils and lubricants engineered to keep your machinery running at peak performance — 24 hours, every day.",
    cta: { label: "Explore Products", href: "#products" },
    cta2: { label: "About Us", href: "#about" },
    videoUrl: "/videos/hero/slide11.mp4",
    alt: "Modern Textile Industry with advanced textile manufacturing machines",
  },
  {
    id: 2,
    headline: "Trusted Lubricant\nDistributor Since 2001",
    subheadline:
      "Over two decades of industry experience serving Tamil Nadu's manufacturing and industrial sectors with dependable lubrication solutions.",
    cta: { label: "Our Story", href: "#about" },
    cta2: { label: "Contact Us", href: "#contact" },
    videoUrl: "/videos/hero/slide22.mp4",
    alt: "CNC Machine Shop with VMC and HMC machining centers operating",
  },
  {
    id: 3,
    headline: "Complete Range of\nIndustrial Lubricants",
    subheadline:
      "From hydraulic oils to specialty greases — a comprehensive product portfolio covering every lubrication need in modern industry.",
    cta: { label: "View Products", href: "#products" },
    cta2: { label: "Get in Touch", href: "#contact" },
    videoUrl: "/videos/hero/slide33.mp4",
    alt: "Heavy Casting and Forging Industry with glowing molten metal",
  },
  {
    id: 4,
    headline: "APAR Authorised\nDistributor",
    subheadline:
      "Proud to distribute APAR — one of India's leading industrial lubricant brands. Quality assured, supply dependable.",
    cta: { label: "Our Distributors", href: "#distributors" },
    cta2: { label: "Explore Products", href: "#products" },
    videoUrl: "/videos/hero/slide44.mp4",
    alt: "Modern Automobile Manufacturing Industry assembly line with robotic arms",
  },
  {
    id: 5,
    headline: "Where Precision Meets\nEnduring Performance",
    subheadline:
      "In every drop, a promise — engineered to protect, built to endure. Twenty-five years of industrial mastery, delivering lubrication solutions that outlast the ordinary.",
    cta: { label: "Contact Us", href: "#contact" },
    cta2: { label: "Our Products", href: "#products" },
    videoUrl: "/videos/hero/slide55.mp4",
    alt: "Premium Industrial Lubricant Warehouse and Oil Distribution Facility",
  },
];
