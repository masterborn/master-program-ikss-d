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
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 380px;
  padding: 32px 24px 40px;

  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;

  @media (max-width: ${getMedias('tablet')}) {
    width: 70%;
    padding: 20px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    width: 100%;
    margin: 0 24px;
  }
`;

const ImageWrapper = styled.div`
  --imageWidth: clamp(80px, 10vw, 164px);

  position: relative;
  width: var(--imageWidth);
  padding-top: var(--imageWidth);
  margin-bottom: 24px;
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
    gap: 24px;

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
`;

const ExpandButton = styled.button`
  display: none;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${getMedias('tablet')}) {
    display: initial;
  }
`;

const MemberCard = ({ member }) => {
  const [cardExpanded, setCardExpanded] = useState(false);

  const { imgSrc, name, role, phone, email, linkedinUrl } = member;

  const imageVisibility = imgSrc ? <Image src={imgSrc} layout="fill" /> : <ImagePlaceholder />;

  return (
    <Wrapper>
      <ExpandButton cardExpanded={cardExpanded} onClick={() => setCardExpanded(!cardExpanded)}>
        <IconSM icon={ChevronIcon} size="26px" />
      </ExpandButton>

      <Header cardExpanded={cardExpanded}>
        <ImageWrapper>{imageVisibility}</ImageWrapper>

        <span>
          <h4>{name}</h4>
          <h5>{role}</h5>
        </span>
      </Header>

      <InfoWrapper cardExpanded={cardExpanded}>
        <p>
          <a href={`mailto:${phone}`}>
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

        {linkedinUrl && (
          <StyledButton withIcon secondary href={linkedinUrl}>
            LinkedIn
          </StyledButton>
        )}
      </InfoWrapper>
    </Wrapper>
  );
};

MemberCard.propTypes = {
  member: PropTypes.instanceOf(Object).isRequired,
};

export default MemberCard;
