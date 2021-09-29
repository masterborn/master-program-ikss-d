import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import {
  filterBasicContentData,
  filterSocials,
  filterLogos,
} from '@root/contentfulDataTransformers/filterData';
import Cooperation from '@components/Cooperation/Cooperation';
import CooperationTiles from '@components/Cooperation/CooperationTiles';

const projectsPage = ({ cooperationData, CooperationTilesData }) => (
  <>
    <CooperationTiles data={CooperationTilesData} />
    <Cooperation data={cooperationData} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('cooperation');

  const metaData = filterBasicContentData(basicContent, 'cooperation-meta');

  const SubPageHero = filterBasicContentData(basicContent, 'cooperation-top-section');

  const common = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(common);

  const CTASection = filterBasicContentData(basicContent, 'cooperation-bottom-cta');

  const partners = await ContentfulClient.getPartnerLogos();

  const cooperationData = {
    ...filterBasicContentData(basicContent, 'cooperation-logos-text'),
    partners: filterLogos(partners),
  };

  const contactFormData = {
    text: filterBasicContentData(common, 'contact-form-text'),
    toolTip: filterBasicContentData(common, 'contact-form-tooltip'),
  };

  const CooperationTilesData = {
    ...filterBasicContentData(basicContent, 'cooperation-tiles-title'),
    cards: [
      filterBasicContentData(basicContent, 'cooperation-tile-1'),
      filterBasicContentData(basicContent, 'cooperation-tile-2'),
      filterBasicContentData(basicContent, 'cooperation-tile-3'),
      filterBasicContentData(basicContent, 'cooperation-tile-4'),
      filterBasicContentData(basicContent, 'cooperation-tile-5'),
    ],
  };

  return {
    props: {
      metaData,
      SubPageHero,
      socialUrls,
      CTASection,
      cooperationData,
      CooperationTilesData,
      contactFormData,
    },
  };
};

projectsPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default projectsPage;
