import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from 'next/dist/client/image';

import { getColor, getMedias } from '@styles/utils';

const Icon = ({ icon, alt, className, size, color, media }) => (
  <Wrapper className={className} size={size} color={color} media={media}>
    <Image src={icon} alt={alt} layout="fill" />
  </Wrapper>
);

const Wrapper = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  @media (max-width: ${getMedias('mobile')}) {
    width: ${({ size, media }) => media || size};
    height: ${({ size, media }) => media || size};
  }

  & * {
    ${({ color }) =>
      color &&
      css`
        fill: ${getColor(color)};
      `}
  }
`;

Icon.defaultProps = {
  size: '24px',
  className: null,
  color: '',
  media: '24px',
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  media: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Icon;
