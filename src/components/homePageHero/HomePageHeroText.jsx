import styled from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Button from '@components/Button/Button';
import { scrollOnHomepage } from '@utils/formVisibility';
import { getMedias } from '@styles/utils';

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
  display: flex;
  flex-direction: column;
  max-height: 454px;
  align-items: flex-start;
  margin-left: 120px;

  & h1 {
    margin: 77px 0 32px;
  }

  & p {
    max-width: 416px;
    margin-bottom: 32px;
  }

  @media (max-width: 1520px) {
    margin-left: 56px;
    max-height: 372px;
    margin-right: 100px;

    & h1 {
      margin-top: 36px;
      font-size: 40px;
      line-height: 44px;
    }

    & p {
      margin-bottom: 23px;
    }
  }

  @media (max-width: ${getMedias('homePageHeroBrakePoint')}) {
    margin-bottom: 40px;
  }

  @media (max-width: ${getMedias('tablet')}) {
    margin: 0 20px 40px;
    & h1 {
      margin-top: 40.75px;
    }
  }
`;

HomePageHeroText.propTypes = {
  headerText: PropTypes.string.isRequired,
  smallText: PropTypes.shape({}).isRequired,
};

export default HomePageHeroText;
