import styled from 'styled-components';
import PropTypes from 'prop-types';

import CircleFacebook from '@assets/icons/facebook-circle-icon.svg';
import CircleInstagram from '@assets/icons/instagram-circle-icon.svg';
import CircleYouTube from '@assets/icons/youTube-circle-icon.svg';
import CircleLinkedIn from '@assets/icons/linkedIN-circle-icon.svg';
import { getMedias, getShadow } from '@styles/utils';
import HomePageHeroSMLink from '@components/homePageHero/HomePageHeroSMLink';
import useHeroHeight from '@hooks/useHeroHeight';

const StyledHeroSM = ({ socialUrls }) => {
  const { fblink, inlink, ytlink, lnlink } = socialUrls;
  const { setHeight } = useHeroHeight();

  return (
    <Wrapper ref={setHeight}>
      <div>
        <HomePageHeroSMLink linkText="Facebook" hrefLink={fblink} linkIcon={CircleFacebook} />
        <HomePageHeroSMLink linkText="Instagram" hrefLink={inlink} linkIcon={CircleInstagram} />
        <HomePageHeroSMLink linkText="YouTube" hrefLink={ytlink} linkIcon={CircleYouTube} />
        <HomePageHeroSMLink linkText="LinkedIn" hrefLink={lnlink} linkIcon={CircleLinkedIn} />
      </div>
    </Wrapper>
  );
};

const HomePageHeroSM = styled(StyledHeroSM)``;

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
    box-shadow: ${getShadow('cardShadow')};
    border-radius: 16px 0 0 16px;
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

StyledHeroSM.propTypes = {
  socialUrls: PropTypes.shape({
    fblink: PropTypes.string.isRequired,
    inlink: PropTypes.string.isRequired,
    ytlink: PropTypes.string.isRequired,
    lnlink: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePageHeroSM;
