import styled from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getMedias } from '@styles/utils';
import ValuesCard from '@components/Values/ValuesCard';
import Slider from '@components/Values/Slider';
import useMobileVisibility from '@root/hooks/useMobileVisibility';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 180px;
  text-align: center;
  padding: 0 1.5rem;

  @media (max-width: ${getMedias('tablet')}) {
    margin-bottom: 80px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 6.375rem;

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

const Values = ({ data }) => {
  const { isVisible: isSliderVisible } = useMobileVisibility('810');
  const { title, text1, cards } = data;

  const renderCards = () =>
    cards.map((card) => <ValuesCard card={card} key={card.title} isValues />);

  const slider = isSliderVisible ? <Cards>{renderCards()}</Cards> : <Slider data={cards} />;

  return (
    <Wrapper>
      <Header>
        <h3>{title}</h3>
        {text1 && documentToReactComponents(text1)}
      </Header>

      {slider}
    </Wrapper>
  );
};

Values.propTypes = {
  data: PropTypes.shape({
    cards: PropTypes.instanceOf(Array),
    text1: PropTypes.shape({}),
    title: PropTypes.string,
  }).isRequired,
};

export default Values;
