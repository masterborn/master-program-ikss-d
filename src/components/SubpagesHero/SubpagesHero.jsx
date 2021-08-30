import styled from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getMedias } from '@styles/utils';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 64px 450px 42px;
  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);

  & h1 {
    margin: 16px auto 32px;
  }

  @media (max-width: 1600px) {
    padding: 64px 380px 42px;
  }

  @media (max-width: 1400px) {
    padding: 64px 222px 42px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    padding: 64px 100px 42px;
  }

  @media (max-width: ${getMedias('tablet')}) {
    padding: 64px 50px 42px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding: 32px 24px 0;

    & h1 {
      margin: 8px auto 24px;
    }
  }
`;

const SubpagesHero = ({ data }) => (
  <Wrapper>
    <img src={data.imageOrVideoURL} alt={data.title} />
    <h1>{data.title}</h1>
    {documentToReactComponents(data.text)}
  </Wrapper>
);

SubpagesHero.propTypes = {
  data: PropTypes.shape({
    imageOrVideoURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.objectOf.isRequired,
  }).isRequired,
};

export default SubpagesHero;
