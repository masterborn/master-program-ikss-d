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
    <Cooperation data={cooperationData} isHomePage />
  </>
);

export const getStaticProps = async () => {
  const common = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(common);

  // Hero data
  const basicContent = await ContentfulClient.getBasicContentData('homepage');

  const metaData = filterBasicContentData(basicContent, 'homepage-meta');

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

  // Contact Form

  const contactFormData = {
    text: filterBasicContentData(common, 'contact-form-text'),
    toolTip: filterBasicContentData(common, 'contact-form-tooltip'),
  };

  return {
    props: {
      metaData,
      heroData,
      valuesData,
      projectsData,
      cooperationData,
      socialUrls,
      contactFormData,
    },
  };
};

homePage.getLayout = function getLayout(page, props) {
  return <Layout pageProps={props}>{page}</Layout>;
};

export default homePage;
