import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // Smooth scroll to top
    // Scroll each container back to top in case they have overflow:auto
    const scrollableContainers = document.querySelectorAll('[class*="container"], body');
    scrollableContainers.forEach(container => {
      container.scrollTop = 0;
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
