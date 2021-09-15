import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import Team from '@components/Team/Team';
import {
  filterBasicContentData,
  filterData,
  filterSocials,
} from '@contentfulDataTransformers/filterData';
import MissionAndHistory from '@components/MissionAndHistory/MissionAndHistory';
import Members from '@components/Members/Members';

const aboutPage = ({ mission, history, boardMembersData, TeamData }) => (
  <>
    <MissionAndHistory missionData={mission} historyData={history} />
    <Members data={boardMembersData} />
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
  const boardMembers = await ContentfulClient.getFieldsData('boardMembers');

  const boardMembersData = {
    ...filterBasicContentData(basicContent, 'about-us-board-members-text'),
    members: filterData(boardMembers, 'boardMembers'),
  };

  return {
    props: {
      SubPageHero,
      socialUrls,
      mission,
      history,
      CTASection,
      TeamData,
      contactFormData,
      boardMembersData,
    },
  };
};

aboutPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default aboutPage;
