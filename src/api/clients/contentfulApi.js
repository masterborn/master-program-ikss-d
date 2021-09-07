import axios from 'axios';

import getAssets from '@root/contentfulDataTransformers/getAssets';

class ContentfulClient {
  api = axios.create({
    baseURL: `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN}`,
  });

  getBasicContentData(page) {
    return this.getAssetsPrivate(page)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  }

  getFieldsData(section = 'projects') {
    return this.api
      .get('', { params: { content_type: section, select: 'fields' } })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }

  getPartnerLogos() {
    return this.api
    .get('', { params: { content_type: 'partnerLogos'} })
    .then((res) => getAssets(res.data))
    .catch((err) => {
      throw err;
    })
  }

  getAssetsPrivate(page) {
    return this.api
      .get('', { params: { content_type: 'basicContent', 'fields.page[in]': page } })
      .then((res) => getAssets(res.data))
      .catch((err) => {
        throw err;
      });
  }
}

const ContentfulApi = new ContentfulClient();

export default ContentfulApi;
