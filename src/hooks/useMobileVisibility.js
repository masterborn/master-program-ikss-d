import { useState, useEffect } from 'react';

const useMobileVisibility = (mediaQuery, isMenu = false) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickOpposite = () => {
    setIsVisible(!isVisible);
  };

  const handleClickTrue = () => {
    setIsVisible(true);
  };

  const handleClickFalse = () => {
    setIsVisible(false);
  };

  const handleChange = (event) => {
    if (event.matches) setIsVisible(false);
    else setIsVisible(true);
  };

  const handleChangeMenu = (event) => {
    if (!event.matches) setIsVisible(false);
  };

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${mediaQuery}px)`);

    if (isMenu) {
      media.addEventListener('change', handleChangeMenu);
    } else {
      if (media.matches) setIsVisible(false);
      else setIsVisible(true);
      media.addEventListener('change', handleChange);
    }

    return () => {
      media.removeEventListener('change', handleChange);
      media.addEventListener('change', handleChangeMenu);
    };
  }, [mediaQuery, isMenu]);

  return { isVisible, handleClickOpposite, handleClickTrue, handleClickFalse };
};

export default useMobileVisibility;
