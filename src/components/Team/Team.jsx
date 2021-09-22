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
  padding-inline: 220px;
  margin-top: 140px;

  & > h3 {
    margin-bottom: 32px;
  }

  & > p {
    margin-bottom: 64px;
    text-align: center;
    padding-inline: 150px;
  }

  @media (max-width: 1700px) {
    padding-inline: 130px;
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
    margin-top: 80px;

    & > h3 {
      margin-bottom: 16px;
      font-size: 24px;
      line-height: 32px;
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
  box-shadow: ${getShadow('cardShadow')};
  border-radius: 16px;
  overflow: hidden;
`;

const Team = ({ data }) => {
  const {
    title,
    text1,
    image1: { url, title: imageTitle },
  } = data;

  return (
    <Wrapper>
      <h3>{title}</h3>
      {documentToReactComponents(text1)}
      <ImageWrapper>
        <Image src={url} alt={imageTitle} layout="fill" />
      </ImageWrapper>
    </Wrapper>
  );
};

Team.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Team;
