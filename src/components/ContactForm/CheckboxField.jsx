import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { getColor } from '@styles/utils';
import Checked from '@assets/checked.svg';
import IconSM from '@components/Icon/IconSM';
import { contactFormActions } from '@store/contactFormSlice';
import { validateCheckbox } from '@utils/validation';

const Wrapper = styled.label`
  position: relative;
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

const CheckboxField = styled.div`
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
  ${IconSM} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Checkbox = ({ value }) => {
  const dispatch = useDispatch();

  const onChange = (event) => {
    const inputValue = event.target.checked;
    const { name } = event.target;

    dispatch(
      contactFormActions.updateFormFields({
        [name]: inputValue,
      }),
    );
    const info = validateCheckbox(inputValue, dispatch);
    event.target.setCustomValidity(info);
  };

  return (
    <Wrapper>
      <HiddenCheckbox checked={value} onChange={onChange} name="conditions" onInvalid={onChange} />
      <CheckboxField checked={value}>
        <IconSM icon={Checked} />
      </CheckboxField>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
};

export default Checkbox;
