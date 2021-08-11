import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const styledHeroImage = ({ imageSrc }) => <Image src={imageSrc} alt="cos" width={808} />;

const HeroImage = styled(styledHeroImage)``;

HeroImage.propTypes = {
  imageSrc: PropTypes.shape({}).isRequired,
};

export default HeroImage;
