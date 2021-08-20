import axios from 'axios';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

class HttpClient {
  constructor(path) {
    this.api = axios.create({
      baseURL: `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}${path}`,
    });
  }

  getData() {
    return axios
      .get(this.api.defaults.baseURL)
      .catch((err) => {
        throw err;
      })
      .then((res) => res.data);
  }

  getFilteredData(filterCriteria) {
    return this.getData()
      .then((res) => res.items.filter((item) => item.fields.identifier === filterCriteria))
      .then((res) => {
        const resObject = res[0].fields;
        if (resObject.text1) {
          const text = documentToHtmlString(resObject.text1);
          delete resObject.text1;
          return { ...resObject, text };
        }
        return resObject;
      });
  }

  getConnectedData() {
    return this.getData().then((res) => {
      const assets = res.includes.Asset;

      const connected = res.items.map((item) =>
        item.fields.image1
          ? {
              ...item,
              image1: assets.find((asset) => asset.sys.id === item.fields.image1.sys.id),
            }
          : item,
      );

      return connected;
    });
  }
}

export default HttpClient;
