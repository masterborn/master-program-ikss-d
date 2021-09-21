import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getMedias } from '@styles/utils';
import CommonWrapper from '@components/MissionAndHistory/CommonWrapper';
import ImageWrapper from '@components/MissionAndHistory/ImageWrapper';
import MissionAndHistoryText from '@components/MissionAndHistory/TextWrapper';

const MissionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  margin: 0 0 9.25rem;

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    gap: 1.75rem;
  }
`;

const ArticleWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 0 56px;

  @media (max-width: ${getMedias('desktop')}) {
    gap: 0 28px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    margin-top: 80px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, max-content);

    & p + p {
      margin-top: 32px;
    }
  }
`;

const HistoryImage = styled(ImageWrapper)`
  max-height: 352px;
  top: 2.5ch;

  @media (max-width: ${getMedias('laptop')}) {
    margin-bottom: 32px;
    top: 0;
    grid-row: 1 / 2;
    padding-top: 75%;
  }

  ${({ isSecond }) =>
    isSecond &&
    css`
      margin-top: calc(32px);

      @media (max-width: ${getMedias('laptop')}) {
        padding-top: 55%;
        margin-top: 32px;
        grid-row: 3 / 4;
        top: 0;
      }
    `}
`;

const MissionAndHistory = ({ missionData, historyData }) => (
  <CommonWrapper>
    <MissionWrapper>
      <ImageWrapper url={missionData.image1.url} alt={missionData.title} />

      <MissionAndHistoryText title={missionData.title} text={missionData.text1} isHistory />
    </MissionWrapper>

    <ArticleWrapper>
      <MissionAndHistoryText title={historyData.title} text={historyData.text1} />

      <HistoryImage url={historyData.image1.url} alt={historyData.title} isHistory />

      <MissionAndHistoryText text={historyData.text2} isIndented />

      <HistoryImage url={historyData.image2.url} alt={historyData.title} isHistory isSecond />
    </ArticleWrapper>
  </CommonWrapper>
);

export default MissionAndHistory;

MissionAndHistory.propTypes = {
  missionData: PropTypes.instanceOf(Object).isRequired,
  historyData: PropTypes.instanceOf(Object).isRequired,
};
