import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { heroActions } from '@store/refSlice';

const useHeroHeight = () => {
  const router = useRouter();
  const refValues = useSelector(({ hero }) => hero.heroHeight);

  const dispatch = useDispatch();

  const getHeight = () => refValues;

  const setHeight = (element) => {
    if (!element) return;

    let positionFormTop = window.pageYOffset + element.getBoundingClientRect().top;

    if (router.pathname !== '/') positionFormTop += element.getBoundingClientRect().height;

    dispatch(heroActions.setHeight(positionFormTop));
  };

  return { setHeight, getHeight };
};

export default useHeroHeight;
