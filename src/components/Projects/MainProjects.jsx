import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProjectCard from '@components/Projects/ProjectCard';
import { getMedias } from '@styles/utils';
import ContactBanner from '@components/ContactBanner/ContactBanner';

const FlexWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-items: center;
  grid-auto-rows: 10px;
  margin: 4em auto 4em;
  gap: 0 24px;

  @media (max-width: ${getMedias('desktop')}) {
    display: flex;
    flex-direction: column;
    margin: 0 24px;
  } ;
`;

const wrapper = styled.div`
display: flex;
flex-direction: column;

`;

const MainProjects = ({ projects }) => {
  const renderProjectCards = (afterBanner = false) =>
    projects.map((data, index) => (
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

  return (
    <FlexWrapper>
      <wrapper>
      <GridWrapper>{renderProjectCards()}</GridWrapper>
    {projects.length >= 5 && <><ContactBanner />
      <GridWrapper>{renderProjectCards(true)}</GridWrapper>
    </>}
    </wrapper>
    </FlexWrapper>
  );
};

MainProjects.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired
}

export default MainProjects;
