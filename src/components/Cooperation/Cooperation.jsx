import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { getMedias } from '@styles/utils';
import CooperationCard from '@components/Cooperation/CooperationCard';

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
    max-width: 635px;
    margin: 2rem auto 5.3rem;

    @media (max-width: ${getMedias('mobile')}) {
      margin: 1.5rem auto 2.5rem;
    }
  }
`;

const CooperationWrapper = styled.div`
  display: inherit;
  flex-wrap: wrap;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 1.5rem 4.5rem;

  @media (max-width: ${getMedias('tablet')}) {
    width: 100%;
  }

  @media (max-width: ${getMedias('mobile')}) {
    gap: 1rem 1.5rem;
  }
`;

const Cooperation = ({ data, cooperationHeader, cooperationText }) => (
  <Wrapper>
    <Header>
      <h3>{cooperationHeader}</h3>
      {cooperationText && <p>{cooperationText}</p>}
    </Header>
    <CooperationWrapper>
      {data.map((cooperation) => (
        <CooperationCard
          key={cooperation.altText}
          altText={cooperation.altText}
          linkUrl={cooperation.linkUrl}
          logo={cooperation.logo}
        />
      ))}
    </CooperationWrapper>
  </Wrapper>
);

Cooperation.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  cooperationHeader: PropTypes.string.isRequired,
  cooperationText: PropTypes.string.isRequired,
};

export default Cooperation;
