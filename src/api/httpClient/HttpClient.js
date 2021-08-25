import axios from 'axios';

class HttpClient {
  constructor(path) {
    this.api = axios.create({
      baseURL: `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN}${path}`,
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
      .then((res) => res[0].fields);
  }
}

export default HttpClient;
