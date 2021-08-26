import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { getColor } from '@styles/utils';
import Checked from '@assets/checked.svg';
import Icon from '@components/Icon/Icon';

const Wrapper = styled.label`
  position: relative;
  visibility: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox', required: true })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 50%;
  white-space: nowrap;
  width: 1px;
`;

const Checkbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  overflow: hidden;
  background: ${getColor('white')};
  border: 1.5px solid ${getColor('steel_40')};
  border-radius: 4px;
  transition: all 150ms;
  input:hover + & {
    border-color: ${getColor('ikksBlue')};
    cursor: pointer;
  }
  input:checked + & {
    border: none;
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const StyledCheckbox = ({ defaultValue, validateCallback }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  useEffect(() => {
    if (defaultValue === false) setIsChecked(defaultValue);
  }, [defaultValue]);

  const onChange = (event) => {
    setIsChecked(event.target.checked);
    const info = validateCallback(event);
    event.target.setCustomValidity(info);
  };

  return (
    <Wrapper>
      <HiddenCheckbox
        checked={isChecked}
        onChange={onChange}
        name="conditions"
        onInvalid={onChange}
      />
      <Checkbox checked={isChecked}>
        <Icon icon={Checked} />
      </Checkbox>
    </Wrapper>
  );
};

StyledCheckbox.propTypes = {
  defaultValue: PropTypes.bool.isRequired,
  validateCallback: PropTypes.func.isRequired,
};

export default StyledCheckbox;
