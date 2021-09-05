import Navbar from '@components/Navbar/Navbar';
import MainProjects from '@components/Projects/MainProjects';
import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import ContentfulClient from '@api/clients/contentfulApi';
import { filterBasicContentData } from '@root/contentfulDataTransformers/filterData';
import Footer from '@components/Footer/Footer';

const projectsPage = ({ projectHero, projects, socialUrls }) => (
  <>
    <Navbar
      urls={socialUrls}
    />
    <SubpagesHero data={projectHero} />
    <MainProjects projects={projects} />
    <Footer
      urls={socialUrls}
    />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('projects');

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = {
    fblink: filterBasicContentData(socials, 'social-facebook').linkUrl,
    inlink: filterBasicContentData(socials, 'social-instagram').linkUrl,
    ytlink: filterBasicContentData(socials, 'social-youtube').linkUrl,
    lnlink: filterBasicContentData(socials, 'social-linkedin').linkUrl,
  };

  const projectHero = filterBasicContentData(basicContent, 'projects-top-section');
  const projects = await ContentfulClient.getFilteredFieldsData('projects');
  
  return {
    props: {
      projectHero,
      projects,
      socialUrls
    },
  };
};

export default projectsPage;
