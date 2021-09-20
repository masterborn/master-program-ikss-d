import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import {
  filterBasicContentData,
  filterSocials,
  filterLogos,
} from '@root/contentfulDataTransformers/filterData';
import Cooperation from '@components/Cooperation/Cooperation';
import CooperationTiles from '@components/Cooperation/CooperationTiles';
import SEO from '@components/SEO/SEO';

const projectsPage = ({ cooperationMeta, cooperationData, CooperationTilesData }) => (
  <>
    <SEO metaData={cooperationMeta} />
    <CooperationTiles data={CooperationTilesData} />
    <Cooperation data={cooperationData} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('cooperation');

  const cooperationMeta = filterBasicContentData(basicContent, 'cooperation-meta');

  const SubPageHero = filterBasicContentData(basicContent, 'cooperation-top-section');

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(socials);

  const CTASection = filterBasicContentData(basicContent, 'cooperation-bottom-cta');

  const partners = await ContentfulClient.getPartnerLogos();

  const cooperationData = {
    ...filterBasicContentData(basicContent, 'cooperation-logos-text'),
    partners: filterLogos(partners),
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
      cooperationMeta,
      SubPageHero,
      socialUrls,
      CTASection,
      cooperationData,
      CooperationTilesData,
    },
  };
};

projectsPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default projectsPage;
