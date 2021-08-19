import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import Input from '@components/ContactForm/StyledInput';
import StyledCheckbox from '@components/ContactForm/StyledCheckbox';
import StyledTextArea from '@components/ContactForm/StyledTextArea';
import Icon from '@components/Icon/Icon';
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

  @media (max-width: ${getMedias('mobile')}) {
    grid-column: 1;
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

    @media (max-width: ${getMedias('mobile')}) {
      font-size: 12px;
    }

    & a {
      font-weight: ${getFontWeight('buttonWeight')};
      color: ${getColor('steel_70')};
      text-decoration: none;

      & > span {
        position: absolute;
        bottom: 100%;
        padding: 13px 17px;
        background: ${getColor('blue_10')};
        border-radius: 4px;
        font-size: 10px;
        color: ${getColor('steel')};
        line-height: 18px;
        font-weight: ${getFontWeight('regular')};
        letter-spacing: -0.015em;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const TextArea = styled(StyledTextArea)`
  grid-column: span 2;

  @media (max-width: ${getMedias('mobile')}) {
    grid-column: 1;
  }
`;

const StyledButton = styled(Button)`
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

const ContactForm = ({ modal, toolTipText }) => {
  const [toolTip, setToolTip] = useState(false);

  const Modal = (
    <button type="button">
      <StyledCloseIcon icon={CloseIcon} media="16px" />
    </button>
  );

  return (
    <Wrapper>
      {modal && Modal}

      <Header>
        <h3>Skontaktuj się z nami</h3>
        <Icon icon={FormIcon} size="40px" media="24px" />
      </Header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut volutpat tincidunt
        dictumst neque neque molestie parturient.
      </p>

      <Form>
        <StyledInput required name="name" placeholder="Wpisz swoje imię" labelText="Imię" />
        <StyledInput
          required
          name="surname"
          placeholder="Wpisz swoje nazwisko"
          labelText="Nazwisko"
        />
        <StyledInput
          required
          name="email"
          placeholder="Wpisz swój adres e-mail"
          labelText="Adres email"
        />
        <StyledInput required name="topic" placeholder="Temat wiadomości" labelText="Temat" />

        <TextArea
          required
          name="content"
          placeholder="O czym chcesz z nami porozmawiać?"
          labelText="Treść"
        />

        <InfoWrapper>
          <StyledCheckbox />
          <p>
            Zapoznałem się z{' '}
            <Link href="/">
              <a onMouseEnter={() => setToolTip(true)} onMouseLeave={() => setToolTip(false)}>
                {toolTip && <span>{toolTipText}</span>}
                informacją o administratorze i przetwarzaniu danych.
              </a>
            </Link>
          </p>
        </InfoWrapper>
        <StyledButton buttonLabel="Wyślij wiadomość" />
      </Form>
    </Wrapper>
  );
};

ContactForm.defaultProps = {
  modal: false,
  toolTipText: '',
};

ContactForm.propTypes = {
  modal: PropTypes.bool,
  toolTipText: PropTypes.string,
};

export default ContactForm;
