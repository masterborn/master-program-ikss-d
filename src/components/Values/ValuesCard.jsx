import styled from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Icon from '@components/Icon/Icon';
import { getMedias, getShadow } from '@styles/utils';

const Card = styled.div`
  position: relative;
  padding: 11.62rem 1.5rem 3rem 1.5rem;
  max-width: 23.75rem;
  max-height: 24.625rem;
  border-radius: 16px;
  box-shadow: ${getShadow('cardShadow')};

  @media (max-width: ${getMedias('mobile')}) {
    padding: 11.62rem 1.25rem 2rem 1.25rem;
    max-width: 20.4rem;
  }

  @media (max-width: 810px) {
    margin: 5em 0 3em 0;
  }

  & > :is(h5, p) {
    max-width: 20rem;
  }

  & > h5 {
    margin-bottom: 1rem;
  }
`;

const CardIcon = styled(Icon)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ValuesCard = ({ card }) => (
  <Card>
    <CardIcon icon={card.image1.url} alt={card.title} size="232px" media="201px" />
    <h5>{card.title}</h5>
    {documentToReactComponents(card.text1)}
  </Card>
);

ValuesCard.propTypes = {
  card: PropTypes.shape({
    image1: PropTypes.instanceOf(Object),
    title: PropTypes.string,
    text1: PropTypes.instanceOf(Object),
  }).isRequired,
};

export default ValuesCard;
