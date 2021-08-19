import styled from 'styled-components';
import PropTypes from 'prop-types';

import ScrollButtonVector from '@assets/ScrollButtonVector.svg';
import { getColor } from '@styles/utils';

const Eclipse = styled.div`
  width: 64px;
  height: 64px;

  display: flex;
  justify-content: center;

  & svg {
    align-self: center;
  }

  background: ${getColor('white')};
  box-shadow: 0px 16px 31px rgba(26, 40, 71, 0.1),
    0px 6.16296px 9.87407px rgba(26, 40, 71, 0.0607407),
    0px 1.3037px 2.52593px rgba(26, 40, 71, 0.0392593);

  border-radius: 50%;
`;

const ScrollButton = ({ className }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Eclipse className={className} onClick={handleClick}>
      <ScrollButtonVector />
    </Eclipse>
  );
};

ScrollButton.propTypes = {
  className: PropTypes.string,
};

ScrollButton.defaultProps = {
  className: null,
};

export default ScrollButton;
