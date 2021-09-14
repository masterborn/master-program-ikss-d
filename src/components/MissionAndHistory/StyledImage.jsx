import styled from 'styled-components';

import { getShadow } from '@styles/utils';

const StyledImage = styled.div`
  position: relative;
  width: 483px;
  height: ${({ heightLarge }) => heightLarge};
  margin-left: 3rem;
  overflow: hidden;

  box-shadow: ${getShadow('cardShadow')};
  border-radius: 16px;

  @media (max-width: 1280px) {
    transform: scale(0.9);
    margin: 0;
  }

  @media (max-width: 550px) {
    width: 327px;
    height: ${({ heightSmall }) => heightSmall};
    border-radius: 8px;
  }

  @media (max-width: 360px) {
    transform: scale(0.8);
  }
`;

export default StyledImage;
