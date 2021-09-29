import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import SEO from '@components/SEO/SEO';

const Main = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Layout = ({ children, pageProps }) => {
  const { socialUrls, contactFormData, metaData } = pageProps;
  return (
    <>
      <Navbar urls={socialUrls} contactFormData={contactFormData} />
      <SEO metaData={metaData} />
      <Main>{children}</Main>
      <Footer urls={socialUrls} contactFormData={contactFormData} />
    </>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
  pageProps: PropTypes.shape({
    socialUrls: PropTypes.shape({}),
    contactFormData: PropTypes.instanceOf(Object),
    metaData: PropTypes.instanceOf(Object),
  }).isRequired,
};

export default Layout;
