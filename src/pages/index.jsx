import HomePageHero from '@components/homePageHero/HomePageHero';
import Values from '@components/Values/Values';
import ContentfulClient from '@api/clients/contentfulApi';
import Cooperation from '@components/Cooperation/Cooperation';
import HomeProjects from '@components/Projects/HomeProjects';
import Layout from '@components/Layouts/Layout';
import {
  filterData,
  filterBasicContentData,
  filterSocials,
  filterHomePageLogos,
} from '@root/contentfulDataTransformers/filterData';

const homePage = ({ heroData, projectsData, valuesData, cooperationData }) => (
  <>
    <HomePageHero data={heroData} />
    <Values data={valuesData} />
    <HomeProjects data={projectsData} />
    <Cooperation data={cooperationData} />
  </>
);

export const getStaticProps = async () => {
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
      valuesData,
      projectsData,
      cooperationData,
      socialUrls,
    },
  };
};

homePage.getLayout = function getLayout(page, props) {
  return <Layout pageProps={props}>{page}</Layout>;
};

export default homePage;
