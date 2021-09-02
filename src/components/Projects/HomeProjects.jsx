import { useState } from 'react';
import styled, { css } from 'styled-components';

import { getColor, getMedias } from '@styles/utils';
import Button from '@components/Button/Button';
import ProjectCard from '@components/Projects/ProjectCard';

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
];

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

  & :hover {
    color: ${(props) => (props.active ? getColor('white') : getColor('navy'))};
  }
`;

const StyledProjects = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <Wrapper>
      <h3>Najnowsze projekty</h3>
      <Carousel>
        <div
          onClick={() => setActiveCard(0)}
          onKeyUp={() => setActiveCard(0)}
          role="button"
          tabIndex={0}
        >
          <CarouselButton active={activeCard === 0}>{tempData[0].title}</CarouselButton>
        </div>
        <div
          onClick={() => setActiveCard(1)}
          onKeyUp={() => setActiveCard(1)}
          role="button"
          tabIndex={-1}
        >
          <CarouselButton active={activeCard === 1}>{tempData[1].title}</CarouselButton>
        </div>
        <div
          onClick={() => setActiveCard(2)}
          onKeyUp={() => setActiveCard(2)}
          role="button"
          tabIndex={-1}
        >
          <CarouselButton active={activeCard === 2}>{tempData[2].title}</CarouselButton>
        </div>
      </Carousel>
      <ProjectCard
        imgSrc={tempData[activeCard].imgSrc}
        imgAlt={tempData[activeCard].imgAlt}
        videoUrl={tempData[activeCard].videoUrl !== 'undefined' && tempData[activeCard].videoUrl}
        title={tempData[activeCard].title}
        date={tempData[activeCard].date}
        description={tempData[activeCard].description}
        url={tempData[activeCard].url}
        buttonLabel={tempData[activeCard].buttonLabel}
        isOnHomePage
      />
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

export default HomeProjects;
