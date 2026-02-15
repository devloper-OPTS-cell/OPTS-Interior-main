const CDN_BASE = "https://opts-assets.pages.dev";

export const cdn = (path = "") => {
  const cleanPath = String(path).replace(/^\/+/, "");
  return `${CDN_BASE}/${cleanPath}`;
};
