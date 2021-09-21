import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import { getColor, getMedias } from '@styles/utils';
import Button from '@components/Button/Button';
import ProjectCard from '@components/Projects/ProjectCard';
import CarouselButton from '@components/Projects/CarouselButton';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em auto 148px;
  & a {
    text-decoration: none;
  }
  @media (max-width: ${getMedias('tablet')}) {
    margin: 2em 24px 80px;
    & > h3 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
  background: ${getColor('blue_10')};
  border-radius: 26px;
  @media (max-width: ${getMedias('tablet')}) {
    background: none;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

const StyledProjects = ({ data }) => {
  const { title, projects } = data;
  const [activeCard, setActiveCard] = useState(0);

  return (
    <Wrapper>
      <h3>{title}</h3>
      <Carousel>
        <CarouselButton active={activeCard === 0} onClick={() => setActiveCard(0)}>
          {projects[0].title}
        </CarouselButton>
        <CarouselButton active={activeCard === 1} onClick={() => setActiveCard(1)}>
          {projects[1].title}
        </CarouselButton>
        <CarouselButton active={activeCard === 2} onClick={() => setActiveCard(2)}>
          {projects[2].title}
        </CarouselButton>
      </Carousel>
      <ProjectCard projects={projects[activeCard]} isOnHomePage />
      <Button href="/projects" link secondary>
        Zobacz wszystkie projekty
      </Button>
    </Wrapper>
  );
};

const HomeProjects = styled(StyledProjects)`
  background: #e5e5e5;
  width: 100vw;
`;

StyledProjects.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    projects: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default HomeProjects;
