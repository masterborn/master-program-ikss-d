import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { getMedias } from '@styles/utils';

const HomePageHeroImage = ({ imageSrc, imageAlt }) => (
  <Wrapper>
    <Image src={imageSrc} alt={imageAlt} height={505} width={808} layout="responsive" />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 808px;

  @media (max-width: ${getMedias('homeHero')}) {
    width: 100%;
  }
`;

HomePageHeroImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default HomePageHeroImage;
