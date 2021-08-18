import Hero from '@components/Hero/Hero';
import HeroImagePng from '@assets/heroImage2.jpg';
import ValuesIcon1 from '@assets/values-1.svg';
import ValuesIcon2 from '@assets/values-2.svg';
import ValuesIcon3 from '@assets/values-3.svg';
import Navbar from '@components/Navbar/Navbar';
import Projects from '@components/Projects/Projects';
import Values from '@components/Values/Values';

const homePage = ({
  heroData,
  valuesHeaderData,
  valuesFirstCardData,
  valuesSecondCardData,
  valuesThirdCardData,
  projectsHeaderData,
  cooperationHeaderData,
}) => {
  console.log(
    heroData,
    valuesHeaderData,
    valuesFirstCardData,
    valuesSecondCardData,
    valuesThirdCardData,
    projectsHeaderData,
    cooperationHeaderData,
  );
  return (
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
    </>
  );
};

export const getStaticProps = async () => {
  const basicContentUrl =
    'https://cdn.contentful.com/spaces/n21y2i4hkj4h/environments/master/entries?access_token=ClPRdGtunoUrjFBPxqnbNZ2n8xZSoEUdoc11ek4yBzQ&content_type=basicContent&fields.page[in]=homepage';

  const response = await fetch(basicContentUrl);

  // TODO: Validacja

  const homePageBasicContent = await response.json();

  // Hero data

  const heroDataArray = homePageBasicContent.items.filter(
    (item) => item.fields.identifier === 'homepage-top-section',
  );

  const heroData = heroDataArray[0].fields;

  // Values data
  const valueHeaderDataArray = homePageBasicContent.items.filter(
    (item) => item.fields.identifier === 'homepage-values',
  );

  const valuesHeaderData = valueHeaderDataArray[0].fields;

  const value1Array = homePageBasicContent.items.filter(
    (item) => item.fields.identifier === 'homepage-tile-1',
  );

  const value1 = value1Array[0].fields;

  const value2Array = homePageBasicContent.items.filter(
    (item) => item.fields.identifier === 'homepage-tile-2',
  );

  const value2 = value2Array[0].fields;

  const value3Array = homePageBasicContent.items.filter(
    (item) => item.fields.identifier === 'homepage-tile-3',
  );

  const value3 = value3Array[0].fields;

  // Projects data

  const projectsHeaderDataArray = homePageBasicContent.items.filter(
    (item) => item.fields.identifier === 'homepage-projects-title',
  );

  const projectsHeaderData = projectsHeaderDataArray[0].fields;

  // Cooperation data
  const cooperationHeaderDataArray = homePageBasicContent.items.filter(
    (item) => item.fields.identifier === 'homepage-partners-text',
  );

  const cooperationHeaderData = cooperationHeaderDataArray[0].fields;

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
