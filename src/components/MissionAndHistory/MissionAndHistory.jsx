import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getMedias } from '@styles/utils';
import {
  CommonWrapper,
  MissionWrapper,
  HistoryWrapper,
} from '@components/MissionAndHistory/Common';
import MissionAndHistoryImage from '@components/MissionAndHistory/MissionAndHistoryImage';
import MissionAndHistoryText from '@components/MissionAndHistory/TextWrapper';

const HistoryImage = styled(MissionAndHistoryImage)`
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
      padding-top: 50%;
      margin-top: 32px;

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
      <MissionAndHistoryImage url={missionData.image1.url} alt={missionData.title} />

      <MissionAndHistoryText title={missionData.title} text={missionData.text1} isHistory />
    </MissionWrapper>

    <HistoryWrapper>
      <MissionAndHistoryText title={historyData.title} text={historyData.text1} />

      <HistoryImage url={historyData.image1.url} alt={historyData.title} isHistory />

      <MissionAndHistoryText text={historyData.text2} isIndented />

      <HistoryImage url={historyData.image2.url} alt={historyData.title} isHistory isSecond />
    </HistoryWrapper>
  </CommonWrapper>
);

export default MissionAndHistory;

MissionAndHistory.propTypes = {
  missionData: PropTypes.instanceOf(Object).isRequired,
  historyData: PropTypes.instanceOf(Object).isRequired,
};
