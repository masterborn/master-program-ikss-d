import PropTypes from 'prop-types';

const HomePageHeroVideo = ({ videoSrc }) => (
  <div>
    <video src={videoSrc}>
      <track kind="captions" />
    </video>
  </div>
);

HomePageHeroVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default HomePageHeroVideo;
