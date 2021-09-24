import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import useHeroHeight from './useHeroHeight';

const useSocialsDisplay = () => {
  const router = useRouter();
  const [socialsVisibility, setSocialsVisibility] = useState(false);
  const { getHeight } = useHeroHeight();

  const areSmAlwaysDisabled = router.pathname === '/404';

  const position = getHeight();

  const handleScroll = useCallback(() => {
    if (window.scrollY >= position) {
      setSocialsVisibility(true);
      return;
    }

    setSocialsVisibility(false);
  }, [position]);

  useEffect(() => {
    if (!areSmAlwaysDisabled) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      setSocialsVisibility(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [areSmAlwaysDisabled, handleScroll]);

  return { socialsVisibility };
};

export default useSocialsDisplay;
