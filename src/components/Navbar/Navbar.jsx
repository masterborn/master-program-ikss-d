import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { getColor, getFontWeight, getMedias } from '@styles/utils';
import Logo from '@components/Logos/Logo';
import Button from '@components/Button/Button';
import Socials from '@components/Navbar/Socials';
import NavLink from '@components/Navbar/NavLink';

const Nav = styled.div`
  padding: 1.25rem 7.5rem;
  display: flex;
  z-index: 9999;
  align-items: center;
  background: ${getColor('white')};
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: ${getMedias('desktop')}) {
    padding: 1rem 1.25rem;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-left: 7.8em;

  @media (max-width: 1400px) {
    margin-left: 2em;
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
  color: ${getColor('steel')};
  transition: all 0.3s ease-in;
  font-weight: ${getFontWeight('buttonWeight')};

  &:hover {
    color: ${getColor('navy')};
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;

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
  margin: 0 5.6em 0 auto;

  @media (max-width: 1400px) {
    margin: 0 2em 0 auto;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const SocialMedias = styled(Socials)`
  opacity: 0;
  align-items: center;
  gap: 24px;

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}
`;

const ContactButton = styled(Button)`
  height: 36px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

function Navbar({ fblink, inlink, ytlink, lnlink }) {
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
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <Menu>
        <MenuLink url="/" linkLabel="Strona główna" />
        <MenuLink url="/projects" linkLabel="Projekty" />
        <MenuLink url="/about" linkLabel="O nas" />
        <MenuLink url="/cooperation" linkLabel="Współpraca" />
      </Menu>

      <SMWrapper>
        <SocialMedias
          show={scrollPosition > 0.25}
          urls={{
            facebook: fblink,
            instagram: inlink,
            youTube: ytlink,
            linkedIn: lnlink,
          }}
        />
      </SMWrapper>

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
};
