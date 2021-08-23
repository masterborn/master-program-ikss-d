import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const styledHeroImage = ({ imageSrc, imageAlt }) => <Image src={imageSrc} alt={imageAlt} />;

const HomePageHeroImage = styled(styledHeroImage)``;

HomePageHeroImage.propTypes = {
  imageSrc: PropTypes.shape({}).isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default HomePageHeroImage;
