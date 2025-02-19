import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed size-16 bottom-5 right-5 bg-blue-600 text-white text-center p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={40} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;