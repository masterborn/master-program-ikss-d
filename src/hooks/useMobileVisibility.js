import { useState, useEffect } from 'react';

const useMobileVisibility = (mediaQuery) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    if (!event.matches) setIsVisible(false);
  };

  const handleClickTrue = () => {
    setIsVisible(true);
  };

  const handleClickFalse = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${mediaQuery}px)`);

    if (!media.matches) setIsVisible(false);

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return { isVisible, handleClickTrue, handleClickFalse };
};

export default useMobileVisibility;
