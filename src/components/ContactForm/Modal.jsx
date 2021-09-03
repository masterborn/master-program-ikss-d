import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { getColor, getMedias } from '@styles/utils';
import ContactForm from '@components/ContactForm/ContactForm';
import { modalActions } from '@root/store/modalSlice';

const Backdrop = styled(motion.div)`
  background: ${getColor('navy')};
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;

const ModalWrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  z-index: 4;
  top: 5%;
`;

const ModalForm = styled(ContactForm)`
  position: fixed;
  margin: 0;
  padding: 40px 80px;
  width: 70%;
  left: 50%;
  top: 5%;
  z-index: 5;
  overflow: hidden;
  transform: translateX(-50%);

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

    & > p {
      display: none;
    }
  }
`;

// eslint-disable-next-line jsx-a11y/no-static-element-interactions
const Modal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          <Backdrop
            onClick={closeModal}
            onKeyUp={closeModal}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.6,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
            }}
          />
          <ModalWrapper
            initial={{
              y: -1000,
            }}
            animate={{
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              y: -1000,
            }}
          >
            <ModalForm modal />
          </ModalWrapper>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
