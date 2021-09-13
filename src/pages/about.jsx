import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import { filterBasicContentData, filterSocials } from '@contentfulDataTransformers/filterData';
import Team from '@components/Team/Team';

const projectsPage = ({ TeamData }) => (
  <>
    <Team data={TeamData} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('about-us');

  const SubPageHero = filterBasicContentData(basicContent, 'about-us-top-section');

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(socials);

  const CTASection = filterBasicContentData(basicContent, 'about-us-bottom-cta');

  const TeamData = filterBasicContentData(basicContent, 'about-us-content-3');

  return {
    props: {
      SubPageHero,
      socialUrls,
      CTASection,
      TeamData,
    },
  };
};

projectsPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default projectsPage;
