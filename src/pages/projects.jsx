import Navbar from '@components/Navbar/Navbar';
import MainProjects from '@components/Projects/MainProjects';
import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import ContentfulClient from '@api/clients/ContentfulAPI';
import { filterBasicContentData } from '@utils/filterData';

const projectsPage = ({ projectHero, projects }) => (
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
    <MainProjects projects={projects} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('projects');

  const projectHero = filterBasicContentData(basicContent, 'projects-top-section');
  const projects = await ContentfulClient.getFilteredFieldsData('projects');

  console.log(projects);
  
  return {
    props: {
      projectHero,
      projects
    },
  };
};

export default projectsPage;
