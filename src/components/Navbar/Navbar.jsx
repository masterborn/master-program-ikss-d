import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { AnimatePresence } from 'framer-motion';

import { getColor, getFontWeight, getMedias } from '@styles/utils';
import useEscapeKey from '@hooks/useEscapeKey';
import Logo from '@components/Logos/Logo';
import Button from '@components/Button/Button';
import Socials from '@components/Navbar/Socials';
import Hamburger from '@components/Navbar/Hamburger';
import NavLink from '@components/Navbar/NavLink';
import { openContactFormNavbar } from '@utils/formVisibility';
import Modal from '@components/ContactForm/Modal';
import Portal from '@hoc/Portal';
import useMobileVisibility from '@hooks/useMobileVisibility';
import useSocialsDisplay from '@hooks/useSocialsDisplay';

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
  max-width: 1440px;
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
  const isModalOpen = useSelector(({ modal }) => modal.isModalOpen);
  const {
    isVisible,
    handleClickTrue: openMenu,
    handleClickFalse: closeMenu,
  } = useMobileVisibility('1100', true);

  const { socialsVisibility } = useSocialsDisplay();
  const router = useRouter();
  const dispatch = useDispatch();
  useEscapeKey(closeMenu);

  const scrollToTopOnClick = () => {
    if (router.pathname === '/') {
      scroll.scrollToTop();
    } else {
      router.push('/');
    }
  };

  return (
    <>
      {isVisible && <MobileMenu urls={urls} closeMobileMenu={closeMenu} />}

      <Nav>
        <MediaWrapper>
          <button type="button" onClick={scrollToTopOnClick} aria-label="Przenieś na stronę główną">
            <Logo />
          </button>

          <Menu>
            <MenuLink url="/" linkLabel="Strona główna" />
            <MenuLink url="/projekty" linkLabel="Projekty" />
            <MenuLink url="/o-nas" linkLabel="O nas" />
            <MenuLink url="/wspolpraca" linkLabel="Współpraca" />
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

          <Hamburger openMenu={openMenu} />

          <Button as={ContactButton} onClick={() => openContactFormNavbar(router, dispatch)}>
            Skontaktuj się
          </Button>

          <Portal>
            <AnimatePresence>
              {isModalOpen && <Modal contactFormData={contactFormData} />}
            </AnimatePresence>
          </Portal>
        </MediaWrapper>
      </Nav>
    </>
  );
};

Navbar.defaultProps = {
  contactFormData: null,
};

Navbar.propTypes = {
  urls: PropTypes.shape({
    fblink: PropTypes.string,
    inlink: PropTypes.string,
    ytlink: PropTypes.string,
    lnlink: PropTypes.string,
  }).isRequired,
  contactFormData: PropTypes.instanceOf(Object),
};

export default Navbar;
