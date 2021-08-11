import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroText from '@components/Hero/HeroText';
import HeroImage from '@components/Hero/HeroImage';
import HeroSm from '@components/Hero/HeroSM';

const styledHero = ({ headerText, smallText, imageSrc }) => (
  <>
    <Wrapper>
      <HeroText headerText={headerText} smallText={smallText} />
      <HeroImage imageSrc={imageSrc} />
    </Wrapper>
    <HeroSm />
  </>
);

const Hero = styled(styledHero)`
  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);
  width: 100vw;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Hero.propTypes = {
  headerText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  imageSrc: PropTypes.objectOf(PropTypes.object),
};

export default Hero;
