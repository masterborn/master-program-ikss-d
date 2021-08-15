import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor } from '@styles/utils';
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
    height: auto;
    opacity: 0.6;
  }
`;

const Description = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 792px;
  height: 260px;
  margin: auto;

  & a {
    text-decoration: none;
  }
`;

const Header = styled.header`
  width: 399px;
  height: 32px;
  display: flex;
  margin: 4em 0 0.4em 0;

  & h5 {
    color: ${getColor('steel')};
    margin: auto 10px;
  }
`;

const Text = styled.section`
  color: ${getColor('steel')};
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 32px 0px;
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
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
};
