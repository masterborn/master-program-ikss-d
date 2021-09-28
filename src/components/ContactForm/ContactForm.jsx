import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Checkbox from '@components/ContactForm/CheckboxField';
import FormButton from '@components/ContactForm/FormButton';
import CloseIcon from '@assets/icons/x-icon.svg';
import { contactFormActions } from '@store/contactFormSlice';
import { modalActions } from '@store/modalSlice';
import useFormCarry from '@hooks/useFormCarry';
import {
  Wrapper,
  Header,
  Form,
  StyledInput,
  InfoWrapper,
  InfoToolTip,
  StyledCloseIcon,
} from '@components/ContactForm/ContactFormStyles';

const ContactForm = ({ modal, className, contactFormData }) => {
  const [isToolTipShown, setIsToolTipShown] = useState(false);
  const formValidation = useSelector(({ contactForm }) => contactForm.formValidation);
  const buttonStatus = useSelector(({ contactForm }) => contactForm.buttonStatus);
  const formValues = useSelector(({ contactForm }) => contactForm.formValues);
  const dispatch = useDispatch();
  const { submitForm } = useFormCarry();

  const {
    text: { title, text1 },
    toolTip: { text1: toolTipText },
  } = contactFormData;

  const closeModalButton = (
    <button type="button" onClick={() => dispatch(modalActions.closeModal())}>
      <StyledCloseIcon icon={CloseIcon} media="16px" />
    </button>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(contactFormActions.setIsFormSubmittedToTrue());

    if (
      formValidation.name &&
      formValidation.surname &&
      formValidation.email &&
      formValidation.topic &&
      formValidation.content &&
      formValidation.conditions
    ) {
      dispatch(contactFormActions.setIsFormSubmittedToFalse());
      submitForm();
    }
  };

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Wrapper className={className} name="contactForm">
      {modal && closeModalButton}

      <Header>
        <h3>{title}</h3>
      </Header>

      {documentToReactComponents(text1)}

      <Form onSubmit={handleSubmit}>
        <StyledInput
          name="name"
          placeholder="Wpisz swoje imię"
          labelText="Imię"
          value={formValues.name}
          type="text"
        />

        <StyledInput
          name="surname"
          placeholder="Wpisz swoje nazwisko"
          labelText="Nazwisko"
          value={formValues.surname}
          type="text"
        />

        <StyledInput
          name="email"
          placeholder="Wpisz swój adres e-mail"
          labelText="Adres email"
          value={formValues.email}
          type="email"
        />

        <StyledInput
          name="topic"
          placeholder="Temat wiadomości"
          labelText="Temat"
          value={formValues.topic}
          type="text"
        />

        <StyledInput
          textarea
          name="content"
          placeholder="O czym chcesz z nami porozmawiać?"
          labelText="Treść"
          value={formValues.content}
        />

        <InfoWrapper>
          <Checkbox value={formValues.conditions} name="conditions" />
          <div>
            Zapoznałem się z{' '}
            <p
              onMouseEnter={() => setIsToolTipShown(true)}
              onMouseLeave={() => setIsToolTipShown(false)}
              onFocus={() => setIsToolTipShown(true)}
            >
              informacją o administratorze i przetwarzaniu danych.
            </p>
            {isToolTipShown && <InfoToolTip toolTipText={toolTipText} />}
          </div>
        </InfoWrapper>

        {/* eslint-disable-next-line no-underscore-dangle */}
        <StyledInput name="_gotcha" type="hidden" value={formValues._gotcha} />

        <FormButton buttonStatus={buttonStatus} closeModal={closeModal} />
      </Form>
    </Wrapper>
  );
};

ContactForm.defaultProps = {
  modal: false,
  className: null,
};

ContactForm.propTypes = {
  modal: PropTypes.bool,
  contactFormData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string,
};

export default ContactForm;
