import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import Members from '@components/Members/Members';
import ContentfulClient from '@api/clients/contentfulApi';
import {
  filterBasicContentData,
  filterData,
  filterSocials,
} from '@contentfulDataTransformers/filterData';

const projectsPage = ({ boardMembersData }) => (
  <>
    <Members data={boardMembersData} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('about-us');

  const SubPageHero = filterBasicContentData(basicContent, 'about-us-top-section');

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = filterSocials(socials);

  const CTASection = filterBasicContentData(basicContent, 'about-us-bottom-cta');

  const boardMembers = await ContentfulClient.getFieldsData('boardMembers');

  const boardMembersData = {
    ...filterBasicContentData(basicContent, 'about-us-board-members-text'),
    members: filterData(boardMembers, 'boardMembers'),
  };

  console.log(boardMembersData);

  return {
    props: {
      SubPageHero,
      socialUrls,
      CTASection,
      boardMembersData,
    },
  };
};

projectsPage.getLayout = function getLayout(page, props) {
  return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default projectsPage;
