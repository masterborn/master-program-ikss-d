import styled from 'styled-components';

import IkksLogo from '@assets/ikks-logo.svg';
import { getMedias } from '@root/styles/utils';

const BaseLogo = styled(IkksLogo)`
  width: 56px;
  height: 35px;
  @media (min-width: ${getMedias('mobile')}) {
    width: 78px;
    height: 48px;
  }
`;

const Logo = () => <BaseLogo />;

export default Logo;
