import axios from 'axios';

class HttpClient {
  baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string) {
    const response = await axios.get(`${this.baseURL}${path}`);

    const contentType = response.headers['content-type'];
    let body = null;

    if (contentType && contentType.includes('application/json')) {
      body = response.data;
    }

    if (response.status >= 200 && response.status < 300) {
      return body;
    }

    throw new Error(
      body?.error || `${response.status} - ${response.statusText}}`
    );
  }

  async post(path: any, body: any) {
    const response = await axios.post(`${this.baseURL}${path}`, body);
    return response.data;
  }
}

export default HttpClient;
