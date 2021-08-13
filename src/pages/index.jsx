import Hero from '@components/Hero/Hero';
import HeroImagePng from '@root/assets/heroImage2.jpg';

const homePage = () => (
  <>
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
  </>
);

export default homePage;
