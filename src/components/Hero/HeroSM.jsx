import styled from 'styled-components';
import PropTypes from 'prop-types';

import CircleFacebook from '@assets/icons/facebook-circle-icon.svg';
import CircleInstagram from '@assets/icons/instagram-circle-icon.svg';
import CircleYouTube from '@assets/icons/youTube-circle-icon.svg';
import CircleLinkedIn from '@assets/icons/linkedIN-circle-icon.svg';
import { getMedias } from '@styles/utils';
import HeroSMLink from '@components/Hero/HeroSMLink';

const styledHeroSM = ({ facebookLink, instagramLink, youTubeLink, linkedInLink }) => (
  <Wrapper>
    <div>
      <HeroSMLink linkText="Facebook" hrefLink={facebookLink} linkIcon={CircleFacebook} />
      <HeroSMLink linkText="Instagram" hrefLink={instagramLink} linkIcon={CircleInstagram} />
      <HeroSMLink
        linkText="YouTube"
        iconSize="3em"
        hrefLink={youTubeLink}
        linkIcon={CircleYouTube}
      />
      <HeroSMLink linkText="LinkedIn" hrefLink={linkedInLink} linkIcon={CircleLinkedIn} />
    </div>
  </Wrapper>
);

const HeroSm = styled(styledHeroSM)``;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;

  & div {
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
    margin: 0 0 157px auto;
  }

  @media (max-width: ${getMedias('laptop')}) {
    & div {
      width: 90%;
      height: 80px;
      border-radius: 16px;
      float: none;
      margin: 0 auto 80px auto;
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
