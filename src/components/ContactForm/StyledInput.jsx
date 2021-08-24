/* eslint-disable complexity */
import styled, { css } from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { getColor, getFontFamily } from '@styles/utils';
import alertLogo from '@assets/alert-triangle.svg';
import ToolTip from '@components/ContactForm/ToolTip';

const Container = styled.div.attrs((props) => ({
  borderColor: !props.isInvalid ? getColor('steel_30') : getColor('error'),
  focusBorderColor: !props.isInvalid ? getColor('ikksBlue') : getColor('error'),
}))`
  & input,
  & textarea {
    width: 100%;
    position: relative;
    border: 1.5px solid ${(props) => props.borderColor};
    border-radius: 4px;
    padding: 0.5em;
    font-family: ${getFontFamily('Mulish')};
    font-size: 14px;
    color: ${getColor('steel')};
    line-height: 28px;
    letter-spacing: 200%;
    transition: 0.3s;

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
`;

const InfoIcon = styled(alertLogo)`
  height: 16.67px;
  width: 16.67px;

  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(100%) contrast(10%);
    `}
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 5px;

  & > div {
    position: absolute;
    top: ${({ textarea }) => (textarea ? '24px' : '50%')};
    right: -5px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 30px;
    padding: 0 5px;
    cursor: pointer;
  }

  ${({ textarea }) =>
    textarea &&
    css`
      textarea {
        resize: none;
      }
    `}

  & > span {
    bottom: 105%;
  }
`;

const WarningToolTip = styled(ToolTip)`
  right: 0;
  max-width: 20em;
  bottom: 110%;
`;

const StyledInput = ({
  type,
  name,
  placeholder,
  required,
  disabled,
  className,
  labelText,
  textarea,
  inputRef,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showToolTip, setShowToolTip] = useState(false);
  const [toolTipText, setToolTipText] = useState('');

  const displayToolTip = showToolTip && <WarningToolTip toolTipText={toolTipText} />;

  const displayIcon = isInvalid && (
    <div onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}>
      <InfoIcon disabled={disabled} />
    </div>
  );

  const onChange = (event) => {
    const inputVal = event.target.value;

    setToolTipText('');
    setIsInvalid(false);
    event.target.setCustomValidity('');

    setInputValue(event.target.value);

    const lettersRegex = /[^a-zA-Z]/g;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (true) {
      case inputVal.length < 3:
        setToolTipText('Proszę wpisać minimum 3 znaki.');
        setIsInvalid(true);
        event.target.setCustomValidity(toolTipText);
        break;
      case name === 'name' && inputVal.length > 30:
        setToolTipText('Limit znaków: 30');
        event.target.setCustomValidity(toolTipText);
        setIsInvalid(true);
        break;
      case name === 'surname' && inputVal.length > 50:
        setToolTipText('Limit znaków: 50');
        event.target.setCustomValidity(toolTipText);
        setIsInvalid(true);
        break;
      case name === 'email' && inputVal.length > 254:
        setToolTipText('Limit znaków: 254');
        event.target.setCustomValidity(toolTipText);
        setIsInvalid(true);
        break;
      case name === 'topic' && inputVal.length > 200:
        setToolTipText('Limit znaków: 200');
        event.target.setCustomValidity(toolTipText);
        setIsInvalid(true);
        break;
      case name === 'content' && inputVal.length > 2000:
        setToolTipText('Limit znaków: 2000');
        event.target.setCustomValidity(toolTipText);
        setIsInvalid(true);
        break;
      case name === 'name' && lettersRegex.test(inputVal):
        setToolTipText('Proszę używać tylko liter');
        event.target.setCustomValidity(toolTipText);
        setIsInvalid(true);
        break;
      case name === 'surname' && lettersRegex.test(inputVal):
        setToolTipText('Proszę używać tylko liter');
        event.target.setCustomValidity(toolTipText);
        setIsInvalid(true);
        break;
      case name === 'email' && !emailRegex.test(inputVal):
        setToolTipText('Proszę wpisać poprawny adres email.');
        event.target.setCustomValidity(toolTipText);
        setIsInvalid(true);
        break;
      default:
        setToolTipText('');
        setIsInvalid(false);
    }
  };

  return (
    <Container className={className} isInvalid={isInvalid}>
      <label htmlFor={name}>
        {labelText}
        <Wrapper textarea={textarea}>
          {textarea ? (
            <textarea
              id={name}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              value={inputValue}
              required={required}
              disabled={disabled}
              ref={inputRef}
            />
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={inputValue}
              required={required}
              disabled={disabled}
              ref={inputRef}
            />
          )}
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
  textarea: false,
  inputRef: null,
};

StyledInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelText: PropTypes.string,
  textarea: PropTypes.bool,
  inputRef: PropTypes.shape({ currrent: PropTypes.func }),
};

export default StyledInput;
