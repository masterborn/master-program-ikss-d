import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import { filterBasicContentData, filterSocials } from '@contentfulDataTransformers/filterData';
import Team from '@components/Team/Team';
import MissionAndHistory from '@components/MissionAndHistory/MissionAndHistory';

const aboutPage = ({ mission, history, TeamData }) => (
  <>
    <MissionAndHistory missionData={mission} historyData={history} />
    <Team data={TeamData} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('about-us');

  const SubPageHero = filterBasicContentData(basicContent, 'about-us-top-section');

  const common = await ContentfulClient.getBasicContentData('common');

  const mission = filterBasicContentData(basicContent, 'about-us-content-1');
  const history = filterBasicContentData(basicContent, 'about-us-content-2');

  const socialUrls = filterSocials(common);

  const CTASection = filterBasicContentData(basicContent, 'about-us-bottom-cta');

  const TeamData = filterBasicContentData(basicContent, 'about-us-content-3');

  const contactFormData = {
    text: filterBasicContentData(common, 'contact-form-text'),
    toolTip: filterBasicContentData(common, 'contact-form-tooltip'),
  };

  return {
    props: {
      SubPageHero,
      mission,
      history,
      socialUrls,
      CTASection,
      TeamData,
      contactFormData,
    },
  };
};

aboutPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default aboutPage;
