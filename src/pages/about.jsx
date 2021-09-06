import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import { filterBasicContentData } from '@root/contentfulDataTransformers/filterData';

const aboutPage = () => <></>;

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('about-us');

  const SubPageHero = filterBasicContentData(basicContent, 'about-us-top-section');
  const CTASection = filterBasicContentData(basicContent, 'about-us-bottom-cta');

  return {
    props: {
      SubPageHero,
      CTASection,
    },
  };
};

aboutPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default aboutPage;
