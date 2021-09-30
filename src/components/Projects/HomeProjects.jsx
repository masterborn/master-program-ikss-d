import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import { getColor, getMedias } from '@styles/utils';
import Button from '@components/Button/Button';
import ProjectCard from '@components/Projects/ProjectCard';
import CarouselButton from '@components/Projects/CarouselButton';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 148px;

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
  margin: 2rem 0 4rem;
  background: ${getColor('blue_10')};
  border-radius: 26px;

  @media (max-width: ${getMedias('laptop')}) {
    background: none;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin: 1.5rem 0;
  }
`;

const StyledProjects = ({ data }) => {
  const { title, projects } = data;
  const [activeCard, setActiveCard] = useState(0);

  const renderCarouselButtons = () =>
    projects.map((project, index) => (
      <CarouselButton
        key={project.order}
        active={activeCard === index}
        onClick={() => setActiveCard(index)}
      >
        {project.title}
      </CarouselButton>
    ));

  return (
    <Wrapper>
      <h3>{title}</h3>
      <Carousel>{renderCarouselButtons()}</Carousel>
      <ProjectCard projects={projects[activeCard]} isOnHomePage key={activeCard} />
      <Button href="/projekty" link secondary>
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
