import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Heart from '@assets/Heart.svg';
import ScrollButton from '@components/Footer/ScrollButton';
import NavLink from '@components/Navbar/NavLink';
import { getColor, getFontWeight, getMedias } from '@styles/utils';
import Socials from '@components/Navbar/Socials';
import LogoAdditional from '@components/Logos/LogoAdditional';
import ContactForm from '@components/ContactForm/ContactForm';

const Wrapper = styled.footer`
  width: 100%;
  height: ${({ contact }) => (contact === '/' ? '728px' : '466px')};
  background: ${getColor('ikksBlue')};
  position: relative;

  ${({ contact }) =>
    contact === '/' &&
    css`
      @media (max-width: 1200px) {
        padding-top: 8em;
        height: 880px;
      }
    `};

  @media (max-width: ${getMedias('mobile')}) {
    ${({ contact }) =>
      contact !== '/' &&
      css`
        height: 586px;
      `}
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  position: relative;
  bottom: ${({ contact }) => (contact === '/' ? '5%' : '8%')};

  @media (max-width: ${getMedias('tablet')}) {
    margin-right: 5%;
  }

  @media (max-width: 650px) {
    justify-content: ${({ contact }) => (contact === '/' ? 'flex-end' : 'center')};
    margin-right: ${({ contact }) => (contact === '/' ? '5%' : '0')};
  }

  @media (max-width: ${getMedias('mobile')}) {
    margin: 0;
    justify-content: center;
    bottom: 4%;
  }

  ${({ contact }) =>
    contact === '/' &&
    css`
      @media (max-width: 1200px) {
        justify-content: center;
        top: 32%;
        margin-right: 0;
      }

      @media (max-width: ${getMedias('mobile')}) {
        top: 12%;
      }
    `};
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;

  ${({ contact }) =>
    contact === '/' &&
    css`
      padding-top: 18em;
    `};

  @media (max-width: ${getMedias('mobile')}) {
    flex-direction: column;

    ${({ contact }) =>
      contact === '/' &&
      css`
        padding-top: 7em;
      `};
  }
`;

const MenuLink = styled(NavLink)`
  padding: 1rem;
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
  margin: 2em;

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
  height: 84px;
  margin-bottom: 2em;

  @media (max-width: ${getMedias('mobile')}) {
    width: 66px;
    height: 38px;
  }
`;

const SocialMedias = styled(Socials)`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  align-items: center;
  gap: 24px;
  & svg * {
    transition: all 0.3s ease-in;
  }
  & svg:hover * {
    fill: ${getColor('blue_50')};
  }
`;

const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterContactForm = styled(ContactForm)`
  position: absolute;
  bottom: 60%;

  @media (max-width: ${getMedias('mobile')}) {
    bottom: 75%;
  }
`;

const Footer = ({ urls }) => {
  const router = useRouter();
  return (
    <Wrapper contact={router.pathname}>
      {router.pathname === '/' && (
        <ContactFormWrapper>
          <FooterContactForm />
        </ContactFormWrapper>
      )}
      <ButtonWrapper contact={router.pathname}>
        <ScrollButton />
      </ButtonWrapper>
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
};
