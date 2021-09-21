import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from 'next/image';

import { getMedias, getShadow } from '@styles/utils';

const StyledImage = styled.div`
  --imageWidth: 483px;

  min-width: var(--imageWidth);
  position: relative;
  box-shadow: ${getShadow('cardShadow')};
  border-radius: 16px;
  overflow: hidden;

  ${({ isHistory }) =>
    isHistory
      ? css`
          margin-right: auto;
        `
      : css`
          margin-left: auto;
        `}

  @media (max-width: ${getMedias('laptop')}) {
    --imageWidth: 100%;

    padding-top: 55%;
    margin: 0 auto;
  }
`;

const ImageWrapper = ({ url, alt, isHistory, className }) => (
  <StyledImage isHistory={isHistory} className={className}>
    <Image src={url} alt={alt} layout="fill" />
  </StyledImage>
);

ImageWrapper.defaultProps = {
  isHistory: false,
  className: null,
};

ImageWrapper.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isHistory: PropTypes.bool,
  className: PropTypes.string,
};

export default ImageWrapper;
