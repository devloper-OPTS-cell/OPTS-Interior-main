const CDN_BASE = "https://opts-assests.b-cdn.net";

export const cdn = (path = "") => {
  const cleanPath = String(path).replace(/^\/+/, "");
  return `${CDN_BASE}/${cleanPath}`;
};
