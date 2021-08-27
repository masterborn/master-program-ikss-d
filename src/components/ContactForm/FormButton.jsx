import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Button from '@components/Button/Button';
import Loader from '@assets/loader.svg';
import Success from '@assets/success.svg';
import Error from '@assets/x-error.svg';
import { getMedias, getColor } from '@styles/utils';

const rotateSpinner = keyframes`
    from {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
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

const LoadingButton = styled(SubmitButton)`
  padding: 16px 70px;

  & > svg {
    animation: ${rotateSpinner} 5s linear infinite;

    @media (max-width: ${getMedias('tablet')}) {
      transform: scale(0.83);
    }
  }
`;

const SuccessButton = styled(SubmitButton)`
  width: 100%;
  grid-column: span 2;
  justify-content: center;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;
  background: ${getColor('success')};

  & * {
    fill: ${getColor('success')};
  }

  &:hover {
    background: ${getColor('success')};
  }

  @media (max-width: ${getMedias('tablet')}) {
    gap: 6px;

    & > svg {
      transform: scale(0.83);
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    grid-column: 1;
    margin: 28px auto 0 auto;
  }

  &::after {
    content: ' Wiadomość wysłana! Odpowiemy wkrótce.';

    @media (max-width: ${getMedias('mobile')}) {
      content: 'Wiadomość wysłana!';
    }
  }
`;

const ErrorButton = styled(SuccessButton)`
  background: ${getColor('error')};

  & * {
    fill: none;
  }

  & path {
    fill: white;
  }

  &:hover {
    background: ${getColor('error')};
  }

  &::after {
    content: 'Coś poszło nie tak. Spróbuj jeszcze raz.';

    @media (max-width: ${getMedias('mobile')}) {
      content: 'Spróbuj jeszcze raz.';
    }
  }
`;

const FormButton = ({ buttonStatus, closeModal }) => {
  switch (buttonStatus) {
    case 'primary':
      return <SubmitButton isTypeSubmit>Wyślij wiadomość</SubmitButton>;
    case 'loading':
      return (
        <LoadingButton>
          <Loader />
        </LoadingButton>
      );
    case 'success':
      return (
        <SuccessButton onClick={() => closeModal()}>
          <Success />
        </SuccessButton>
      );
    case 'error':
      return (
        <ErrorButton isTypeSubmit>
          <Error />
        </ErrorButton>
      );
    default:
      return <SubmitButton isTypeSubmit>Wyślij wiadomość</SubmitButton>;
  }
};

FormButton.defaultProps = {
  buttonStatus: 'primary',
  closeModal: () => {},
};

FormButton.propTypes = {
  buttonStatus: PropTypes.string,
  closeModal: PropTypes.func,
};

export default FormButton;
