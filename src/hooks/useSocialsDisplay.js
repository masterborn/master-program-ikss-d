import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useSocialsDisplay = () => {
  const router = useRouter();
  const [socialsVisibility, setSocialsVisibility] = useState(false);

  const areSmAlwaysDisabled = router.pathname === '/404';

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setSocialsVisibility(true);
      return;
    }

    setSocialsVisibility(false);
  };

  useEffect(() => {
    if (!areSmAlwaysDisabled) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      setSocialsVisibility(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [areSmAlwaysDisabled]);

  return { socialsVisibility };
};

export default useSocialsDisplay;
