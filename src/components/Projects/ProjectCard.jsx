import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor, getMedias } from '@styles/utils';
import Button from '@components/Button/Button';
import CardImage from '@components/Projects/CardImage';

const Wrapper = styled.div`
  width: 997px;
  height: 969px;
  margin: 2em auto;
  overflow: hidden;
  background: ${getColor('white')};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;

  & img {
    width: 998px;
    height: 659px;
    max-width: 100%;
    opacity: 0.6;
  }

  @media (max-width: ${getMedias('laptop')}) {
    width: auto;
    height: auto;
    margin: 0 1.4em 2em 1.4em;

    & img {
      max-width: 100%;
      height: auto;
    }

    & article {
      width: auto;
      height: auto;
      padding: 0 2em;
    }
  }
`;

const Description = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 792px;
  height: 260px;
  margin: auto;

  & a {
    text-decoration: none;
  }

  @media (max-width: ${getMedias('laptop')}) {
    & a {
      display: inline-block;
      margin: 0 auto 1em auto;
    }
  }
`;

const Header = styled.header`
  width: 399px;
  height: 32px;
  display: flex;
  margin: 2em 0 0.4em 0;

  & h5 {
    color: ${getColor('steel')};
    margin: auto 10px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    & h4 {
      font-size: 18px;
      line-height: 24px;
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
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 32px 0px;

  @media (max-width: ${getMedias('laptop')}) {
    font-size: 14px;
    line-height: 28px;
  }
`;

const styledCard = ({ imgSrc, imgAlt, title, date, description, url, buttonLabel }) => (
  <Wrapper>
    <CardImage imageSrc={imgSrc} imageAlt={imgAlt} />
    <Description>
      <Header>
        <h4>{title}</h4>
        <h5>{date}</h5>
      </Header>
      <Text>{description}</Text>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button withIcon={url.includes('facebook')} buttonLabel={buttonLabel} />
        </a>
      )}
    </Description>
  </Wrapper>
);

const ProjectCard = styled(styledCard)``;

export default ProjectCard;

ProjectCard.propTypes = {
  imgSrc: PropTypes.shape({}).isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
};
