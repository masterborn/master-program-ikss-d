import { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import { getColor, getMedias } from '@styles/utils';
import Button from '@components/Button/Button';
import ProjectCard from '@components/Projects/ProjectCard';
import firstImage from '@assets/cardImage1.jpg';
import secondImage from '@assets/cardImage2.jpg';
import thirdImage from '@assets/cardImage3.jpg';

const tempData = [
  {
    imgSrc: firstImage,
    imgAlt: 'Nocne Kino Akademickie',
    title: 'Nocne Kino Akademickie',
    date: '15.11.2020',
    description:
      'Wydarzenie organizowane we współpracy z Kinem Nowe Horyzonty. Nocne Kino Akademickie to wyjątkowa noc dla wszystkich kinomaniaków, którzy mają możliwość obejrzenia najlepszych produkcji filmowych, które zostały nominowane do Oscarów. Wydarzenie dla 500 osób jest prawdziwą ucztą dla kinomana i świetną zabawą w gronie przyjaciół.',
    url: 'http://www.facebook.com',
    buttonLabel: 'Dołącz do wydarzenia',
  },
  {
    imgSrc: secondImage,
    imgAlt: 'Wrocławski Bieg Akademicki',
    title: 'Wrocławski Bieg Akademicki',
    date: '15.11.2020',
    description:
      'Największy projekt organizacji, w którym biegniemy i pomagamy. To charytatywne wydarzenie zrzesza blisko 1000 biegaczy z całego Wrocławia! Celem wydarzenia jest integracja środowiska akademickiego i biegowego w okresie juwenaliowym poprzez zdrową rywalizację i pomoc potrzebującym. Podczas wydarzenia nie ograniczamy się do biegu, organizujemy ogromną strefę około eventową, której celem jest zapewnienie odpoczynku, rozrywki oraz motywowanie do zdrowego trybu życia poprzez stoiska, np. z pomiarami składu ciała, czy pomocą dietetyczną.',
    url: 'http://www.facebook.com',
    buttonLabel: 'Podsumowanie wydarzenia',
  },
  {
    imgSrc: thirdImage,
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
  margin: 2em auto;

  & a {
    text-decoration: none;
  }
`;

const Header = styled.h3`
  display: flex;
  align-items: center;
  width: 299px;
  height: 44px;
  margin: auto;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: max-content;
  margin: 2em auto;
  background: ${getColor('blue_10')};
  border-radius: 26px;

  @media (max-width: ${getMedias('tablet')}) {
    /*z
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3em;
    grid-row-gap: 1em;
    */
    background: none;
    width: auto;
    height: 74px;

    flex-direction: column;
    align-items: center;

    & div:nth-child(1) {
      // grid-area: 1 / 3 / 2 / 7;

      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    & div:nth-child(2) {
      // grid-area: 2 / 1 / 3 / 5;
      align-self: flex-start;
      position: relative;
      top: 0.6em;
      margin-left: 5em;
    }

    & div:nth-child(3) {
      // grid-area: 2 / 5 / 3 / 9;
      align-self: flex-end;
      position: relative;
      bottom: 1.6em;
      margin-right: 7em;
    }
  }

  @media (max-width: 670px) {
    & div:nth-child(2) {
      margin-left: 4em;
    }

    & div:nth-child(3) {
      margin-right: 4em;
    }
  }

  @media (max-width: 620px) {
    & div:nth-child(2) {
      margin-left: 7em;
    }

    & div:nth-child(3) {
      margin-right: 7em;
    }
  }

  @media (max-width: 570px) {
    & div:nth-child(2) {
      margin-left: 4em;
    }

    & div:nth-child(3) {
      margin-right: 4em;
    }
  }

  @media (max-width: 430px) {
    & div:nth-child(2) {
      margin-left: 3em;
    }

    & div:nth-child(3) {
      margin-right: 3em;
    }
  }

  @media (max-width: 400px) {
    & div:nth-child(2) {
      margin-left: 2em;
    }

    & div:nth-child(3) {
      margin-right: 2em;
    }
  }

  @media (max-width: 360px) {
    & div:nth-child(2) {
      margin-left: 1em;
    }

    & div:nth-child(3) {
      margin-right: 1em;
    }
  }
`;

const CarouselButton = styled(Button)`
  transition: all 0.1s ease-in;
  width: max-content;

  ${(props) =>
    !props.active &&
    css`
      background: ${getColor('blue_10')};
      color: ${getColor('navy')};

      & :hover {
        background: ${getColor('blue_20')};
        color: ${getColor('white')};
      }
    `}

  @media (max-width: ${getMedias('tablet')}) {
    height: 36px;
    line-height: 18px;
  }

  @media (max-width: 620px) {
    font-size: 10px;
  }
`;

const ProjectsButton = styled(Button)`
  width: auto;
  height: auto;
  margin: auto;
`;

const StyledProjects = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <Wrapper>
      <Header>Najnowsze projekty</Header>
      <Carousel>
        <div
          onClick={() => setActiveCard(0)}
          onKeyUp={() => setActiveCard(0)}
          role="button"
          tabIndex={0}
        >
          <CarouselButton active={activeCard === 0} buttonLabel={tempData[0].title} />
        </div>
        <div
          onClick={() => setActiveCard(1)}
          onKeyUp={() => setActiveCard(1)}
          role="button"
          tabIndex={-1}
        >
          <CarouselButton active={activeCard === 1} buttonLabel={tempData[1].title} />
        </div>
        <div
          onClick={() => setActiveCard(2)}
          onKeyUp={() => setActiveCard(2)}
          role="button"
          tabIndex={-1}
        >
          <CarouselButton active={activeCard === 2} buttonLabel={tempData[2].title} />
        </div>
      </Carousel>
      <ProjectCard
        imgSrc={tempData[activeCard].imgSrc}
        imgAlt={tempData[activeCard].imgAlt}
        title={tempData[activeCard].title}
        date={tempData[activeCard].date}
        description={tempData[activeCard].description}
        url={tempData[activeCard].url}
        buttonLabel={tempData[activeCard].buttonLabel}
      />
      <Link href="/projects">
        <a>
          <ProjectsButton secondary buttonLabel="Zobacz wszystkie projekty" />
        </a>
      </Link>
    </Wrapper>
  );
};

const Projects = styled(StyledProjects)`
  background: #e5e5e5;
  width: 100vw;
`;

export default Projects;
