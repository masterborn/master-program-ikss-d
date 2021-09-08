import MainProjects from '@components/Projects/MainProjects';
// import SubPagesLayout from '@components/Layouts/SubPagesLayout';
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

  // const socialUrls = {
  //   fblink: filterBasicContentData(ContentfulClient.cache, 'social-facebook').linkUrl,
  //   inlink: filterBasicContentData(ContentfulClient.cache, 'social-instagram').linkUrl,
  //   ytlink: filterBasicContentData(ContentfulClient.cache, 'social-youtube').linkUrl,
  //   lnlink: filterBasicContentData(ContentfulClient.cache, 'social-linkedin').linkUrl,
  // };

  console.log(ContentfulClient.cache);

  return {
    props: {
      SubPageHero,
      CTASection,
      // socialUrls,
    },
  };
};

// projectsPage.getLayout = function getLayout(page, props) {
//   return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
// };

export default projectsPage;
