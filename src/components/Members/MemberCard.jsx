import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { getColor, getFontWeight, getMedias, getShadow } from '@styles/utils';
import Button from '@components/Button/Button';
import PhoneIcon from '@assets/icons/tel-icon.svg';
import EmailIcon from '@assets/icons/email-icon.svg';
import ChevronIcon from '@assets/icons/chevron-icon.svg';
import IconSM from '@components/Icon/IconSM';

const Wrapper = styled(motion.div)`
  --paddingActive: 45px 20px 32px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 368px;
  padding: 32px 24px 40px;
  border-radius: 16px;
  text-align: center;

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

const ImageWrapper = styled(motion.div)`
  --imageWidth: ${({ cardExpanded }) => (cardExpanded ? '164px' : 'clamp(80px, 10vw, 164px)')};

  position: relative;
  width: var(--imageWidth);
  padding-top: var(--imageWidth);
  margin-bottom: ${({ cardExpanded }) => (cardExpanded ? '16px' : '0')};
  border-radius: 50%;
  overflow: hidden;
`;

const Header = styled(motion.header)`
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

const Span = styled(motion.span)`
  @media (max-width: ${getMedias('tablet')}) {
    max-width: 130px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    max-width: ${({ cardExpanded }) => (cardExpanded ? '250px' : '130px')};
  }
`;

const H4 = styled(motion.h4)`
  @media (max-width: ${getMedias('tablet')}) {
    font-size: 18px;
    line-height: 24px;
    font-weight: ${getFontWeight('buttonWeight')};
  }
`;

const H5 = styled(motion.h5)`
  margin-block-start: 8px;
  color: ${getColor('steel')};

  @media (max-width: ${getMedias('tablet')}) {
    font-size: 14px;
    line-height: 17.57px;
  }
`;

const InfoWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin-block-start: 24px;

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

const ExpandButton = styled(motion.button)`
  display: none;
  position: absolute;
  right: 1%;

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

  const expandButtonAnimationVariants = {
    closed: {
      rotate: 0,
      x: '-50%',
      y: [-100, -50, 0],
    },
    expanded: {
      rotate: 180,
      x: '-50%',
      y: -200,
    },
  };

  return (
    <Wrapper cardExpanded={cardExpanded} layout>
      <ExpandButton
        cardExpanded={cardExpanded}
        onClick={() => setCardExpanded(!cardExpanded)}
        variants={expandButtonAnimationVariants}
        initial="closed"
        animate={cardExpanded ? 'expanded' : 'closed'}
        transition={{ duration: 0.5 }}
      >
        <IconSM icon={ChevronIcon} size="26px" />
      </ExpandButton>

      <Header cardExpanded={cardExpanded} layout>
        <ImageWrapper cardExpanded={cardExpanded} layout>
          {imageVisibility}
        </ImageWrapper>

        <Span cardExpanded={cardExpanded} layout>
          <H4 layout>{name}</H4>
          <H5 cardExpanded={cardExpanded} layout>
            {role}
          </H5>
        </Span>
      </Header>

      <AnimatePresence>
        {cardExpanded && (
          <InfoWrapper
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
          >
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
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

MemberCard.propTypes = {
  member: PropTypes.instanceOf(Object).isRequired,
};

export default MemberCard;
