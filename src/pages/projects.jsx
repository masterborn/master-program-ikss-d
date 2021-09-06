import Navbar from '@components/Navbar/Navbar';
import MainProjects from '@components/Projects/MainProjects';
import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import ContactSection from '@components/CTASection/CTASection';
import ContentfulClient from '@api/clients/contentfulApi';
import { filterBasicContentData } from '@root/contentfulDataTransformers/filterData';

const projectsPage = ({ projectHero, CTASection }) => (
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
    <ContactSection data={CTASection} />
  </>
);

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('projects');

  const projectHero = filterBasicContentData(basicContent, 'projects-top-section');

  const CTASection = filterBasicContentData(basicContent, 'projects-bottom-cta-text');

  return {
    props: {
      projectHero,
      CTASection,
    },
  };
};

export default projectsPage;
