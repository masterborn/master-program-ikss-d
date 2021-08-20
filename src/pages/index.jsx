import Hero from '@components/Hero/Hero';
import HeroImagePng from '@assets/heroImage2.jpg';
import ValuesIcon1 from '@assets/values-1.svg';
import ValuesIcon2 from '@assets/values-2.svg';
import ValuesIcon3 from '@assets/values-3.svg';
import Navbar from '@components/Navbar/Navbar';
import Projects from '@components/Projects/Projects';
import Values from '@components/Values/Values';
import HttpClient from '@api/httpClient/HttpClient';
import Cooperation from '@components/Cooperation/Cooperation';

const homePage = () => (
  <>
    <Navbar
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
    />

    <Hero
      headerText="Przykładowy nagłówek IKSS"
      smallText="Urna, mi condimentum amet, consectetur mauris tincidunt gravida aenean. Dignissim in sit arcu nam. Ultrices integer odio feugiat vulputate."
      imageSrc={HeroImagePng}
      imageAlt="Przykładowy nagłówek IKSS"
      facebookLink="https://pl-pl.facebook.com"
      instagramLink="https://www.instagram.com"
      youTubeLink="https://www.youtube.com"
      linkedInLink="https://pl.linkedin.com"
    />

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
  </>
);

export const getStaticProps = async () => {
  const basicContentClient = new HttpClient(
    `access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=basicContent&fields.page[in]=homepage`,
  );

  // Hero data

  const heroData = await basicContentClient.getFilteredData('homepage-top-section');

  // Values data

  const valuesHeaderData = await basicContentClient.getFilteredData('homepage-values');

  const value1 = await basicContentClient.getFilteredData('homepage-tile-1');
  const value2 = await basicContentClient.getFilteredData('homepage-tile-2');
  const value3 = await basicContentClient.getFilteredData('homepage-tile-3');

  // Projects data

  const projectsHeaderData = await basicContentClient.getFilteredData('homepage-projects-title');

  // Cooperation data

  const cooperationHeaderData = await basicContentClient.getFilteredData('homepage-partners-text');

  return {
    props: {
      heroData,
      valuesHeaderData,
      valuesFirstCardData: value1,
      valuesSecondCardData: value2,
      valuesThirdCardData: value3,
      projectsHeaderData,
      cooperationHeaderData,
    },
  };
};

export default homePage;
