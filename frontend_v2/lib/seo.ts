// lib/seo.ts

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
  schema?: object;
}

const DEFAULT_TITLE = "MEDVOXA — AI-Powered RCM for Providers";
const DEFAULT_DESCRIPTION =
  "MEDVOXA offers AI-driven revenue cycle automation, real-time claim intelligence, and provider-centered workflows for modern healthcare organizations.";
const DEFAULT_OG_IMAGE = "/images/og-default.jpg";
const SITE_URL = "https://medvoxa.com";

/* -------------------------------------------------
   buildSEO — MAIN SEO BUILDER
--------------------------------------------------*/
export function buildSEO({
  title,
  description,
  canonical,
  keywords = [],
  ogImage,
  schema,
}: SEOProps) {
  const metaTitle = title ? `${title} | MEDVOXA` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonicalURL = canonical || SITE_URL;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords.join(", "),

    alternates: {
      canonical: canonicalURL,
    },

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalURL,
      images: [
        {
          url: ogImage || DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },

    other: schema
      ? { "application/ld+json": JSON.stringify(schema) }
      : {},
  };
}

/* -------------------------------------------------
   JSON-LD SCHEMAS
--------------------------------------------------*/

export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MEDVOXA",
    url: SITE_URL,
    logo: "/logo.png",
    sameAs: [],
    description: DEFAULT_DESCRIPTION,
  };
}

export function schemaWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MEDVOXA",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function schemaProduct(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    operatingSystem: "All",
    applicationCategory: "BusinessApplication",
  };
}

/* -------------------------------------------------
   Breadcrumb Schema (SEO Ranking Booster)
--------------------------------------------------*/
export function schemaBreadcrumb(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* -------------------------------------------------
   FAQ Schema (Boosts Featured Snippets)
--------------------------------------------------*/
export function schemaFAQ(
  faqs: { q: string; a: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
