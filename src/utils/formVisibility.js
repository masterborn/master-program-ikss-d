import { scroller } from 'react-scroll';

export const openContactForm = (router, openModalCallback) => {
  if (router.pathname === '/') {
    scroller.scrollTo('contactForm', {
      smooth: true,
      offset: -50,
    });
  } else openModalCallback();
};

export const scrollOnHomepage = () => {
  scroller.scrollTo('contactForm', {
    smooth: true,
    offset: -50,
  });
};
