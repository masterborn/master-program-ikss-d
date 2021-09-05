import HomePageHero from '@components/homePageHero/HomePageHero';
import Navbar from '@components/Navbar/Navbar';
import Values from '@components/Values/Values';
import ContentfulClient from '@api/clients/contentfulApi';
import Cooperation from '@components/Cooperation/Cooperation';
import Footer from '@components/Footer/Footer';
import HomeProjects from '@components/Projects/HomeProjects';
import { filterBasicContentData } from '@root/contentfulDataTransformers/filterData';

const homePage = ({ heroData, projectsData, socialUrls, valuesHeaderData, cardValues, cooperationHeaderData, partnersData }) => (
  <>
    <Navbar
      urls={socialUrls}
    />

    <HomePageHero
    data={heroData}
    />

    <Values
      valuesHeader={valuesHeaderData.title}
      valuesText={valuesHeaderData.text1}
      data={cardValues}
    />
    <HomeProjects projects={projectsData} />
    <Cooperation
      cooperationHeader={cooperationHeaderData.title}
      cooperationText={cooperationHeaderData.text1}
      data={partnersData}
    />
    <Footer
      contact
      urls={socialUrls}
    />
  </>
);

export const getStaticProps = async () => {

  // Navbar/Footer data

  const socials = await ContentfulClient.getBasicContentData('common');

  const socialUrls = {
    fblink: filterBasicContentData(socials, 'social-facebook').linkUrl,
    inlink: filterBasicContentData(socials, 'social-instagram').linkUrl,
    ytlink: filterBasicContentData(socials, 'social-youtube').linkUrl,
    lnlink: filterBasicContentData(socials, 'social-linkedin').linkUrl,
  };
  // Hero data
  const basicContent = await ContentfulClient.getBasicContentData('homepage');
  const heroData = filterBasicContentData(basicContent, 'homepage-top-section');

  // Values data

  const valuesHeaderData = filterBasicContentData(basicContent, 'homepage-values');

  const cardValues = [filterBasicContentData(basicContent, 'homepage-tile-1'), filterBasicContentData(basicContent, 'homepage-tile-2'), filterBasicContentData(basicContent, 'homepage-tile-3')];  

  // Projects data

  const projectsHeaderData = filterBasicContentData(basicContent, 'homepage-projects-title');
  const projectsData = await ContentfulClient.getFilteredFieldsData('projects', 'homepage');

  // Cooperation data

  const cooperationHeaderData = filterBasicContentData(basicContent, 'homepage-partners-text');
  const partnersData = await ContentfulClient.getPartnerLogos();

  // Board Members data

  const boardMembersData = await ContentfulClient.getBasicContentData('boardMembers');

  return {
    props: {
      heroData,
      socialUrls,
      valuesHeaderData,
      cardValues,
      projectsHeaderData,
      cooperationHeaderData,
      projectsData,
      boardMembersData,
      partnersData
    },
  };
};

export default homePage;