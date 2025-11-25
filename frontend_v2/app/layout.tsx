// app/layout.tsx

import "./globals.css";
import "../styles/theme.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import { schemaOrganization, schemaWebsite } from "@/lib/seo";

// -----------------------------
// CORRECTED METADATA (Next.js 14)
// -----------------------------
export const metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "MEDVOXA — AI-Powered RCM Platform",
    template: "%s | MEDVOXA",
  },

  description:
    "MEDVOXA is a next-generation AI-powered RCM automation platform designed for healthcare providers, offering real-time claim intelligence and end-to-end revenue cycle automation.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000",
    siteName: "MEDVOXA",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "MEDVOXA — AI-Powered RCM",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@medvoxa",
    creator: "@medvoxa",
    images: ["/images/og-default.jpg"],
  },
};

// -----------------------------
// VIEWPORT (MUST BE SEPARATE IN NEXT 14)
// -----------------------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// -----------------------------
// ROOT LAYOUT
// -----------------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Global JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([schemaOrganization(), schemaWebsite()]),
          }}
        />

        {/* Preload key assets */}
        <link rel="preload" href="/images/og-default.jpg" as="image" />
        <link rel="preload" href="/logo.png" as="image" />
      </head>

      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <Header />
        <main className="pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
