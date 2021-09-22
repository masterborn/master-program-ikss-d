import Head from 'next/head';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import PropTypes from 'prop-types';

const SEO = ({ metaData }) => {
  const { title, text1 } = metaData;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={documentToHtmlString(text1)} />
      <meta property="og:description" content={documentToHtmlString(text1)} />
    </Head>
  );
};

SEO.propTypes = {
  metaData: PropTypes.instanceOf(Object).isRequired,
};

export default SEO;
