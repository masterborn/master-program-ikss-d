import styled from 'styled-components';

import IkksLogoAdditional from '@root/assets/ikks-logo-additional.svg';

const StyledLogoAdditional = styled(IkksLogoAdditional)`
  width: 66px;
  height: 38px;
  @media (min-width: 375px) {
    width: 84px;
    height: 48px;
  }
`;

const LogoAdditional = () => <StyledLogoAdditional />;

export default LogoAdditional;
