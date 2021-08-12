import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { getColor } from '@root/styles/utils';
import Logo from '@root/components/Logos/Logo';
import Button from '@root/components/Button/index';
import Icon from '@root/components/Icon/index';
import FBIcon from '@root/assets/icons/facebook-circle-icon.svg';
import ISIcon from '@root/assets/icons/instagram-circle-icon.svg';
import YTIcon from '@root/assets/icons/youTube-circle-icon.svg';
import LNIcon from '@root/assets/icons/linkedIN-circle-icon.svg';

const Nav = styled.div`
  padding: 1rem 5rem;
  display: flex;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${getColor('white')};
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${getColor('steel')};
  transition: all 0.3s ease-in;
  font-size: 0.7rem;

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
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 24px;
    background: ${getColor('ikksBlue')};
    margin-bottom: 4px;
    margin-right: 27px;
    border-radius: 103px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const SocialMedias = styled.div`
  width: 12em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  visibility: hidden;

  ${(props) =>
    props.show &&
    css`
      visibility: visible;
    `}

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactButton = styled(Button)`
  height: 36px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopLogo = styled(Logo)`
  height: 48.82px;
  width: 73.57px;

  @media (max-width: 768px) {
    height: 52.83px;
    width: 35.05px;
  }
`;

function Navbar({ fblink, inlink, ytlink, lnlink, page }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav>
      <Logo as={DesktopLogo} />
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
      <SocialMedias show={scrollPosition > 0.25}>
        <a href={fblink} target="_blank" rel="noreferrer">
          <Icon icon={FBIcon} />
        </a>
        <a href={inlink} target="_blank" rel="noreferrer">
          <Icon icon={ISIcon} />
        </a>
        <a href={ytlink} target="_blank" rel="noreferrer">
          <Icon icon={YTIcon} />
        </a>
        <a href={lnlink} target="_blank" rel="noreferrer">
          <Icon icon={LNIcon} />
        </a>
      </SocialMedias>
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
      <Button as={ContactButton} buttonLabel="Skontaktuj się" />
    </Nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  fblink: PropTypes.string.isRequired,
  inlink: PropTypes.string.isRequired,
  ytlink: PropTypes.string.isRequired,
  lnlink: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
