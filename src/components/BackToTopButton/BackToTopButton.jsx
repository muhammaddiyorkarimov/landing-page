// src/components/BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTopButton.css'; // Create this CSS file for styling

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {visible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
