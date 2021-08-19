import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { getColor, getFontWeight, getMedias } from '@styles/utils';
import Icon from '@components/Icon/Icon';
import FacebookIcon from '@assets/icons/facebook-icon.svg';

// Button props legend:
// buttonLabel - set label shown on button and it takes string,
// withIcon - display button with icon and it takes boolean,
// secondary - display secondary version of button and it takes boolean.

const styledButton = React.forwardRef(
  ({ className, buttonLabel, withIcon, href, onClick, target, rel }, ref) => (
    <a
      href={href}
      type="button"
      className={className}
      ref={ref}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      {withIcon && <Icon icon={FacebookIcon} media="18px" />}
      {buttonLabel}
    </a>
  ),
);

const Button = styled(styledButton)`
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: ${(props) => (props.withIcon ? '12px 24px 12px 18px' : '14px 24px')};
  border-radius: 26px;
  border: ${(props) => (props.secondary ? `2px solid #1A2847` : 'none')};
  background: ${(props) => (props.secondary ? getColor('white') : getColor('ikksBlue'))};
  color: ${(props) => (props.secondary ? getColor('navy') : getColor('white'))};
  line-height: 20px;
  font-weight: ${getFontWeight('buttonWeight')};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  & ${Icon} {
    margin-right: 8px;
  }

  & * {
    fill: ${(props) => (props.secondary ? getColor('navy') : getColor('white'))};
  }

  &:hover {
    background: ${(props) =>
      props.secondary
        ? getColor('white')
        : 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #1889e9'};

    ${(props) =>
      !props.secondary &&
      css`
        box-shadow: 0 4px 8px rgba(24, 137, 233, 0.15);
      `};

    ${(props) =>
      props.secondary &&
      css`
        border-color: #3c4863;
        color: #3c4863;
      `};
  }

  &:active {
    background: ${(props) =>
      props.secondary
        ? getColor('white')
        : 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #1889e9'};

    ${(props) =>
      props.secondary &&
      css`
        border-color: #535e75;
        color: #535e75;
      `};
  }

  &:disabled {
    background: ${(props) =>
      props.secondary
        ? getColor('white')
        : 'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #1889e9'};

    box-shadow: none;
    ${(props) =>
      props.secondary &&
      css`
        border-color: #babec8;
        color: #babec8;
      `};
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding: ${(props) => (props.withIcon ? '9px 16px 9px 12px' : '9px 16px')};
    font-size: 14px;
    height: 36px;
    line-height: 18px;

    & ${Icon} {
      margin-right: 4px;
    }
  }
`;

styledButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  withIcon: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
};

Button.propTypes = {
  secondary: PropTypes.bool,
  buttonLabel: PropTypes.string.isRequired,
  withIcon: PropTypes.bool,
  className: PropTypes.string,
};

styledButton.defaultProps = {
  withIcon: false,
  className: '',
  href: null,
  onClick: () => {},
  target: null,
  rel: null,
};

export default Button;
