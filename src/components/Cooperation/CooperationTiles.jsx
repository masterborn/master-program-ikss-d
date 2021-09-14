import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '@components/Values/ValuesCard';
import { getMedias } from '@styles/utils';

const Wrapper = styled.section`
  text-align: center;
  margin: 106px 8%;

  @media (max-width: ${getMedias('laptop')}) {
    margin: 106px 5%;
  }

  @media (max-width: ${getMedias('mobile')}) {
    & > h3 {
      font-size: 24px;
      line-height: 32px;
    }

    margin: 80px 10%;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 64px;

  @media (max-width: ${getMedias('mobile')}) {
    margin-top: 24px;
  }
`;

const CooperationTiles = ({ data }) => {
  const { title, cards } = data;

  const renderCards = () => cards.map((card) => <Card card={card} key={card.title} />);

  return (
    <Wrapper>
      <h3>{title}</h3>

      <CardsWrapper>{renderCards()}</CardsWrapper>
    </Wrapper>
  );
};

CooperationTiles.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default CooperationTiles;
