import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getMedias } from '@styles/utils';

import ValuesCard from './ValuesCard';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-bottom: 180px;
  text-align: center;

  @media (max-width: ${getMedias('laptop')}) {
    padding: 0 1.5rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 6.4rem;

  @media (max-width: ${getMedias('desktop')}) {
    gap: 4rem 1.5rem;
  }

  @media (max-width: ${getMedias('mobile')}) {
    margin-top: 4.5rem;
  }
`;

const Header = styled.header`
  display: inherit;
  flex-direction: inherit;
  align-items: center;

  @media (max-width: ${getMedias('mobile')}) {
    & > h3 {
      font-size: 24px;
      line-height: 32px;
    }
  }

  & > p {
    max-width: 560px;
    margin-top: 2em;
  }
`;

const Values = ({ data, valuesHeader, valuesText }) => {
  const renderCards = () => data.map((card) => <ValuesCard card={card} key={card.title} />);

  return (
    <Wrapper>
      <Header>
        <h3>{valuesHeader}</h3>
        {valuesText && <p>{valuesText}</p>}
      </Header>
      <Cards>{renderCards()}</Cards>
    </Wrapper>
  );
};

Values.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  valuesHeader: PropTypes.string.isRequired,
  valuesText: PropTypes.string.isRequired,
};

export default Values;
