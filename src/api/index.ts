import config from '@root/config';
import HttpClient from './httpClient/HttpClient';

class Api extends HttpClient {
  constructor() {
    super(config.apiUrl, '');
  }
}

const api = new Api();

export default api;
