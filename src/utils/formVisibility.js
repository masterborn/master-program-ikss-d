import { scroller } from 'react-scroll';

import { modalActions } from '@root/store/modalSlice';

export const openContactForm = (router, openModalCallback) => {
  if (router.pathname === '/') {
    scroller.scrollTo('contactForm', {
      smooth: true,
      offset: -50,
    });
  } else openModalCallback(modalActions.openModal());
};

export const scrollOnHomepage = () => {
  scroller.scrollTo('contactForm', {
    smooth: true,
    offset: -50,
  });
};
