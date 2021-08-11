import styled from 'styled-components';

import LinkedInIcon from '@assets/icons/linkedIN-circle-icon.svg';
import FacebookIcon from '@assets/icons/facebook-circle-icon.svg';
import InstagramIcon from '@assets/icons/instagram-circle-icon.svg';
import YouTubeIcon from '@assets/icons/youTube-circle-icon.svg';

import Icon from '../Icon';

const SocialsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const Socials = () => (
  <SocialsWrapper>
    <a>
      <Icon icon={FacebookIcon} size="32px" />
    </a>
    <a>
      <Icon icon={InstagramIcon} size="32px" />
    </a>
    <a>
      <Icon icon={YouTubeIcon} size="32px" />
    </a>
    <a>
      <Icon icon={LinkedInIcon} size="32px" />
    </a>
  </SocialsWrapper>
);

export default Socials;
