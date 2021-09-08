import styled from 'styled-components';
import PropTypes from 'prop-types';

import HomePageHeroText from '@components/homePageHero/HomePageHeroText';
import HomePageHeroImage from '@components/homePageHero/HomePageHeroImage';
import HeroSM from '@components/homePageHero/HomePageHeroSM';
import HomePageHeroVideo from '@components/homePageHero/HomePageHeroVideo';
import { getColor, getMedias } from '@styles/utils';

const HomePageHero = ({ data }) => {
  let imageOrVideoBlock;

  if (data.image1.contentType && data.image1.contentType === 'video') {
    imageOrVideoBlock = (
      <HomePageHeroVideo videoSrc={data.image1.url} videoTitle={data.image1.title} />
    );
  }

  if (data.image1.url && data.image1.contentType === 'image') {
    imageOrVideoBlock = (
      <HomePageHeroImage imageSrc={data.image1.url} imageAlt={data.image1.title} />
    );
  }

  return (
    <HeroWrapper>
      <Wrapper>
        <HomePageHeroText headerText={data.title} smallText={data.text1} />
        {imageOrVideoBlock}
      </Wrapper>
      <HeroSM
        facebookLink={data.fblink}
        instagramLink={data.inlink}
        youTubeLink={data.ytlink}
        linkedInLink={data.lnlink}
      />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  background: ${getColor('backgroundGradient')};
  width: 100vw;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div:nth-child(1) {
    order: 1;
  }

  & div:nth-child(2) {
    order: 2;
  }

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;

    & div:nth-child(1) {
      order: 2;
    }

    & div:nth-child(2) {
      order: 1;
    }
  }
`;

HomePageHero.propTypes = {
  data: PropTypes.shape({
    image1: PropTypes.shape({
      contentType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    text1: PropTypes.shape({}).isRequired,
    title: PropTypes.string.isRequired,
    link_url: PropTypes.string,
    link_caption: PropTypes.string,
    fblink: PropTypes.string.isRequired,
    inlink: PropTypes.string.isRequired,
    ytlink: PropTypes.string.isRequired,
    lnlink: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePageHero;
