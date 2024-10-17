import { useEffect } from 'react';

const useScrollFadeIn = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    
    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          el.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollFadeIn;
