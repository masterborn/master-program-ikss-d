import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { getColor, getFontWeight } from '@styles/utils';
import Logo from '@components/Logos/Logo';
import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';
import FBIcon from '@assets/icons/facebook-circle-icon.svg';
import ISIcon from '@assets/icons/instagram-circle-icon.svg';
import YTIcon from '@assets/icons/youTube-circle-icon.svg';
import LNIcon from '@assets/icons/linkedIN-circle-icon.svg';

import MobileMenu from './MobileMenu';

const Nav = styled.div`
  padding: 1.25rem 7.5rem;
  display: flex;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  background: ${getColor('white')};
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 1100px) {
    padding: 1rem 1.25rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${getColor('steel')};
  transition: all 0.3s ease-in;
  font-weight: ${getFontWeight('buttonWeight')};

  &:hover {
    color: ${getColor('navy')};
  }

  ${(props) =>
    props.active &&
    css`
      color: ${getColor('navy')};
    `}
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 24px;
    background: ${getColor('ikksBlue')};
    margin-bottom: 4px;
    margin-right: 27px;
    border-radius: 103px;
  }

  @media (max-width: 1100px) {
    display: flex;
  }
`;

const SMWrapper = styled.div`
  width: 12em;
  padding-left: 2.5em;

  @media (max-width: 1300px) {
    padding-left: 0;
  }
`;

const SocialMedias = styled.div`
  width: 13em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  ${(props) =>
    props.show &&
    css`
      display: flex;
    `}

  @media (max-width: 1100px) {
    display: none;
  }
`;

const ContactButton = styled(Button)`
  height: 36px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

function Navbar({ urls, page }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setScrollPosition(scrolled);
  };

  const closeMobileMenu = () => {
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MobileMenu urls={urls} show={show} closeMobileMenu={closeMobileMenu} />
      <Nav>
        <Logo />
        <Menu>
          <Link href="/">
            <MenuLink active={page === 'home'}>Strona główna</MenuLink>
          </Link>
          <Link href="/projects">
            <MenuLink active={page === 'projects'}>Projekty</MenuLink>
          </Link>
          <Link href="/about">
            <MenuLink active={page === 'about'}>O nas</MenuLink>
          </Link>
          <Link href="/cooperation">
            <MenuLink active={page === 'cooperation'}>Współpraca</MenuLink>
          </Link>
        </Menu>
        <SMWrapper>
          <SocialMedias show={scrollPosition > 0.25}>
            <a href={urls.fblink} target="_blank" rel="noreferrer">
              <Icon icon={FBIcon} />
            </a>
            <a href={urls.inlink} target="_blank" rel="noreferrer">
              <Icon icon={ISIcon} />
            </a>
            <a href={urls.ytlink} target="_blank" rel="noreferrer">
              <Icon icon={YTIcon} />
            </a>
            <a href={urls.lnlink} target="_blank" rel="noreferrer">
              <Icon icon={LNIcon} />
            </a>
          </SocialMedias>
        </SMWrapper>
        <Hamburger onClick={() => setShow(true)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Button as={ContactButton} buttonLabel="Skontaktuj się" />
      </Nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  urls: PropTypes.shape({
    fblink: PropTypes.string,
    inlink: PropTypes.string,
    ytlink: PropTypes.string,
    lnlink: PropTypes.string,
  }).isRequired,
  page: PropTypes.string.isRequired,
};
