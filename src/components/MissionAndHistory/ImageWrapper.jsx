import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from 'next/image';

import { getMedias, getShadow } from '@styles/utils';

const StyledImage = styled.div`
  --imageWidth: 483px;

  ${({ isHistory }) =>
    isHistory
      ? css`
          margin-right: auto;
        `
      : css`
          margin-left: auto;
        `}

  width: var(--imageWidth);
  position: relative;
  box-shadow: ${getShadow('cardShadow')};
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: ${getMedias('laptop')}) {
    margin: 0;
    margin: ${({ isMission, isIndented }) => isIndented && isMission && '2.5rem 0 2rem'};
  }

  @media (max-width: 550px) {
    --imageWidth: 327px;
    --imageHeight: ${({ isMission }) => (isMission ? '201px' : '238px')};
    border-radius: 8px;
  }

  @media (max-width: 360px) {
    transform: scale(0.8);
  }
`;

const ImageWrapper = ({ url, alt, isHistory }) => (
  <StyledImage isHistory={isHistory}>
    <Image src={url} alt={alt} layout="fill" />
  </StyledImage>
);

ImageWrapper.defaultProps = {
  isHistory: false,
};

ImageWrapper.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isHistory: PropTypes.bool,
};

export default ImageWrapper;
