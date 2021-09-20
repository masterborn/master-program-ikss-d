import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from 'next/image';

import { getMedias } from '@styles/utils';
import CommonWrapper from '@components/MissionAndHistory/CommonWrapper';
import ImageWrapper from '@components/MissionAndHistory/ImageWrapper';
import MissionAndHistoryText from '@components/MissionAndHistory/TextWrapper';

const MissionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  margin: 0 0 9.25rem;
`;

const ArticleWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 0 56px;

  @media (max-width: ${getMedias('desktop')}) {
    gap: 0 28px;
  }
`;

const HistoryImage = styled(ImageWrapper)`
  height: 352px;
  top: 2.5ch;

  ${({ isSecond }) =>
    isSecond &&
    css`
      height: 265px;
      margin-top: calc(32px);
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

      <MissionAndHistoryText text={historyData.text2} />

      <HistoryImage url={historyData.image2.url} alt={historyData.title} isHistory isSecond />
    </ArticleWrapper>
  </CommonWrapper>
);

export default MissionAndHistory;

MissionAndHistory.propTypes = {
  missionData: PropTypes.instanceOf(Object).isRequired,
  historyData: PropTypes.instanceOf(Object).isRequired,
};
