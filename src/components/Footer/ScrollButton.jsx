import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

import ScrollButtonVector from '@assets/ScrollButtonVector.svg';
import { getColor, getMedias, getShadow } from '@styles/utils';

const Eclipse = styled.div`
  width: 64px;
  height: 64px;

  position: absolute;
  right: 126px;
  bottom: calc(100% - 32px);

  @media (max-width: ${getMedias('desktop')}) {
    bottom: calc(100% - 16px);
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ contact }) =>
    contact === '/' &&
    css`
      @media (max-width: ${getMedias('desktop')}) {
        position: relative;
        bottom: initial;
        right: initial;
        left: initial;
        justify-self: center;
        margin-bottom: 40px;
        transform: none;
      }
    `};

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
  box-shadow: ${getShadow('buttonShadow')};

  border-radius: 50%;
`;

const ScrollButton = ({ className, contact }) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <Eclipse className={className} contact={contact} onClick={handleClick}>
      <ScrollButtonVector />
    </Eclipse>
  );
};

ScrollButton.propTypes = {
  className: PropTypes.string,
  contact: PropTypes.string.isRequired,
};

ScrollButton.defaultProps = {
  className: null,
};

export default ScrollButton;
