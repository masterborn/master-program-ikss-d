import styled from 'styled-components';

import Input from '@components/ContactForm/StyledInput';
import IconSM from '@components/Icon/IconSM';
import ToolTip from '@components/ContactForm/ToolTip';
import { getColor, getFontWeight, getMedias, getShadow } from '@styles/utils';

const Wrapper = styled.div`
  position: relative;
  max-width: 750px;
  padding: 47px 80px;
  box-shadow: ${getShadow('cardShadow')};

  margin: 2rem auto;

  border-radius: 16px;
  background: ${getColor('white')};

  & > :is(p, h3) {
    text-align: center;
  }

  & > p {
    max-width: 580px;
    margin-top: 25px;
  }

  @media (max-width: ${getMedias('tablet')}) {
    padding: 32px 16px;
    margin: 2em 24px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    max-width: 330px;
    padding: 32px 16px;

    & > p {
      max-width: 580px;
      margin: 24px auto 0;
    }
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
  margin-top: 37px;

  @media (max-width: ${getMedias('mobile')}) {
    gap: 9px 0;
    grid-template-columns: 1fr;
    margin-top: 24px;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  grid-column: span ${({ name }) => (name === 'name' || name === 'surname' ? 1 : 2)};

  & textarea {
    height: 230px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    grid-column: 1;

    & textarea {
      height: 125px;
    }
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

  & > div {
    width: max-content;
    position: relative;
    margin-left: 1rem;
    -webkit-touch-callout: none;
    user-select: none;
    letter-spacing: -0.015em;
    line-height: 32px;
    font-weight: ${getFontWeight('regular')};
    font-size: 16px;

    @media (max-width: ${getMedias('mobile')}) {
      width: initial;
    }

    & > span {
      --min-width: 100px;
      --prefer-width: 50vw;
      --max-width: 397px;

      font-size: 12px;
      width: clamp(var(--min-width), var(--prefer-width), var(--max-width));
      left: 18ch;

      @media (max-width: ${getMedias('tablet')}) {
        --prefer-width: 100%;
      }

      @media (max-width: 680px) {
        --prefer-width: 100%;
        left: 50%;
        transform: translateX(-50%);
      }

      @media (max-width: 300px) {
        --prefer-width: calc(100vw - 48px);
        left: calc(50% - 20px);
      }
    }

    & p {
      font-size: 10px;
      line-height: 18px;
    }

    & > p {
      display: inline;
      font-weight: ${getFontWeight('buttonWeight')};
      color: ${getColor('steel_70')};
      text-decoration: none;
      -webkit-touch-callout: none;
      user-select: none;
      font-size: 16px;
      cursor: pointer;

      &:hover,
      &:focus {
        color: ${getColor('ikksBlue')};
      }

      @media (max-width: ${getMedias('mobile')}) {
        font-size: 12px;
        line-height: 15px;
      }
    }

    @media (max-width: ${getMedias('mobile')}) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

const InfoToolTip = styled(ToolTip)`
  bottom: 100%;
  left: 0;
`;

const StyledCloseIcon = styled(IconSM)`
  position: absolute;
  top: 2em;
  right: 2em;
  cursor: pointer;
`;

export { Wrapper, Header, Form, StyledInput, InfoWrapper, InfoToolTip, StyledCloseIcon };
