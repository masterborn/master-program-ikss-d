import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor, getFontFamily } from '@styles/utils';

const Container = styled.div.attrs((props) => ({
  borderColor: !props.isInvalid ? getColor('steel_30') : getColor('error'),
  focusBorderColor: !props.isInvalid ? getColor('ikksBlue') : getColor('error'),
}))`
  & textarea {
    width: 100%;
    border: 1.5px solid ${(props) => props.borderColor};
    padding: 0.5em;
    border-radius: 4px;
    font-size: 14px;
    line-height: 28px;
    transition: 0.3s;
    letter-spacing: 200%;
    color: ${getColor('steel')};
    font-family: ${getFontFamily('Mulish')};
    min-height: 230px;
    resize: none;
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
    top: 55%;
    right: 0.1em;
    transform: translate(-50%, -50%);
  }
`;

const StyledTextArea = ({ name, placeholder, required, disabled, className, labelText }) => {
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
    <Container className={className} isInvalid={isInvalid}>
      <label htmlFor={name}>
        {labelText}
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={inputValue}
          required={required}
          disabled={disabled}
        />
      </label>
    </Container>
  );
};

StyledTextArea.defaultProps = {
  name: '',
  placeholder: '',
  required: false,
  disabled: false,
  className: null,
  labelText: null,
};

StyledTextArea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelText: PropTypes.string,
};

export default StyledTextArea;
