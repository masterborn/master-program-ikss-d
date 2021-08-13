import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import CloseIcon from '@assets/icons/x-icon.svg';
import { getColor, getFontWeight, getMedias } from '@styles/utils';
import Icon from '@components/Icon/Icon';
import Button from '@components/Button/Button';

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
  box-shadow: inset 0px 1.5px 0px #eaf5ff, inset 0px -1.5px 0px #eaf5ff;
`;

const ContactButton = styled(Button)`
  margin: 40px 0;
`;

const LinksWrapper = styled.div`
  width: 100%;
  display: inherit;
  flex-direction: column;
  box-shadow: 0px 1.5px 0px #eaf5ff, 0px -1.5px 0px #eaf5ff;

  @media (max-width: ${getMedias('mobile')}) {
    font-size: 14px;
  }
`;

const MobileMenu = ({ show, urls, sendClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    if (event.matches) setIsVisible(true);
    else setIsVisible(false);
  };

  const handleClick = () => {
    sendClose();
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
              <Icon icon={CloseIcon} color="steel" />
            </CloseButton>

            <LinksWrapper>
              <StyledLink linkLabel="Strona główna" url="/" />
              <StyledLink linkLabel="Projekty" url="/projects" />
              <StyledLink linkLabel="O nas" url="/about" />
              <StyledLink linkLabel="Współpraca" url="/cooperation" />
            </LinksWrapper>

            <ContactButton buttonLabel="Skontaktuj się" />

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
  sendClose: PropTypes.func.isRequired,
};
