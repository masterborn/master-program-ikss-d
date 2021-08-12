import styled from 'styled-components';
import { useState } from 'react';

import { getColor } from '@styles/utils';
import Checked from '@assets/checked.svg';
import Icon from '@components/Icon/Icon';

const Wrapper = styled.label`
  visibility: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
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

  ${HiddenCheckbox}:hover + & {
    border-color: ${getColor('ikksBlue')};
  }

  ${HiddenCheckbox}:checked + & {
    border: none;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const StyledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Wrapper>
      <HiddenCheckbox
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      />
      <Checkbox checked={isChecked}>
        <Icon icon={Checked} />
      </Checkbox>
    </Wrapper>
  );
};

export default StyledCheckbox;
