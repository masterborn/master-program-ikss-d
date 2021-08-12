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

const Socials = ({ urls, size, className }) => (
  <SocialsWrapper className={className}>
    <a href={urls.facebook}>
      <Icon icon={FacebookIcon} size={size} />
    </a>
    <a href={urls.instagram}>
      <Icon icon={InstagramIcon} size={size} />
    </a>
    <a href={urls.youTube}>
      <Icon icon={YouTubeIcon} size={size} />
    </a>
    <a href={urls.linkedIn}>
      <Icon icon={LinkedInIcon} size={size} />
    </a>
  </SocialsWrapper>
);

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
