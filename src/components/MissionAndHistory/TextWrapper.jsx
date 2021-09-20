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
      text-indent: 3rem;
    `}

  @media (max-width: ${getMedias('laptop')}) {
    text-indent: 0;
  }
`;

const MissionAndHistoryText = ({ text, title }) => (
  <TextWrapper>
    {title && <h2>{title}</h2>}
    {documentToReactComponents(text)}
  </TextWrapper>
);

MissionAndHistoryText.defaultProps = {
  title: '',
};

MissionAndHistoryText.propTypes = {
  text: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string,
};

export default MissionAndHistoryText;
