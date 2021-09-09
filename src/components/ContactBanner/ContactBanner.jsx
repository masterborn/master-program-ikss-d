import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '@components/Button/Button';
import { getColor, getMedias } from '@styles/utils';
import { openContactForm } from '@utils/formVisibility';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${getColor('blue_10')};
  border-radius: 16px;
  min-height: 352px;

  & h3 {
    text-align: center;
    margin: 0 auto 2rem;
  }

  & button {
    margin: 0 auto;
  }

  @media (max-width: ${getMedias('desktop')}) {
    width: auto;
    min-height: 220px;
    padding: 56px 31px;
    margin: 0 2rem 2rem;

    & h3 {
      font-size: 18px;
      line-height: 24px;
    }

    & button {
      width: 175px;
      height: 36px;
      padding: 9px 16px;

      & * {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;

const ContactBanner = ({ contactBanner }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h3>{contactBanner.title}</h3>
      <Button onClick={() => openContactForm(dispatch)}>
        <span>{contactBanner.linkCaption}</span>
      </Button>
    </Wrapper>
  );
};

export default ContactBanner;

ContactBanner.propTypes = {
  contactBanner: PropTypes.instanceOf(Object).isRequired,
};
