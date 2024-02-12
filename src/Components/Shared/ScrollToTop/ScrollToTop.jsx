import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import "./ScrollToTop.css"
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 500px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
