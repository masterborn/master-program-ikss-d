import Hero from '@components/Hero/Hero';
import HeroImagePng from '@assets/heroImage2.jpg';
import Navbar from '@components/Navbar/Navbar';
import Projects from '@components/Projects/Projects';

const homePage = () => (
  <>
    <Navbar
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
      page="home"
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
  </>
);

export default homePage;
