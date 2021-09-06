import MainProjects from '@components/Projects/MainProjects';
import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import { filterBasicContentData } from '@root/contentfulDataTransformers/filterData';

const projectsPage = () => (
  <>
    <MainProjects />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('projects');

  const SubPageHero = filterBasicContentData(basicContent, 'projects-top-section');
  const CTASection = filterBasicContentData(basicContent, 'projects-bottom-cta-text');

  return {
    props: {
      SubPageHero,
      CTASection,
    },
  };
};

projectsPage.getLayout = function getLayout(page) {
  return <SubPagesLayout>{page}</SubPagesLayout>;
};

export default projectsPage;
