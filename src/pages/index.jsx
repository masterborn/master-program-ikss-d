import Hero from '@components/Hero/Hero';
import HeroImagePng from '@root/assets/heroImage.png';

const homePage = () => (
  <Hero
    headerText="Przykładowy nagłówek IKSS"
    smallText="Urna, mi condimentum amet, consectetur mauris tincidunt gravida aenean. Dignissim in sit arcu nam. Ultrices integer odio feugiat vulputate."
    imageSrc={HeroImagePng}
  />
);

export default homePage;
