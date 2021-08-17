import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
  -webkit-transform: rotate(0.000001deg);

  overflow: hidden;
  display: inline-flex;
`;

const styledCardVideo = ({ videoUrl, title }) => (
  <Wrapper>
    <iframe
      title={title}
      width="100%"
      height="300px"
      src={`${videoUrl}?autoplay=0&controls=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; controls=0"
      allowFullScreen
    />
  </Wrapper>
);

const CardVideo = styled(styledCardVideo)`
  max-width: 100%;
  height: auto;
  opacity: 0.6;
`;

CardVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardVideo;
