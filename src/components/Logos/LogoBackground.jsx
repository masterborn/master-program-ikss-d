import styled from 'styled-components';

import IkksLogoBackground from '@assets/ikks-logo-bg.svg';

const StyledLogoBackground = styled(IkksLogoBackground)`
  width: 82px;
  height: 31px;

  @media (min-width: 375px) {
    width: 100px;
    height: 38px;
  }
`;

const LogoBackground = () => <StyledLogoBackground />;

export default LogoBackground;
