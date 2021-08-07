import styled from 'styled-components';

import IkksLogo from '../assets/ikks-logo.svg';

const BaseLogo = styled(IkksLogo)`
  width: 56px;
  height: 35px;

  @media (min-width: 375px) {
    width: 78px;
    height: 48px;
  }
`;

const Logo = () => <BaseLogo alt="ikks Logo" />;

export default Logo;
