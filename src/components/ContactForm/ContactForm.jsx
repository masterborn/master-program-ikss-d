import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import Input from '@components/ContactForm/StyledInput';
import Checkbox from '@components/ContactForm/CheckboxField';
import IconSM from '@components/Icon/IconSM';
import ToolTip from '@components/ContactForm/ToolTip';
import FormButton from '@components/ContactForm/FormButton';
import FormIcon from '@assets/form-emoji.svg';
import CloseIcon from '@assets/icons/x-icon.svg';
import { getColor, getFontWeight, getMedias } from '@styles/utils';
import { validateInput, validateCheckbox } from '@utils/validation';

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

const StyledCloseIcon = styled(IconSM)`
  position: absolute;
  top: 2em;
  right: 2em;
  cursor: pointer;
`;

const ContactForm = ({ modal, toolTipText, className }) => {
  const [isToolTipShown, setIsToolTipShown] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [buttonStatus, setButtonStatus] = useState('primary');
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    topic: '',
    content: '',
    conditions: false,
  });

  const CloseModalButton = (
    <button type="button">
      <StyledCloseIcon icon={CloseIcon} media="16px" />
    </button>
  );

  const handleSubmit = (event) => {
    if (!isFormValid) {
      event.preventDefault();
      return;
    }

    setButtonStatus('loading');

    setTimeout(() => {
      setButtonStatus('error');
    }, 3000);

    setFormValues({
      name: '',
      surname: '',
      email: '',
      topic: '',
      content: '',
      conditions: false,
    });

    event.preventDefault();
  };

  const getDataFromInputs = (event) => {
    const inputVal = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const { name } = event.target;

    setFormValues({
      ...formValues,
      [name]: inputVal,
    });
  };

  const onValidateInput = (event) => {
    getDataFromInputs(event);

    return validateInput(event, setIsFormValid);
  };

  const onValidateCheckbox = (event) => {
    getDataFromInputs(event);

    return validateCheckbox(event, setIsFormValid);
  };

  return (
    <Wrapper className={className}>
      {modal && CloseModalButton}

      <Header>
        <h3>Skontaktuj się z nami</h3>
        <IconSM icon={FormIcon} size="40px" media="24px" />
      </Header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut volutpat tincidunt
        dictumst neque neque molestie parturient.
      </p>

      <Form onSubmit={handleSubmit}>
        <StyledInput
          name="name"
          placeholder="Wpisz swoje imię"
          labelText="Imię"
          validateCallback={onValidateInput}
          defaultValue={formValues.name}
        />

        <StyledInput
          name="surname"
          placeholder="Wpisz swoje nazwisko"
          labelText="Nazwisko"
          validateCallback={onValidateInput}
          defaultValue={formValues.surname}
        />

        <StyledInput
          name="email"
          placeholder="Wpisz swój adres e-mail"
          labelText="Adres email"
          validateCallback={onValidateInput}
          defaultValue={formValues.email}
        />

        <StyledInput
          name="topic"
          placeholder="Temat wiadomości"
          labelText="Temat"
          validateCallback={onValidateInput}
          defaultValue={formValues.topic}
        />

        <StyledInput
          textarea
          name="content"
          placeholder="O czym chcesz z nami porozmawiać?"
          labelText="Treść"
          validateCallback={onValidateInput}
          defaultValue={formValues.content}
        />

        <InfoWrapper>
          <Checkbox defaultValue={formValues.conditions} validateCallback={onValidateCheckbox} />
          <p>
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
          </p>
        </InfoWrapper>

        <FormButton buttonStatus={buttonStatus} />
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
