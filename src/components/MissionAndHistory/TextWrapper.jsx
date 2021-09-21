import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getMedias } from '@styles/utils';

const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > p {
    margin-bottom: 2rem;
  }

  ${({ isIndented }) =>
    isIndented &&
    css`
      text-indent: 3.5ch;
    `}

  @media (max-width: ${getMedias('laptop')}) {
    text-indent: 0;
    & > p {
      margin: 0;
    }
  }
`;

const MissionAndHistoryText = ({ text, title, isIndented }) => (
  <TextWrapper isIndented={isIndented}>
    {title && <h2>{title}</h2>}
    {documentToReactComponents(text)}
  </TextWrapper>
);

MissionAndHistoryText.defaultProps = {
  title: '',
  isIndented: false,
};

MissionAndHistoryText.propTypes = {
  text: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string,
  isIndented: PropTypes.bool,
};

export default MissionAndHistoryText;
