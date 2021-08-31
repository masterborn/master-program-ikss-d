import axios from 'axios';

import { filterData } from '@utils/filterData';
import getAssets from '@utils/getAssets';

class ContentfulClient {
  api = axios.create({
    baseURL: `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN}`,
  });

  getData(path) {
    return this.api
      .get(`${this.api.defaults.baseURL}${path}`)
      .catch((err) => {
        throw err;
      })
      .then((res) => res.data);
  }

  getBasicContentData(page) {
    return this.getAssetsPrivate(page)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  }

  getFilteredFieldsData(section = 'projects', page = null) {
    return this.getData(`&content_type=${section}&select=fields`)
      .then((res) => filterData(res, section, page))
      .catch((err) => {
        throw err;
      });
  }

  getAssetsPrivate(page) {
    return this.getData(`&content_type=basicContent&fields.page[in]=${page}`)
      .then((res) => getAssets(res))
      .catch((err) => {
        throw err;
      });
  }
}

const ContentfulAPI = new ContentfulClient();

export default ContentfulAPI;