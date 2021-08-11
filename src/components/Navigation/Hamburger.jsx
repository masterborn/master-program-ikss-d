import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import CloseIcon from '@assets/icons/x-icon.svg';
import { getColor, getFontWeight } from '@root/styles/utils';

import Icon from '../Icon';
import Button from '../Button';

import Socials from './Socials';
import NavLink from './NavLink';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${getColor('navy')};
    opacity: 0.6;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  background: ${getColor('white')};
  width: 300px;
  height: 100%;
  border-radius: 16px 0 0 0;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 16px 24px;
  margin-left: auto;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: ${getFontWeight('buttonWeight')};
  width: 100%;
  padding: 24px;
  box-shadow: inset 0px 1.5px 0px #eaf5ff, inset 0px -1.5px 0px #eaf5ff;
`;

const ContactButton = styled(Button)`
  margin: 40px;
`;

const Hamburger = () => (
  <Wrapper>
    <StyledNav>
      <StyledButton type="button">
        <Icon icon={CloseIcon} color="navy" />
      </StyledButton>

      <NavLink linkLabel="Strona główna" url="/" />

      <Link href="/">
        <StyledLink>Strona główna</StyledLink>
      </Link>
      <Link href="/projects">
        <StyledLink>Projekty</StyledLink>
      </Link>
      <Link href="/about">
        <StyledLink>O nas</StyledLink>
      </Link>
      <Link href="/cooperation">
        <StyledLink>Współpraca</StyledLink>
      </Link>

      <ContactButton buttonLabel="Skontaktuj się" />

      <Socials />
    </StyledNav>
  </Wrapper>
);

export default Hamburger;
