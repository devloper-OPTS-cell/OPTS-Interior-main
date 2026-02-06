import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-H038YHJL98";

const ensureGtag = () => {
  if (typeof window === "undefined") return false;
  if (!GA_MEASUREMENT_ID) return false;

  if (!document.getElementById("ga4-script")) {
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    // Disable automatic page_view; we send it on route changes.
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  }

  return true;
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!ensureGtag()) return;
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return null;
};

export default Analytics;
