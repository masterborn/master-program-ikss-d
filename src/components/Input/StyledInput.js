import styled, { css } from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { getColor } from '@root/styles/utils';
import infoLogo from '@root/assets/info.svg';
import alertLogo from '@root/assets/alert-triangle.svg';

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
    left: 14em;

    @media screen and (-webkit-min-device-pixel-ratio: 0) {
      top: -2.3em;
      left: 11em;
    }
  }
`;

const LogoInfo = styled(infoLogo)`
  height: 16.67px;
  width: 16.67px;

  ${(props) =>
    props.disabled &&
    css`
      filter: grayscale(100%) contrast(10%);
    `}
`;
const AlertLogo = styled(alertLogo)`
  height: 16.67px;
  width: 16.67px;

  ${(props) =>
    props.disabled &&
    css`
      filter: grayscale(100%) contrast(10%);
    `}
`;

const Input = styled.input`
  border: 1.5px solid ${getColor('steel_30')};
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
    border-color: ${getColor('ikksBlue')};
  }

  &:invalid {
    outline: none !important;
    border-color: ${getColor('error')};
  }

  &::placeholder {
    color: ${getColor('steel_60')};
  }
`;

const StyledInput = ({ type, icon, name, placeholder, required, disabled }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  if (icon) {
    return (
      <Container>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          onInvalid={() => setIsInvalid(true)}
          onChange={() => setIsInvalid(false)}
          required={required}
          disabled={disabled}
          icon={icon}
        />
        {isInvalid ? <AlertLogo disabled={disabled} /> : <LogoInfo disabled={disabled} />}
      </Container>
    );
  }

  return (
    <Container>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onInvalid={() => setIsInvalid(true)}
        onChange={() => setIsInvalid(false)}
        required={required}
        disabled={disabled}
        icon={icon}
      />
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
