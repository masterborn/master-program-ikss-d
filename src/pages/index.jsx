import HomePageHero from '@components/homePageHero/HomePageHero';
import ValuesIcon1 from '@assets/values-1.svg';
import ValuesIcon2 from '@assets/values-2.svg';
import ValuesIcon3 from '@assets/values-3.svg';
import Navbar from '@components/Navbar/Navbar';
import Projects from '@components/Projects/Projects';
import Values from '@components/Values/Values';
import ContentfulClient from '@api/clients/ContentfulAPI';
import Cooperation from '@components/Cooperation/Cooperation';
import Footer from '@components/Footer/Footer';

const heroTempData = {
  title: 'Przykładowy nagłówek IKSS',
  text: 'Urna, mi condimentum amet, consectetur mauris tincidunt gravida aenean. Dignissim in sit arcu nam. Ultrices integer odio feugiat vulputate.',
  imageOrVideoURL: 'https://picsum.photos/1920/1080',
  link_url: 'https://www.youtube.com/watch?v=nTeuhbP7wdE',
  imageOrVideoTitle: 'na stronę ikss',
  facebookLink: 'https://pl-pl.facebook.com',
  instagramLink: 'https://www.instagram.com',
  youTubeLink: 'https://www.youtube.com',
  linkedInLink: 'https://pl.linkedin.com',
};

const homePage = ({ heroData }) => (
  <>
    <Navbar
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
    />
    <HomePageHero data={heroTempData} />
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
    <Projects />
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
  const basicContentClient = new ContentfulClient();
  const projectsClient = new ContentfulClient();
  const boardMembersClient = new ContentfulClient();

  // homePageHero data

  const heroData = await basicContentClient.getFilteredData('homepage-top-section');

  // Values data

  const valuesHeaderData = await basicContentClient.getFilteredData('homepage-values');

  const value1 = await basicContentClient.getFilteredData('homepage-tile-1');
  const value2 = await basicContentClient.getFilteredData('homepage-tile-2');
  const value3 = await basicContentClient.getFilteredData('homepage-tile-3');

  // Projects data

  const projectsHeaderData = await basicContentClient.getFilteredData('homepage-projects-title');
  const projectsData = await projectsClient.getFilteredProjectsData('homepage');

  // Cooperation data

  const cooperationHeaderData = await basicContentClient.getFilteredData('homepage-partners-text');

  // Board Members data

  const boardMembersData = await boardMembersClient.getFilteredMembersData();

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
