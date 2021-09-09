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

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = {
    fblink: filterBasicContentData(socials, 'social-facebook').linkUrl,
    inlink: filterBasicContentData(socials, 'social-instagram').linkUrl,
    ytlink: filterBasicContentData(socials, 'social-youtube').linkUrl,
    lnlink: filterBasicContentData(socials, 'social-linkedin').linkUrl,
  };

  return {
    props: {
      SubPageHero,
      CTASection,
      socialUrls,
    },
  };
};

projectsPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default projectsPage;
