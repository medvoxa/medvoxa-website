import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://medvoxa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "MEDVOXA — Revenue Cycle Management for Healthcare Providers",
    template: "%s | MEDVOXA",
  },

  description:
    "MEDVOXA is an Autonomous SaaS+ revenue cycle management platform built for independent practices and specialty groups. Structured claim governance, systematic denial resolution, and full-cycle billing operations.",

  keywords: [
    "revenue cycle management",
    "medical billing services",
    "healthcare RCM",
    "claim denial management",
    "medical billing platform",
    "AMA CPT licensed billing",
    "healthcare billing automation",
    "physician practice billing",
    "specialty billing services",
    "charge capture software",
  ],

  authors: [{ name: "MEDVOXA" }],

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MEDVOXA",
    title: "MEDVOXA — Revenue Cycle Management for Healthcare Providers",
    description:
      "Autonomous SaaS+ platform for structured claim governance, denial resolution, and full-cycle billing operations.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "MEDVOXA — Revenue Cycle Management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@medvoxa",
    creator: "@medvoxa",
    images: ["/og-default.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf8f5",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "MEDVOXA",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
      description:
        "Autonomous SaaS+ revenue cycle management platform for healthcare providers.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@medvoxa.com",
        contactType: "customer service",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "MEDVOXA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "MEDVOXA Platform",
      applicationCategory: "HealthcareApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        description: "Autonomous RCM platform with flexible pricing models",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
