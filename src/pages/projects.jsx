import Navbar from '@components/Navbar/Navbar';
import MainProjects from '@components/Projects/MainProjects';
import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import ContentfulClient from '@api/clients/ContentfulAPI';

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
    <MainProjects />
  </>
);

export const getStaticProps = async () => {
  const basicContentClient = new ContentfulClient();

  const projectHero = await basicContentClient.getFilteredData('projects-top-section');

  return {
    props: {
      projectHero,
    },
  };
};

export default projectsPage;
