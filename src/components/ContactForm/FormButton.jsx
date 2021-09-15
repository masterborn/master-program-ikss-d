import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import Button from '@components/Button/Button';
import Spinner from '@components/Spinner/Spinner';
import Success from '@assets/success.svg';
import Error from '@assets/x-error.svg';
import { getMedias, getColor } from '@styles/utils';

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
`;

const SuccessButton = styled(Button)`
  width: 100%;
  grid-column: span 2;
  justify-content: center;
  gap: 12px;
  margin: 28px auto 0 auto;
  background: ${getColor('success')};
  ${({ router }) =>
    router === '/' &&
    css`
      cursor: default;
    `}

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
`;

const ErrorButton = styled(SuccessButton)`
  grid-column: span 2;
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
`;

const FormButton = ({ buttonStatus, closeModal }) => {
  const router = useRouter();
  switch (buttonStatus) {
    case 'primary':
      return <SubmitButton isTypeSubmit>Wyślij wiadomość</SubmitButton>;
    case 'loading':
      return (
        <LoadingButton>
          <Spinner />
        </LoadingButton>
      );
    case 'success':
      return (
        <SuccessButton onClick={() => closeModal()} router={router.pathname}>
          <Success /> Wiadomość wysłana!
        </SuccessButton>
      );
    case 'error':
      return (
        <ErrorButton isTypeSubmit>
          <Error /> Spróbuj jeszcze raz.
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
