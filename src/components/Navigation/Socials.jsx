import styled from 'styled-components';
import PropTypes from 'prop-types';

import LinkedInIcon from '@assets/icons/linkedIN-circle-icon.svg';
import FacebookIcon from '@assets/icons/facebook-circle-icon.svg';
import InstagramIcon from '@assets/icons/instagram-circle-icon.svg';
import YouTubeIcon from '@assets/icons/youTube-circle-icon.svg';
import Icon from '@components/Icon/Icon';

const SocialsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const Link = ({ url, icon, size }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <Icon icon={icon} size={size} />
  </a>
);

const Socials = ({ urls, size, className }) => (
  <SocialsWrapper className={className}>
    <Link url={urls.facebook} icon={FacebookIcon} size={size} />
    <Link url={urls.instagram} icon={InstagramIcon} size={size} />
    <Link url={urls.youTube} icon={YouTubeIcon} size={size} />
    <Link url={urls.linkedIn} icon={LinkedInIcon} size={size} />
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
};

Socials.defaultProps = {
  size: '24px',
  className: null,
};

export default Socials;
