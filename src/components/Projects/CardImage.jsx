import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const styledCardImage = ({ imageSrc, imageAlt }) => <Image src={imageSrc} alt={imageAlt} />;

const CardImage = styled(styledCardImage)`
  max-width: 100%;
  height: auto;
  opacity: 0.6;
`;

CardImage.propTypes = {
  imageSrc: PropTypes.shape({}).isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default CardImage;
