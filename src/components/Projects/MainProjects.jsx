import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

import ProjectCard from '@components/Projects/ProjectCard';
import { getColor, getMedias } from '@styles/utils';
import ContactBanner from '@components/ContactBanner/ContactBanner';
import Button from '@components/Button/Button';

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
  margin: 2.375rem auto 3rem;
  background: ${getColor('blue_10')};
  border-radius: 26px;

  @media (max-width: ${getMedias('tablet')}) {
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin: 2.5rem auto 3.75rem;
  }
`;
const CarouselButton = styled(Button)`
  transition: all 0.1s ease-in;
  ${(props) =>
    !props.active &&
    css`
      background: ${getColor('blue_10')};
      color: ${getColor('navy')};
      & :hover {
        background: ${getColor('blue_20')};
      }

      @media (max-width: ${getMedias('mobile')}) {
        font-size: 10px;
      }
    `}
`;

const MainProjects = ({ data }) => {
  const { projects, contactBanner } = data;

  const years = projects.map((item) => item.date.split('-')[0]);
  const buttonYears = [...new Set(years)].sort((a, b) => b - a).slice(0, 3);

  const [activeYear, setActiveYear] = useState(buttonYears[2]);

  const tempData = projects.filter((item) => item.date.split('-')[0] === activeYear);

  const renderProjectCards = (afterBanner = false) => {
    const filteredProjects = projects.filter((item) => item.date.split('-')[0] === activeYear);

    if (filteredProjects.length < 7) {
      return filteredProjects.map((item) => <ProjectCard key={item.title} projects={item} />);
    }

    return filteredProjects.map((item, index) =>
      !afterBanner
        ? index < 4 && <ProjectCard key={item.title} projects={item} />
        : index >= 4 && <ProjectCard key={item.title} projects={item} />,
    );
  };

  const renderContact = tempData.length >= 7 && (
    <>
      <ContactBanner contactBanner={contactBanner} />
      <GridWrapper>{renderProjectCards(true)}</GridWrapper>
    </>
  );

  return (
    <>
      <Carousel>
        {buttonYears.reverse().map((button) => (
          <CarouselButton
            key={button}
            active={activeYear === button}
            onClick={() => setActiveYear(button)}
          >
            {button}
          </CarouselButton>
        ))}
      </Carousel>
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
