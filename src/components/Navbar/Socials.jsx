import styled from 'styled-components';
import PropTypes from 'prop-types';

import LinkedInIcon from '@assets/icons/linkedIN-circle-icon.svg';
import FacebookIcon from '@assets/icons/facebook-circle-icon.svg';
import InstagramIcon from '@assets/icons/instagram-circle-icon.svg';
import YouTubeIcon from '@assets/icons/youTube-circle-icon.svg';
import LinkedInIconFooter from '@assets/icons/linkedIn-icon.svg';
import FacebookIconFooter from '@assets/icons/facebook-icon.svg';
import InstagramIconFooter from '@assets/icons/instagram-icon.svg';
import YouTubeIconFooter from '@assets/icons/youTube-icon.svg';
import { getColor } from '@styles/utils';
import IconSM from '@components/Icon/IconSM';

const SocialsWrapper = styled.div`
  display: flex;
  gap: 24px;

  & svg:hover circle {
    fill: ${getColor('blue_20')};
  }
`;

const Link = ({ url, icon, size }) => (
  <a href={url}>
    <IconSM icon={icon} size={size} />
  </a>
);

const Socials = ({ urls, size, className, footer }) => (
  <SocialsWrapper className={className}>
    <Link url={urls.facebook} icon={!footer ? FacebookIcon : FacebookIconFooter} size={size} />
    <Link url={urls.instagram} icon={!footer ? InstagramIcon : InstagramIconFooter} size={size} />
    <Link url={urls.youTube} icon={!footer ? YouTubeIcon : YouTubeIconFooter} size={size} />
    <Link url={urls.linkedIn} icon={!footer ? LinkedInIcon : LinkedInIconFooter} size={size} />
  </SocialsWrapper>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.string,
};

Link.defaultProps = {
  size: '24px',
};

Socials.propTypes = {
  urls: PropTypes.shape({
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    youTube: PropTypes.string,
    linkedIn: PropTypes.string,
  }).isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  footer: PropTypes.bool,
};

Socials.defaultProps = {
  size: '24px',
  className: null,
  footer: false,
};

export default Socials;
