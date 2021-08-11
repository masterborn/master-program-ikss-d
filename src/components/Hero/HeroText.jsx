import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@components/Button/Button';

const styledHeroText = ({ headerText, smallText }) => (
  <Wrapper>
    <h1>{headerText}</h1>
    <p>{smallText}</p>
    <Button buttonLabel="Skontaktuj się" secondary />
  </Wrapper>
);

const HeroText = styled(styledHeroText)``;

const Wrapper = styled.div`
  margin: 77px 0 0 120px;
  display: flex;
  flex-direction: column;
  max-width: 420px;

  & h1,
  p {
    margin-bottom: 32px;
  }
`;

HeroText.propTypes = {
  headerText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
};

export default HeroText;
