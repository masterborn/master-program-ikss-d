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

const NormalButton = styled(Button)`
  grid-column: 2;
  margin-left: auto;
  margin-top: 28px;

  @media (max-width: ${getMedias('mobile')}) {
    grid-column: 1;
    margin: 28px auto 0 auto;
  }
`;

const SpinnerButton = styled(NormalButton)`
  padding: 16px 70px;

  & > svg {
    animation: ${rotateSpinner} 5s linear infinite;
  }
`;

const SuccessButton = styled(NormalButton)`
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

const SubmitButton = ({ buttonName }) => {
  switch (buttonName) {
    case 'primary':
      return <NormalButton isTypeSubmit>Wyślij wiadomość</NormalButton>;
    case 'loading':
      return (
        <SpinnerButton>
          <Loader />
        </SpinnerButton>
      );
    case 'success':
      return (
        <SuccessButton>
          <Success />
        </SuccessButton>
      );
    case 'error':
      return (
        <ErrorButton>
          <Error />
        </ErrorButton>
      );
    default:
      return <NormalButton isTypeSubmit>Wyślij wiadomość</NormalButton>;
  }
};

SubmitButton.defaultProps = {
  buttonName: 'primary',
};

SubmitButton.propTypes = {
  buttonName: PropTypes.string,
};

export default SubmitButton;
