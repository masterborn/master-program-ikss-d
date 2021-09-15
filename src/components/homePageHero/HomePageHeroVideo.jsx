import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getMedias } from '@styles/utils';

const StyledVideo = styled.video`
  max-width: 56%;

  @media (max-width: ${getMedias('homeHero')}) {
    max-width: 100%;
  }
`;

const HomePageHeroVideo = ({ videoSrc }) => (
  <StyledVideo autoPlay muted loop>
    <track kind="captions" />
    <source src={videoSrc} />
  </StyledVideo>
);

HomePageHeroVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default HomePageHeroVideo;
