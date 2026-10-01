import { useEffect } from "react";

export default function CleanExternalLinks() {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let url;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      // Sirf external links (dusre domain) ke liye trigger karo
      if (url.hostname === window.location.hostname) return;

      const hasTracking =
        url.searchParams.has("_gl") || url.searchParams.has("_gcl_au");

      if (!hasTracking) return;

      // Default navigation rok kar clean URL pe khud navigate karo
      e.preventDefault();

      url.searchParams.delete("_gl");
      url.searchParams.delete("_gcl_au");

      const target = anchor.getAttribute("target");
      if (target === "_blank") {
        window.open(url.toString(), "_blank");
      } else {
        window.location.href = url.toString();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}