import styled, { css } from 'styled-components';
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { getColor, getFontWeight, getMedias } from '@styles/utils';
import Icon from '@components/Icon/Icon';
import FacebookIcon from '@assets/icons/facebook-icon.svg';

const styledButton = ({
  className,
  withIcon,
  href,
  onClick,
  children,
  link,
  isTypeSubmit,
  onKeyUp,
}) => {
  if (href && link) {
    return (
      <Link href={href}>
        <a className={className}>
          {withIcon && <Icon icon={FacebookIcon} media="18px" />}
          {children}
        </a>
      </Link>
    );
  }

  if (href && !link) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {withIcon && <Icon icon={FacebookIcon} media="18px" />}
        {children}
      </a>
    );
  }
  return (
    <button
      className={className}
      onClick={onClick}
      onKeyUp={onKeyUp}
      type={isTypeSubmit ? 'submit' : 'button'}

    >
      {withIcon && <Icon icon={FacebookIcon} media="18px" />}
      {children}
    </button>
  );
};

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

Button.propTypes = {
  secondary: PropTypes.bool,
  withIcon: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  link: PropTypes.bool,
  isTypSubmit: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
  withIcon: false,
  href: null,
  link: false,
  isTypeSubmit: false,
};

export default Button;
