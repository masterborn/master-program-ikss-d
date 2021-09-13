import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Input from '@components/ContactForm/StyledInput';
import Checkbox from '@components/ContactForm/CheckboxField';
import IconSM from '@components/Icon/IconSM';
import ToolTip from '@components/ContactForm/ToolTip';
import FormButton from '@components/ContactForm/FormButton';
import CloseIcon from '@assets/icons/x-icon.svg';
import { getColor, getFontWeight, getMedias } from '@styles/utils';
import { contactFormActions } from '@store/contactFormSlice';
import { modalActions } from '@store/modalSlice';

const Wrapper = styled.div`
  position: relative;
  max-width: 750px;
  padding: 76.5px 80px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  margin: 2em auto;
  border-radius: 16px;
  background: ${getColor('white')};

  & > :is(p, h3) {
    text-align: center;
  }

  & > p {
    max-width: 580px;
    margin: 25px 0 35px 0;
  }

  @media (max-width: ${getMedias('tablet')}) {
    padding: 76.5px 20px;
    margin: 2em 24px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    max-width: 330px;
    padding: 32px 16px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (max-width: ${getMedias('mobile')}) {
    max-width: 330px;

    & > h3 {
      font-size: 18px;
    }
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px 24px;
  font-size: 14px;
  color: ${getColor('navy')};

  @media (max-width: ${getMedias('mobile')}) {
    gap: 9px 0;
    grid-template-columns: 1fr;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  grid-column: span ${({ name }) => (name === 'name' || name === 'surname' ? 1 : 2)};

  & textarea {
    height: 230px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    grid-column: 1;

    & textarea {
      height: 125px;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-column: span 2;
  color: ${getColor('steel_70')};

  @media (max-width: ${getMedias('mobile')}) {
    grid-column: 1;
  }

  & > div {
    position: relative;
    margin-left: 1rem;
    -webkit-touch-callout: none;
    user-select: none;
    letter-spacing: -0.015em;
    line-height: 32px;
    font-weight: ${getFontWeight('regular')};
    font-size: 16px;

    @media (max-width: ${getMedias('mobile')}) {
      font-size: 12px;
      line-height: 15px;
    }
  }

  & a {
    font-weight: ${getFontWeight('buttonWeight')};
    color: ${getColor('steel_70')};
    text-decoration: none;
    position: relative;
    -webkit-touch-callout: none;
    user-select: none;
    font-size: 16px;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: ${getMedias('mobile')}) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

const InfoToolTip = styled(ToolTip)`
  bottom: 100%;
  @media (max-width: ${getMedias('tablet')}) {
    display: none;
  }
`;

const StyledCloseIcon = styled(IconSM)`
  position: absolute;
  top: 2em;
  right: 2em;
  cursor: pointer;
`;

const ContactForm = ({ modal, className, contactFormData }) => {
  const [isToolTipShown, setIsToolTipShown] = useState(false);
  const formValidation = useSelector(({ contactForm }) => contactForm.formValidation);
  const buttonStatus = useSelector(({ contactForm }) => contactForm.buttonStatus);
  const formValues = useSelector(({ contactForm }) => contactForm.formValues);
  const dispatch = useDispatch();

  const { text, toolTip } = contactFormData;

  let title;
  let text1;
  let toolTipText;

  if (!text) {
    title = 'Skontaktuj się z nami 👋';
    text1 = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut volutpat tincidunt
        dictumst neque neque molestie parturient.
      </p>
    );
  } else {
    title = text.title;
    text1 = documentToReactComponents(text.text1);
  }

  if (!toolTip) {
    toolTipText =
      'Gravida convallis risus adipiscing non enim. Consectetur quam facilisis tincidunt vitae. Sed id a vestibulum est. A malesuada massa ultrices proin tempor tempus vestibulum. At eros, lacus viverra lacinia eget suspendisse habitasse.';
  } else {
    toolTipText = toolTip.text1;
  }

  const closeModalButton = (
    <button type="button" onClick={() => dispatch(modalActions.closeModal())}>
      <StyledCloseIcon icon={CloseIcon} media="16px" />
    </button>
  );

  const handleSubmit = (event) => {
    let isFormValid = false;

    dispatch(contactFormActions.setIsFormSubmittedToTrue());

    if (
      formValidation.name &&
      formValidation.surname &&
      formValidation.email &&
      formValidation.topic &&
      formValidation.content &&
      formValidation.conditions
    ) {
      isFormValid = true;
      dispatch(contactFormActions.setIsFormSubmittedToFalse());
    }

    if (!isFormValid) {
      event.preventDefault();
      return;
    }

    dispatch(contactFormActions.setButtonToLoading());

    setTimeout(() => {
      dispatch(contactFormActions.setButtonToError());
    }, 3000);

    dispatch(contactFormActions.setIsFormChangedToFalse());

    dispatch(contactFormActions.clearFormFields());
    dispatch(contactFormActions.setFieldsToInvalid());

    event.preventDefault();
  };

  return (
    <Wrapper className={className} name="contactForm">
      {modal && closeModalButton}

      <Header>
        <h3>{title}</h3>
      </Header>

      {text1}

      <Form onSubmit={handleSubmit}>
        <StyledInput
          name="name"
          placeholder="Wpisz swoje imię"
          labelText="Imię"
          value={formValues.name}
        />

        <StyledInput
          name="surname"
          placeholder="Wpisz swoje nazwisko"
          labelText="Nazwisko"
          value={formValues.surname}
        />

        <StyledInput
          name="email"
          placeholder="Wpisz swój adres e-mail"
          labelText="Adres email"
          value={formValues.email}
        />

        <StyledInput
          name="topic"
          placeholder="Temat wiadomości"
          labelText="Temat"
          value={formValues.topic}
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
            <Link href="/">
              <a
                onMouseEnter={() => setIsToolTipShown(true)}
                onMouseLeave={() => setIsToolTipShown(false)}
              >
                {isToolTipShown && <InfoToolTip toolTipText={toolTipText} />}
                informacją o administratorze i przetwarzaniu danych.
              </a>
            </Link>
          </div>
        </InfoWrapper>

        <FormButton buttonStatus={buttonStatus} />
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
