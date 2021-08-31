import styled from 'styled-components';
import PropTypes from 'prop-types';

const HomePageHeroImage = ({ imageSrc, imageAlt }) => (
  <div>
    <StyledImage src={imageSrc} alt={imageAlt} />
  </div>
);

const StyledImage = styled.img`
  width: 100%;
  object-fit: scale-down;
`;

HomePageHeroImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default HomePageHeroImage;
