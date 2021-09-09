import MainProjects from '@components/Projects/MainProjects';
import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import {
  filterData,
  filterBasicContentData,
  filterSocials,
} from '@root/contentfulDataTransformers/filterData';

const projectsPage = ({ projectsData }) => (
  <>
    <MainProjects data={projectsData} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('projects');

  const SubPageHero = filterBasicContentData(basicContent, 'projects-top-section');

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(socials);

  const projects = await ContentfulClient.getFieldsData('projects');

  const projectsData = {
    projects: filterData(projects, 'projects'),
    contactBanner: filterBasicContentData(basicContent, 'projects-middle-cta-text'),
  };

  const CTASection = filterBasicContentData(basicContent, 'projects-bottom-cta-text');

  return {
    props: {
      SubPageHero,
      projectsData,
      socialUrls,
      CTASection,
    },
  };
};

projectsPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default projectsPage;
