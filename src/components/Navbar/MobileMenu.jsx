import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import CloseIcon from '@assets/icons/x-icon.svg';
import { getColor, getFontWeight, getMedias } from '@styles/utils';
import IconSM from '@components/Icon/IconSM';
import Button from '@components/Button/Button';
import { openContactFormNavbar } from '@utils/formVisibility';

import Socials from './Socials';
import NavLink from './NavLink';

const slideIn = keyframes`
from {
  right: -100%;
}

to {
  right: 0%;
}
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999999;

  &::before {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background: ${getColor('navy')};
    opacity: 0.6;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: inherit;
  right: 0;
  top: 0;
  background: ${getColor('white')};
  width: 300px;
  height: 100%;
  border-radius: 16px 0 0 0;
  animation: ${slideIn} 0.5s linear;

  @media (max-height: 520px) {
    width: 240px;
  }
`;

const CloseButton = styled.button`
  padding: 27px 24px;
  margin-left: auto;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: ${getFontWeight('buttonWeight')};
  width: 100%;
  padding: 24px;
  box-shadow: inset 0 1.5px 0 #eaf5ff, inset 0px -1.5px 0px #eaf5ff;

  @media (max-height: 520px) {
    padding: 12px 0 12px 24px;
  }

  @media (max-height: 380px) {
    padding: 8px 0 8px 20px;
  }

  @media (max-height: 320px) {
    padding: 6px 0 6px 20px;
  }
`;

const ContactButton = styled(Button)`
  margin: 40px 0;

  @media (max-height: 520px) {
    margin: 30px 0;
    height: 2em;
    font-size: 14px;
  }

  @media (max-height: 360px) {
    margin: 20px 0;
    height: 2em;
    font-size: 14px;
  }
`;

const LinksWrapper = styled.div`
  width: 100%;
  display: inherit;
  flex-direction: column;
  box-shadow: 0 1.5px 0 #eaf5ff, 0px -1.5px 0px #eaf5ff;

  @media (max-width: ${getMedias('mobile')}) {
    font-size: 14px;
  }

  @media (max-height: 520px) {
    font-size: 14px;
  }
`;

const MobileMenu = ({ show, urls, closeMobileMenu }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.matches) setIsVisible(true);
    else setIsVisible(false);
  };

  const handleClick = () => {
    closeMobileMenu();
  };

  const handleMobileContact = () => {
    closeMobileMenu();
    openContactFormNavbar(router, dispatch);
  };

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 1100px)`);

    if (media.matches) setIsVisible(true);
    else setIsVisible(false);

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <>
      {isVisible && show && (
        <Wrapper>
          <Nav>
            <CloseButton type="button" onClick={handleClick}>
              <IconSM icon={CloseIcon} color="steel" />
            </CloseButton>

            <LinksWrapper>
              <StyledLink linkLabel="Strona główna" url="/" />
              <StyledLink linkLabel="Projekty" url="/projects" />
              <StyledLink linkLabel="O nas" url="/about" />
              <StyledLink linkLabel="Współpraca" url="/cooperation" />
            </LinksWrapper>

            <ContactButton onClick={handleMobileContact}>Skontaktuj się</ContactButton>

            <Socials
              urls={{
                facebook: urls.fblink,
                instagram: urls.inlink,
                youTube: urls.ytlink,
                linkedIn: urls.lnlink,
              }}
              size="32px"
            />
          </Nav>
        </Wrapper>
      )}
    </>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  urls: PropTypes.shape({
    fblink: PropTypes.string,
    inlink: PropTypes.string,
    ytlink: PropTypes.string,
    lnlink: PropTypes.string,
  }).isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
};
