import styled from 'styled-components';

import { getMedias } from '@styles/utils';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 33.25%;
  overflow: hidden;
  display: inline-flex;

  @media (max-width: ${getMedias('laptop')}) {
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

const styledYouTubeVideo = ({ videoUrl, title }) => {
  const videoId = videoUrl.split('=');

  return (
    <Wrapper>
      <VideoFrame
        title={title}
        src={`https://www.youtube.com/embed/${videoId[1]}?autoplay=0&controls=0`}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; controls=07'
        allowFullScreen
      />
    </Wrapper>
  );
};

const HomePageHeroYouTubeVideo = styled(styledYouTubeVideo)`
  max-width: 100%;
  height: auto;
  opacity: 0.6;
`;

export default HomePageHeroYouTubeVideo;
