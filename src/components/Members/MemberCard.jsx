import PropTypes from 'prop-types';
import Image from 'next/image';

import PhoneIcon from '@assets/icons/tel-icon.svg';
import EmailIcon from '@assets/icons/email-icon.svg';
import ChevronIcon from '@assets/icons/chevron-icon.svg';
import IconSM from '@components/Icon/IconSM';
import {
  Wrapper,
  InfoWrapper,
  ImageWrapper,
  Header,
  StyledButton,
  ImagePlaceholder,
  ExpandButton,
} from '@components/Members/MembersStyles';
import useMobileVisibility from '@hooks/useMobileVisibility';

const MemberCard = ({ member }) => {
  const { isVisible: cardExpanded, handleClickOpposite } = useMobileVisibility('768');

  const { imgSrc, name, role, phone, email, linkedinUrl } = member;

  const imageVisibility = imgSrc ? <Image src={imgSrc} layout="fill" /> : <ImagePlaceholder />;

  const buttonSM = linkedinUrl && (
    <StyledButton withIcon secondary href={linkedinUrl}>
      LinkedIn
    </StyledButton>
  );

  return (
    <Wrapper cardExpanded={cardExpanded}>
      <ExpandButton cardExpanded={cardExpanded} onClick={handleClickOpposite}>
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
