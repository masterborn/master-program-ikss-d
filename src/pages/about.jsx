import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import {
  filterBasicContentData,
  filterData,
  filterSocials,
} from '@contentfulDataTransformers/filterData';
import MissionAndHistory from '@components/MissionAndHistory/MissionAndHistory';
import Members from '@components/Members/Members';

const aboutPage = ({ boardMembersData, mission, history }) => (
  <>
    <MissionAndHistory missionData={mission} historyData={history} />
    <Members data={boardMembersData} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('about-us');

  const SubPageHero = filterBasicContentData(basicContent, 'about-us-top-section');

  const mission = filterBasicContentData(basicContent, 'about-us-content-1');
  const history = filterBasicContentData(basicContent, 'about-us-content-2');

  const common = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(common);

  const CTASection = filterBasicContentData(basicContent, 'about-us-bottom-cta');

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
      boardMembersData,
    },
  };
};

aboutPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default aboutPage;
