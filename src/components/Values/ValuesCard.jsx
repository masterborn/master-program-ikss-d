import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '@components/Icon/Icon';
import { getMedias } from '@styles/utils';

const Card = styled.div`
  position: relative;
  padding: 11.62rem 1.5rem 3rem 1.5rem;
  max-width: 23.75rem;
  max-height: 24.625rem;
  border-radius: 16px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);

  @media (max-width: ${getMedias('mobile')}) {
    padding: 11.62rem 1.25rem 2rem 1.25rem;
    max-width: 20.4rem;
  }

  @media (max-width: 800px) {
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
    <CardIcon icon={card.icon} size="232px" media="201px" />
    <h5>{card.title}</h5>
    <p>{card.text}</p>
  </Card>
);

ValuesCard.propTypes = {
  card: PropTypes.shape({
    icon: PropTypes.elementType,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default ValuesCard;
