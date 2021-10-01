import styled, { css } from 'styled-components';

import Button from '@components/Button/Button';
import { getColor, getMedias } from '@styles/utils';

const CarouselButton = styled(Button)`
  transition: all 0.1s ease-in;
  ${({ active }) =>
    !active &&
    css`
      background: ${getColor('blue_10')};
      color: ${getColor('navy')};
      & :hover {
        background: ${getColor('blue_20')};
      }

      @media (max-width: ${getMedias('mobile')}) {
        font-size: 10px;
      }
    `}
`;

export default CarouselButton;
