import { useSelector } from 'react-redux';

import Navbar from '@components/Navbar/Navbar';
import MainProjects from '@components/Projects/MainProjects';
import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import ContentfulClient from '@api/clients/contentfulApi';
import { filterBasicContentData } from '@root/contentfulDataTransformers/filterData';
import Portal from '@hoc/Portal';
import Modal from '@components/ContactForm/Modal';

const ProjectsPage = ({ projectHero }) => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  return (
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

      {isModalOpen && (
        <Portal>
          <Modal />
        </Portal>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const basicContent = await ContentfulClient.getBasicContentData('projects');

  const projectHero = filterBasicContentData(basicContent, 'projects-top-section');

  return {
    props: {
      projectHero,
    },
  };
};

export default ProjectsPage;
