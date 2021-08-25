import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import Input from '@components/ContactForm/StyledInput';
import StyledCheckbox from '@components/ContactForm/StyledCheckbox';
import Icon from '@components/Icon/Icon';
import ToolTip from '@components/ContactForm/ToolTip';
import Button from '@components/Button/Button';
import FormIcon from '@assets/form-emoji.svg';
import CloseIcon from '@assets/icons/x-icon.svg';
import { getColor, getFontWeight, getMedias } from '@styles/utils';

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
    padding: 76.5px 40px;
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

  & > p {
    position: relative;
    margin-left: 1rem;
    -webkit-touch-callout: none;
    user-select: none;

    @media (max-width: ${getMedias('mobile')}) {
      font-size: 12px;
      line-height: 15px;
    }

    & a {
      font-weight: ${getFontWeight('buttonWeight')};
      color: ${getColor('steel_70')};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const InfoToolTip = styled(ToolTip)`
  bottom: 100%;
  @media (max-width: ${getMedias('tablet')}) {
    display: none;
  }
`;

const SubmitButton = styled(Button)`
  grid-column: 2;
  margin-left: auto;
  margin-top: 28px;

  @media (max-width: ${getMedias('mobile')}) {
    grid-column: 1;
    margin: 28px auto 0 auto;
  }
`;

const StyledCloseIcon = styled(Icon)`
  position: absolute;
  top: 2em;
  right: 2em;
  cursor: pointer;
`;

const ContactForm = ({ modal, toolTipText, className }) => {
  const [toolTip, setToolTip] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    topic: '',
    content: '',
  });
  const [formValidated, setFormValidated] = useState(false);

  const CloseModalButton = (
    <button type="button">
      <StyledCloseIcon icon={CloseIcon} media="16px" />
    </button>
  );

  const handleSubmit = (event) => {
    if (!formValidated) return;

    setFormValues({
      name: '',
      surname: '',
      email: '',
      topic: '',
      content: '',
    });

    event.preventDefault();
  };

  const conditionChecks = (name, nameVal, length, inputVal, regex = false) => {
    if (name !== nameVal) return false;

    const lettersRegex = /[^a-zA-Z]/g;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex) {
      return name === 'surname' || name === 'name'
        ? lettersRegex.test(inputVal)
        : !emailRegex.test(inputVal);
    }

    return inputVal.length > length;
  };

  const validateInput = (event) => {
    const inputVal = event.target.value;
    const { name } = event.target;

    setFormValues({
      ...formValues,
      [name]: inputVal,
    });

    const isInvalid = {
      message: '',
      invalid: true,
    };

    switch (true) {
      case inputVal.length < 3:
        isInvalid.message = 'Proszę wpisać minimum 3 znaki.';
        setFormValidated(false);
        break;
      case conditionChecks(name, 'name', 30, inputVal):
        isInvalid.message = 'Limit znaków: 30';
        setFormValidated(false);
        break;
      case conditionChecks(name, 'surname', 50, inputVal):
        isInvalid.message = 'Limit znaków: 50';
        setFormValidated(false);
        break;
      case conditionChecks(name, 'email', 254, inputVal):
        isInvalid.message = 'Limit znaków: 254';
        setFormValidated(false);
        break;
      case conditionChecks(name, 'topic', 200, inputVal):
        isInvalid.message = 'Limit znaków: 200';
        setFormValidated(false);
        break;
      case conditionChecks(name, 'content', 2000, inputVal):
        isInvalid.message = 'Limit znaków: 2000';
        setFormValidated(false);
        break;
      case conditionChecks(name, 'name', null, inputVal, true):
        isInvalid.message = 'Proszę używać tylko liter';
        setFormValidated(false);
        break;
      case conditionChecks(name, 'surname', null, inputVal, true):
        isInvalid.message = 'Proszę używać tylko liter';
        setFormValidated(false);
        break;
      case conditionChecks(name, 'email', null, inputVal, true):
        isInvalid.message = 'Proszę wpisać poprawny adres email.';
        setFormValidated(false);
        break;
      default:
        isInvalid.message = '';
        isInvalid.invalid = false;
        setFormValidated(true);
    }

    return isInvalid;
  };

  return (
    <Wrapper className={className}>
      {modal && CloseModalButton}

      <Header>
        <h3>Skontaktuj się z nami</h3>
        <Icon icon={FormIcon} size="40px" media="24px" />
      </Header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut volutpat tincidunt
        dictumst neque neque molestie parturient.
      </p>

      <Form onSubmit={handleSubmit}>
        <StyledInput
          required
          name="name"
          placeholder="Wpisz swoje imię"
          labelText="Imię"
          validateCallback={validateInput}
          defaultValue={formValues.name}
        />

        <StyledInput
          required
          name="surname"
          placeholder="Wpisz swoje nazwisko"
          labelText="Nazwisko"
          validateCallback={validateInput}
          defaultValue={formValues.surname}
        />

        <StyledInput
          required
          name="email"
          placeholder="Wpisz swój adres e-mail"
          labelText="Adres email"
          validateCallback={validateInput}
          defaultValue={formValues.email}
        />

        <StyledInput
          required
          name="topic"
          placeholder="Temat wiadomości"
          labelText="Temat"
          validateCallback={validateInput}
          defaultValue={formValues.topic}
        />

        <StyledInput
          textarea
          required
          name="content"
          placeholder="O czym chcesz z nami porozmawiać?"
          labelText="Treść"
          validateCallback={validateInput}
          defaultValue={formValues.content}
        />

        <InfoWrapper>
          <StyledCheckbox />
          <p>
            Zapoznałem się z{' '}
            <Link href="/">
              <a onMouseEnter={() => setToolTip(true)} onMouseLeave={() => setToolTip(false)}>
                {toolTip && <InfoToolTip toolTipText={toolTipText} />}
                informacją o administratorze i przetwarzaniu danych.
              </a>
            </Link>
          </p>
        </InfoWrapper>

        <SubmitButton submit buttonLabel="Wyślij wiadomość" />
      </Form>
    </Wrapper>
  );
};

ContactForm.defaultProps = {
  modal: false,
  toolTipText: '',
  className: null,
};

ContactForm.propTypes = {
  modal: PropTypes.bool,
  toolTipText: PropTypes.string,
  className: PropTypes.string,
};

export default ContactForm;
