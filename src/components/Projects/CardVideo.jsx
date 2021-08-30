import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getMedias } from '@styles/utils';

const Wrapper = styled.div`
  position: relative;
  width: 966px;
  height: 0;
  padding-bottom: 43.25%;
  overflow: hidden;
  display: inline-flex;

  @media (max-width: ${getMedias('laptop')}) {
    width: 100%;
    padding-bottom: 56.25%;
  }
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const styledCardVideo = ({ videoUrl, title }) => {
  const videoId = videoUrl.split('=');

  return (
    <Wrapper>
      <VideoFrame
        title={title}
        src={`https://www.youtube.com/embed/${videoId[1]}?autoplay=0&controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; controls=0"
        allowFullScreen
      />
    </Wrapper>
  );
};

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
