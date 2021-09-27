import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { getColor, getFontWeight, getMedias, getShadow } from '@styles/utils';
import Button from '@components/Button/Button';
import PhoneIcon from '@assets/icons/tel-icon.svg';
import EmailIcon from '@assets/icons/email-icon.svg';
import ChevronIcon from '@assets/icons/chevron-icon.svg';
import IconSM from '@components/Icon/IconSM';

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
  -webkit-touch-callout: none;
  user-select: none;
  width: var(--imageWidth);
  padding-top: var(--imageWidth);
  margin-bottom: ${({ cardExpanded }) => (cardExpanded ? '16px' : '0')};
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s ease 0s;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (max-width: ${getMedias('tablet')}) {
    flex-direction: ${({ cardExpanded }) => (cardExpanded ? 'column' : 'row')};
    gap: 0 24px;
    text-align: ${({ cardExpanded }) => (cardExpanded ? 'center' : 'left')};
  }

  @media (max-width: ${getMedias('mobile')}) {
    gap: 0 12px;
  }
`;

const Span = styled.span`
  @media (max-width: ${getMedias('tablet')}) {
    max-width: 130px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    max-width: ${({ cardExpanded }) => (cardExpanded ? '250px' : '130px')};
  }
`;

const H4 = styled.h4`
  @media (max-width: ${getMedias('tablet')}) {
    font-size: 18px;
    line-height: 24px;
    font-weight: ${getFontWeight('buttonWeight')};
  }
`;

const H5 = styled.h5`
  margin-block-start: 8px;
  color: ${getColor('steel')};

  @media (max-width: ${getMedias('tablet')}) {
    font-size: 14px;
    line-height: 17.57px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: ${({ cardExpanded }) => (cardExpanded ? '115px' : '0')};
  margin-block-start: ${({ cardExpanded }) => (cardExpanded ? '24px' : '0')};
  opacity: ${({ cardExpanded }) => (cardExpanded ? '1' : '0')};
  overflow: hidden;
  transition: height 0.5s, opacity 0.5s 0.3s;

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
  right: 1%;
  top: ${({ cardExpanded }) => (cardExpanded ? '15%' : '50%')};
  transform: ${({ cardExpanded }) =>
    cardExpanded ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%)'};
  transition: transform 0.4s ease-in-out;
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

const MemberCard = ({ member }) => {
  const [cardExpanded, setCardExpanded] = useState(false);

  const handleChange = (event) => {
    if (event.matches) setCardExpanded(false);
    else setCardExpanded(true);
  };

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 768px)`);

    if (media.matches) setCardExpanded(false);
    else setCardExpanded(true);

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, []);

  const { imgSrc, name, role, phone, email, linkedinUrl } = member;

  const imageVisibility = imgSrc ? <Image src={imgSrc} layout="fill" /> : <ImagePlaceholder />;

  const buttonSM = linkedinUrl && (
    <StyledButton withIcon secondary href={linkedinUrl}>
      LinkedIn
    </StyledButton>
  );

  return (
    <Wrapper cardExpanded={cardExpanded}>
      <ExpandButton cardExpanded={cardExpanded} onClick={() => setCardExpanded(!cardExpanded)}>
        <IconSM icon={ChevronIcon} size="26px" />
      </ExpandButton>

      <Header cardExpanded={cardExpanded}>
        <ImageWrapper cardExpanded={cardExpanded}>{imageVisibility}</ImageWrapper>

        <Span cardExpanded={cardExpanded}>
          <H4>{name}</H4>
          <H5>{role}</H5>
        </Span>
      </Header>

      <InfoWrapper cardExpanded={cardExpanded}>
        <p>
          <a href={`tel:${phone}`}>
            {phone && <IconSM icon={PhoneIcon} size="16px" />}
            {phone}
          </a>
        </p>

        <p>
          <a href={`mailto:${email}`}>
            {email && <IconSM icon={EmailIcon} size="16px" />}
            {email}
          </a>
        </p>

        {buttonSM}
      </InfoWrapper>
    </Wrapper>
  );
};

MemberCard.propTypes = {
  member: PropTypes.instanceOf(Object).isRequired,
};

export default MemberCard;
