import PropTypes from 'prop-types';

import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import ContactSection from '@components/CTASection/CTASection';
import Layout from '@components/Layouts/Layout';

const SubPagesLayout = ({ children, pageProps }) => {
  const { SubPageHero, CTASection } = pageProps;

  return (
    <Layout>
      <SubpagesHero data={SubPageHero} />
      {children}
      <ContactSection data={CTASection} />
    </Layout>
  );
};

SubPagesLayout.defaultProps = {
  children: null,
};

SubPagesLayout.propTypes = {
  children: PropTypes.node,
  pageProps: PropTypes.shape({
    SubPageHero: PropTypes.shape({}),
    CTASection: PropTypes.shape({}),
  }).isRequired,
};

export default SubPagesLayout;
