import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

import ProjectCard from '@components/Projects/ProjectCard';
import { getColor, getMedias } from '@styles/utils';
import ContactBanner from '@components/ContactBanner/ContactBanner';
import CarouselButton from '@components/Projects/CarouselButton';

const FlexWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-items: center;
  grid-auto-rows: 10px;
  margin-inline: auto;
  gap: 0 24px;

  @media (max-width: ${getMedias('desktop')}) {
    display: flex;
    flex-direction: column;
    margin: 0 24px;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Carousel = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  margin: 5rem auto 3rem;
  background: ${getColor('blue_10')};
  border-radius: 26px;

  @media (max-width: ${getMedias('tablet')}) {
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin: 2.5rem auto 3.75rem;
  }
`;

const MainProjects = ({ data }) => {
  const { projects, contactBanner } = data;

  const years = projects.map((item) => item.date.split('-')[0]);
  const buttonYears = [...new Set(years)].sort((a, b) => b - a).slice(0, 3);

  const [activeYear, setActiveYear] = useState(buttonYears[0]);

  const filteredProjects = projects.filter((item) => item.date.split('-')[0] === activeYear);

  const renderProjectCards = (afterBanner = false) => {
    if (filteredProjects.length < 7) {
      return filteredProjects.map((item) => <ProjectCard key={item.title} projects={item} />);
    }

    return filteredProjects.map((item, index) =>
      !afterBanner
        ? index < 4 && <ProjectCard key={item.title} projects={item} />
        : index >= 4 && <ProjectCard key={item.title} projects={item} />,
    );
  };

  const renderContact = filteredProjects.length >= 7 && (
    <>
      <ContactBanner contactBanner={contactBanner} />
      <GridWrapper>{renderProjectCards(true)}</GridWrapper>
    </>
  );

  const renderYearButtons = () =>
    buttonYears.map((button) => (
      <CarouselButton
        key={button}
        active={activeYear === button}
        onClick={() => setActiveYear(button)}
      >
        {button}
      </CarouselButton>
    ));

  return (
    <>
      <Carousel>{renderYearButtons()}</Carousel>
      <FlexWrapper>
        <ProjectsWrapper>
          <GridWrapper>{renderProjectCards()}</GridWrapper>
          {renderContact}
        </ProjectsWrapper>
      </FlexWrapper>
    </>
  );
};

MainProjects.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.instanceOf(Array),
    contactBanner: PropTypes.instanceOf(Object),
  }).isRequired,
};

export default MainProjects;
