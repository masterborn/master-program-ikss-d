import { scroller } from 'react-scroll';

import { modalActions } from '@root/store/modalSlice';

export const openContactFormNavbar = (router, openModalCallback) => {
  if (router.pathname === '/') {
    scroller.scrollTo('contactForm', {
      smooth: true,
      offset: -50,
    });
  } else openModalCallback(modalActions.openModal());
};

export const openContactForm = (dispatch) => {
  console.log('test');
  dispatch(modalActions.openModal());
};

export const scrollOnHomepage = () => {
  scroller.scrollTo('contactForm', {
    smooth: true,
    offset: -50,
  });
};
