import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroText from '@components/Hero/HeroText';
import HeroImage from '@components/Hero/HeroImage';
import HeroSM from '@components/Hero/HeroSM';
import { getMedias } from '@styles/utils';

const styledHero = ({
  headerText,
  smallText,
  imageSrc,
  imageAlt,
  facebookLink,
  instagramLink,
  youTubeLink,
  linkedInLink,
}) => (
  <>
    <Wrapper>
      <HeroText headerText={headerText} smallText={smallText} />
      <HeroImage imageSrc={imageSrc} imageAlt={imageAlt} />
    </Wrapper>
    <HeroSM
      facebookLink={facebookLink}
      instagramLink={instagramLink}
      youTubeLink={youTubeLink}
      linkedInLink={linkedInLink}
    />
  </>
);

const Hero = styled(styledHero)`
  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%), #ffffff;
  width: 100vw;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div:nth-child(1) {
    order: 1;
  }

  & div:nth-child(2) {
    order: 2;
  }

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;

    & div:nth-child(1) {
      order: 2;
    }

    & div:nth-child(2) {
      order: 1;
    }
  }
`;

Hero.propTypes = {
  headerText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  imageSrc: PropTypes.shape({}).isRequired,
  imageAlt: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired,
  instagramLink: PropTypes.string.isRequired,
  youTubeLink: PropTypes.string.isRequired,
  linkedInLink: PropTypes.string.isRequired,
};

export default Hero;
