import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor, getMedias } from '@styles/utils';

const styledIcon = ({ icon: IconElement, className }) => <IconElement className={className} />;

const Icon = styled(styledIcon)`
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

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  media: PropTypes.string,
};

export default Icon;
