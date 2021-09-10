import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/dist/client/image';

import { getColor } from '@styles/utils';
import Button from '@components/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 67px 40px;

  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  width: 384px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 164px;
  padding-top: 164px;
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
  margin-top: auto;
`;

const MemberCard = ({ member }) => {
  const { imgSrc, name, role, phone, email, linkedinUrl } = member;

  const imageVisibility = imgSrc ? <Image src={imgSrc} layout="fill" /> : <ImagePlaceholder />;

  return (
    <Wrapper>
      <ImageWrapper>{imageVisibility}</ImageWrapper>
      <h4>{name}</h4>
      <h5>{role}</h5>
      <p>{phone}</p>
      <p>{email}</p>

      {linkedinUrl && (
        <StyledButton withIcon secondary href={linkedinUrl}>
          LinkedIn
        </StyledButton>
      )}
    </Wrapper>
  );
};

MemberCard.propTypes = {
  member: PropTypes.instanceOf(Object).isRequired,
};

export default MemberCard;
