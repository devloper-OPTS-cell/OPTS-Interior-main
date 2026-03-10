import { cdn } from "./cdn";

export const seoDefaults = {
  baseUrl: "https://optsinterior.com",
  siteName: "OPTS Interior",
  title: "OPTS Interior Design & Fit-Out in Dubai",
  description:
    "OPTS Express Interior Design delivers premium interior design and fit-out solutions for residential and commercial spaces in Dubai.",
  image: cdn("right1.webp"),
  logo: "https://optsinterior.com/cdn(IMG_5081.webp)",
};

const offerCatalogItems = [
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Residential & Commercial Fit-Out",
      description:
        "End-to-end fit-out for villas, apartments, offices, retail, and hospitality spaces, including planning, execution, and finishing.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Interior Design Solutions",
      description:
        "Concept development, layout planning, material selection, and detailed design tailored to your brand or lifestyle.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Custom Furniture Manufacturing",
      description:
        "Bespoke furniture, wardrobes, kitchens, and joinery crafted to fit your space and design style.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Space Planning & 3D Visualization",
      description:
        "Optimized space planning with realistic 3D renders to visualize layouts, materials, and lighting before execution.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Turnkey Project Execution",
      description:
        "Complete project delivery from design and procurement to installation and final handover.",
    },
  },
];

export const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "OPTS Interior Services",
  itemListElement: offerCatalogItems,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OPTS Express Interior Design",
  legalName: "OPTS Express Interior Design",
  url: "https://optsinterior.com",
  logo: seoDefaults.logo,
  image: cdn("right1.webp"),
  description:
    "Dubai-based interior design and fit-out company delivering premium residential and commercial interiors with custom furniture and turnkey execution.",
  keywords: [
    "Interior design company",
    "Interior fit out company",
    "Residential interior design",
    "Commercial interior fit out",
    "Turnkey interior solutions",
    "Fit out contractors",
    "Custom furniture design",
    "Home interior design company",
    "Office interior fit out",
    "Exhibition stand design",
    "Interior design company in Dubai",
    "Fit out company in Dubai",
    "Best interior designers in Dubai",
    "Dubai fit out contractors",
    "Home renovation Dubai",
    "Office fit out Dubai",
    "Exhibition stand contractor Dubai",
    "Event setup company Dubai",
    "Villa interior design Dubai",
    "Commercial interior design UAE",
    "Luxury home interiors",
    "Villa interior design",
    "Apartment interior design",
    "Modern home interiors",
    "Kitchen interior design",
    "Bedroom interior design",
    "Bespoke furniture design",
    "Joinery works Dubai",
    "Carpentry services Dubai",
    "Best interior fit out company in Dubai",
    "Affordable interior design services Dubai",
    "Luxury interior design company UAE",
    "Turnkey fit out solutions Dubai",
    "Professional interior contractors Dubai",
    "Top Office Interior Trends in Dubai 2026",
    "How to Choose a Fit Out Company in Dubai"
  ],
  sameAs: [
    "https://www.linkedin.com/in/opts-interior-2bba223a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "https://www.instagram.com/opts.interior?igsh=cTRvZzB5YTU5Y3oz&utm_source=qr",
    "https://www.facebook.com/profile.php?id=61587386516999",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971543430661",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+971502451051",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "OPTS, Plot No. 365-150, Warehouse No. 8, Opposite MTM",
    addressLocality: "Al Quoz Industrial Area 2",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  areaServed: "Dubai, UAE",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "OPTS Interior Services",
    itemListElement: offerCatalogItems,
  },
};

export const faqSchema = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
});

const breadcrumbLabels = {
  "/": "Home",
  "/about-us": "About OPTS Interior Design",
  "/services": "Interior Design Services in Dubai",
  "/projects": "Interior Design Projects in Dubai",
  "/contact-us": "Contact Interior Designers in Dubai",
  "/faq": "Interior Design FAQ",
};

export const breadcrumbSchema = (path = "/", labelOverride) => {
  const baseUrl = seoDefaults.baseUrl;
  const crumbs = [{ name: "Home", item: `${baseUrl}/` }];
  const cleanPath = path || "/";

  if (cleanPath.startsWith("/projects/")) {
    crumbs.push({
      name: breadcrumbLabels["/projects"],
      item: `${baseUrl}/projects`,
    });
    crumbs.push({
      name: labelOverride || "Project",
      item: `${baseUrl}${cleanPath}`,
    });
  } else if (cleanPath !== "/") {
    const label = labelOverride || breadcrumbLabels[cleanPath] || "Page";
    crumbs.push({ name: label, item: `${baseUrl}${cleanPath}` });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesign",
  name: "OPTS Express Interior Design",
  url: "https://optsinterior.com",
  logo: seoDefaults.logo,
  image: cdn("right1.webp"),
  email: "hello@optsinterior.com",
  telephone: "+971543430661",
  address: {
    "@type": "PostalAddress",
    streetAddress: "OPTS, Plot No. 365-150, Warehouse No. 8, Opposite MTM",
    addressLocality: "Al Quoz Industrial Area 2",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  areaServed: "Dubai, UAE",
  sameAs: [
    "https://www.linkedin.com/in/opts-interior-2bba223a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "https://www.instagram.com/opts.interior?igsh=cTRvZzB5YTU5Y3oz&utm_source=qr",
    "https://www.facebook.com/profile.php?id=61587386516999",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971543430661",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+971502451051",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en"],
    },
  ],
};
