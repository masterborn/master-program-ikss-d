import styled from 'styled-components';
import PropTypes from 'prop-types';

import HomePageHeroText from '@components/homePageHero/HomePageHeroText';
import HomePageHeroImage from '@components/homePageHero/HomePageHeroImage';
import HeroSM from '@components/homePageHero/HomePageHeroSM';
import HomePageHeroVideo from '@components/homePageHero/HomePageHeroVideo';
import { getMedias } from '@styles/utils';
import HomePageHeroYouTubeVideo from '@components/homePageHero/HomePageHeroYouTubeVideo';

const styledHero = ({ data }) => {
  let imageOrVideoBlock;

  if (data.contentType && data.contentType === 'video/mp4') {
    imageOrVideoBlock = (
      <HomePageHeroVideo videoSrc={data.imageOrVideoURL} videoTitle={data.imageOrVideoTitle} />
    );
  }

  if (data.imageOrVideoURL) {
    imageOrVideoBlock = (
      <HomePageHeroImage imageSrc={data.imageOrVideoURL} imageAlt={data.imageOrVideoTitle} />
    );
  }

  if (data.link_url) {
    imageOrVideoBlock = <HomePageHeroYouTubeVideo videoUrl={data.link_url} />;
  }

  return (
    <>
      <Wrapper>
        <HomePageHeroText headerText={data.title} smallText={data.text} />
        {imageOrVideoBlock}
      </Wrapper>
      <HeroSM
        facebookLink={data.facebookLink}
        instagramLink={data.instagramLink}
        youTubeLink={data.youTubeLink}
        linkedInLink={data.linkedInLink}
      />
    </>
  );
};

const HomePageHero = styled(styledHero)`
  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%), #ffffff;
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
    contentType: PropTypes.string,
    imageOrVideoTitle: PropTypes.string,
    imageOrVideoURL: PropTypes.string,
    smallText: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    link_url: PropTypes.string,
    link_caption: PropTypes.string,
    facebookLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    youTubeLink: PropTypes.string.isRequired,
    linkedInLink: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePageHero;
