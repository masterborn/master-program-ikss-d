import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor } from '@styles/utils';

// Button props legend:
// small - if u want mobile version and its boolean,
// buttonLabel - set label shown on button and it takes string,
// withIcon - display button with icon and it takes boolean,
// secondary - display secondary version of button and it takes boolean.

const styledButton = ({ className, buttonLabel, withIcon }) => (
  <>
    {withIcon ? (
      <button type="button" className={className}>
        {/* TODO: Someone needs to create facebook icon component and it will be placed here */}
        {buttonLabel}
      </button>
    ) : (
      <button type="button" className={className}>
        {buttonLabel}
      </button>
    )}
  </>
);

const Button = styled(styledButton)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: ${(props) => (props.small ? '36px' : '48px')};
  width: ${(props) => {
    if (props.withIcon && !props.small) {
      return '162px';
    }

    if (props.withIcon && props.small) {
      return '128px';
    }

    if (props.small) {
      return '108px';
    }

    return '134px';
  }};
  border-radius: 26px;
  border: ${(props) => (props.secondary ? '2px solid #1A2847' : 'none')};
  background: ${(props) => (props.secondary ? getColor('white') : getColor('ikksBlue'))};
  color: ${(props) => (props.secondary ? getColor('navy') : getColor('white'))};
  line-height: 20px;
  font-weight: 700;
  // TODO: Change hardcoded values to values assigned in topography.
  font-size: ${(props) => (props.small ? '14px' : '16px')};

  &:hover {
    background: ${(props) =>
      props.secondary
        ? getColor('white')
        : 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #1889e9'};
    box-shadow: ${(props) => !props.secondary && '0 4px 8px rgba(24, 137, 233, 0.15)'};

    border-color: ${(props) => props.secondary && '#3C4863'};

    color: ${(props) => props.secondary && '#3C4863'};
  }

  &:active {
    background: ${(props) =>
      props.secondary
        ? getColor('white')
        : 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #1889e9'};
    border-color: ${(props) => props.secondary && '#535E75'};
    color: ${(props) => props.secondary && '#535E75'};
  }

  &:disabled {
    background: ${(props) =>
      props.secondary
        ? getColor('white')
        : 'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #1889e9'};
    box-shadow: none;
    border-color: ${(props) => props.secondary && '#BABEC8'};
    color: ${(props) => props.secondary && '#BABEC8'};
  }
`;

Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  withIcon: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
};

export default Button;
