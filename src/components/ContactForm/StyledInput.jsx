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

    ${({ textarea }) =>
      textarea &&
      css`
        resize: none;
      `}

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
    top: ${({ textarea }) => (textarea ? '22px' : '50%')};
    right: 0.1em;
    transform: translate(-50%, -50%);
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
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showToolTip, setShowToolTip] = useState(false);

  const displayToolTip = showToolTip && (
    <WarningToolTip toolTipText="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
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
    <Container className={className} isInvalid={isInvalid} textarea>
      <label htmlFor={name}>
        {labelText}
        <Wrapper>
          {textarea ? (
            <textarea
              id={name}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              value={inputValue}
              required={required}
              disabled={disabled}
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
};

export default StyledInput;
