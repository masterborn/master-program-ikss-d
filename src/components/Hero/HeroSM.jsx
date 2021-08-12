import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '@components/Icon/Icon';
import CircleFacebook from '@assets/icons/facebook-circle-icon.svg';
import CircleInstagram from '@assets/icons/instagram-circle-icon.svg';
import CircleYouTube from '@assets/icons/youTube-circle-icon.svg';
import CircleLinkedIn from '@assets/icons/linkedIN-circle-icon.svg';
import { getMedias } from '@styles/utils';

const styledHeroSM = ({ facebookLink, instagramLink, youTubeLink, linkedInLink }) => (
  <Wrapper>
    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
      <Icon icon={CircleFacebook} size="3em" />
      <h5>Facebook</h5>
    </a>
    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
      <Icon icon={CircleInstagram} size="3em" />
      <h5>Instagram</h5>
    </a>
    <a href={youTubeLink} target="_blank" rel="noopener noreferrer">
      <Icon icon={CircleYouTube} size="3em" />
      <h5>YouTube</h5>
    </a>
    <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
      <Icon icon={CircleLinkedIn} size="3em" />
      <h5>LinkedIn</h5>
    </a>
  </Wrapper>
);

const HeroSm = styled(styledHeroSM)``;

const Wrapper = styled.div`
  width: 70%;
  height: 137px;
  float: right;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px 0 0 16px;

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;

    & h5 {
      margin-left: 16px;
    }
  }

  @media (max-width: ${getMedias('laptop')}) {
    width: 90%;
    height: 80px;
    border-radius: 16px;
    margin: auto;
    float: none;

    & a {
      & h5 {
        display: none;
      }
    }
  }
`;

HeroSm.propTypes = {
  facebookLink: PropTypes.string.isRequired,
  instagramLink: PropTypes.string.isRequired,
  youTubeLink: PropTypes.string.isRequired,
  linkedInLink: PropTypes.string.isRequired,
};

export default HeroSm;
