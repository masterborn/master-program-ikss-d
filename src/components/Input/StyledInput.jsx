import styled, { css } from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { getColor } from '@styles/utils';
import infoLogo from '@assets/info.svg';
import alertLogo from '@assets/alert-triangle.svg';

const Container = styled.div`
  min-height: 48px;
  position: relative;

  & input {
    margin-right: auto;
  }
  & svg {
    position: absolute;
    top: 55%;
    right: 0.1em;
    transform: translate(-50%, -50%);
  }
`;

const InfoIcon = styled(infoLogo)`
  height: 16.67px;
  width: 16.67px;
  ${(props) =>
    props.disabled &&
    css`
      filter: grayscale(100%) contrast(10%);
    `}
`;

const Input = styled.input.attrs((props) => ({
  borderColor: !props.isInvalid ? getColor('steel_30') : getColor('error'),
  focusBorderColor: !props.isInvalid ? getColor('ikksBlue') : getColor('error'),
}))`
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
`;

const StyledInput = ({
  type,
  icon,
  name,
  placeholder,
  required,
  disabled,
  className,
  labelText,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState('');

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
    <Container>
      <label htmlFor={name}>
        {labelText}
        <Input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={inputValue}
          required={required}
          disabled={disabled}
          icon={icon}
          isInvalid={isInvalid}
          className={className}
        />
      </label>
      {icon && <InfoIcon as={isInvalid && alertLogo} disabled={disabled} size="" />}
    </Container>
  );
};

StyledInput.defaultProps = {
  type: 'text',
  icon: false,
  name: '',
  placeholder: '',
  required: false,
  disabled: false,
  className: null,
  labelText: null,
};

StyledInput.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelText: PropTypes.string,
};

export default StyledInput;
