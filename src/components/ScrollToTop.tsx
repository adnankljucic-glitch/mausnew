import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 *
 * Automatically scrolls to the top of the page when navigating between different pages.
 *
 * How it works:
 * - Monitors route changes using React Router's useLocation hook
 * - Scrolls to top ONLY when the pathname changes (e.g., / to /services)
 * - Ignores hash-only changes (e.g., #services to #industries) to preserve
 *   smooth scrolling behavior for internal anchor links within the same page
 *
 * This ensures:
 * ✓ Page-to-page navigation always starts at the top
 * ✓ Hero section internal links continue to scroll smoothly to sections
 * ✓ All same-page anchor links maintain their expected behavior
 */
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if this is a pathname change (page-to-page navigation)
    // Hash-only changes (internal anchor links) are ignored
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]); // Only trigger on pathname changes, not hash changes

  return null;
}
