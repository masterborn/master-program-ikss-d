import HomePageHero from '@components/homePageHero/HomePageHero';
import ValuesIcon1 from '@assets/values-1.svg';
import ValuesIcon2 from '@assets/values-2.svg';
import ValuesIcon3 from '@assets/values-3.svg';
import Navbar from '@components/Navbar/Navbar';
import Values from '@components/Values/Values';
import ContentfulClient from '@api/clients/contentfulApi';
import Cooperation from '@components/Cooperation/Cooperation';
import Footer from '@components/Footer/Footer';
import HomeProjects from '@components/Projects/HomeProjects';
import { filterBasicContentData } from '@contentfulDataTransformers/filterData';

const homePage = ({ heroData, projectsData }) => (
  <>
    <Navbar
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
    />

    <HomePageHero data={heroData} />

    <Values
      valuesHeader="Wyróżniki, wartości, X-factory organizacji"
      valuesText="Nie koniecznie musimy tu dawać tekst, ale jak jest potrzeba i przestrzeń można rozwinąć
      nagłówek."
      data={[
        {
          icon: ValuesIcon1,
          title: 'Największa organizacja kulturalno-sportowa',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea tellus nullam vulputate sem suspendisse pellentesque ullamcorper.',
        },
        {
          icon: ValuesIcon2,
          title: 'O różnorodności projektów, że każdy znajdzie coś dla siebie',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea tellus nullam vulputate sem suspendisse pellentesque ullamcorper.',
        },
        {
          icon: ValuesIcon3,
          title: 'Coś o tym, że łączycie rozwój z zabawą i poznawaniem nowych ludzi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea tellus nullam vulputate sem suspendisse pellentesque ullamcorper.',
        },
      ]}
    />
    <HomeProjects projects={projectsData} />
    <Cooperation
      cooperationHeader="Współpracują z nami"
      cooperationText="Na pewno powinno się pojawić tu logo UE na pierwszym miejscu. Kilka słów o tym, co można zyskać współpracując z wami jako partnerzy. Jakie to niesie korzyści PR’owe etc."
      data={[
        {
          logo: 'https://www-static.ue.wroc.pl/img/logo.png',
          linkUrl: 'https://www.ue.wroc.pl/',
          altText: 'Uniwersytet Ekonomiczny we Wrocławiu',
        },
        {
          logo: 'https://www-static.ue.wroc.pl/img/logo.png',
          linkUrl: 'https://www.ue.wroc.pl/',
          altText: 'Uniwersytet Ekonomiczny we Wrocławiu',
        },
        {
          logo: 'https://www-static.ue.wroc.pl/img/logo.png',
          linkUrl: 'https://www.ue.wroc.pl/',
          altText: 'Uniwersytet Ekonomiczny we Wrocławiu',
        },
        {
          logo: 'https://www-static.ue.wroc.pl/img/logo.png',
          linkUrl: 'https://www.ue.wroc.pl/',
          altText: 'Uniwersytet Ekonomiczny we Wrocławiu',
        },
        {
          logo: 'https://www-static.ue.wroc.pl/img/logo.png',
          linkUrl: 'https://www.ue.wroc.pl/',
          altText: 'Uniwersytet Ekonomiczny we Wrocławiu',
        },
        {
          logo: 'https://www-static.ue.wroc.pl/img/logo.png',
          linkUrl: 'https://www.ue.wroc.pl/',
          altText: 'Uniwersytet Ekonomiczny we Wrocławiu',
        },
        {
          logo: 'https://www-static.ue.wroc.pl/img/logo.png',
          linkUrl: 'https://www.ue.wroc.pl/',
          altText: 'Uniwersytet Ekonomiczny we Wrocławiu',
        },
        {
          logo: 'https://www-static.ue.wroc.pl/img/logo.png',
          linkUrl: 'https://www.ue.wroc.pl/',
          altText: 'Uniwersytet Ekonomiczny we Wrocławiu',
        },
      ]}
    />
    <Footer
      contact
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
    />
  </>
);

export const getStaticProps = async () => {
  // Hero data
  const basicContent = await ContentfulClient.getBasicContentData('homepage');

  const heroData = filterBasicContentData(basicContent, 'homepage-top-section');

  // Values data

  const valuesHeaderData = filterBasicContentData(basicContent, 'homepage-values');

  const value1 = filterBasicContentData(basicContent, 'homepage-tile-1');
  const value2 = filterBasicContentData(basicContent, 'homepage-tile-2');
  const value3 = filterBasicContentData(basicContent, 'homepage-tile-3');

  // Projects data

  const projectsHeaderData = filterBasicContentData(basicContent, 'homepage-projects-title');
  const projectsData = await ContentfulClient.getFilteredFieldsData('projects', 'homepage');

  // Cooperation data

  const cooperationHeaderData = filterBasicContentData(basicContent, 'homepage-partners-text');

  // Board Members data

  const boardMembersData = await ContentfulClient.getFilteredFieldsData('boardMembers');

  return {
    props: {
      heroData,
      valuesHeaderData,
      valuesFirstCardData: value1,
      valuesSecondCardData: value2,
      valuesThirdCardData: value3,
      projectsHeaderData,
      cooperationHeaderData,
      projectsData,
      boardMembersData,
    },
  };
};

export default homePage;
