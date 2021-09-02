import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, getMedias } from '@styles/utils';
import ContactForm from '@components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { modalActions } from '@root/store/modalSlice';

const Backdrop = styled.div`
  background: ${getColor('navy')};
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.6;
  z-index: 3;
`;

const ModalForm = styled(ContactForm)`
  position: fixed;
  left: 50%;
  top: 5%;
  margin: 0;
  z-index: 4;
  overflow: hidden;
  transform: translateX(-50%);
  width: 70%;
  padding: 40px 80px;

  @media (max-width: 1037px) {
    width: 90%;
  }

  @media (max-width: 807px) {
    padding: 32px 16px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    max-width: 330px;

    & header {
      display: none;
    }
    & p:first-of-type {
      display: none;
    }
  }
`;

// eslint-disable-next-line jsx-a11y/no-static-element-interactions
const Modal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <>
      <Backdrop onClick={closeModal} onKeyUp={closeModal} />
      <ModalForm modal />
    </>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Modal;
