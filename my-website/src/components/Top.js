import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';


const Top = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      // Show/hide the scroll-to-top button when the user scrolls
      document.addEventListener('scroll', toggleVisibility);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    const handleScrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <IconButton
        icon={<FaArrowUp />}
        onClick={handleScrollTop}
        size="lg"
        position="fixed"
        bottom="20px"
        right="20px"
        boxShadow="lg"
        visibility={isVisible ? 'visible' : 'hidden'}
        opacity={isVisible ? '1' : '0'}
        transition="visibility 0s, opacity 0.5s linear"
      />
    );
  };
  
  export default Top;
  