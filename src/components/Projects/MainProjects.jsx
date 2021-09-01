import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProjectCard from '@components/Projects/ProjectCard';
import { getMedias } from '@styles/utils';
import ContactBanner from '@components/ContactBanner/ContactBanner';

const tempData = [
  {
    imgSrc: 'https://picsum.photos/1920/1080',
    imgAlt: 'Nocne Kino Akademickie',
    title: 'Nocne Kino Akademickie',
    date: '15.11.2020',
    description:
      'Wydarzenie organizowane we współpracy z Kinem Nowe Horyzonty. Nocne Kino Akademickie to wyjątkowa noc dla wszystkich kinomaniaków, którzy mają możliwość obejrzenia najlepszych produkcji filmowych, które zostały nominowane do Oscarów. Wydarzenie dla 500 osób jest prawdziwą ucztą dla kinomana i świetną zabawą w gronie przyjaciół.',
    url: 'http://www.facebook.com',
    buttonLabel: 'Dołącz do wydarzenia',
  },
  {
    imgSrc: 'https://picsum.photos/1920/1080',
    videoUrl: 'https://www.youtube.com/watch?v=ca7R_REZC3Y',
    imgAlt: 'Wrocławski Bieg Akademicki',
    title: 'Wrocławski Bieg Akademicki',
    date: '15.11.2020',
    description:
      'Największy projekt organizacji, w którym biegniemy i pomagamy. To charytatywne wydarzenie zrzesza blisko 1000 biegaczy z całego Wrocławia! Celem wydarzenia jest integracja środowiska akademickiego i biegowego w okresie juwenaliowym poprzez zdrową rywalizację i pomoc potrzebującym. Podczas wydarzenia nie ograniczamy się do biegu, organizujemy ogromną strefę około eventową, której celem jest zapewnienie odpoczynku, rozrywki oraz motywowanie do zdrowego trybu życia poprzez stoiska, np. z pomiarami składu ciała, czy pomocą dietetyczną.',
    url: 'http://www.facebook.com',
    buttonLabel: 'Podsumowanie wydarzenia',
  },
  {
    imgSrc: 'https://picsum.photos/1920/1080',
    imgAlt: 'Pracownia Teatralna',
    title: 'Pracownia Teatralna',
    date: '15.11.2020',
    description:
      'Kurtyna w górę… Przed Państwem cykl warsztatów teatralnych i aktorskich prowadzonych przez profesjonalistów dla studentów naszego Uniwersytetu. Wieczorem projekt zwieńczony jest na scenie, gdzie nasi uczestnicy zasiadają na widowni, skąd mogą być świadkami wyjątkowego spektaklu teatralnego.',
    url: 'http://www.facebook.com',
    buttonLabel: 'Podsumowanie wydarzenia',
  },
  {
    imgSrc: 'https://picsum.photos/1920/1080',
    imgAlt: 'Pracownia Teatralna',
    title: 'Pracownia Teatralna',
    date: '15.11.2020',
    description:
      'Kurtyna w górę… Przed Państwem cykl warsztatów teatralnych i aktorskich prowadzonych przez profesjonalistów dla studentów naszego Uniwersytetu. Wieczorem projekt zwieńczony jest na scenie, gdzie nasi uczestnicy zasiadają na widowni, skąd mogą być świadkami wyjątkowego spektaklu teatralnego.',
    url: 'http://www.facebook.com',
    buttonLabel: 'Podsumowanie wydarzenia',
  },
  {
    imgSrc: 'https://picsum.photos/1920/1080',
    imgAlt: 'Pracownia Teatralna',
    title: 'Pracownia Teatralna',
    date: '15.11.2020',
    description:
      'Kurtyna w górę… Przed Państwem cykl warsztatów teatralnych i aktorskich prowadzonych przez profesjonalistów dla studentów naszego Uniwersytetu. Wieczorem projekt zwieńczony jest na scenie, gdzie nasi uczestnicy zasiadają na widowni, skąd mogą być świadkami wyjątkowego spektaklu teatralnego.',
    url: 'http://www.facebook.com',
    buttonLabel: 'Podsumowanie wydarzenia',
  },
];

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
