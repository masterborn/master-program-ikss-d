import styled, { css } from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { getColor, getFontWeight } from '@styles/utils';
import alertLogo from '@assets/alert-triangle.svg';

const Container = styled.div.attrs((props) => ({
  borderColor: !props.isInvalid ? getColor('steel_30') : getColor('error'),
  focusBorderColor: !props.isInvalid ? getColor('ikksBlue') : getColor('error'),
}))`
  min-height: 48px;
  position: relative;

  & input {
    width: 100%;
    position: relative;
    border: 1.5px solid ${(props) => props.borderColor};
    padding: 0.5em;
    border-radius: 4px;
    font-size: 14px;
    line-height: 28px;
    transition: 0.3s;
    letter-spacing: 200%;
    color: ${getColor('steel')};
    margin-top: 5px;

    &:focus {
      outline: none !important;
      border-color: ${(props) => props.focusBorderColor};
    }
    &:invalid {
      outline: none !important;
    }
    &::placeholder {
      color: ${getColor('steel_60')};
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    right: 0.1em;
    transform: translate(-50%, -50%);
  }
`;

const InfoIcon = styled(alertLogo)`
  height: 16.67px;
  width: 16.67px;
  ${(props) =>
    props.disabled &&
    css`
      filter: grayscale(100%) contrast(10%);
    `}
`;

const Wrapper = styled.div`
  position: relative;
`;

const ToolTip = styled.span`
  position: absolute;
  z-index: 100;
  bottom: 100%;
  right: 1rem;
  transform: translate(-50%, -50%);
  width: 25em;
  background: ${getColor('blue_10')};
  border-radius: 4px;
  font-size: 10px;
  color: ${getColor('steel')};
  line-height: 18px;
  font-weight: ${getFontWeight('regular')};
  letter-spacing: -0.015em;
  padding: 13px 17px;
`;

const StyledInput = ({ type, name, placeholder, required, disabled, className, labelText }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showToolTip, setShowToolTip] = useState(false);

  const displayToolTip = showToolTip && (
    <ToolTip>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</ToolTip>
  );

  const displayIcon = isInvalid && (
    <span onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}>
      <InfoIcon disabled={disabled} />
    </span>
  );

  const onChange = (event) => {
    setInputValue(event.target.value);
    if (required) {
      if (event.target.value.length === 0) {
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
      }
    }
  };

  return (
    <Container className={className} isInvalid={isInvalid}>
      <label htmlFor={name}>
        {labelText}
        <Wrapper>
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={inputValue}
            required={required}
            disabled={disabled}
          />
          {displayToolTip}
          {displayIcon}
        </Wrapper>
      </label>
    </Container>
  );
};

StyledInput.defaultProps = {
  type: 'text',
  name: '',
  placeholder: '',
  required: false,
  disabled: false,
  className: null,
  labelText: null,
};

StyledInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelText: PropTypes.string,
};

export default StyledInput;
