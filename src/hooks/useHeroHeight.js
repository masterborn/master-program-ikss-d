import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';

import { heroActions } from '@store/heroSlice';

const useHeroHeight = () => {
  const [refElement, setRefElement] = useState(null);
  const refValues = useSelector(({ hero }) => hero.heroPosition);

  const dispatch = useDispatch();

  const getHeight = () => refValues;

  const setHeight = useCallback(() => {
    if (!refElement) return;

    const positionFromTop =
      window.pageYOffset + refElement.getBoundingClientRect().top + refElement.clientHeight;

    dispatch(heroActions.setHeight(positionFromTop));
  }, [dispatch, refElement]);

  const getRef = (element) => {
    setRefElement(element);
  };

  const handleWidthChange = useCallback(
    (event) => {
      if (event.matches) window.removeEventListener('resize', setHeight);
      else window.addEventListener('resize', setHeight);
    },
    [setHeight],
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 1100px)`);

    media.addEventListener('change', handleWidthChange);

    if (!media.matches) {
      setHeight();
      window.addEventListener('resize', setHeight);
    }

    return () => {
      window.removeEventListener('resize', setHeight);
      media.removeEventListener('change', handleWidthChange);
    };
  }, [setHeight, handleWidthChange]);

  return { getRef, getHeight };
};

export default useHeroHeight;
