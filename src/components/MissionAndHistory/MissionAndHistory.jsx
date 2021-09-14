import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

import { getMedias, getShadow } from '@styles/utils';
import CommonWrapper from '@components/MissionAndHistory/CommonWrapper';

const MissionWrapper = styled(CommonWrapper)`
  flex-direction: row;

  & * {
    margin-left: 3rem;
  }

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    font-size: 14px;
    line-height: 28px;
    margin: 2em;

    & * {
      margin: 0;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 658px;
  margin-bottom: 2rem;

  @media (max-width: 1280px) {
    width: 483px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    width: 483px;
    margin: 2rem 0;
  }

  @media (max-width: 550px) {
    width: 327px;
  }

  @media (max-width: 360px) {
    width: 261px;
    margin: 2rem;
  }
`;

const TextWrapper2 = styled(TextWrapper)`
  & * {
    margin-bottom: 2rem;
    text-indent: 2rem;
  }
`;

const StyledImage = styled.div`
  position: relative;
  width: 483px;
  height: 352px;
  margin-left: 3rem;

  box-shadow: ${getShadow('cardShadow')};
  & * {
    border-radius: 16px;
  }

  @media (max-width: 1280px) {
    transform: scale(0.9);
    margin: 0;
  }

  @media (max-width: 550px) {
    width: 327px;
    height: 238px;
    border-radius: 8px;
  }

  @media (max-width: 360px) {
    transform: scale(0.8);
  }
`;

const StyledImage2 = styled(StyledImage)`
  width: 483px;
  height: 265px;
  margin-top: 2rem;

  @media (max-width: 550px) {
    width: 327px;
    height: 190px;
  }
`;

const MissionImage = styled(StyledImage)`
  width: 483px;
  height: 245px;

  @media (max-width: 550px) {
    width: 327px;
    height: 201px;
  }
`;

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
  }
`;

const MissionAndHistory = ({ missionData, historyData }) => (
  <CommonWrapper>
    <MissionWrapper>
      <MissionImage>
        <Image src={missionData.image1.url} alt={missionData.title} layout="fill" />
      </MissionImage>
      <TextWrapper>
        <h2>{missionData.title}</h2>
        {documentToReactComponents(missionData.text1)}
      </TextWrapper>
    </MissionWrapper>
    <ArticleWrapper>
      <StyledImage>
        <Image src={historyData.image1.url} alt={historyData.title} layout="fill" />
      </StyledImage>
      <TextWrapper>
        <h2>{historyData.title}</h2>
        {documentToReactComponents(historyData.text1)}
      </TextWrapper>
    </ArticleWrapper>
    <ArticleWrapper>
      <StyledImage2>
        <Image src={historyData.image2.url} alt={historyData.title} layout="fill" />
      </StyledImage2>
      <TextWrapper2>{documentToReactComponents(historyData.text2)}</TextWrapper2>
    </ArticleWrapper>
  </CommonWrapper>
);

export default MissionAndHistory;

MissionAndHistory.propTypes = {
  missionData: PropTypes.instanceOf(Object).isRequired,
  historyData: PropTypes.instanceOf(Object).isRequired,
};
