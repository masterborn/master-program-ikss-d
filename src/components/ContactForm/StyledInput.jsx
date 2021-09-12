import styled, { css } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getColor, getFontFamily } from '@styles/utils';
import alertLogo from '@assets/alert-triangle.svg';
import ToolTip from '@components/ContactForm/ToolTip';
import { contactFormActions } from '@store/contactFormSlice';
import { validateInput } from '@utils/validation';

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
    padding: 0.5em 3em 0.5em 0.5em;
    font-family: ${getFontFamily('Mulish')};
    font-size: 14px;
    color: ${getColor('steel')};
    line-height: 28px;
    letter-spacing: -0.015em;
    transition: 0.3s;

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

  & > div {
    position: absolute;
    top: ${({ textarea }) => (textarea ? '24px' : '50%')};
    right: -5px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 30px;
    padding: 0 5px;
    cursor: pointer;
  }

  ${({ textarea }) =>
    textarea &&
    css`
      textarea {
        resize: none;
      }
    `}

  & > span {
    bottom: 105%;
  }
`;

const WarningToolTip = styled(ToolTip)`
  right: 0;
  max-width: 20em;
  bottom: 110%;
`;

const StyledInput = ({ name, placeholder, disabled, className, labelText, textarea, value }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isToolTipShown, setIsToolTipShown] = useState(false);
  const [toolTipText, setToolTipText] = useState('');
  const inputRef = useRef();
  const isFormChanged = useSelector(({ contactForm }) => contactForm.isFormChanged);
  const isFormSubmitted = useSelector(({ contactForm }) => contactForm.isFormSubmitted);
  const dispatch = useDispatch();

  const displayToolTip = isToolTipShown && <WarningToolTip toolTipText={toolTipText} />;

  const displayIcon = isInvalid && (
    <div onMouseEnter={() => setIsToolTipShown(true)} onMouseLeave={() => setIsToolTipShown(false)}>
      <InfoIcon disabled={disabled} />
    </div>
  );

  useEffect(() => {
    if ((isFormChanged && value !== '') || isFormSubmitted) {
      const info = validateInput(name, value, dispatch);

      setToolTipText(info.message);
      setIsInvalid(info.invalid);
      inputRef.current.setCustomValidity(info.message);

      if (isToolTipShown && info.message === '') setIsToolTipShown(false);
    }
  }, [dispatch, isFormChanged, isFormSubmitted, isToolTipShown, name, value]);

  const onChange = (event) => {
    const inputValue = event.target.value;

    dispatch(
      contactFormActions.updateFormFields({
        [name]: inputValue,
      }),
    );

    dispatch(contactFormActions.setIsFormChangedToTrue());
  };

  return (
    <Container className={className} isInvalid={isInvalid}>
      <label htmlFor={name}>
        {labelText}
        <Wrapper textarea={textarea}>
          {textarea ? (
            <textarea
              id={name}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              onInvalid={onChange}
              value={value}
              disabled={disabled}
              ref={inputRef}
            />
          ) : (
            <input
              id={name}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              onInvalid={onChange}
              value={value}
              disabled={disabled}
              ref={inputRef}
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
  name: '',
  placeholder: '',
  disabled: false,
  className: null,
  labelText: null,
  textarea: false,
};

StyledInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelText: PropTypes.string,
  textarea: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default StyledInput;
