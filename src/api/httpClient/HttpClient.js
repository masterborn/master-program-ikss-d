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
    return this.getConnectedData()
      .then((res) => {
        const filteredArrayWithSingleData = res.filter(
          (item) => item.fields.identifier === filterCriteria,
        );

        if (filteredArrayWithSingleData[0].image1) {
          const imageTitle = filteredArrayWithSingleData[0].image1.fields.title;
          const imageURL = filteredArrayWithSingleData[0].image1.fields.file.url;

          delete filteredArrayWithSingleData[0].fields.image1;

          return {
            imageURL,
            imageTitle,
            ...filteredArrayWithSingleData[0].fields,
          };
        }

        return { ...filteredArrayWithSingleData[0].fields };
      })
      .then((res) => {
        if (res.text1) {
          const text = documentToHtmlString(res.text1);
          delete res.text1;
          return { ...res, text };
        }
        return res;
      });
  }

  getConnectedData() {
    return this.getData().then((res) => {
      const assets = res.includes.Asset;

      return res.items.map((item) =>
        item.fields.image1
          ? {
              ...item,
              image1: assets.find((asset) => asset.sys.id === item.fields.image1.sys.id),
            }
          : item,
      );
    });
  }
}

export default HttpClient;
