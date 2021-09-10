import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';

import { getColor, getFontWeight, getMedias } from '@styles/utils';
import Button from '@components/Button/Button';
import PhoneIcon from '@assets/icons/tel-icon.svg';
import EmailIcon from '@assets/icons/email-icon.svg';
import ChevronIcon from '@assets/icons/chevron-icon.svg';
import IconSM from '@components/Icon/IconSM';

const Wrapper = styled.div`
  --imageWidth: ${({ cardExpanded }) => (cardExpanded ? '164px' : 'clamp(80px, 10vw, 164px)')};

  position: relative;
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 32px 24px 40px;
  border-radius: 16px;
  text-align: center;

  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);

  @media (max-width: ${getMedias('tablet')}) {
    width: 65%;
    padding: 20px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    width: 100%;
    margin: 0 24px;
    padding: 15px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: var(--imageWidth);
  padding-top: var(--imageWidth);
  margin-bottom: ${({ cardExpanded }) => (cardExpanded ? '16px' : '24px')};
  border-radius: 50%;
  overflow: hidden;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: ${getColor('blue_20')};
`;

const StyledButton = styled(Button)`
  height: auto;
  margin-top: 24px;
  padding: 9px 16px 9px 13.5px;
  font-size: 14px;
  line-height: 17.57px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: ${getMedias('tablet')}) {
    display: none;

    ${({ cardExpanded }) =>
      cardExpanded &&
      css`
        display: flex;
      `}
  }

  & > p > a {
    display: flex;
    align-items: center;
    gap: 12px;
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

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  & > span > h5 {
    margin: 8px 0 24px;
    color: ${getColor('steel')};
  }

  @media (max-width: ${getMedias('tablet')}) {
    flex-direction: initial;
    gap: 0 24px;

    ${({ cardExpanded }) =>
      cardExpanded &&
      css`
        flex-direction: column;
      `}

    & > span {
      max-width: 130px;
    }

    & > span > h4 {
      font-size: 18px;
      line-height: 24px;
    }

    & > span > h5 {
      font-size: 14px;
      line-height: 17.57px;
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    gap: 0 12px;
  }
`;

const ExpandButton = styled.button`
  display: none;
  position: absolute;
  right: 1%;
  top: ${({ cardExpanded }) => (cardExpanded ? '15%' : '50%')};
  transform: ${({ cardExpanded }) =>
    cardExpanded ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%)'};

  @media (max-width: ${getMedias('tablet')}) {
    display: initial;
  }
`;

const MemberCard = ({ member }) => {
  const [cardExpanded, setCardExpanded] = useState(false);

  const { imgSrc, name, role, phone, email, linkedinUrl } = member;

  const imageVisibility = imgSrc ? <Image src={imgSrc} layout="fill" /> : <ImagePlaceholder />;

  const buttonSM = linkedinUrl && (
    <StyledButton withIcon secondary href={linkedinUrl}>
      LinkedIn
    </StyledButton>
  );

  return (
    <Wrapper>
      <ExpandButton cardExpanded={cardExpanded} onClick={() => setCardExpanded(!cardExpanded)}>
        <IconSM icon={ChevronIcon} size="26px" />
      </ExpandButton>

      <Header cardExpanded={cardExpanded}>
        <ImageWrapper cardExpanded={cardExpanded}>{imageVisibility}</ImageWrapper>

        <span>
          <h4>{name}</h4>
          <h5>{role}</h5>
        </span>
      </Header>

      <InfoWrapper cardExpanded={cardExpanded}>
        <p>
          <a href={`tel:${phone}`}>
            <IconSM icon={PhoneIcon} size="16px" />
            {phone}
          </a>
        </p>

        <p>
          <a href={`mailto:${email}`}>
            <IconSM icon={EmailIcon} size="16px" />
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
