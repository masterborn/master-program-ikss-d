import styled from 'styled-components';
import PropTypes from 'prop-types';

import IkksLogoAdditional from '@assets/ikks-logo-additional.svg';
import { getMedias } from '@root/styles/utils';

const StyledLogoAdditional = styled(IkksLogoAdditional)`
  width: 66px;
  height: 38px;
  @media (min-width: ${getMedias('mobile')}) {
    width: 84px;
    height: 48px;
  }
`;

const LogoAdditional = ({ className }) => <StyledLogoAdditional className={className} />;

export default LogoAdditional;

LogoAdditional.propTypes = {
  className: PropTypes.string,
};

LogoAdditional.defaultProps = {
  className: null,
};
