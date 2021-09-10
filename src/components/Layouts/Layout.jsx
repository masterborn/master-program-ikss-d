import PropTypes from 'prop-types';

import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

const Layout = ({ children, pageProps }) => {
  const { socialUrls, contactFormData, toolTipText } = pageProps;
  return (
    <>
      <Navbar urls={socialUrls} contactFormData={contactFormData} toolTipText={toolTipText} />
      <main>{children}</main>
      <Footer urls={socialUrls} contactFormData={contactFormData} toolTipText={toolTipText} />
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
    toolTipText: PropTypes.instanceOf(Object),
  }).isRequired,
};

export default Layout;
