import Hero from '@components/Hero/Hero';
import HeroImagePng from '@assets/heroImage2.jpg';
import ValuesIcon1 from '@assets/values-1.svg';
import ValuesIcon2 from '@assets/values-2.svg';
import ValuesIcon3 from '@assets/values-3.svg';
import Navbar from '@components/Navbar/Navbar';
import Projects from '@components/Projects/Projects';
import Values from '@components/Values/Values';
import ContactForm from '@root/components/ContactForm/ContactForm';

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
    <Projects />
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
    <ContactForm
      toolTipText="Gravida convallis risus adipiscing non enim. Consectetur quam facilisis
      tincidunt vitae. Sed id a vestibulum est. A malesuada massa ultrices proin
      tempor tempus vestibulum. At eros, lacus viverra lacinia eget suspendisse
      habitasse."
    />
  </>
);

export default homePage;
