import axios from 'axios';

import ApiError from './models/ApiError';

class HttpClient {
  constructor(baseUrl, path) {
    this.api = axios.create({ baseURL: `${baseUrl}${path}` });
    this.api.interceptors.response.use(HttpClient.afterResponse, HttpClient.responseError);
  }

  setAuthToken(token) {
    this.api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  static afterResponse(resp) {
    return {
      ...resp,
      data: resp.data.data,
    };
  }

  static responseError(error) {
    throw new ApiError(error);
  }
}

export default HttpClient;
