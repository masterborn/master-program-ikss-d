import axios from 'axios';

import { filterBasicContent, filterData } from '@utils/filterData';
import getAssets from '@utils/getAssets';

class ContentfulClient {
  api = axios.create({
    baseURL: `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN}`,
  });

  getData(path) {
    return axios
      .get(`${this.api.defaults.baseURL}${path}`)
      .catch((err) => {
        throw err;
      })
      .then((res) => res.data);
  }

  getFilteredData(filterCriteria) {
    return this.getAssetsPrivate()
      .then((res) => filterBasicContent(res, filterCriteria))
      .catch((err) => {
        throw err;
      });
  }

  getFilteredProjectsData(page = 'projects') {
    return this.getData('&content_type=projects&select=fields')
      .then((res) => filterData(res, 'projects', page))
      .catch((err) => {
        throw err;
      });
  }

  getFilteredMembersData() {
    return this.getData('&content_type=boardMembers&select=fields')
      .then((res) => filterData(res, 'boardMembers'))
      .catch((err) => {
        throw err;
      });
  }

  getAssetsPrivate() {
    return this.getData('&content_type=basicContent&fields.page[in]=homepage')
      .then((res) => getAssets(res))
      .catch((err) => {
        throw err;
      });
  }
}

export default ContentfulClient;
