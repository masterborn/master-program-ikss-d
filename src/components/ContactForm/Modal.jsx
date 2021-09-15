import { useDispatch, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { getMedias } from '@styles/utils';
import ContactForm from '@components/ContactForm/ContactForm';
import { modalActions } from '@store/modalSlice';

const Wrapper = styled(motion.section)`
  background: rgb(26 40 71 / 60%);
  z-index: 3;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: scroll;
`;

const Backdrop = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ModalForm = styled(ContactForm)`
  padding: 40px 80px;
  overflow: hidden;
  position: absolute;
  top: 45px;
  right: 0;
  left: 0;
  margin: auto;

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

const GlobalStyles = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

// eslint-disable-next-line jsx-a11y/no-static-element-interactions
const Modal = ({ contactFormData }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(({ modal }) => modal.isModalOpen);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Wrapper
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          exit={{
            opacity: 0,
          }}
        >
          <GlobalStyles />
          <Backdrop onClick={closeModal} onKeyUp={closeModal} />
          <motion.div
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
            <ModalForm modal contactFormData={contactFormData} />
          </motion.div>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  contactFormData: PropTypes.instanceOf(Object).isRequired,
};

export default Modal;
