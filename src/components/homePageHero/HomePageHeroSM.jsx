import styled from 'styled-components';
import PropTypes from 'prop-types';

import CircleFacebook from '@assets/icons/facebook-circle-icon.svg';
import CircleInstagram from '@assets/icons/instagram-circle-icon.svg';
import CircleYouTube from '@assets/icons/youTube-circle-icon.svg';
import CircleLinkedIn from '@assets/icons/linkedIN-circle-icon.svg';
import { getMedias } from '@styles/utils';
import HomePageHeroSMLink from '@components/homePageHero/HomePageHeroSMLink';

const styledHeroSM = ({ socialUrls }) => {
  const { fblink, inlink, ytlink, lnlink } = socialUrls;

  return (
    <Wrapper>
      <div>
        <HomePageHeroSMLink linkText="Facebook" hrefLink={fblink} linkIcon={CircleFacebook} />
        <HomePageHeroSMLink linkText="Instagram" hrefLink={inlink} linkIcon={CircleInstagram} />
        <HomePageHeroSMLink linkText="YouTube" hrefLink={ytlink} linkIcon={CircleYouTube} />
        <HomePageHeroSMLink linkText="LinkedIn" hrefLink={lnlink} linkIcon={CircleLinkedIn} />
      </div>
    </Wrapper>
  );
};

const HomePageHeroSM = styled(styledHeroSM)``;

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  & > div {
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
    border-radius: 16px 0 16px 16px;
    margin: 0 0 157px auto;
  }

  @media (max-width: ${getMedias('homeHero')}) {
    & > div {
      width: 90%;
      height: 80px;
      border-radius: 16px;
      float: none;
      margin: 0 auto 80px auto;
    }
  }
`;

HomePageHeroSM.propTypes = {
  socialUrls: PropTypes.shape({
    fblink: PropTypes.string.isRequired,
    inlink: PropTypes.string.isRequired,
    ytlink: PropTypes.string.isRequired,
    lnlink: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePageHeroSM;
