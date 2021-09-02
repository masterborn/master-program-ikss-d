import styled from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Button from '@components/Button/Button';
import { getMedias } from '@styles/utils';
import { scrollOnHomepage } from '@utils/formVisibility';

const styledHeroText = ({ headerText, smallText }) => (
  <Wrapper>
    <h1>{headerText}</h1>
    {documentToReactComponents(smallText)}
    <Button secondary onClick={scrollOnHomepage}>
      Skontaktuj się
    </Button>
  </Wrapper>
);

const HomePageHeroText = styled(styledHeroText)``;

const Wrapper = styled.div`
  margin: 77px 7vw 0 10vw;
  display: flex;
  flex-direction: column;
  max-width: 420px;

  & h1,
  p {
    margin-bottom: 32px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    margin: 40.75px 0 40px 24px;
  }
`;

HomePageHeroText.propTypes = {
  headerText: PropTypes.string.isRequired,
  smallText: PropTypes.shape({}).isRequired,
};

export default HomePageHeroText;
