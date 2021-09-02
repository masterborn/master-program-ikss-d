import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '@assets/loader.svg';
import { getMedias, getAnimation } from '@styles/utils';

const SpinnerWrapper = styled.span`
  line-height: 0;

  & > svg {
    animation: ${getAnimation('rotateSpinner')} 5s linear infinite;

    @media (max-width: ${getMedias('tablet')}) {
      transform: scale(0.83);
    }
  }
`;

const Spinner = ({ className }) => (
  <SpinnerWrapper className={className}>
    <Loader />
  </SpinnerWrapper>
);

Spinner.defaultProps = {
  className: null,
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
