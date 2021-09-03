import PropTypes from 'prop-types';

import SubpagesHero from '@components/SubpagesHero/SubpagesHero';
import Layout from '@components/Layouts/Layout';

const SubPagesLayout = ({ children }) => {
  const { SubPageHero } = children.props;

  return (
    <Layout>
      <SubpagesHero data={SubPageHero} />
      {children}
    </Layout>
  );
};

SubPagesLayout.defaultProps = {
  children: null,
};

SubPagesLayout.propTypes = {
  children: PropTypes.node,
};

export default SubPagesLayout;
