import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '@components/Values/ValuesCard';

const Wrapper = styled.section`
  text-align: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
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
