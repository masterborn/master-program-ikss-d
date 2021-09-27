import styled, { css } from 'styled-components';

import NavLink from '@components/Navbar/NavLink';
import { getColor, getFontWeight, getMedias } from '@styles/utils';
import Socials from '@components/Navbar/Socials';
import LogoAdditional from '@components/Logos/LogoAdditional';
import ContactForm from '@components/ContactForm/ContactForm';

const Wrapper = styled.footer`
  width: 100%;
  background: ${getColor('ikksBlue')};
  position: relative;
`;

const MediaWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-rows: min-content;
  position: relative;
  padding-bottom: 51px;
  padding-top: 3.5rem;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: ${getMedias('mobile')}) {
    padding-bottom: 40px;
  }

  ${({ contact }) =>
    contact === '/' &&
    css`
      padding-top: 23.75rem;

      @media (max-width: ${getMedias('desktop')}) {
        padding-top: 20.75rem;
      }

      @media (max-width: ${getMedias('mobile')}) {
        padding-top: 12.25rem;
      }
    `};
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${getMedias('mobile')}) {
    flex-direction: column;
    gap: 24px;
  }
`;

const MenuLink = styled(NavLink)`
  padding: 0 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-weight: ${getFontWeight('buttonWeight')};
  color: ${getColor('white')};

  &:hover {
    color: ${getColor('blue_50')};
  }
`;

const TextLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 49px 0 0;

  @media (max-width: ${getMedias('mobile')}) {
    margin: 40px 25px 0;
  }

  & * {
    fill: white;
  }

  & svg {
    align-self: center;
  }

  & p {
    color: ${getColor('white')};
    align-self: center;
    text-align: center;
  }

  & a {
    text-decoration: none;
    color: ${getColor('white')};
  }
`;

const LogoFooter = styled(LogoAdditional)`
  width: 84px;
  height: 48px;
  margin-bottom: 3.5rem;

  @media (max-width: ${getMedias('mobile')}) {
    width: 66px;
    height: 38px;
    margin-bottom: 2.5rem;
  }
`;

const SocialMedias = styled(Socials)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${getMedias('mobile')}) {
    margin-top: 3.5rem;
  }

  & svg * {
    transition: all 0.3s ease-in;
  }

  & svg:hover * {
    fill: ${getColor('blue_50')};
  }
`;

const FooterContactForm = styled(ContactForm)`
  position: absolute;
  left: 50%;
  bottom: 61.6%;
  transform: translateX(-50%);
  width: 100%;
  margin: 0;
  z-index: 1;

  @media (max-width: ${getMedias('tablet')}) {
    width: 90%;
  }

  @media (max-width: ${getMedias('mobile')}) {
    bottom: 79.6%;
  }
`;

export {
  Wrapper,
  TextLogoWrapper,
  MenuLink,
  MediaWrapper,
  Menu,
  LogoFooter,
  SocialMedias,
  FooterContactForm,
};
