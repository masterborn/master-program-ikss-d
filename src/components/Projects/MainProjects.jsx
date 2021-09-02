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
  margin: 4em auto;
  gap: 0 24px;

  @media (max-width: ${getMedias('desktop')}) {
    display: flex;
    flex-direction: column;
    margin: 0 24px;
  } ;
`;

const ProjectsWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const Carousel = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  margin: 2em auto;
  background: ${getColor('blue_10')};
  border-radius: 26px;
  @media (max-width: ${getMedias('tablet')}) {
    background: none;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
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
        color: ${getColor('white')};
      }

      @media (max-width: ${getMedias('mobile')}) {
        font-size: 10px;
      }
    `}
`;

const MainProjects = ({ projects }) => {

  const years = projects.map((item) => item.date.split("-")[0]);
  const buttonYears = [ ...new Set(years)].sort((a, b) => b - a).slice(0,3);

  const [activeYear, setActiveYear] = useState(buttonYears[2])

  

  const renderProjectCards = (afterBanner = false) =>
    projects.filter((item) => item.date.split("-")[0] === activeYear).map((data, index) => (
      !afterBanner ? index < 4 &&
      <ProjectCard
        key={data.title}
        imgSrc={data.imgSrc}
        imgAlt={data.imgAlt}
        videoUrl={data.videoUrl !== 'undefined' && data.videoUrl}
        title={data.title}
        date={data.date}
        description={data.description}
        url={data.url}
        buttonLabel={data.buttonLabel}
      /> : index >= 4 &&
      <ProjectCard
        key={data.title}
        imgSrc={data.imgSrc}
        imgAlt={data.imgAlt}
        videoUrl={data.videoUrl !== 'undefined' && data.videoUrl}
        title={data.title}
        date={data.date}
        description={data.description}
        url={data.url}
        buttonLabel={data.buttonLabel}
      />
    ));

  return (<>
<Carousel>
          <CarouselButton active={activeYear === buttonYears[2]} onClick={() => setActiveYear(buttonYears[2])}>{buttonYears[2]}</CarouselButton>
          <CarouselButton active={activeYear === buttonYears[1]} onClick={() => setActiveYear(buttonYears[1])}>{buttonYears[1]}</CarouselButton>
          <CarouselButton active={activeYear === buttonYears[0]} onClick={() => setActiveYear(buttonYears[0])}>{buttonYears[0]}</CarouselButton>
      </Carousel>
    <FlexWrapper>
      <ProjectsWrapper>
      <GridWrapper>{renderProjectCards()}</GridWrapper>
    {projects.filter((item) => item.date.split("-")[0] === activeYear).length >= 5 && <><ContactBanner />
      <GridWrapper>{renderProjectCards(true)}</GridWrapper>
    </>}
    </ProjectsWrapper>
    </FlexWrapper>
    </>
  );
};

MainProjects.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired
}

export default MainProjects;
