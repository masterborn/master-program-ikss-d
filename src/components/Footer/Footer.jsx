import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Heart from '@assets/Heart.svg';
import ScrollButton from '@components/Footer/ScrollButton';
import {
  Wrapper,
  TextLogoWrapper,
  MenuLink,
  MediaWrapper,
  Menu,
  LogoFooter,
  SocialMedias,
  FooterContactForm,
} from '@components/Footer//FooterStyles';

const Footer = ({ urls, contactFormData }) => {
  const router = useRouter();

  const contactForm = router.pathname === '/' && (
    <FooterContactForm contactFormData={contactFormData} />
  );

  return (
    <Wrapper>
      <MediaWrapper contact={router.pathname}>
        {contactForm}

        <ScrollButton contact={router.pathname} />

        <Menu contact={router.pathname}>
          <MenuLink url="/" linkLabel="Strona główna" />
          <MenuLink url="/projects" linkLabel="Projekty" />
          <MenuLink url="/about" linkLabel="O nas" />
          <MenuLink url="/cooperation" linkLabel="Współpraca" />
        </Menu>

        <SocialMedias
          footer
          urls={{
            facebook: urls.fblink,
            instagram: urls.inlink,
            youTube: urls.ytlink,
            linkedIn: urls.lnlink,
          }}
        />

        <TextLogoWrapper>
          <LogoFooter />
          <p>©2021 All rights reserved by Informacja Kulturalno-Sportowa Studentów</p>
          <p>
            Made with <Heart /> by <a href="https://masterborn.com/">MasterBorn Software</a>
          </p>
        </TextLogoWrapper>
      </MediaWrapper>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  urls: PropTypes.shape({
    fblink: PropTypes.string,
    inlink: PropTypes.string,
    ytlink: PropTypes.string,
    lnlink: PropTypes.string,
  }).isRequired,
  contactFormData: PropTypes.instanceOf(Object).isRequired,
};
