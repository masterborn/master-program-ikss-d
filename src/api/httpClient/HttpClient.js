import axios from 'axios';

class HttpClient {
  constructor(path) {
    this.api = axios.create({
      baseURL: `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?${path}`,
    });
  }

  getData() {
    return axios
      .get(this.api.defaults.baseURL)
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
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
