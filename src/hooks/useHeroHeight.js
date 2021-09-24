import { useDispatch, useSelector } from 'react-redux';

import { heroActions } from '@store/heroSlice';

const useHeroHeight = () => {
  const refValues = useSelector(({ hero }) => hero.heroPosition);

  const dispatch = useDispatch();

  const getHeight = () => refValues;

  const setHeight = (element) => {
    if (!element) return;

    const positionFormTop =
      window.pageYOffset + element.getBoundingClientRect().top + element.clientHeight;

    dispatch(heroActions.setHeight(positionFormTop));
  };

  return { setHeight, getHeight };
};

export default useHeroHeight;
