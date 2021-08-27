import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const HomePageHeroVideo = ({ videoSrc }) => (
  <div>
    <StyledVideo autoPlay muted loop>
      <track kind="captions" />
      <source src={`https:${videoSrc}`} />
    </StyledVideo>
  </div>
);

HomePageHeroVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default HomePageHeroVideo;
