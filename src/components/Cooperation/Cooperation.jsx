import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getMedias } from '@styles/utils';
import CooperationCard from '@components/Cooperation/CooperationCard';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding: 0 7.875rem 0rem;

  @media (max-width: ${getMedias('laptop')}) {
    padding: 0 1.5rem 0;
  }

  ${({ isHomePage }) =>
    isHomePage &&
    css`
      padding-bottom: 50.625rem;

      @media (max-width: ${getMedias('laptop')}) {
        padding: 0 1.5rem 45rem;
      }
    `}
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
    margin: 2rem auto 5.1rem;

    @media (max-width: ${getMedias('mobile')}) {
      margin: 1.5rem auto 2.5rem;
    }
  }
`;

const CooperationWrapper = styled.div`
  display: inherit;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 3.875rem 5.4rem;

  @media (max-width: ${getMedias('tablet')}) {
    gap: 3rem;
  }
`;

const Cooperation = ({ data, isHomePage }) => {
  const { title, text1, partners } = data;

  const renderSponsors = () =>
    partners.map((singleSponsorData) => (
      <CooperationCard
        key={singleSponsorData.altText}
        altText={singleSponsorData.altText}
        linkUrl={singleSponsorData.linkUrl}
        logo={singleSponsorData.logo}
      />
    ));

  return (
    <Wrapper isHomePage={isHomePage}>
      <Header>
        <h3>{title}</h3>
        {text1 && documentToReactComponents(text1)}
      </Header>
      <CooperationWrapper>{renderSponsors()}</CooperationWrapper>
    </Wrapper>
  );
};

Cooperation.defaultProps = {
  isHomePage: false,
};

Cooperation.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  isHomePage: PropTypes.bool,
};

export default Cooperation;
