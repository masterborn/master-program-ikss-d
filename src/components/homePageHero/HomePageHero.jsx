import styled from 'styled-components';
import PropTypes from 'prop-types';

import HomePageHeroText from '@components/homePageHero/HomePageHeroText';
import HomePageHeroImage from '@components/homePageHero/HomePageHeroImage';
import HeroSM from '@components/homePageHero/HomePageHeroSM';
import HomePageHeroVideo from '@components/homePageHero/HomePageHeroVideo';
import { getMedias } from '@styles/utils';

const HomePageHero = ({ data }) => {
  const { image1, title, text1, socialUrls } = data;

  let imageOrVideoBlock;

  if (image1.contentType && image1.contentType === 'video') {
    imageOrVideoBlock = <HomePageHeroVideo videoSrc={image1.url} videoTitle={image1.title} />;
  }

  if (image1.url && image1.contentType === 'image') {
    imageOrVideoBlock = <HomePageHeroImage imageSrc={image1.url} imageAlt={image1.title} />;
  }

  return (
    <HeroWrapper>
      <Wrapper>
        <HomePageHeroText headerText={title} smallText={text1} />
        {imageOrVideoBlock}
      </Wrapper>
      <HeroSM socialUrls={socialUrls} />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section.attrs({ 'aria-label': 'test' })`
  width: 100%;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${getMedias('homeHero')}) {
    flex-direction: column-reverse;
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
    socialUrls: PropTypes.shape({
      fblink: PropTypes.string,
      inlink: PropTypes.string,
      ytlink: PropTypes.string,
      lnlink: PropTypes.string,
    }),
  }).isRequired,
};

export default HomePageHero;
