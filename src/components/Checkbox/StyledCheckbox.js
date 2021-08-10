import styled from 'styled-components';
import { useState } from 'react';

import { getColor } from '@root/styles/utils';

const Label = styled.label`
  visibility: none;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  background-color: ${getColor('ikksBlue')};
  stroke: white;
  stroke-width: 3px;
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
  background: ${getColor('white')};
  border: 1.5px solid ${getColor('steel_40')};
  border-radius: 4px;
  transition: all 150ms;

  ${HiddenCheckbox}:hover + & {
    border-color: ${getColor('ikksBlue')};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const StyledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Label>
      <CheckboxContainer>
        <HiddenCheckbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <Checkbox checked={isChecked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </Checkbox>
      </CheckboxContainer>
    </Label>
  );
};

export default StyledCheckbox;
