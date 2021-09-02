import styled, { css } from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import CardVideo from '@components/Projects/CardVideo';
import CardImage from '@components/Projects/CardImage';
import Button from '@components/Button/Button';
import { getColor, getMedias } from '@styles/utils';

const Wrapper = styled.div`
  grid-row: span ${(props) => props.rowHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.isOnHomePage &&
    css`
      margin-bottom: 56px;
    `};
  overflow: hidden;
  background: ${getColor('white')};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  height: fit-content;
  ${(props) =>
    !props.isOnHomePage &&
    css`
      max-width: 588px;
    `};
  & img {
    width: auto;
    background: linear-gradient(360deg, #66757f -0.09%, rgba(102, 117, 127, 0) 100%);
    opacity: 0.6;
  }

  @media (max-width: ${getMedias('desktop')}) {
    margin: 0 1em 2em 1em;
    & img {
      max-width: 100%;
      height: auto;
    }
    & article {
      width: auto;
      height: auto;
      padding: ${(props) => (props.isOnHomePage ? ' 0 2em' : '0 0.3em')};
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    margin: 0 0.4em 2em 0.4em;
  }
`;
const Description = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${(props) => (props.isOnHomePage ? '792px' : '90%')};
  padding: ${(props) => (props.isOnHomePage ? '0 96px 4.1em' : '0 0 40px')};

  @media (max-width: ${getMedias('desktop')}) {
    & a {
      margin: 0 auto 2.25em auto;
    }
  }
`;
const Header = styled.header`
  display: flex;
  & h4 {
    margin: ${(props) => (props.isOnHomePage ? '4rem 1.5rem 2rem 0' : '2rem 1.5rem 1.75rem 0')};
  }
  & h5 {
    color: ${getColor('steel')};
    margin: ${(props) => (props.isOnHomePage ? '4.375rem 0 2.125rem' : '2.4rem 1.5rem 1.5rem 0')};
  }

  @media (max-width: ${getMedias('tablet')}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    & h4 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 0.4em;
    }
    & h5 {
      font-size: 14px;
      line-height: 18px;
      margin: 0;
    }
  }
`;
const Text = styled.section`
  color: ${getColor('steel')};
  margin-bottom: ${(props) => (props.isOnHomePage ? '2rem' : '1.5rem')};

  @media (max-width: ${getMedias('laptop')}) {
    font-size: 14px;
    line-height: 28px;
    margin-top: 16px;
  }
`;

const SocialButton = styled(Button)`
  height: 36px;
`;

const ProjectCard = ({
  imgSrc,
  videoUrl,
  imgAlt,
  title,
  date,
  description,
  url,
  buttonLabel,
  isOnHomePage,
}) => {
  const [cardHeight, setCardHeight] = useState(0);
  const wrapperRef = useRef();

  const getHeight = () => {
    setCardHeight(Math.ceil(wrapperRef.current.clientHeight / 10) + 2);
  };

  useEffect(() => {
    getHeight();
  }, []);

  const cardImageOrVideo = videoUrl ? (
    <CardVideo videoUrl={videoUrl} title={title} />
  ) : (
    <CardImage imageSrc={imgSrc} imageAlt={imgAlt} isOnHomePage={isOnHomePage} />
  );

  const button = url && (
    <SocialButton withIcon={url.includes('facebook')} href={url}>
      {buttonLabel}
    </SocialButton>
  );

  return (
    <Wrapper isOnHomePage={isOnHomePage} ref={wrapperRef} rowHeight={cardHeight}>
      {cardImageOrVideo}
      <Description isOnHomePage={isOnHomePage}>
      <Header isOnHomePage={isOnHomePage}>
          <h4>{title}</h4>
          <h5>{date}</h5>
        </Header>
        <Text isOnHomePage={isOnHomePage}>
        {documentToReactComponents(description)}
        </Text>
        
        {button}
      </Description>
    </Wrapper>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  videoUrl: PropTypes.string,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string,
  buttonLabel: PropTypes.string,
  isOnHomePage: PropTypes.bool,
};

ProjectCard.defaultProps = {
  videoUrl: '',
  buttonLabel: '',
  url: '',
  isOnHomePage: false,
};
