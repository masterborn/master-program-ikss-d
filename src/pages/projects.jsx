import Navbar from '@components/Navbar/Navbar';
import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import ContentfulClient from '@api/clients/ContentfulAPI';
import { filterBasicContentData } from '@utils/filterData';

const projectsPage = ({ projectHero }) => (
  <>
    <Navbar
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
    />
    <SubpagesHero data={projectHero} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('projects');


  const projectHero = filterBasicContentData(basicContent, 'projects-top-section');

  return {
    props: {
      projectHero,
    },
  };
};

export default projectsPage;
