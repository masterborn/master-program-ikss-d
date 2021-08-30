import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';

const styledCardImage = ({ imageSrc, imageAlt }) => <img src={imageSrc} alt={imageAlt} />;

const CardImage = styled(styledCardImage)`
  max-width: 100%;
  height: auto;
  opacity: 0.6;
  background: #61798b;
`;

CardImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default CardImage;
