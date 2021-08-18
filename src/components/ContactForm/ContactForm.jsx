import React from 'react';
import styled from 'styled-components';

import Input from '@components/Input/StyledInput';
import StyledCheckbox from '@components/Checkbox/StyledCheckbox';
import Icon from '@components/Icon/Icon';
import FormIcon from '@assets/form-emoji.svg';
import { getColor, getFontFamily } from '@styles/utils';

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

  & > p {
    max-width: 580px;
    margin: 25px 0 35px 0;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px 24px;
  color: ${getColor('navy')};
`;

const StyledInput = styled(Input)`
  width: 100%;
  margin-top: 5px;
`;

const StyledLabel = styled.label.attrs((props) => ({
  colspan: props.label === 'imie' || props.label === 'nazwisko' ? 1 : 2,
}))`
  grid-column: span ${(props) => props.colspan};
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

const ContactForm = () => (
  <Wrapper>
    <Header>
      <h3>Skontaktuj się z nami</h3>
      <Icon icon={FormIcon} size="40px" />
    </Header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut volutpat tincidunt dictumst
      neque neque molestie parturient.
    </p>
    <Form>
      <StyledLabel label="imie">
        Imię
        <StyledInput placeholder="Wpisz swoje imię" />
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
    </Form>
  </Wrapper>
);

export default ContactForm;
