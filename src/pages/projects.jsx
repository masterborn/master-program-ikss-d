import Navbar from '@components/Navbar/Navbar';
import MainProjects from '@components/Projects/MainProjects';
import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import ContactSection from '@components/CTASection/CTASection';
import ContentfulClient from '@api/clients/contentfulApi';
import {
  filterData,
  filterBasicContentData,
  filterSocials,
} from '@root/contentfulDataTransformers/filterData';
import Footer from '@components/Footer/Footer';

const projectsPage = ({ projectHero, projectsData, socialUrls, CTASection }) => (
  <>
    <Navbar urls={socialUrls} />
    <SubpagesHero data={projectHero} />

    <MainProjects data={projectsData} />
    <ContactSection data={CTASection} />
    <Footer urls={socialUrls} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('projects');

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(socials);

  const projectHero = filterBasicContentData(basicContent, 'projects-top-section');
  const projects = await ContentfulClient.getFieldsData('projects');

  const projectsData = {
    projects: filterData(projects, 'projects'),
    contactBanner: filterBasicContentData(basicContent, 'projects-middle-cta-text'),
  };

  const CTASection = filterBasicContentData(basicContent, 'projects-bottom-cta-text');

  return {
    props: {
      projectHero,
      projectsData,
      socialUrls,
      CTASection,
    },
  };
};

export default projectsPage;
