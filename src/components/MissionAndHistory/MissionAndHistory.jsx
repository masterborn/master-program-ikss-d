import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getMedias } from '@styles/utils';
import CommonWrapper from '@components/MissionAndHistory/CommonWrapper';
import CommonSection from '@components/MissionAndHistory/CommonSection';

const MissionWrapper = styled(CommonWrapper)`
  flex-direction: row;
  gap: 3rem;

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    font-size: 14px;
    line-height: 28px;
    margin: 2em;

    gap: 0;

    & h2 {
      margin-top: 1rem;
    }
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
    </ArticleWrapper>
  </CommonWrapper>
);
export default MissionAndHistory;
MissionAndHistory.propTypes = {
  missionData: PropTypes.instanceOf(Object).isRequired,
  historyData: PropTypes.instanceOf(Object).isRequired,
};
