import styled, { css } from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { getColor } from '@styles/utils';
import infoLogo from '@assets/info.svg';
import alertLogo from '@assets/alert-triangle.svg';

const Container = styled.div`
  min-width: 331px;
  min-height: 48px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: left;
  & input {
    margin-right: auto;
  }
  & svg {
    position: relative;
    top: -2.3em;
    left: 12.5em;
  }
  /* Condition below is reponsible for positioning icon
     on the Mozilla browsers
  */
  @-moz-document url-prefix() {
    & svg {
      top: -2.3em;
      left: 14em;
    }
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
  border: 1.5px solid ${(props) => props.borderColor};
  padding: 0.5em;
  margin: 0.5em;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 28px;
  transition: 0.3s;
  letter-spacing: 200%;
  color: ${getColor('steel')};
  ${(props) =>
    props.icon &&
    css`
      padding-right: 2em;
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
`;

const StyledInput = ({ type, icon, name, placeholder, required, disabled }) => {
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
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={inputValue}
        required={required}
        disabled={disabled}
        icon={icon}
        isInvalid={isInvalid}
      />
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
};

StyledInput.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default StyledInput;
