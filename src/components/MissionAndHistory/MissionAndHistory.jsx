import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from 'next/image';

import { getMedias, getShadow } from '@styles/utils';
import CommonWrapper from '@components/MissionAndHistory/CommonWrapper';
import ImageWrapper from '@components/MissionAndHistory/ImageWrapper';
import MissionAndHistoryText from '@components/MissionAndHistory/TextWrapper';

const MissionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  margin: 0 0 11rem;

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    font-size: 14px;
    line-height: 28px;
    margin: 2em;
    gap: 0;
  }
`;

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    align-items: center;
  }
`;

const MissionAndHistory = ({ missionData, historyData }) => (
  <CommonWrapper>
    <ImageWrapper url={missionData.image1.url} alt={missionData.title} />

    <MissionAndHistoryText title={missionData.title} text={missionData.text1} />

    <MissionAndHistoryText title={historyData.title} text={historyData.text1} />

    <ImageWrapper url={historyData.image1.url} alt={historyData.title} isHistory />
    {/* <TextWrapper>
      {historyData.title && <h2>{historyData.title}</h2>}
      {documentToReactComponents(historyData.text1)}
    </TextWrapper>

    <TextWrapper>
      {historyData.title && <h2>{historyData.title}</h2>}
      {documentToReactComponents(missionData.text1)}
    </TextWrapper> */}

    {/* <StyledImage>
      <Image src={historyData.image1.url} alt={historyData.title} layout="fill" />
    </StyledImage>

    <TextWrapper>{documentToReactComponents(historyData.text2)}</TextWrapper>

    <StyledImage>
      <Image src={historyData.image2.url} alt={historyData.title} layout="fill" />
    </StyledImage>

    {/* <MissionWrapper>
      <CommonSection
        url={missionData.image1.url}
        alt={missionData.title}
        title={missionData.title}
        text={missionData.text1}
        isMission
      />
    </MissionWrapper>
    <ArticleWrapper>
      <CommonSection
        url={historyData.image1.url}
        alt={historyData.title}
        title={historyData.title}
        text={historyData.text1}
      />
    </ArticleWrapper>
    <ArticleWrapper>
      <CommonSection
        url={historyData.image2.url}
        alt={historyData.title}
        text={historyData.text2}
        isMission
        isIndented
      />
    </ArticleWrapper> */}
  </CommonWrapper>
);

export default MissionAndHistory;

MissionAndHistory.propTypes = {
  missionData: PropTypes.instanceOf(Object).isRequired,
  historyData: PropTypes.instanceOf(Object).isRequired,
};
