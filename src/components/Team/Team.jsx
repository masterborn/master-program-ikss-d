import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getMedias, getShadow } from '@styles/utils';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 230px;

  & > h3 {
    margin-bottom: 32px;
  }

  & > p {
    margin-bottom: 64px;
    text-align: center;
    padding-inline: 400px;
  }

  @media (max-width: 1700px) {
    padding-inline: 160px;

    & > p {
      padding-inline: 350px;
    }
  }

  @media (max-width: 1500px) {
    & > p {
      padding-inline: 250px;
    }
  }

  @media (max-width: 1350px) {
    & > p {
      padding-inline: 150px;
    }
  }

  @media (max-width: ${getMedias('desktop')}) {
    padding-inline: 100px;

    & > p {
      padding-inline: 100px;
    }
  }

  @media (max-width: ${getMedias('laptop')}) {
    & > p {
      padding-inline: 0;
    }
  }

  @media (max-width: ${getMedias('tablet')}) {
    padding-inline: 24px;

    & > h3 {
      margin-bottom: 16px;
    }

    & > p {
      margin-bottom: 32px;
      padding-inline: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin-bottom: 148px;
  box-shadow: ${getShadow('cardShadow')};

  @media (max-width: ${getMedias('tablet')}) {
    margin-bottom: 104px;
  }
`;

const NextImage = styled(Image)`
  border-radius: 16px;
`;

const Team = ({ data }) => (
  <Wrapper>
    <h3>{data.title}</h3>
    {documentToReactComponents(data.text1)}
    <ImageWrapper>
      <NextImage src={data.image1.url} alt={data.image1.title} layout="fill" />
    </ImageWrapper>
  </Wrapper>
);

Team.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Team;
