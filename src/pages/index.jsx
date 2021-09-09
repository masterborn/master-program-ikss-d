import HomePageHero from '@components/homePageHero/HomePageHero';
import Navbar from '@components/Navbar/Navbar';
import Values from '@components/Values/Values';
import ContentfulClient from '@api/clients/contentfulApi';
import Cooperation from '@components/Cooperation/Cooperation';
import Footer from '@components/Footer/Footer';
import HomeProjects from '@components/Projects/HomeProjects';
import {
  filterData,
  filterBasicContentData,
  filterSocials,
  filterHomePageLogos,
} from '@root/contentfulDataTransformers/filterData';

const homePage = ({ heroData, projectsData, socialUrls, valuesData, cooperationData }) => (
  <>
    <Navbar urls={socialUrls} />
    <HomePageHero data={heroData} />
    <Values data={valuesData} />
    <HomeProjects data={projectsData} />
    <Cooperation data={cooperationData} />
    <Footer contact urls={socialUrls} />
  </>
);

export const getStaticProps = async () => {
  // Navbar/Footer data

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(socials);

  // Hero data
  const basicContent = await ContentfulClient.getBasicContentData('homepage');

  const heroData = {
    ...filterBasicContentData(basicContent, 'homepage-top-section'),
    socialUrls,
  };
  // Values data

  const valuesData = {
    ...filterBasicContentData(basicContent, 'homepage-values'),
    cards: [
      filterBasicContentData(basicContent, 'homepage-tile-1'),
      filterBasicContentData(basicContent, 'homepage-tile-2'),
      filterBasicContentData(basicContent, 'homepage-tile-3'),
    ],
  };

  // Projects data

  const projects = await ContentfulClient.getFieldsData('projects');

  const projectsData = {
    ...filterBasicContentData(basicContent, 'homepage-projects-title'),
    projects: filterData(projects, 'projects', 'homepage'),
  };

  // Cooperation data

  const partners = await ContentfulClient.getPartnerLogos();

  const cooperationData = {
    ...filterBasicContentData(basicContent, 'homepage-partners-text'),
    partners: filterHomePageLogos(partners),
  };

  return {
    props: {
      heroData,
      socialUrls,
      valuesData,
      projectsData,
      cooperationData,
    },
  };
};

export default homePage;