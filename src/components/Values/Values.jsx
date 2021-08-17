import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getMedias } from '@styles/utils';
import ValuesCard from '@components/Values/ValuesCard';
import Slider from '@components/Values/Slider';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-bottom: 180px;
  text-align: center;
  padding: 0 1.5rem;
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
    margin-top: 2rem;

    @media (max-width: ${getMedias('mobile')}) {
      margin-top: 1.5rem;
    }
  }
`;

const Values = ({ data, valuesHeader, valuesText }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (event) => {
    if (event.matches) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 810px)`);

    if (media.matches) setIsVisible(true);
    else setIsVisible(false);

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, []);

  const renderCards = () => data.map((card) => <ValuesCard card={card} key={card.title} />);

  return (
    <Wrapper>
      <Header>
        <h3>{valuesHeader}</h3>
        {valuesText && <p>{valuesText}</p>}
      </Header>
      {isVisible ? <Slider data={data} /> : <Cards>{renderCards()}</Cards>}
    </Wrapper>
  );
};

Values.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  valuesHeader: PropTypes.string.isRequired,
  valuesText: PropTypes.string.isRequired,
};

export default Values;
