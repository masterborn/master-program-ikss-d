import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { getColor } from '@styles/utils';
import Checked from '@assets/checked.svg';
import IconSM from '@components/Icon/IconSM';
import { contactFormActions } from '@store/contactFormSlice';
import { validateCheckbox } from '@utils/validation';

const Wrapper = styled.label`
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

const CheckboxField = styled.div.attrs((props) => ({
  borderColor: !props.isInvalid ? getColor('steel_40') : getColor('error'),
}))`
  display: inline-block;
  width: 24px;
  height: 24px;
  overflow: hidden;
  background: ${getColor('white')};
  border: 1.5px solid ${(props) => props.borderColor};
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

const Checkbox = ({ value, name }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const checkboxRef = useRef();
  const isFormSubmitted = useSelector(({ contactForm }) => contactForm.isFormSubmitted);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFormSubmitted) {
      const info = validateCheckbox(name, value, dispatch);

      checkboxRef.current.setCustomValidity(info.message);
      setIsInvalid(info.invalid);
    }
  }, [dispatch, isFormSubmitted, name, value]);

  const onChange = (event) => {
    const inputValue = event.target.checked;

    dispatch(
      contactFormActions.updateFormFields({
        [name]: inputValue,
      }),
    );
  };

  return (
    <Wrapper>
      <HiddenCheckbox
        checked={value}
        onChange={onChange}
        name={name}
        onInvalid={onChange}
        ref={checkboxRef}
      />
      <CheckboxField checked={value} isInvalid={isInvalid}>
        <IconSM icon={Checked} />
      </CheckboxField>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox;
