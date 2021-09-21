import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

import ScrollButtonVector from '@assets/ScrollButtonVector.svg';
import { getColor, getMedias } from '@styles/utils';

const Eclipse = styled.button`
  width: 64px;
  height: 64px;

  @media (max-width: ${getMedias('mobile')}) {
    width: 40px;
    height: 40px;

    & svg {
      transform: scale(85%);
    }
  }

  display: flex;
  justify-content: center;
  cursor: pointer;

  & svg {
    align-self: center;
  }

  background: ${getColor('white')};
  box-shadow: 0 16px 31px rgba(26, 40, 71, 0.1), 0 6.16296px 9.87407px rgba(26, 40, 71, 0.0607407),
    0 1.3037px 2.52593px rgba(26, 40, 71, 0.0392593);

  border-radius: 50%;
`;

const ScrollButton = ({ className }) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <Eclipse className={className} onClick={handleClick} tabIndex={0}>
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
