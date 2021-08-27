import Navbar from '@components/Navbar/Navbar';
import MainProjects from '@components/Projects/MainProjects';

const projectsPage = () => (
  <>
    <Navbar
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
    />
    <MainProjects />
  </>
);

export default projectsPage;
