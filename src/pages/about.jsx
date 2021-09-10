import SubPagesLayout from '@components/Layouts/SubPagesLayout';
import ContentfulClient from '@api/clients/contentfulApi';
import {
  filterData,
  filterBasicContentData,
  filterSocials,
} from '@root/contentfulDataTransformers/filterData';
import Mission from '@components/Mission/Mission';

const aboutPage = ({ mission }) => (
    <>
    <Mission data={mission} />
    </>
);


export const getStaticProps = async () => {

    const basicContent = await ContentfulClient.getBasicContentData('about-us');

    const SubPageHero = filterBasicContentData(basicContent, 'about-us-top-section');
    
    const mission = filterBasicContentData(basicContent, 'about-us-content-1');

    const socials = await ContentfulClient.getBasicContentData('common');
    const socialUrls = filterSocials(socials);

    const CTASection = filterBasicContentData(basicContent, 'about-us-bottom-cta');

    
    return {
        props: {
            SubPageHero,
            mission,
            socialUrls,
            CTASection,
        }
    };

};

aboutPage.getLayout = function getLayout(page, props) {
    return <SubPagesLayout pageProps={props}>{page}</SubPagesLayout>;
};

export default aboutPage;