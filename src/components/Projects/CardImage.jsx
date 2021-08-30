import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { getMedias } from '@styles/utils';

const styledCardImage = ({ imageSrc, imageAlt, isOnHomePage }) => (
  <Wrapper isOnHomePage={isOnHomePage}>
    <Image src={imageSrc} alt={imageAlt} height={320} width={580} layout="responsive" />
  </Wrapper>
);

const Wrapper = styled.div`
  width: ${(props) => (props.isOnHomePage ? '997px' : ' 588px')};

  @media (max-width: ${getMedias('laptop')}) {
    width: 100%;
  }
`;

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
