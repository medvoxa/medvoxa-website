// app/layout.tsx

import "./globals.css";
import "../styles/theme.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import { schemaOrganization, schemaWebsite } from "@/lib/seo";

// -----------------------------
// METADATA
// -----------------------------
export const metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "MEDVOXA — Precision Claim Preparation Platform",
    template: "%s | MEDVOXA",
  },

  description:
    "MEDVOXA is an AMA-Compliant SaaS+ platform designed for structured claim validation, governance alignment, and disciplined preparation prior to submission.",

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
        alt: "MEDVOXA — Precision Claim Preparation",
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
// VIEWPORT
// -----------------------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// -----------------------------
// ROOT LAYOUT
// -----------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([schemaOrganization(), schemaWebsite()]),
          }}
        />

        <link rel="preload" href="/images/og-default.jpg" as="image" />
        <link rel="preload" href="/logo.png" as="image" />
      </head>

      <body className="bg-[#0A0F1F] text-white antialiased">

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}