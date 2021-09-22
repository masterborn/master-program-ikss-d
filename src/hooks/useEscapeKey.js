import { useEffect } from 'react';

const useEscapeKey = (closingFunction) => {
  useEffect(() => {
    const keyListener = (e) => {
      if (e.keyCode === 27) closingFunction();
    };
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  });
};

export default useEscapeKey;
