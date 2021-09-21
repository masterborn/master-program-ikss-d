import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import { getColor, getFontWeight, getMedias } from '@styles/utils';
import useEscapeKey from '@hooks/useEscapeKey';
import Logo from '@components/Logos/Logo';
import Button from '@components/Button/Button';
import Socials from '@components/Navbar/Socials';
import NavLink from '@components/Navbar/NavLink';
import { openContactFormNavbar } from '@utils/formVisibility';
import Modal from '@components/ContactForm/Modal';
import Portal from '@hoc/Portal';

import MobileMenu from './MobileMenu';

const Nav = styled.nav`
  background: ${getColor('white')};
  box-shadow: 0 4px 16px rgba(97, 121, 139, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  & button {
    cursor: pointer;
  }
`;

const MediaWrapper = styled.div`
  max-width: 1920px;
  padding: 1.25rem 7.5rem;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${getMedias('desktop')}) {
    padding: 1.4rem 1.5rem;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-left: 6.875rem;

  @media (max-width: 1400px) {
    margin-left: 2rem;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MenuLink = styled(NavLink)`
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-weight: ${getFontWeight('buttonWeight')};

  &:hover {
    color: ${getColor('navy')};
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;

  span {
    height: 3px;
    width: 24px;
    background: ${getColor('ikksBlue')};
    margin-bottom: 4px;
    border-radius: 103px;
  }

  @media (max-width: 1100px) {
    display: flex;
  }
`;

const SMWrapper = styled.div`
  margin: 0 5.6em 0 auto;

  @media (max-width: 1400px) {
    margin: 0 2em 0 auto;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const SocialMedias = styled(Socials)`
  align-items: center;
  gap: 24px;
  display: none;

  ${(props) =>
    props.visible &&
    css`
      display: flex;
    `}
`;

const ContactButton = styled(Button)`
  height: 36px;
  font-size: 14px;
  padding: 9px 16px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Navbar = ({ urls, contactFormData }) => {
  const [socialsVisibility, setSocialsVisibility] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const areSmAlwaysDisabled = router.pathname === '/404';

  const closeMobileNavbar = () => {
    setShow(false);
  };

  useEscapeKey(closeMobileNavbar);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setSocialsVisibility(true);
      return;
    }

    setSocialsVisibility(false);
  };

  const closeMobileMenu = () => {
    setShow(false);
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

  const scrollToTopOnClick = () => {
    if (router.pathname === '/') {
      scroll.scrollToTop();
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <MobileMenu urls={urls} show={show} closeMobileMenu={closeMobileMenu} />

      <Nav>
        <MediaWrapper>
          <button type="button" onClick={scrollToTopOnClick} aria-label="Przenieś na stronę główną">
            <Logo />
          </button>

          <Menu>
            <MenuLink url="/" linkLabel="Strona główna" />
            <MenuLink url="/projects" linkLabel="Projekty" />
            <MenuLink url="/about" linkLabel="O nas" />
            <MenuLink url="/cooperation" linkLabel="Współpraca" />
          </Menu>

          <SMWrapper>
            <SocialMedias
              visible={socialsVisibility}
              urls={{
                facebook: urls.fblink,
                instagram: urls.inlink,
                youTube: urls.ytlink,
                linkedIn: urls.lnlink,
              }}
            />
          </SMWrapper>

          <Hamburger onClick={() => setShow(true)}>
            <span />
            <span />
            <span />
          </Hamburger>

          <Button as={ContactButton} onClick={() => openContactFormNavbar(router, dispatch)}>
            Skontaktuj się
          </Button>

          <Portal>
            <Modal contactFormData={contactFormData} />
          </Portal>
        </MediaWrapper>
      </Nav>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  urls: PropTypes.shape({
    fblink: PropTypes.string,
    inlink: PropTypes.string,
    ytlink: PropTypes.string,
    lnlink: PropTypes.string,
  }).isRequired,
  contactFormData: PropTypes.instanceOf(Object).isRequired,
};
