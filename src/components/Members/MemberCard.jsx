import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
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
