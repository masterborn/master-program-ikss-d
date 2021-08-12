import styled from 'styled-components';
import PropTypes from 'prop-types';

import IkksLogo from '@assets/ikks-logo.svg';

const BaseLogo = styled(IkksLogo)`
  width: 56px;
  height: 35px;

  @media (min-width: 375px) {
    width: 78px;
    height: 48px;
  }
`;

const Logo = ({ className }) => <BaseLogo className={className} />;

export default Logo;

Logo.defaultProps = {
  className: null,
};

Logo.propTypes = {
  className: PropTypes.func,
};
