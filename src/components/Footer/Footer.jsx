import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Heart from '@assets/Heart.svg';
import ScrollButton from '@components/Footer/ScrollButton';
import NavLink from '@components/Navbar/NavLink';
import { getColor, getFontWeight, getMedias } from '@styles/utils';
import Socials from '@components/Navbar/Socials';
import LogoAdditional from '@components/Logos/LogoAdditional';

const Wrapper = styled.footer`
  width: 100%;
  height: ${(props) => (props.contact ? '728px' : '436px')};
  background: ${getColor('ikksBlue')};

  @media (max-width: ${getMedias('mobile')}) {
    height: ${(props) => (props.contact ? '726px' : '566px')};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  position: relative !important;
  bottom: ${(props) => (props.contact ? '5%' : '8%')};

  @media (max-width: ${getMedias('tablet')}) {
    margin-right: 5%;
  }
  @media (max-width: 650px) {
    justify-content: ${(props) => (props.contact ? 'flex-end' : 'center')};
    margin-right: ${(props) => (props.contact ? '5%' : '0')};
  }

  @media (max-width: ${getMedias('mobile')}) {
    margin: 0;
    justify-content: center;

    ${(props) =>
      props.contact &&
      css`
        bottom: 0;
        top: 18%;
      `};
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;

  ${(props) =>
    props.contact &&
    css`
      padding-top: 18em;
    `};

  @media (max-width: ${getMedias('mobile')}) {
    flex-direction: column;

    ${(props) =>
      props.contact &&
      css`
        padding-top: 10em;
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
  margin: 1em 0 2em 0;

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
`;

const Footer = ({ contact, urls }) => (
  <Wrapper contact={contact}>
    <ButtonWrapper contact={contact}>
      <ScrollButton />
    </ButtonWrapper>
    <Menu contact={contact}>
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
        Made with <Heart /> by{' '}
        <a href="https://masterborn.com/" target="_blank" rel="noopener noreferrer">
          MasterBorn Software
        </a>
      </p>
    </TextLogoWrapper>
  </Wrapper>
);

export default Footer;

Footer.propTypes = {
  contact: PropTypes.bool,
  urls: PropTypes.shape({
    fblink: PropTypes.string,
    inlink: PropTypes.string,
    ytlink: PropTypes.string,
    lnlink: PropTypes.string,
  }).isRequired,
};

Footer.defaultProps = {
  contact: false,
};
