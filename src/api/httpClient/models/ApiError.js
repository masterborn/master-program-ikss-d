class ApiError extends Error {
  config;

  data;

  status;

  headers;

  code;

  constructor(error) {
    super(error.message);
    this.name = 'ApiError';
    this.config = error.config;
    this.data = error?.response?.data || null;
    this.status = error?.response?.status || null;
    this.headers = error?.response?.headers || null;
    this.code = error?.response?.data ? error.response.data.code : null;
  }
}

export default ApiError;
