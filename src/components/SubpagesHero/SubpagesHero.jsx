import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getMedias } from '@styles/utils';
import useHeroHeight from '@hooks/useHeroHeight';

const Wrapper = styled.section`
  --pdg-top: 64px;
  --pdg-right: 225px;
  --pdg-bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: var(--pdg-top) var(--pdg-right) var(--pdg-bottom);

  & h1 {
    margin: 16px auto 32px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    --pdg-right: 100px;
  }

  @media (max-width: ${getMedias('tablet')}) {
    --pdg-right: 50px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    --pdg-top: 32px;
    --pdg-right: 24px;

    & h1 {
      margin: 8px auto 24px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 229.89px;
`;

const SubpagesHero = ({ data }) => {
  const { getRef } = useHeroHeight();

  return (
    <Wrapper ref={getRef}>
      <ImageWrapper>
        <Image
          src={data.image1.url}
          alt={data.image1.title}
          height={142}
          width={230}
          layout="responsive"
        />
      </ImageWrapper>
      <h1>{data.title}</h1>
      {documentToReactComponents(data.text1)}
    </Wrapper>
  );
};

SubpagesHero.propTypes = {
  data: PropTypes.shape({
    image1: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    text1: PropTypes.objectOf.isRequired,
  }).isRequired,
};

export default SubpagesHero;
