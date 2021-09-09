import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getMedias } from '@styles/utils';

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  text-align: center;

  & > p {
    max-width: 635px;
  }
`;

const Members = ({ data }) => {
  const { title, text1, members } = data;

  return (
    <Wrapper>
      <h3>{title}</h3>
      {documentToReactComponents(text1)}
    </Wrapper>
  );
};

Members.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Members;
