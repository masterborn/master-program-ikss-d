import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Input from '@components/Input/StyledInput';
import StyledCheckbox from '@components/Checkbox/StyledCheckbox';
import Icon from '@components/Icon/Icon';
import Button from '@components/Button/Button';
import FormIcon from '@assets/form-emoji.svg';
import { getColor, getFontFamily, getFontWeight, getMedias } from '@styles/utils';

const Wrapper = styled.div`
  padding: 76.5px 80px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  max-width: 750px;
  margin: 2em auto;

  & > :is(p, h3) {
    text-align: center;
  }

  @media (max-width: ${getMedias('tablet')}) {
    max-width: 330px;
    padding: 56px 16px;

    & > p {
      font-size: 14px;
    }
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: ${getMedias('tablet')}) {
    max-width: 330px;

    & > h3 {
      font-size: 18px;
    }
  }

  & > p {
    max-width: 580px;
    margin: 25px 0 35px 0;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px 24px;
  color: ${getColor('navy')};
  font-size: 14px;

  @media (max-width: ${getMedias('tablet')}) {
    grid-template-columns: 1fr;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  margin-top: 5px;
`;

const StyledLabel = styled.label.attrs((props) => ({
  colspan: props.label === 'imie' || props.label === 'nazwisko' ? 1 : 2,
}))`
  grid-column: span ${(props) => props.colspan};

  @media (max-width: ${getMedias('tablet')}) {
    grid-column: 1;
  }
`;

const StyledTextArea = styled(StyledInput).attrs((props) => ({
  borderColor: !props.isInvalid ? getColor('steel_30') : getColor('error'),
  focusBorderColor: !props.isInvalid ? getColor('ikksBlue') : getColor('error'),
}))`
  border: 1.5px solid ${(props) => props.borderColor};
  padding: 0.5em;
  border-radius: 4px;
  font-size: 14px;
  line-height: 28px;
  transition: 0.3s;
  letter-spacing: 200%;
  color: ${getColor('steel')};
  font-family: ${getFontFamily('Mulish')};
  min-height: 230px;
  resize: none;

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
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-column: span 2;
  color: ${getColor('steel_70')};

  @media (max-width: ${getMedias('tablet')}) {
    grid-column: 1;
  }

  & > p {
    position: relative;
    margin-left: 1rem;

    & a {
      font-weight: ${getFontWeight('buttonWeight')};
      color: ${getColor('steel_70')};
      text-decoration: none;

      & > span {
        position: absolute;
        bottom: 100%;
        font-size: 10px;
        line-height: 18px;
        background: ${getColor('blue_10')};
        border-radius: 4px;
        color: ${getColor('steel')};
        font-weight: ${getFontWeight('regular')};
        padding: 13px 17px;
        letter-spacing: -0.015em;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  grid-column: 2;
  margin-left: auto;
  margin-top: 28px;

  @media (max-width: ${getMedias('tablet')}) {
    grid-column: 1;
    margin: 28px auto;
  }
`;

const ContactForm = () => {
  const [toolTip, setToolTip] = useState(false);

  return (
    <Wrapper>
      <Header>
        <h3>Skontaktuj się z nami</h3>
        <Icon icon={FormIcon} size="40px" />
      </Header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut volutpat tincidunt
        dictumst neque neque molestie parturient.
      </p>
      <Form>
        <StyledLabel label="imie">
          Imię
          <StyledInput icon required placeholder="Wpisz swoje imię" />
        </StyledLabel>
        <StyledLabel label="nazwisko">
          Nazwisko
          <StyledInput placeholder="Wpisz swoje nazwisko" />
        </StyledLabel>
        <StyledLabel label="email">
          Adres email
          <StyledInput placeholder="Wpisz swój adres e-mail" />
        </StyledLabel>
        <StyledLabel label="wiadomosc">
          Temat
          <StyledInput placeholder="Temat wiadomości" />
        </StyledLabel>
        <StyledLabel label="tresc">
          Treść
          <StyledTextArea as="textarea" placeholder="O czym chcesz z nami porozmawiać?" />
        </StyledLabel>
        <InfoWrapper>
          <StyledCheckbox />
          <p>
            Zapoznałem się z{' '}
            <Link href="/">
              <a onMouseEnter={() => setToolTip(true)} onMouseLeave={() => setToolTip(false)}>
                {toolTip && (
                  <span>
                    Gravida convallis risus adipiscing non enim. Consectetur quam facilisis
                    tincidunt vitae. Sed id a vestibulum est. A malesuada massa ultrices proin
                    tempor tempus vestibulum. At eros, lacus viverra lacinia eget suspendisse
                    habitasse.
                  </span>
                )}
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

export default ContactForm;
