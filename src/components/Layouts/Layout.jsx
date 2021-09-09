import PropTypes from 'prop-types';

import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

const Layout = ({ children, pageProps }) => {
  const { socialUrls } = pageProps;
  return (
    <>
      <Navbar urls={socialUrls} />
      <main>{children}</main>
      <Footer urls={socialUrls} />
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
  }).isRequired,
};

export default Layout;
