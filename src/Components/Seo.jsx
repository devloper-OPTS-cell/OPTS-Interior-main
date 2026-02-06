import React from "react";
import { Helmet } from "react-helmet-async";
import { seoDefaults } from "../utils/seo";

const buildUrl = (baseUrl, path = "/") => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(cleanPath, baseUrl).toString();
};

const Seo = ({ title, description, path = "/", image, type = "website", jsonLd, noIndex = false }) => {
  const fullTitle = title ? `${title} | ${seoDefaults.siteName}` : seoDefaults.title;
  const metaDescription = description || seoDefaults.description;
  const url = buildUrl(seoDefaults.baseUrl, path);
  const ogImage = image || seoDefaults.image;
  const jsonLdItems = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const robots = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={seoDefaults.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
