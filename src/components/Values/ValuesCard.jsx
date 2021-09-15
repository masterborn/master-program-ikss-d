import styled from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Icon from '@components/Icon/Icon';
import { getMedias, getShadow } from '@styles/utils';

const Card = styled.div`
  --pdgTop: ${({ isValues }) => (isValues ? '11.62rem' : '12.5rem')};
  --pdgCenter: 1.5rem;
  --pdgBottom: 3rem;

  position: relative;
  display: grid;

  max-width: 23.75rem;

  padding: var(--pdgTop) var(--pdgCenter) var(--pdgBottom) var(--pdgCenter);
  border-radius: 16px;
  box-shadow: ${getShadow('cardShadow')};

  @media (max-width: ${getMedias('mobile')}) {
    --pdgCenter: 1.25rem;
    --pdgBottom: 2rem;

    max-width: 20.4rem;
  }

  @media (max-width: 810px) {
    margin: ${({ isValues }) => isValues && '5em 0 3em 0'};
    min-height: 75%;
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
  top: ${({ isValues }) => (isValues ? '3.5rem' : '0rem')};
  left: 50%;
  transform: ${({ isValues }) => (isValues ? 'translate(-50%,-50%)' : 'translateX(-50%)')};
`;

const ValuesCard = ({ card, isValues }) => (
  <Card isValues={isValues}>
    <CardIcon
      isValues={isValues}
      icon={card.image1.url}
      alt={card.title}
      size="232px"
      media="201px"
    />
    <h5>{card.title}</h5>
    {documentToReactComponents(card.text1)}
  </Card>
);

ValuesCard.defaultProps = {
  isValues: false,
};

ValuesCard.propTypes = {
  card: PropTypes.shape({
    image1: PropTypes.instanceOf(Object),
    title: PropTypes.string,
    text1: PropTypes.instanceOf(Object),
  }).isRequired,
  isValues: PropTypes.bool,
};

export default ValuesCard;
