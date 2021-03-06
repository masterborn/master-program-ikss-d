import styled from 'styled-components';

import { getColor, getFontWeight, getMedias, getShadow, getAnimation } from '@styles/utils';
import Button from '@components/Button/Button';

const Wrapper = styled.div`
  --paddingActive: 47px 20px 32px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 368px;
  padding: 32px 24px 40px;
  border-radius: 16px;
  text-align: center;
  background: ${getColor('white')};

  box-shadow: ${getShadow('cardShadow')};

  @media (max-width: ${getMedias('tablet')}) {
    width: 65%;
    padding: ${({ cardExpanded }) => (cardExpanded ? 'var(--paddingActive)' : '20px')};
  }

  @media (max-width: ${getMedias('mobile')}) {
    width: 100%;
    margin: 0 24px;
    padding: ${({ cardExpanded }) => (cardExpanded ? 'var(--paddingActive)' : '15px')};
  }
`;

const ImageWrapper = styled.div`
  --imageWidth: ${({ cardExpanded }) => (cardExpanded ? '164px' : 'clamp(80px, 10vw, 164px)')};

  position: relative;
  width: var(--imageWidth);
  padding-top: var(--imageWidth);
  margin-bottom: ${({ cardExpanded }) => (cardExpanded ? '16px' : '0')};
  border-radius: 50%;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  & > span > h5 {
    margin: ${({ cardExpanded }) => (cardExpanded ? '8px 0 24px' : '8px 0 0px')};
    color: ${getColor('steel')};
  }

  @media (max-width: ${getMedias('tablet')}) {
    flex-direction: ${({ cardExpanded }) => (cardExpanded ? 'column' : 'row')};
    gap: 0 24px;
    text-align: ${({ cardExpanded }) => (cardExpanded ? 'center' : 'left')};

    & > span {
      max-width: 130px;
    }

    & > span > h4 {
      font-size: 18px;
      line-height: 24px;
      font-weight: ${getFontWeight('buttonWeight')};
    }

    & > span > h5 {
      font-size: 14px;
      line-height: 17.57px;
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    gap: 0 12px;

    & > span {
      max-width: ${({ cardExpanded }) => (cardExpanded ? '250px' : '130px')};
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  animation: ${getAnimation('cardFadeIn')} 0.5s;

  @media (max-width: ${getMedias('tablet')}) {
    display: ${({ cardExpanded }) => (cardExpanded ? 'flex' : 'none')};
  }

  & > p > a {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: ${getFontWeight('buttonWeight')};
    line-height: 17.57px;
    color: ${getColor('ikksBlue')};

    &:first-child {
      margin-bottom: 12px;
    }

    & * {
      fill: ${getColor('ikksBlue')};
    }
  }
`;

const StyledButton = styled(Button)`
  height: auto;
  margin-top: 24px;
  padding: 9px 16px 9px 13.5px;
  font-size: 14px;
  line-height: 17.57px;

  @media (max-width: ${getMedias('tablet')}) {
    margin-top: 16px;
  }

  & svg {
    height: 20px;
    width: 20px;
  }
`;

const ExpandButton = styled.button`
  display: none;
  position: absolute;
  right: calc(1% - 5px);
  cursor: pointer;
  top: ${({ cardExpanded }) => (cardExpanded ? '15%' : '50%')};
  transform: ${({ cardExpanded }) =>
    cardExpanded ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%)'};
  padding: 5px;
  transition: transform 0.5s;

  @media (max-width: ${getMedias('tablet')}) {
    display: initial;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: ${getColor('blue_20')};
`;

export { Wrapper, InfoWrapper, ImageWrapper, Header, StyledButton, ImagePlaceholder, ExpandButton };
